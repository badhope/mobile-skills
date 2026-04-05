'use client';

import { useState, useEffect, useCallback } from 'react';

interface ConversationMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  skillId?: string;
  metadata?: Record<string, unknown>;
}

interface ConversationContext {
  id: string;
  title: string;
  messages: ConversationMessage[];
  createdAt: number;
  updatedAt: number;
  skillId?: string;
  summary?: string;
}

interface ContextMemoryState {
  conversations: ConversationContext[];
  activeConversationId: string | null;
  isLoaded: boolean;
}

const STORAGE_KEY = 'mobile-skills-context-memory';
const MAX_CONVERSATIONS = 50;
const MAX_MESSAGES_PER_CONVERSATION = 200;

export function useContextMemory() {
  const [state, setState] = useState<ContextMemoryState>({
    conversations: [],
    activeConversationId: null,
    isLoaded: false,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setState({
          conversations: parsed.conversations || [],
          activeConversationId: parsed.activeConversationId || null,
          isLoaded: true,
        });
      } else {
        setState(prev => ({ ...prev, isLoaded: true }));
      }
    } catch (error) {
      console.error('Error loading context memory:', error);
      setState(prev => ({ ...prev, isLoaded: true }));
    }
  }, []);

  const saveToStorage = useCallback((newState: ContextMemoryState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        conversations: newState.conversations,
        activeConversationId: newState.activeConversationId,
      }));
    } catch (error) {
      console.error('Error saving context memory:', error);
    }
  }, []);

  const createConversation = useCallback((title: string, skillId?: string): string => {
    const id = `conv-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const newConversation: ConversationContext = {
      id,
      title,
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
      skillId,
    };

    setState(prev => {
      const conversations = [newConversation, ...prev.conversations].slice(0, MAX_CONVERSATIONS);
      const newState = { ...prev, conversations, activeConversationId: id };
      saveToStorage(newState);
      return newState;
    });

    return id;
  }, [saveToStorage]);

  const addMessage = useCallback((
    conversationId: string,
    message: Omit<ConversationMessage, 'id' | 'timestamp'>
  ) => {
    const newMessage: ConversationMessage = {
      ...message,
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
    };

    setState(prev => {
      const conversations = prev.conversations.map(conv => {
        if (conv.id === conversationId) {
          const messages = [...conv.messages, newMessage].slice(0, MAX_MESSAGES_PER_CONVERSATION);
          return { ...conv, messages, updatedAt: Date.now() };
        }
        return conv;
      });

      const newState = { ...prev, conversations };
      saveToStorage(newState);
      return newState;
    });
  }, [saveToStorage]);

  const getActiveConversation = useCallback((): ConversationContext | undefined => {
    if (!state.activeConversationId) return undefined;
    return state.conversations.find(c => c.id === state.activeConversationId);
  }, [state.activeConversationId, state.conversations]);

  const setActiveConversation = useCallback((conversationId: string | null) => {
    setState(prev => {
      const newState = { ...prev, activeConversationId: conversationId };
      saveToStorage(newState);
      return newState;
    });
  }, [saveToStorage]);

  const deleteConversation = useCallback((conversationId: string) => {
    setState(prev => {
      const conversations = prev.conversations.filter(c => c.id !== conversationId);
      const activeConversationId = prev.activeConversationId === conversationId
        ? (conversations[0]?.id || null)
        : prev.activeConversationId;
      
      const newState = { ...prev, conversations, activeConversationId };
      saveToStorage(newState);
      return newState;
    });
  }, [saveToStorage]);

  const clearAllConversations = useCallback(() => {
    setState(prev => {
      const newState = { ...prev, conversations: [], activeConversationId: null };
      saveToStorage(newState);
      return newState;
    });
  }, [saveToStorage]);

  const searchConversations = useCallback((query: string): ConversationContext[] => {
    const lowerQuery = query.toLowerCase();
    return state.conversations.filter(conv =>
      conv.title.toLowerCase().includes(lowerQuery) ||
      conv.messages.some(msg => msg.content.toLowerCase().includes(lowerQuery))
    );
  }, [state.conversations]);

  const getRecentConversations = useCallback((limit: number = 10): ConversationContext[] => {
    return [...state.conversations]
      .sort((a, b) => b.updatedAt - a.updatedAt)
      .slice(0, limit);
  }, [state.conversations]);

  const exportConversations = useCallback((): string => {
    return JSON.stringify(state.conversations, null, 2);
  }, [state.conversations]);

  const importConversations = useCallback((jsonString: string): boolean => {
    try {
      const imported = JSON.parse(jsonString);
      if (!Array.isArray(imported)) return false;

      setState(prev => {
        const conversations = [...imported, ...prev.conversations]
          .slice(0, MAX_CONVERSATIONS);
        const newState = { ...prev, conversations };
        saveToStorage(newState);
        return newState;
      });

      return true;
    } catch (error) {
      console.error('Error importing conversations:', error);
      return false;
    }
  }, [saveToStorage]);

  const getConversationStats = useCallback(() => {
    const totalMessages = state.conversations.reduce(
      (sum, conv) => sum + conv.messages.length,
      0
    );
    const totalSize = new Blob([JSON.stringify(state.conversations)]).size;

    return {
      totalConversations: state.conversations.length,
      totalMessages,
      totalSizeBytes: totalSize,
      totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2),
      oldestConversation: state.conversations.length > 0
        ? new Date(Math.min(...state.conversations.map(c => c.createdAt)))
        : null,
      newestConversation: state.conversations.length > 0
        ? new Date(Math.max(...state.conversations.map(c => c.updatedAt)))
        : null,
    };
  }, [state.conversations]);

  return {
    conversations: state.conversations,
    activeConversationId: state.activeConversationId,
    isLoaded: state.isLoaded,
    createConversation,
    addMessage,
    getActiveConversation,
    setActiveConversation,
    deleteConversation,
    clearAllConversations,
    searchConversations,
    getRecentConversations,
    exportConversations,
    importConversations,
    getConversationStats,
  };
}

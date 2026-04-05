const DANGEROUS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /data:\s*text\/html/gi,
  /vbscript:/gi,
  /expression\s*\(/gi,
];

const ALLOWED_TAGS = [
  'p', 'br', 'strong', 'em', 'u', 's', 'span',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'blockquote', 'pre', 'code',
  'a', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'hr', 'div'
];

const ALLOWED_ATTRIBUTES: Record<string, string[]> = {
  a: ['href', 'title', 'target', 'rel'],
  img: ['src', 'alt', 'title', 'width', 'height'],
  span: ['class'],
  div: ['class'],
  code: ['class'],
  pre: ['class'],
};

export function sanitizeHtml(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  let sanitized = input;

  for (const pattern of DANGEROUS_PATTERNS) {
    sanitized = sanitized.replace(pattern, '');
  }

  sanitized = sanitized.replace(/<(\w+)([^>]*)>/g, (match: string, tag: string, attrs: string) => {
    const lowerTag = tag.toLowerCase();
    if (!ALLOWED_TAGS.includes(lowerTag)) {
      return '';
    }

    const allowedAttrs = ALLOWED_ATTRIBUTES[lowerTag] || [];
    const cleanAttrs = attrs.replace(/(\w+)\s*=\s*["']([^"']*)["']/g, (attrMatch: string, attrName: string, attrValue: string) => {
      if (!allowedAttrs.includes(attrName.toLowerCase())) {
        return '';
      }

      if (attrName.toLowerCase() === 'href' || attrName.toLowerCase() === 'src') {
        if (isDangerousUrl(attrValue)) {
          return '';
        }
      }

      return `${attrName}="${escapeHtml(attrValue)}"`;
    });

    return `<${lowerTag}${cleanAttrs}>`;
  });

  return sanitized;
}

export function escapeHtml(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;',
  };

  return input.replace(/[&<>"'`=/]/g, (char) => htmlEntities[char] || char);
}

export function unescapeHtml(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  const htmlEntities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x27;': "'",
    '&#x2F;': '/',
    '&#x60;': '`',
    '&#x3D;': '=',
  };

  return input.replace(/&(?:amp|lt|gt|quot|#x27|#x2F|#x60|#x3D);/g, (entity) => htmlEntities[entity] || entity);
}

export function isDangerousUrl(url: string): boolean {
  if (!url || typeof url !== 'string') {
    return true;
  }

  const trimmedUrl = url.trim().toLowerCase();

  const dangerousProtocols = [
    'javascript:',
    'vbscript:',
    'data:text/html',
    'data:application/javascript',
  ];

  for (const protocol of dangerousProtocols) {
    if (trimmedUrl.startsWith(protocol)) {
      return true;
    }
  }

  return false;
}

export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== 'string') {
    return '';
  }

  const trimmedUrl = url.trim();

  if (isDangerousUrl(trimmedUrl)) {
    return '';
  }

  if (trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://')) {
    return trimmedUrl;
  }

  if (trimmedUrl.startsWith('/') || trimmedUrl.startsWith('#')) {
    return trimmedUrl;
  }

  if (trimmedUrl.startsWith('mailto:')) {
    const emailPattern = /^[mailto:]+[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(trimmedUrl)) {
      return trimmedUrl;
    }
    return '';
  }

  return '';
}

export function sanitizeInput(input: string, maxLength: number = 1000): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  let sanitized = input.trim();

  sanitized = sanitized.slice(0, maxLength);

  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

  return sanitized;
}

export function validateId(id: string): boolean {
  if (!id || typeof id !== 'string') {
    return false;
  }

  const validIdPattern = /^[a-z0-9-]+$/;
  return validIdPattern.test(id) && id.length <= 100;
}

export function validateCategory(category: string): boolean {
  const validCategories = ['functional', 'professional', 'creative', 'character', 'fiction'];
  return validCategories.includes(category);
}

export function validateSearchQuery(query: string): { valid: boolean; sanitized: string; error?: string } {
  if (!query || typeof query !== 'string') {
    return { valid: false, sanitized: '', error: 'Query is required' };
  }

  const sanitized = sanitizeInput(query, 200);

  if (sanitized.length < 1) {
    return { valid: false, sanitized: '', error: 'Query is too short' };
  }

  return { valid: true, sanitized };
}

export function generateSecureId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 10);
  return `${timestamp}-${randomPart}`;
}

export function createContentSecurityPolicy(): string {
  const directives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https:",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');

  return directives;
}

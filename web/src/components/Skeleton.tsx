'use client';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export function Skeleton({ 
  className, 
  variant = 'text',
  width,
  height,
  animation = 'pulse'
}: SkeletonProps) {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';
  
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg'
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'skeleton-wave',
    none: ''
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={style}
    />
  );
}

export function SkillCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <Skeleton variant="rectangular" className="h-32 w-full" />
      <div className="p-5">
        <Skeleton variant="text" className="h-6 w-3/4 mb-2" />
        <Skeleton variant="text" className="h-4 w-full mb-4" />
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <Skeleton variant="rounded" className="h-6 w-16" />
          <Skeleton variant="text" className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

export function SkillListSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <SkillCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function SkillDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Skeleton variant="rectangular" className="h-48 w-full" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <Skeleton variant="circular" className="h-16 w-16" />
            <div className="flex-1">
              <Skeleton variant="text" className="h-8 w-1/2 mb-2" />
              <Skeleton variant="text" className="h-4 w-1/3" />
            </div>
          </div>
          <Skeleton variant="text" className="h-4 w-full mb-2" />
          <Skeleton variant="text" className="h-4 w-full mb-2" />
          <Skeleton variant="text" className="h-4 w-3/4 mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} variant="rounded" className="h-20" />
            ))}
          </div>
          <Skeleton variant="rounded" className="h-40 w-full" />
        </div>
      </div>
    </div>
  );
}

export function CategorySkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
      <Skeleton variant="circular" className="h-16 w-16 mx-auto mb-4" />
      <Skeleton variant="text" className="h-5 w-20 mx-auto mb-2" />
      <Skeleton variant="text" className="h-4 w-16 mx-auto" />
    </div>
  );
}

export function CategoryGridSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <CategorySkeleton key={index} />
      ))}
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="text-center">
      <Skeleton variant="text" className="h-10 w-20 mx-auto mb-2" />
      <Skeleton variant="text" className="h-4 w-16 mx-auto" />
    </div>
  );
}

export function SearchBarSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <Skeleton variant="rounded" className="h-12 flex-1" />
        <Skeleton variant="rounded" className="h-12 w-40" />
        <Skeleton variant="rounded" className="h-12 w-32" />
      </div>
    </div>
  );
}

export function BreadcrumbSkeleton() {
  return (
    <div className="flex items-center space-x-2">
      <Skeleton variant="text" className="h-4 w-12" />
      <Skeleton variant="text" className="h-4 w-4" />
      <Skeleton variant="text" className="h-4 w-16" />
      <Skeleton variant="text" className="h-4 w-4" />
      <Skeleton variant="text" className="h-4 w-20" />
    </div>
  );
}

export function TableRowSkeleton({ columns = 4 }: { columns?: number }) {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="px-4 py-3">
          <Skeleton variant="text" className="h-4 w-full" />
        </td>
      ))}
    </tr>
  );
}

export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} className="px-4 py-3">
                <Skeleton variant="text" className="h-4 w-20" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <TableRowSkeleton key={i} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

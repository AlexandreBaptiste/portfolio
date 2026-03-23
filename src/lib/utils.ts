/**
 * src/lib/utils.ts
 *
 * Utility helpers used across the project.
 *
 * cn() — Class Name merger
 * -------------------------
 * This is a standard helper used by shadcn/ui components.
 * It combines:
 *   - clsx : merges conditional class name strings
 *   - tailwind-merge : resolves Tailwind class conflicts
 *     (e.g. "p-2 p-4" → "p-4", keeping only the last relevant class)
 *
 * Usage:
 *   cn('text-white', isActive && 'font-bold', 'p-2')
 *   // → 'text-white font-bold p-2' (if isActive is true)
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

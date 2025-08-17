import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isFullScreenSupported(ref: React.RefObject<HTMLElement | null>): boolean {
  if (ref.current && typeof ref.current.requestFullscreen === 'function') {
    return true
  }
  return false
}

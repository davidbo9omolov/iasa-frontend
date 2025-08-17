import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isFullscreenAvailable(): boolean {
  return typeof document.fullscreenEnabled !== 'undefined' && document.fullscreenEnabled === true
}

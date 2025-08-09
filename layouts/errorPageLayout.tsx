import React from 'react'

type PageNotFoundLayoutProps = {
  children: React.ReactNode
}
export function PageNotFoundLayout({ children }: PageNotFoundLayoutProps) {
  return (
      <div className={'w-full'}>
        <main style={{ height: '80vh' }} className={'flex justify-center items-center'} role={'main'} aria-label={'Error'}>
          {children}
        </main>
      </div>
  )
}

// Remix
import { useLocation } from '@remix-run/react'

// React
import { type FC, useEffect } from 'react'

// Preline
import type { IStaticMethods } from 'preline/preline'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

const PrelineInitScript: FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('preline/preline').then(() => {
        window.HSStaticMethods.autoInit()
      })
    }
  }, [pathname])

  return null
}

export default PrelineInitScript

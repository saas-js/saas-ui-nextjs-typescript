export interface AppRenderProps {
  pageProps: object
  err?: Error
  Component: NextComponentType<NextPageContext, AppRenderProps, object>
  router: NextRouter
}
import type { NextComponentType, NextPageContext } from 'next'
import type { NextRouter } from 'next/router'
import Link from 'next/link'

import { SaasProvider } from '@saas-ui/react'

export default function App({ Component, pageProps }: AppRenderProps) {
  return (
    <SaasProvider linkComponent={Link}>
      <Component {...pageProps} />
    </SaasProvider>
  )
}

import { ReactNode } from 'react'
import Head from 'next/head'
import { Container, Flex, HStack, VisuallyHidden } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Logo } from './Logo'

import { Link } from '@saas-ui/react'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout = ({
  children,
  title = 'This is the default title',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="1200px">
      <header>
        <Flex py={4} justifyContent="space-between" alignItems="center" mb={8}>
          <Flex justifyContent="space-between" alignItems="center">
            <nav>
              <HStack spacing={15}>
                <Link
                  href="/"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Logo h="1.5rem" pointerEvents="none" mr={4} />
                  <VisuallyHidden>Saas UI Next.js starter</VisuallyHidden>
                </Link>
              </HStack>
            </nav>
          </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </header>
      {children}
    </Container>
  </div>
)

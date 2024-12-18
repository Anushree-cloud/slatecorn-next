import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Root from '../components/layouts/Root'
import Head from 'next/head'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Head>
          <title>SlateCorn</title>
        </Head>
        <body className={inter.className}>
          <NextTopLoader />
          <Root>{children}</Root>
        </body>
    </html>
  )
}

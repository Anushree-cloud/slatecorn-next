'use client'
import { useEffect } from 'react'
import PageRoot from '../components/layouts/PageRoot'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.prefetch('/')
  }, [])
  return <PageRoot />
}

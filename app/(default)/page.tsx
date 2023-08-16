export const metadata = {
  title: 'JJ - DEV',
  description: 'John Joseph WebDeveloper Landing Page',
}

import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}

import { PageLayout } from '@/components/Layout'
import { NextPage } from 'next'
import Link from 'next/link'

const Learn: NextPage = () => {
  return (
    <PageLayout>
      <section className="min-h-screen flex flex-col mt-24 items-center text-center">
        <h1 className="text-2xl sm:text-4xl font-semibold text-prog-primary-500">
          Coming Soon...
        </h1>
        <Link href="/" passHref>
          <a className="mt-2 text-prog-gray-500">กลับหน้าหลัก</a>
        </Link>
      </section>
    </PageLayout>
  )
}

export default Learn

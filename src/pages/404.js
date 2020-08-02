import React from 'react'

import Layout from '../components/Templates/Layout'
import Link from '../components/Links/Link'

const IndexPage = () => {
  return (
    <Layout pageTitle={'404 | giffgaff status'}>
      <main>
        <h1 className="gg-t-megaphone">Lost?</h1>
        <p className="gg-t-speak">This page doesn't exist.</p>
        <Link href="/">Go home</Link>
      </main>
    </Layout>
  )
}

export default IndexPage

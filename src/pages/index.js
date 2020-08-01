import React from 'react'
import StatusChecker from '../components/StatusChecker'
import Layout from '../components/Templates/Layout'

const IndexPage = () => {
  return (
    <Layout pageTitle={'giffgaff status'}>
      <main>
        <h1 className="gg-t-megaphone">giffgaff status</h1>
        <p className="gg-t-speak">
          Check the status of giffgaff easily from one page. This site updates regularly to make sure you're not missing any of the latest
          issues.
        </p>
        <p className="gg-t-speak">
          This page uses multiple sources to compile a large set of data to inform you about any problems with giffgaff or O2's infrastructure.
        </p>
        <p className="gg-t-whisper">This is an unofficial site made by the giffgaff community.</p>

        <StatusChecker />
      </main>
    </Layout>
  )
}

export default IndexPage

import React, { useEffect, useState } from 'react'
import StatusChecker from '../components/StatusChecker'
import Layout from '../components/Templates/Layout'

const IndexPage = () => {
  const [styling, setStyling] = useState({})

  useEffect(() => {
    let params = {}
    window.location.search
      .slice(1)
      .split('&')
      .forEach(elm => {
        if (elm === '') return
        let spl = elm.split('=')
        const d = decodeURIComponent
        params[d(spl[0])] = spl.length >= 2 ? d(spl[1]) : true
      })

    let s = {}

    if (params.pad) {
      s.padding = params.pad + 'px'
    }

    if (params.padSides) {
      s.paddingLeft = params.padSides + 'px'
      s.paddingRight = params.padSides + 'px'
    }

    setStyling(s)
  }, [setStyling])

  return (
    <Layout pageTitle={'giffgaff status'} embedded>
      <main style={styling}>
        <h1 className="gg-t-megaphone" style={{ textAlign: 'center' }}>
          giffgaff status checker
        </h1>

        <StatusChecker />
      </main>
    </Layout>
  )
}

export default IndexPage

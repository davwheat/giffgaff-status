import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}

        {/* <!-- Primary Meta Tags --> */}
        <title>giffgaff status</title>
        <meta name="title" content="giffgaff status" />
        <meta
          name="description"
          content="Having patchy signal or got no data? Check the status of giffgaff easily from one page. This site updates automatically so you don't miss any issues."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giffgaffstatus.com/" />
        <meta property="og:title" content="giffgaff status" />
        <meta
          property="og:description"
          content="Having patchy signal or got no data? Check the status of giffgaff easily from one page. This site updates automatically so you don't miss any issues."
        />
        <meta property="og:image" content="/sharing.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://giffgaffstatus.com/" />
        <meta property="twitter:title" content="giffgaff status" />
        <meta
          property="twitter:description"
          content="Having patchy signal or got no data? Check the status of giffgaff easily from one page. This site updates automatically so you don't miss any issues."
        />
        <meta property="twitter:image" content="/sharing.jpg" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

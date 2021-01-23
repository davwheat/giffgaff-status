import React from 'react'
import PropTypes from 'prop-types'

import { graphql, useStaticQuery } from 'gatsby'
import clsx from 'clsx'

import SEO from '../../seo'
import UpdateMessage from '../../UpdateMessage'
import Footer from '../Footer'
import Header from '../Header'

import './styles/layout.less'
import styles from './styles/layout.module.less'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'

const Layout = ({ children, pageTitle, embedded }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let extraStyles

  if (!embedded) {
    extraStyles = require('./styles/non-embed.module.less')
  }

  return (
    <>
      <SEO title={pageTitle} />
      <UpdateMessage />
      {!embedded && <Header siteTitle={data.site.siteMetadata.title} />}
      <main className={clsx(styles.mainContent, [!embedded && extraStyles.mainContent])}>{children}</main>
      {!embedded && <Footer />}
    </>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  embedded: PropTypes.bool,
}

Layout.defaultProps = {
  embedded: false,
}

export default Layout

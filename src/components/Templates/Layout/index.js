import React from 'react'
import PropTypes from 'prop-types'

import { useStaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import './styles/layout.css'
import Footer from '../Footer'

import styles from './styles/layout.module.css'

import 'typeface-poppins'
import SEO from '../../seo'

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title={pageTitle} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout

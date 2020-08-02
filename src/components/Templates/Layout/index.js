import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import 'typeface-poppins'
import SEO from '../../seo'
import UpdateMessage from '../../UpdateMessage'
import Footer from '../Footer'
import Header from '../Header'
import './styles/layout.css'
import styles from './styles/layout.module.css'

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
      <UpdateMessage />
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

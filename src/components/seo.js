/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Title, Meta } from 'react-head'

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <Title>{title}</Title>
      <Meta name="og:title">{title}</Meta>
      <Meta name="twitter:title">{title}</Meta>

      <Meta name="description">{metaDescription}</Meta>
      <Meta name="og:description">{metaDescription}</Meta>
      <Meta name="twitter:description">{metaDescription}</Meta>

      <Meta name="og:type">website</Meta>
      <Meta name="twitter:card">summary</Meta>
      <Meta name="twitter:creator">@davwheat_</Meta>
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO

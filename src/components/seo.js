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
      <Meta name="og:title" content={title} />
      <Meta name="twitter:title" content={title} />

      <Meta name="description" content={metaDescription} />
      <Meta name="og:description" content={metaDescription} />
      <Meta name="twitter:description" content={metaDescription} />

      <Meta name="og:type" content="website" />
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:creator" content="@davwheat_" />
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO

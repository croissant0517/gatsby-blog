import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import slugify from '@sindresorhus/slugify';

import Layout from "../components/layout"
import Introduce from "../components/introduction";
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h2`
  margin-bottom: 20px;
  color: black;
`

const BlogTimeToRead = styled.h5`
  margin-bottom: 10px;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Introduce />
      <div>
        {
          data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div key={node.id} >
                <BlogLink to={slugify(node.frontmatter.title)} >
                  <BlogTitle>
                    <span>{node.frontmatter.title}</span>
                  </BlogTitle>
                </BlogLink>
                <BlogTimeToRead>
                  <span>{node.frontmatter.date} - {node.timeToRead} min read</span>
                </BlogTimeToRead>
                <p>{node.excerpt}</p>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          html
          timeToRead
          excerpt
        }
      }
      totalCount
    }
  }
`
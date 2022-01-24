import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import slugify from '@sindresorhus/slugify';

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  width: max-content;
  margin-bottom: 20px;
  color: purple;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Vic's Thoughts</h1>
        <h4>{ data.allMarkdownRemark.totalCount }</h4>
        {
          data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div key={node.id} >
                <BlogLink to={slugify(node.frontmatter.title)} >
                  <BlogTitle>
                    <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
                  </BlogTitle>
                </BlogLink>
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
          excerpt
        }
      }
      totalCount
    }
  }
`
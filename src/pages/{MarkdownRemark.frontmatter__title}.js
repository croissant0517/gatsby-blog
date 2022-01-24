import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} ></div>
      </div>
    </Layout>
  )
}
export default BlogPost

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        title
      }
      html
    }
  }
`
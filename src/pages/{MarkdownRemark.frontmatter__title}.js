import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import Introduce from '../components/introduction'
import styled from "styled-components"

const PostContainer = styled.div`
  margin-bottom: 5rem;
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <PostContainer>
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.date} - {post.timeToRead} min read</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} ></div>
      </PostContainer>
      <Introduce />
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
      timeToRead
    }
  }
`
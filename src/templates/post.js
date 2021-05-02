import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/Layout'
import '../components/youtube.css'

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
  featured_media
}) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <Img fluid={featured_media.localFile.childImageSharp.fluid} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div style={{ marginTop: `4rem` }}>
              <p>
                {date}
              </p>
              {categories && categories.length ? (
                <div>
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {categories.map(category => (
                      <li key={`${category.slug}cat`}>
                        <Link to={`/categories/${category.slug}/`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {tags && tags.length ? (
                <div>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={`${tag.slug}tag`}>
                        <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
        featured_media={post.featured_media}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "YYYY年MM月DD日")
    title
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "YYYY年MM月DD日")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

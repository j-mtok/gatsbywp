import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import dayjs from "dayjs"

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>
          {posts.map(({ node: post }) => (
            <div
              className="content"
              style={{ border: '1px solid #eaecee', padding: '0.5em 1em' }}
              key={post.id}
            >
              <small>
                {post.date}
              </small>
              <p>
                <Link className="has-text-primary" to={post.slug}>
                  {post.title}
                </Link>

              </p>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                  }}
                />
                <Link className="button is-small" to={post.slug}>
                  Keep Reading →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "YYYY年MM月DD日")
    slug
  }
`

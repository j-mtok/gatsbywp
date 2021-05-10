import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export const Nav = (props) => {
    // Graphqlの定義
    const { allWordpressCategory } = useStaticQuery(categoryQuery);

    return(
        <div>
            <nav className="hamburgermenu-nav" aria-expanded={props.open}>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    {allWordpressCategory.nodes.map(( category ) => (
                        <li key={category.wordpress_id}>
                            <Link to={`/categories/${category.slug}`}>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

// 使用するGraphql
export const categoryQuery = graphql`
    {
        allWordpressCategory {
            nodes {
                name
                wordpress_parent
                slug
                count
                id
                wordpress_id
            }
        }
    }
`
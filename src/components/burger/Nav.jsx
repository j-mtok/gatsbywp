import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Category } from "./Category"

export const Nav = (props) => {
    // Graphqlの定義
    const { allWordpressCategory } = useStaticQuery(categoryQuery);
    // 子カテゴリの除去
    const categories = allWordpressCategory.nodes.filter((category) => {
        return category.wordpress_parent == 0
    })    

    return(
        <div>
            <nav className="hamburgermenu-nav" aria-expanded={props.open}>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    {categories.map(( category ) => (
                        <Category category={category} />
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
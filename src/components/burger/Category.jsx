import React from "react"
import { Link } from "gatsby"

export const Category = (props) => {
    if(props.category.count != 0) {
        return (
            <li key={props.category.wordpress_id}>
                <Link to={`/categories/${props.category.slug}`}>
                    {props.category.name}
                </Link>
            </li>
        )
    } else {
        return (
            <li key={props.category.wordpress_id}>
                <span>
                    {props.category.name}
                </span>
            </li>
        )
    }
}
import React from "react"
import {TitleDiv} from "./Divstyle"
import {Link} from "gatsby"

export const PageTitle = () => {
    return (
        <Link to="/" style={{textDecoration: "none", color: "#000000"}}>
            <TitleDiv>
                <div className="pagetitle-container" style={{margin: "5px auto 5px auto"}}>
                    <h2 className="pagetitle">打ち上げ出んでええで</h2>
                </div>
            </TitleDiv>
        </Link>
    )
}
import React, { useState } from "react"
import {TitleDiv} from "./Divstyle"
import {Link} from "gatsby"
import { Nav } from "./burger/Nav"
import { Burger } from  "./burger/Burger"

export const PageTitle = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <TitleDiv>
                <div className="pagetitle-container" style={{margin: "5px auto 5px auto"}}>
                    <Link to="/" style={{textDecoration: "none", color: "#000000"}}>
                        <h2 className="pagetitle">打ち上げ出んでええで</h2>
                    </Link>
                    <Burger open={open} setOpen={setOpen} />
                    <Nav open={open} setOpen={setOpen} />
                    {console.log(open)}
                </div>
            </TitleDiv>
        </>
    )
}
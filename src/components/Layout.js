import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import {PageTitle} from "./PageTitle"
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="打ち上げ出んでええで" />
    <PageTitle />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper

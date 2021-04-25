import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <div className="testlayoutjs">テストlayoutjs Navbarの前</div>
    <Navbar />
    <div className="testlayoutjs">テストlayoutjs Navbarのすぐあと</div>
    <div>{children}</div>
  </div>
)

export default TemplateWrapper

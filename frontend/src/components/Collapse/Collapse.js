import React, { useState } from 'react'
import './Collapse.css'

function Header({ onClick, children }) {
  return (
    <div className="collapse--header" onClick={onClick}>
      {children ? children : (
        <p className="collapse--header--text">Header</p>
      )}
    </div>
  )
}

function Content({ isExpand, children }) {
  return (
    <div className={`collapse--content ${isExpand ? 'collapse--content-open' : 'collapse--content-close'}`}>
      {children ? children : (
        <p className="collapse--content--text">Content</p>
      )}
    </div>
  )
}


function Collapse() {
  const [isExpand, setIsExpand] = useState(false)
  const handleOnClickHeader = () => setIsExpand(!isExpand)

  return (
    <div className="collapse">
      <Header onClick={handleOnClickHeader}></Header>
      <Content isExpand={isExpand}></Content>
    </div>
  )
}

// Collapse.Header = 

export default Collapse

import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = ({list}) => (
  <ol className="breadcrumb">
    <li><Link to="/">Диск</Link></li>
    {
      list.map((item, index) =>
        item && item.length 
        ? (
          index === list.length-1 
          ? <li key={'breadcrumb-item-' + index} className="active">{item}</li>
          : <li key={'breadcrumb-item-' + index}><Link to={'/' + (list.slice(1, index + 1).join('/'))}>{item}</Link></li>
        )
        : null
      )
    }
  </ol>
)

export default Breadcrumb
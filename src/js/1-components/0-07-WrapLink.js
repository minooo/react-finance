import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

// 判断是否为站内路由
const isLink = path => path && (
  (typeof path === 'string' && !path.includes('http')) ||
  (Object.prototype.toString.call(path) === '[object Object]')
)

// 判断是否为站外链接
const isHref = path => path && (typeof path === 'string' && path.includes('http'))

export default class extends PureComponent {
  onClick = () => {
    const { onClick, clickparams } = this.props
    if (onClick) {
      onClick(clickparams)
    }
  }

  render() {
    const {
      path, children, className, style, ...rest
    } = this.props
    if (isLink(path)) {
      return <Link to={path} className={className} style={style} {...rest}>{children}</Link>
    } else if (isHref(path)) {
      return <a href={path} className={className} style={style} {...rest}>{children}</a>
    }
    return (
      <div
        onClick={this.onClick}
        tabIndex="0"
        role="button"
        onKeyDown={this.onClick}
        className={className}
        style={style}
      >
        {children}
      </div>
    )
  }
}


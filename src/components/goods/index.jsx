import React, { Component } from 'react'
import './style.less'

export default class Goods extends Component {
  render() {
    const { ele } = this.props
    return (
      <div className="goods">
        <dl>
           <dt><img src={ele.imgurl} alt=""/></dt>
           <dd>
             <p className="p1">{ele.product_title}</p>
             <p className="p2">￥<span>{ele.yprice}</span></p>
             <p className="p3">月销量: <span>{ele.volume}</span>件</p>
           </dd>
        </dl>
      </div>
    )
  }
}

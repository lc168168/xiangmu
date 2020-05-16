import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { getTodyData } from '../../api/api'
import './styles.less'

export default class One extends Component {
  state = {
    data: []
  }

  componentDidMount () {
    getTodyData().then(res => {
      this.setState({
        data: res.data.list
      })
    })
  }


  render() {
    const { data } = this.state
    
    return (
      <div className="one">
        {
          data ?
          data.map(ele => {
            return (
              <dl key={ele.id}>
               <dt></dt>
               <dd>
                 <p className="p3">{ele.pro_name}</p>
                 <p className="p4">已团{ele.sum}件</p>
                 <div className="d1">
                   <div >
                    <p style={{ fontSize: "0.24rem" }}>3人团<span >￥{ele.min_price}</span></p>
                    <p>单买价格￥{ele.market_price}</p>
                   </div>
                   <p className="oo"></p>
                   <p className="p5">
                    <NavLink to={`/three`} >
                      <span style={{ color: 'white' }}>去开团</span>
                    </NavLink>
                   </p>
                 </div>
               </dd>
              </dl>
            )
          }) : null
        }
      </div>
    )
  }
}

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import img from '../../assets/3.jpg'
import './style.less'


export default @withRouter
class TeamHead extends Component {
  onClick = () => {
    this.props.history.push('/home')
  }
  render() {
    const { title } = this.props
    return (
      <div className="teamhead">
         <div className="lef" onClick={this.onClick}>
            <img src={img} alt=""/>
         </div>
         <div className="con">商品详情</div>
         <div className="right">3</div>  
      </div>
    )
  }
}

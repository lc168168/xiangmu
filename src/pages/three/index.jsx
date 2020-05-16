import React, { Component } from 'react'
import TeamHead from '../../components/teamHead'

import "./styles.less"

export default class Three extends Component {
  state = {
    data: [],
  
  }
  componentDidMount () {

  } 
  onClick = () => {
    this.props.history.push("/home")
  }
  render() {
   
    return (
      <div className="three">
          <div className="a1" onClick={this.onClick}>
            <TeamHead/>
          </div>
          <div className="a2">
            <div className="imgbox">
              <img src="1.jpg" alt=""/>
            </div>
            <div className="neirong">
                <p className="mp1">美迪慧尔 MEDIHEAL潘世丽柔滑宝石面膜</p>
                <p>
                  <span>运费： 包邮 （偏远地区除外）</span>
                </p>
            </div>
            <div className="oppo">
                <span> 5片 </span>
            </div>
          </div>
          <div className="a3">
              <div className="op">客服</div>
              <div className="op">分享</div>
              <div className="ip">
                <p className="p11">￥52.00</p>
                <p className="p22">单独购买</p>
              </div>
              <div className="ip">
                <p className="p11">￥0.52</p>
                <p className="p22">我要开团</p>
              </div>
          </div>
      </div>
    )
  }
}

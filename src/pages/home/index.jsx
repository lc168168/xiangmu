import React, { Component } from 'react'
import { Carousel } from 'antd'
import img from "../../assets/2.jpg"
import Goods from '../../components/goods'
import { getJsonData } from '../../api/api'
import './style.less'

export default class Home extends Component {
  state = {
    data: []
  }
  componentDidMount () {
    getJsonData().then(res => {
      this.setState({
        data: res.data.data,
      })
      console.log(res.data.data.banner)
    })
  }
  onClick = () => {
    this.props.history.push('/erjiluyou')
  }
  render() {
    const { data } = this.state

    return (
      <div className="home">
         <header>
         <div className="left">
         来客电商
       </div>
       <div className="cen">
         <input type="text" placeholder="搜索你想要的商品"/>
       </div>
       <div className="rig">
         <img src={img} alt=""/>
       </div>
         </header>
         <section>
           <div className="top">
              {
                data.banner ? 
                <Carousel autoplay>
                {
                  this.state.data.banner.map((res)=>{
                    return <div>
                      <img src={res.image} alt=""/>
                    </div>
                  })
                }
              </Carousel>
                : null
              }
              <div className="box">
              {
                data.plugin_list ?
                data.plugin_list.map((ele, index) => {
                  return (
                    <div className="imgs">
                      <dl key={index} onClick={this.onClick}>
                        <dt></dt>
                        <dd>{ele.name}</dd>
                      </dl>
                    </div>
                  )
                }) : null
              }
              </div>
           </div>
           <div className="bot">
           <h1>猜你喜欢 <span>精选人气商品,为你推荐</span></h1>
            {
              data.goods_list ? 
              data.goods_list.map(ele => {
                return (
                   <Goods ele={ele}/>
                )
              }) : null
            }
           </div>
         </section>
      </div>
    )
  }
}

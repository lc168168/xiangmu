import React, { Component } from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import TeamHead from '../../components/teamHead'
import One from "../one"
import Two from '../two'
import './styles.less'

export default class Erjiluyou extends Component {
  state = {
    bool:true
  }
  onClick = () => {
    this.setState({
      bool: !this.state.bool
    })
  }
 

  render() {
    const { bool } = this.state
    return (
      <div className="erjiluyou">
         <header>
           <TeamHead title={"拼团"}/>
         </header>
         <section>
            <div className="tops">
               <p onClick={this.onClick}><NavLink exact to="/erjiluyou/one" activeStyle={{ color: "black"}}>
                 今日拼团
                 <span className={bool ? "on" : ''}></span>
               </NavLink></p>
               <p onClick={this.onClick}><NavLink exact to="/erjiluyou/two" activeStyle={{ color: "black"}}>
               拼团抢先购
               <span className={ !bool ? "on" : ''}></span>
               </NavLink></p>
            </div>
            <div className="bots">
              <Route path="/erjiluyou/one" component={One}/>
              <Route path="/erjiluyou/two" component={Two}/>
              <Redirect to="/erjiluyou/one" />
            </div>
         </section>
      </div>
    )
  }
}

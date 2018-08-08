import React, { Component } from 'react';
import "./App.less"
import {HashRouter,Route,Switch} from "react-router-dom";
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as types from "../constants/actionTypes"
import * as login_action from "../actions/login_action"
import * as userName_action from "../actions/userName_action"
import Home from "./Home/Home"
import Category from "./Category/Category"
import Lesson from "./Lesson/Lesson"
import Topic from "./Topic/Topic"
import My from "./My/My"
import FoodDetail from "./FoodDetail/FoodDetail"
class App extends Component {

  checkLogin = () => {
    //先检查内存中是否已经有登录的数据
    var isLogin = localStorage.getItem('ISLOGIN');
    var userName = localStorage.getItem('USERNAME');
    if (isLogin==="isLogin") {
      this.props.loginAction.update("isLogin");
      this.props.userNameAction.update(userName);
    } 
    else {
      localStorage.setItem('ISLOGIN', "unLogin")
      this.props.loginAction.update("unLogin")
      localStorage.setItem('USERNAME', "")
      this.props.userNameAction.update("");
    }
  }

  componentDidMount(){
    this.checkLogin();
  }
  
  render() {
    // console.log(this.props)
    return (
      <div className="wrap">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/lesson" component={Lesson}/>
            <Route path="/topic" component={Topic}/>
            <Route path="/my" component={My}/>
            <Route path="/food/:id?" component={FoodDetail}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

function rem_fn() {
  var styleNode = document.createElement('style');
  var w=0;
  if (document.documentElement.clientWidth >= 1024) {
    w = 1024 / 16;
    document.documentElement.style.width="1024px";
  }else{
    w = document.documentElement.clientWidth / 16;
    document.documentElement.style.width = document.documentElement.clientWidth + "px";
  }
  styleNode.innerHTML = "html{font-size:" + w + "px!important}";
  
  document.head.appendChild(styleNode)
}

window.addEventListener('resize', function () {
  // document.documentElement.style.width = "375px";
  // console.log(document.documentElement.offsetWidth)
  // console.log(document.documentElement.clientWidth)
  rem_fn();
})
rem_fn();



function mapStateToProps(state) {
  return {
    loginReducer: state.login_reducer,
    userNameReducer: state.userName_reducer,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loginAction: bindActionCreators(login_action, dispatch),
    userNameAction: bindActionCreators(userName_action, dispatch),
  }
}

console.error('建议使用chrome手机模式浏览')
export default connect(mapStateToProps, mapDispatchToProps)(App)

import React from "react";
import "./My.less"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as types from "../../constants/actionTypes"
import * as showLoginPanel_action from "../../actions/showLoginPanel_action"
import * as login_action from "../../actions/login_action"
import * as userName_action from "../../actions/userName_action"
import MyContent from "./MyContent";
import Footer from "../Footer/Footer"
import Login from "../Login/Login"
class My extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    showLoginPanel_fn = () => {
        this.props.showLoginPanelAction.showLoginPanel_action({
            type: types.SHOWLOGINPANEL,
        })
    }

    hiddenLoginPanel_fn = () => {
        this.props.showLoginPanelAction.showLoginPanel_action({
            type: types.HIDDENLOGINPANEL,
        })
    }
    
    render(){
        // console.log(this.props)
        return (
            <div className="my_wrap">
                <MyContent showLoginPanel_fn={this.showLoginPanel_fn} loginReducer={this.props.loginReducer} userNameReducer={this.props.userNameReducer}/>
                <Footer/>
                <Login loginAction={this.props.loginAction} userNameAction={this.props.userNameAction} showLoginPanel={this.props.showLoginPanelReducer.showLoginPanel} hiddenLoginPanel_fn={this.hiddenLoginPanel_fn}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        showLoginPanelReducer: state.showLoginPanel_reducer,
        loginReducer: state.login_reducer,
        userNameReducer:state.userName_reducer,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        showLoginPanelAction: bindActionCreators(showLoginPanel_action, dispatch),
        loginAction: bindActionCreators(login_action, dispatch),
        userNameAction:bindActionCreators(userName_action,dispatch),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(My)
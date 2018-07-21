import React from "react";
import "./Home.less"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as types from "../../constants/actionTypes"
import * as showSearchPanel_action from "../../actions/showSearchPanel_action"
import * as showLoginPanel_action from "../../actions/showLoginPanel_action"
import * as login_action from "../../actions/login_action"
import * as userName_action from "../../actions/userName_action"
import Header from "../Header/Header"
import HomeContent from "./HomeContent"
import Footer from "../Footer/Footer"
import CreateTheme from "./CreateTheme"
import SearchPanel from "../SearchPanel/SearchPanel"
import Login from "../Login/Login"
import Message from "../Message/Message"
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            type:'home',
            searchHint:'搜索 菜谱/课程/用户',
            showCreate:"none",
            showMessage:"none",
            // showSearchPanel:false,
        }
    }

    showSearchPanel_fn=()=>{
        this.props.showSearchPanelAction.showSearchPanel_action({
            type: types.SHOWSEARCHPANEL,
        })
    }
    hiddenSearchPanel_fn=()=>{
        this.props.showSearchPanelAction.showSearchPanel_action({
            type: types.HIDDENSEARCHPANEL,
        })
    }

    hiddenCreate_fn=()=>{
        this.setState({
            showCreate: 'none',
        })
        document.querySelector('.createTheme').removeEventListener('click',this.hiddenCreate_fn)
    }

    showCreate_fn=()=>{
            this.setState({
                showCreate: 'block'
            })

        setTimeout(function(){
                document.querySelector('.createTheme').addEventListener('click',this.hiddenCreate_fn)
        }.bind(this),300)
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

    showMessage_fn=(e)=>{
        e.stopPropagation();
        this.setState({
            showMessage: 'block',
        })
    }
    hiddenMessage_fn=(e)=>{
        
        this.setState({
            showMessage: 'none',
        })
    }
    

    componentWillUnmount(){
        this.setState = (state, callback) => {
            return;
        };
    }
    render(){
        // console.log(this.state)
        // console.log(this.props)
        // console.log(this.props.showSearchPanelReducer.showSearchPanel)
        return (
            <div className="home_wrap">
                <Header type={this.state.type} searchHint={this.state.searchHint} showCreate_fn={this.showCreate_fn} showSearchPanel_fn={this.showSearchPanel_fn} showLoginPanel_fn={this.showLoginPanel_fn} loginReducer={this.props.loginReducer} showMessage_fn={this.showMessage_fn}/>
                <HomeContent/>
                <Footer/>
                <CreateTheme showCreate={this.state.showCreate} stopCreateProp={this.stopCreateProp} />
                <SearchPanel showSearchPanel={this.props.showSearchPanelReducer.showSearchPanel} hiddenSearchPanel_fn={this.hiddenSearchPanel_fn}/>
                <Login loginAction={this.props.loginAction} userNameAction={this.props.userNameAction} showLoginPanel={this.props.showLoginPanelReducer.showLoginPanel} hiddenLoginPanel_fn={this.hiddenLoginPanel_fn}/>
                <Message showMessage={this.state.showMessage} hiddenMessage_fn={this.hiddenMessage_fn}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showSearchPanelReducer: state.showSearchPanel_reducer,
        showLoginPanelReducer: state.showLoginPanel_reducer,
        loginReducer: state.login_reducer,
        userNameReducer: state.userName_reducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        showSearchPanelAction: bindActionCreators(showSearchPanel_action, dispatch),
        showLoginPanelAction: bindActionCreators(showLoginPanel_action, dispatch),
        loginAction: bindActionCreators(login_action, dispatch),
        userNameAction: bindActionCreators(userName_action, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
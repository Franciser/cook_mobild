import React from "react";
import "./Header.less"
import HeaderComp from "../../components/HeaderComp/HeaderComp"
class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <HeaderComp type={this.props.type} searchHint={this.props.searchHint} showCreate_fn={this.props.showCreate_fn} showSearchPanel_fn={this.props.showSearchPanel_fn} showLoginPanel_fn={this.props.showLoginPanel_fn} loginReducer={this.props.loginReducer} showMessage_fn={this.props.showMessage_fn}/>
            </header>
        )
    }
}
export default Header
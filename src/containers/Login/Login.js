import React from "react";
import "./Login.less"
import LoginComp from "../../components/LoginComp/LoginComp"
class Login extends React.Component{
    handleLogin = (value) => {
        this.props.loginAction.update("isLogin");
        localStorage.setItem('ISLOGIN', "isLogin")

        this.props.userNameAction.update(value);
        localStorage.setItem('USERNAME', value)
    }
    render(){
        return (
            <div className={this.props.showLoginPanel === false ? "login" : 'login login_active'}>
                <LoginComp handleLogin={this.handleLogin} hiddenLoginPanel_fn={this.props.hiddenLoginPanel_fn}/>
            </div>
        )
    }
}
export default Login
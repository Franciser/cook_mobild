import React from "react";
import "./LoginComp.less"
var nameReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
var passwordReg = /^([\w._]|[\u4e00-\u9fa5]){6,15}$/;
class LoginComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loginName:'',
            loginPassword:'',
            isName: false,
            isPassword: false,
        }
    }
    changeName_fn=(e)=>{
        
        this.setState({
            loginName:e.target.value.trim(),
        })
    }
    changePassword_fn=(e)=>{
        this.setState({
            loginPassword: e.target.value.trim(),
        })
    }

    handleBlurName = () => {
        
        var isName = nameReg.test(this.state.loginName);
        if (isName) {
            this.setState({
                isName: true,
            })
        } else {
            this.setState({
                isName: false,
            })
        }

    }

    handleBlurPassword = () => {
        var isPass = passwordReg.test(this.state.loginPassword);
        if (isPass) {
            this.setState({
                isPassword: true,
            })
        } else {
            this.setState({
                isPassword: false,
            })
        }
    }

    keyUpLogin=(e)=>{
        if(e.keyCode===13){
            this.setLogin();              
        }
    }

    clickLogin=(e)=>{
        e.preventDefault();
        this.setLogin();
    }
    
    setLogin = () => {
        var isName = nameReg.test(this.state.loginName);
        var isPass = passwordReg.test(this.state.loginPassword);
        if(isName&&isPass){
            this.props.handleLogin(this.state.loginName);
            this.props.hiddenLoginPanel_fn();
        }
        
        // if (this.state.isName && this.state.isPassword) {
        //     this.props.handleLogin(this.state.loginName);
        //     this.props.hiddenLoginPanel_fn();
        // } else {
        //     return
        // }
    }
    
    render(){
        return (
            <div className="login_wrap">
                <div className="login_header">
                    登录
                    <div onTouchStart={this.props.hiddenLoginPanel_fn}>
                        取消
                    </div>
                </div>
                <div className="login_content">
                    <form action="">
                    <div className="login_content_name">
                            <label htmlFor="loginName">账号</label>
                            <input value={this.state.loginName} id="loginName" type="text" placeholder="手机号(11位手机号)" onChange={this.changeName_fn}/>
                    </div>
                    <div className="login_content_password">
                            <label htmlFor="loginPassword">密码</label>
                            <input value={this.state.loginPassword} id="loginPassword" type="password" placeholder="登录密码(6-15位)" onChange={this.changePassword_fn} onKeyUp={this.keyUpLogin}/>
                    </div>
                    <div className="login_content_option clearfix">
                        <div className="login_option_left">
                            <button>忘记密码?</button>
                        </div>
                        <div className="login_option_right">
                            <button>使用验证码登录</button>
                        </div>
                    </div>
                        <button onTouchStart={this.clickLogin} className={this.state.loginName.length > 0 && this.state.loginPassword.length > 0 ? "login_content_loginBtn loginBtn_active" : "login_content_loginBtn"}>登录</button>
                    <button className="login_content_register">没有账号，立即注册</button>

                    </form>
                    <div className="login_other_account">
                        <h2>第三方账号登录</h2>
                        <ul>
                            <li>
                                    <i className="iconfont icon-weixin"></i>
                                    <span>微信</span>
                            </li>
                            <li>
                                    <i className="iconfont icon-QQ"></i>
                                    <span>QQ</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginComp
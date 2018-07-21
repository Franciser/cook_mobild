import React from "react";
import "./MyContent.less"
import MyHeaderComp from "../../components/MyComp/MyHeaderComp/MyHeaderComp"
class MyContent extends React.Component{
    render(){
        // console.log(this.props.loginReducer.isLogin)
        return (
            <div className="my_content">
                <MyHeaderComp/>
                <div className="my_content_login">
                {
                    this.props.loginReducer.isLogin==="unLogin"?
                
                    <div className="my_content_toLogin" onTouchStart={this.props.showLoginPanel_fn}>
                        <div>
                            <i className="iconfont icon-wode1"></i>
                        </div>
                        <p>立即登录</p>
                    </div>
                    :
                    <div className="my_content_hasLogin">
                        <div>
                            <i className="iconfont icon-wode5"></i>
                        </div>
                            <p>{this.props.userNameReducer.userName}</p>
                    </div>
                    }
                </div>
                <div className="my_content_list">
                    <ul>
                        <li className="my_list_item">
                            <a href="javascript:;" className="clearfix">
                                <div className="my_list_item_left">
                                    商城订单
                                </div>
                                <div className="my_list_item_right">
                                    <i className="iconfont icon-youjiantou"></i>
                                </div>
                            </a>
                        </li>
                        <li className="my_list_item">
                            <a href="javascript:;" className="clearfix">
                                <div className="my_list_item_left">
                                    草稿箱
                                </div>
                                <div className="my_list_item_right">
                                    <i className="iconfont icon-youjiantou"></i>
                                </div>
                            </a>
                        </li>
                        <li className="my_list_item">
                            <a href="javascript:;" className="clearfix">
                                <div className="my_list_item_left">
                                    达人申请
                                </div>
                                <div className="my_list_item_right">
                                    <i className="iconfont icon-youjiantou"></i>
                                </div>
                            </a>
                        </li>
                        <li className="my_list_item">
                            <a href="javascript:;" className="clearfix">
                                <div className="my_list_item_left">
                                    课堂开课
                                </div>
                                <div className="my_list_item_right">
                                    <i className="iconfont icon-youjiantou"></i>
                                </div>
                            </a>
                        </li>
                        <li className="my_list_item">
                            <a href="javascript:;" className="clearfix">
                                <div className="my_list_item_left">
                                    联系客服
                                </div>
                                <div className="my_list_item_right">
                                    <i className="iconfont icon-youjiantou"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default MyContent
import React from "react";
import "./MessageComp.less"
class MessageComp extends React.Component{
    render(){
        return (
            <div className="message_wrap">
                <div className="message_header">
                    消息
                    <div onTouchStart={this.props.hiddenMessage_fn}>
                        <i className="iconfont icon-zuojiantou"></i>
                    </div>
                </div>

                <div className="message_content">
                    <div className="message_content_item clearfix">
                        <div className="message_item_left">
                            <img src="./img/admin_logo.jpg" alt=""/>
                        </div>
                        <div className="message_item_right">
                            <div className="message_item_right_top clearfix">
                                <div className="message_item_name">
                                    <span>系统通知</span>
                                </div>
                                <div className="message_item_date">
                                    <span>05-13 18:55</span>
                                </div>
                            </div>
                            <div className="message_item_right_bottom">
                                终于等到你，欢迎加入厨房美食大家庭！
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MessageComp
import React from "react";
import "./Message.less"
import MessageComp from "../../components/MessageComp/MessageComp"
class Message extends React.Component{
    render(){
        return (
            <div className={this.props.showMessage==="none"?"message":"message message_active"}>
                <MessageComp hiddenMessage_fn={this.props.hiddenMessage_fn}/>
            </div>
        )
    }
}
export default Message
import React from "react";
import "./TopicHeaderComp.less"
class TopicHeaderComp extends React.Component{
    render(){
        return (
                <header className="topic_content_header">
                    食话
                    <div>
                        <i className="iconfont icon-lingdang-xianxing"></i>
                    </div>
                </header>
        )
    }
}
export default TopicHeaderComp
import React from "react";
import "./MyHeaderComp.less"
class MyHeaderComp extends React.Component{
    render(){
        return (
            <div className="my_content_header">
                我的
                <div>
                    <i className="iconfont icon-shezhi"></i>
                </div>
            </div>
        )
    }
}
export default MyHeaderComp
import React from "react";
import "./HomeNavComp.less"
class HomeNavComp extends React.Component{
    render(){
        return (
            <div className="home_content_nav">
                <ul className="clearfix">
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-niunai"></i>
                            <p>美食视频</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-baozhuangdai"></i>
                            <p>厨房问答</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-yinpin"></i>
                            <p>厨币换购</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-wanpan"></i>
                            <p>活动签到</p>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default HomeNavComp
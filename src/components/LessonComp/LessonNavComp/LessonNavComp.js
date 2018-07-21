import React from "react";
import "./LessonNavComp.less"
class LessonNavComp extends React.Component{
    render(){
        return (
            <div className="lesson_content_nav">
                <ul className="clearfix">
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-hongbeigongju"></i>
                            <p>烘焙</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-zhongcan"></i>
                            <p>中餐</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-canpinhui-xican"></i>
                            <p>西餐</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-meishi"></i>
                            <p>营养餐</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-tiandian"></i>
                            <p>甜点</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-yinpin1"></i>
                            <p>饮品</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-can"></i>
                            <p>创意菜</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="iconfont icon-meishi1"></i>
                            <p>其它</p>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default LessonNavComp
import React from "react";
import "./TopicListComp.less"
class TopicListComp extends React.Component{
    switchClass_fn = (e) => {
        if (e.target.nodeName === "A") {
            var aNodes = e.target.parentNode.parentNode.getElementsByTagName('a')
            for (var i = 0; i < aNodes.length; i++) {
                aNodes[i].classList.remove('switchClass_active');
            }
            e.target.classList.add('switchClass_active')
        }
    }
    render(){
        return (
            <div className="topic_content_list">
                <div className="topic_list_tab">
                    <ul className="clearfix" onTouchStart={this.switchClass_fn}>
                        <li>
                            <a href="javascript:;" className="switchClass_active">
                                推荐
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                最新
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                最热
                            </a>
                        </li>
                    </ul>
                </div>

                {
                    this.props.list.map((item,index)=>{
                        return(
                            <div className="topic_list_item clearfix" key={index}>
                                <a href={item.link}>
                                    <div className="topic_item_left">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="topic_item_right">
                                        <h3>{item.title}</h3>
                                        <p>
                                            {item.detail}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default TopicListComp
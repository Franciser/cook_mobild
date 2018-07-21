import React from "react";
import "./LessonFreeComp.less"
class LessonFreeComp extends React.Component{
    render(){
        return (
            <div className="lesson_content_free">
                <div className="lesson_free_top clearfix">
                    <div className="lesson_free_top_left">
                        <h2>免费课程</h2>
                    </div>
                    <div className="lesson_free_top_right">
                        <a href="javascript:;">查看更多</a>
                    </div>
                </div>
               { this.props.lesson_free.map((item,index)=>{
                    return(
                        <div className="lesson_free_bottom clearfix" key={index}>
                            <div className="free_bottom_left">
                                <div className="free_img">
                                    <a href={item.left_link}>
                                        <img src={item.left_img} alt="" />
                                    </a>
                                </div>
                                <h3>{item.left_title}</h3>
                                <div className="author_info">
                                    <img src={item.left_authorImg} alt="" />
                                    <span>{item.left_authorName}</span>
                                    <p>{item.left_date}</p>
                                </div>
                            </div>
                            <div className="free_bottom_right">
                                <div className="free_img">
                                    <a href={item.right_link}>
                                        <img src={item.right_img} alt="" />
                                    </a>
                                </div>
                                <h3>{item.right_title}</h3>
                                <div className="author_info">
                                    <img src={item.right_authorImg} alt="" />
                                    <span>{item.right_authorName}</span>
                                    <p>{item.right_date}</p>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
            </div>
        )
    }
}
export default LessonFreeComp
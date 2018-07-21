import React from "react";
import "./LessonRecommendComp.less"
class LessonRecommendComp extends React.Component{
    render(){
        return (
            <div className="lesson_content_recommend">
                <div className="lesson_recommend_top clearfix">
                    <div className="lesson_recommend_top_left">
                        <h2>推荐课程</h2>
                    </div>
                    <div className="lesson_recommend_top_right">
                        <a href="javascript:;">查看更多</a>
                    </div>
                </div>
                <div className="lesson_recommend_bottom">
                    <div className="lesson_recommend_carousel">
                        <ul className="lesson_recommend_carousel_wrap clearfix" >
                            {
                                this.props.lesson_recommend.map((item, index) => {
                                    return (
                                        <li className="clearfix" key={index}>
                                                <div className="carousel_img">
                                                    <a href={item.link}>
                                                        <img src={item.img} alt="" />
                                                    </a>
                                                </div>
                                                <h3>{item.title}</h3>
                                                <div className="author_info">
                                                    <img src={item.authorImg} alt="" />
                                                    <span>{item.authorName}</span>
                                                </div>
                                        </li>
                                    )
                                })
                            }



                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default LessonRecommendComp
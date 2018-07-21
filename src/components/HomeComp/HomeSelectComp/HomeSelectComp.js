import React from "react";
import "./HomeSelectComp.less"
class HomeSelectComp extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    
    
    render(){
       
        return (
            <div className="home_content_select">
                <div className="home_select_top clearfix">
                    <div className="home_select_top_left">
                        <h2>精选专辑</h2>
                    </div>
                    <div className="home_select_top_right">
                        <a href="javascript:;">查看更多</a>
                    </div>
                </div>
                <div className="home_select_bottom">
                    {
                        this.props.select.map((item,index)=>{
                            return(
                                <div className="home_select_item" key={index}>
                                    <a href={item.link}>
                                        <img src={item.img} alt="" />
                                        <div className="select_item_title">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className="select_author_info">
                                            <img src={item.authorImg} alt="" />
                                            <span>{item.authorName}</span>
                                            <span>{item.detail}</span>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}
export default HomeSelectComp
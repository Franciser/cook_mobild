import React from "react";
import "./FoodDetailContentComp.less"
class FoodDetailContentComp extends React.Component{
    render(){
        return (
            <div className="foodDetail_content_wrap">
                {
                    this.props.data.map((item,index)=>{
                        return(
                            <div className="foodDetail_content_item_wrap" key={index}>
                                <div className="foodDetail_content_img">
                                    <img src={item.bigImg} alt="" />
                                </div>
                                <div className="foodDetail_content_title">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="foodDetail_content_author">
                                    <img src={item.authorImg} alt="" />
                                    <p>{item.authorName}</p>
                                </div>
                                <div className="foodDetail_content_introduce">
                                    <p>{item.introduce}</p>
                                </div>
                                <div className="foodDetail_content_materia">
                                    <div className="clearfix foodDetail_materia_title">
                                        <div className="foodDetail_materia_title_left">
                                            <h2>需要材料</h2>
                                        </div>
                                        <div className="foodDetail_materia_title_right">
                                            <h2>加入收藏</h2>
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            item.materia.map((m,n)=>{
                                                return (
                                                    <li className="clearfix" key={n}>
                                                        <div className="foodDetail_materia_left">
                                                            {m.name}
                                                        </div>
                                                        <div className="foodDetail_materia_right">
                                                            {m.num}
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                                <div className="foodDetail_content_step">
                                    <div className="foodDetail_step_title">
                                        <h2>烹饪步骤</h2>
                                    </div>
                                    <ul>
                                        {
                                            item.step.map((j,k)=>{
                                                return(
                                                    <li className="clearfix" key={k}>
                                                        <div className="foodDetail_step_left">
                                                            <h3>{k+1}</h3>
                                                        </div>
                                                        <div className="foodDetail_step_right">
                                                            <div className="foodDetail_step_img">
                                                                <img src={j.img} alt="" />
                                                            </div>
                                                            <p>{j.introduce}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                       

                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}
export default FoodDetailContentComp
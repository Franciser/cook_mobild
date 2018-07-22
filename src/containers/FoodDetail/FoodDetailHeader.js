import React from "react";
import "./FoodDetailHeader.less"
class FoodDetailHeader extends React.Component{
    goBack=()=>{
        window.history.back();
    }
    render(){
        return (
            <div className="foodDetail_header">
                <div className="foodDetail_header_left" onTouchStart={this.goBack}>
                    <i className="iconfont icon-zuojiantou"></i>
                </div>
                <div className="foodDetail_header_right">
                    <i className="iconfont icon-iconfontzhizuobiaozhun20"></i>
                </div>
            </div>
        )
    }
}
export default FoodDetailHeader
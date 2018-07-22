import React from "react";
import "./FoodDetailContent.less"
import "../../components/FoodDetailContentComp/FoodDetailContentComp"
import FoodDetailContentComp from "../../components/FoodDetailContentComp/FoodDetailContentComp";
class FoodDetailContent extends React.Component{
    render(){
        return (
            <div className="foodDetail_content">
                <FoodDetailContentComp data={this.props.data}/>
            </div>
        )
    }
}
export default FoodDetailContent
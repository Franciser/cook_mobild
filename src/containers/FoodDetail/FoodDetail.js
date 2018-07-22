import React from "react";
import "./FoodDetail.less"
import "./FoodDetailHeader"
import FoodDetailHeader from "./FoodDetailHeader";
import FoodDetailContent from "./FoodDetailContent";
class FoodDetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        fetch('./data/food_detail.json')
        .then(res=>res.json())
        .then(data=>{
            //过滤数据中与路由返回的对应id的数据
            var nowData=data.filter((item,index)=>{
                return item.id===parseInt(this.props.match.params.id);
            })
            this.setState({
                data: nowData,
            })
        })
        .catch(e=>console.log('error',e))
    }
    render(){
        // console.log(this.props)
        // console.log(this.state)
        return (
            <div className="foodDetail_wrap">
                <FoodDetailHeader/>
                <FoodDetailContent data={this.state.data}/>
            </div>
        )
    }
}
export default FoodDetail
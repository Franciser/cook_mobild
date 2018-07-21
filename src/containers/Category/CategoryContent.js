import React from "react";
import "./CategoryContent.less"
import CategoryContentComp from "../../components/CategoryComp/CategoryContentComp/CategoryContentComp"
class CategoryContent extends React.Component{
    render(){
        return (
            <div className="category_content">
                <CategoryContentComp/>
            </div>
        )
    }
}
export default CategoryContent
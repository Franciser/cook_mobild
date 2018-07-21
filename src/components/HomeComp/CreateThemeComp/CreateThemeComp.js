import React from "react";
import "./CreateThemeComp.less"
class CreateThemeComp extends React.Component{
    render(){
        return (
            <div className="createTheme_wrap">
                <div className="createTheme_arrow"></div>
                <div className="createTheme_box clearfix">
                    <div className="createTheme_box_left">
                        <div>
                            <i className="iconfont icon-tupian"></i>
                        </div>
                        <span>写菜谱</span>

                    </div>
                    <div className="createTheme_box_right">
                        <div>
                            <i className="iconfont icon-bianji"></i>
                        </div>
                        <span>草稿箱</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateThemeComp
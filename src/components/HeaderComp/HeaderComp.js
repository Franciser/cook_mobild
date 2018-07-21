import React from "react";
import "./HeaderComp.less"
class HeaderComp extends React.Component{
    
    
    render(){
        // console.log(this.props.loginReducer.isLogin)
        return (
            <div className="header_wrap clearfix">
            {
                    this.props.type==="home"?
                        <div className="header_left" onTouchStart={this.props.showCreate_fn}>
                            <i className="iconfont icon--jiahao"></i>
                        </div>
                        :
                        ""
            }
                <div className={this.props.type === "home" ? "header_middle type_home" : 'header_middle type_other'} onTouchStart={this.props.showSearchPanel_fn}>
                        <i className="iconfont icon-sousuo"></i>
                    <input type="search" disabled="disabled" placeholder={this.props.searchHint}/>
                    </div>
            {
                this.props.type === "home" ?
                    <div className="header_right"  onTouchStart={this.props.loginReducer.isLogin==="unLogin"?this.props.showLoginPanel_fn:this.props.showMessage_fn}>
                            <i className="iconfont icon-quanju_zhanneixiaoxi"></i>
                    </div>
                    :
                    ""
            }
                        
            
                
            </div>
        )
    }
}
export default HeaderComp
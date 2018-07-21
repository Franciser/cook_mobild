import React from "react";
import "./SearchPanelComp.less"
class SearchPanelComp extends React.Component{

    switchClass_fn=(e)=>{
        if(e.target.nodeName==="A"){
            var aNodes=e.target.parentNode.parentNode.getElementsByTagName('a')
            for(var i=0;i<aNodes.length;i++){
                aNodes[i].classList.remove('switchClass_active');
            }
            e.target.classList.add('switchClass_active')
        }
    }
    
    hiddenSearchPanel=(e)=>{
        this.props.hiddenSearchPanel_fn();
    }
    componentDidMount(){
        this.refs.inputBox.focus();
    }
    render(){
        return (
            <div className="searchPanel_wrap">
                <div className="searchPanel_header clearfix">
                    <div className="searchPanel_header_left">
                        <i className="iconfont icon-sousuo"></i>
                        <input type="search" placeholder="搜索菜谱" ref="inputBox"/>
                    </div>
                    <div className="searchPanel_header_right" onClick={this.hiddenSearchPanel}>
                        取消
                    </div>

                </div>
                <div className="searchPanel_tab">
                    <ul className="clearfix" onTouchStart={this.switchClass_fn}>
                        <li>
                            <a href="javascript:;" className="switchClass_active">
                                搜菜谱
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                搜厨友
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                搜课程
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="searchPanel_history">
                    <div className="searchPanel_search_history">
                        <div className="searchPanel_history_title clearfix">
                            <div className="searchPanel_title_left">
                                <i className="iconfont icon-lishixiao"></i>
                                <span>历史搜索</span>
                            </div>
                            <div className="searchPanel_title_right" onTouchStart={this.props.clearHistory_fn}>
                                <i className="iconfont icon-iconset0213"></i>
                                <span>清空</span>
                            </div>
                        </div>
                        <div className="searchPanel_history_option">
                           {
                               this.props.search_history.map((item,index)=>{
                                   return(
                                       <div key={index}>
                                        {item}
                                       </div>
                                   )
                               })
                           }
                        </div>
                    </div>
                    <div className="searchPanel_view_history">
                        <div className="searchPanel_history_title clearfix">
                            <div className="searchPanel_title_left">
                                <i className="iconfont icon-lishixiao"></i>
                                <span>浏览历史</span>
                            </div>
                            <div className="searchPanel_title_right" onTouchStart={this.props.clearView_fn}>
                                <i className="iconfont icon-iconset0213"></i>
                                <span>清空</span>
                            </div>
                        </div>
                        <div className="searchPanel_history_list">
                            {
                                this.props.view_history.map((item,index)=>{
                                    return(
                                        <div className="searchPanel_list_item clearfix" key={index}>
                                            <div className="searchPanel_list_item_left">
                                                <a href={item.link}>
                                                    <img src={item.img} alt="" />
                                                </a>
                                            </div>
                                            <div className="searchPanel_list_item_right">
                                                <p>{item.title}</p>
                                                <div>{item.type}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchPanelComp
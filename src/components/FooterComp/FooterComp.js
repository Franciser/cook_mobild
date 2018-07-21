import React from "react";
import "./FooterComp.less"
import {NavLink} from "react-router-dom"
class FooterComp extends React.Component{
    render(){
        return (
            <div className="footer_wrap">
                <nav className="footer_nav">
                    <ul className="footer_nav_wrap clearfix">
                        <li className="footer_nav_item">
                            <NavLink to="/" exact activeClassName="nav_active">
                                <i className="iconfont icon-ziyuan"></i>
                                <p>首页</p>
                            </NavLink>
                        </li>
                        <li className="footer_nav_item">
                            <NavLink to="/category" activeClassName="nav_active">
                                <i className="iconfont icon-fenlei"></i>
                                <p>分类</p>
                            </NavLink>
                        </li>
                        <li className="footer_nav_item">
                            <NavLink to="/lesson" activeClassName="nav_active">
                                <i className="iconfont icon-beikejiaoan"></i>
                                <p>课堂</p>
                            </NavLink>
                        </li>
                        <li className="footer_nav_item">
                            <NavLink to="/topic" activeClassName="nav_active">
                                <i className="iconfont icon-quanzi1"></i>
                                <p>食话</p>
                            </NavLink>
                        </li>
                        <li className="footer_nav_item">
                            <NavLink to="/my" activeClassName="nav_active">
                                <i className="iconfont icon-wode3"></i>
                                <p>我的</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default FooterComp
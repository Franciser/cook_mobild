import React from "react";
import "./CategoryContentComp.less"
class CategoryContentComp extends React.Component{
    render(){
        return (
            <div className="category_content_wrap">
                <section>
                    <h1>视频菜谱</h1>
                    <div>
                        <a href="javascript:;">
                            <img src="../../../img/category_01.jpg" alt=""/>
                            <div className="category_info">
                                <i className="iconfont icon-shipin"></i>
                                <span>视频菜谱</span>
                                <p>大厨视频传授私房秘诀</p>
                            </div>
                        </a>
                    </div>
                </section>
                <section>
                    <h1>推荐菜谱</h1>
                    <div className="clearfix">
                        <div>
                            <a href="javascript:;">
                                <img src="../../../img/category_02.jpg" alt="" />
                                <div className="category_info">
                                    <i className="iconfont icon-remen"></i>
                                    <span>热门菜谱</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <img src="../../../img/category_03.jpg" alt="" />
                                <div className="category_info">
                                    <i className="iconfont icon-shizhongclock77"></i>
                                    <span>最新菜谱</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <h1>热门分类</h1>
                    <div className="clearfix">
                        <div>
                            <a href="javascript:;">
                                <img src="../../../img/category_04.jpg" alt="" />
                                <h3>早餐</h3>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <img src="../../../img/category_05.jpg" alt="" />
                                <h3>烘焙</h3>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <img src="../../../img/category_06.jpg" alt="" />
                                <h3>辅食</h3>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <img src="../../../img/category_07.jpg" alt="" />
                                <h3>养生</h3>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default CategoryContentComp
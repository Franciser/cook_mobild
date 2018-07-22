import React from "react";
import "./TopicBannerComp.less"
var timer = null;
//定义手指一开始的纵向位置
var startY = 0;
//定义手指横向移动了多少距离
var disX = 0;
//定义手指横向移动了多少距离
var disY = 0;
//判断是否是在横向方向移动是否滑动轮播
var isX = true;
//判断是否是第一次滑动
var isFirst = true;
class TopicBannerComp extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            length: 0,
            index: 1,
            point_key: 0,
            startX: 0,
            disX: 0,
            elementX: 0,
            carousel_width: 0,
            scrollNow: false,
            needTransition: false,
        }
    }


    banner_touchStart_fn = (e) => {
        clearInterval(timer);
        this.setState({
            needTransition: false,
            startX: e.changedTouches[0].clientX,
            disX: 0,
        })

        startY = e.changedTouches[0].clientY;
        if (this.state.index === 0) {
            this.setState({
                needTransition: false,
                index: this.state.length - 2,
                elementX: -(this.state.length - 2) * this.state.carousel_width,
            })
        }

        if (this.state.index === this.state.length - 1) {
            this.setState({
                needTransition: false,
                index: 1,
                elementX: -1 * this.state.carousel_width,
            })
        }

        //用来控制鼠标向下滑动防抖动，每次都初始化为true
        isX = true;
        isFirst = true;
    }

    banner_touchMove_fn = (e) => {
        //如果是在纵向方向移动就直接返回
        if (!isX) {
            //让第一次开关变为false
            isFirst = false;
            return;
        }

        //计算手指横向移动的距离
        disX = e.changedTouches[0].clientX - this.state.startX
        //计算手指纵向移动距离
        disY = e.changedTouches[0].clientY - startY

        if (isFirst) {
            isFirst = false;
            //判断纵向距离和横向距离以确定是否是在横向滑动
            if (Math.abs(disY) > Math.abs(disX)) {
                isX = false;
                //如果不是横向滑动，马上返回
                return;
            }else{
                //横向滑动阻止默认事件，页面不会上下滚动
                e.preventDefault();
                
            }
        }
        
        this.setState({
            scrollNow: true,
            disX: e.changedTouches[0].clientX - this.state.startX,
        })
    }

    banner_touchEnd_fn = (e) => {
        this.setState({
            needTransition: true,
        })
        //如果滑动距离大于宽度的5分之1并且是从左往右滑动，
        if (Math.abs(this.state.disX) > this.state.carousel_width / 5 && this.state.disX > 0) {
            this.setState({
                index: this.state.index - 1,
                point_key: this.state.point_key - 1 < 0 ? this.state.length - 3 : this.state.point_key - 1,
                scrollNow: false,
                elementX: -(this.state.index - 1) * this.state.carousel_width,
            })

        }
        //如果滑动距离大于宽度的5分之1并且是从右往左滑动，
        else if (Math.abs(this.state.disX) > this.state.carousel_width / 5 && this.state.disX < 0) {
            this.setState({
                index: this.state.index + 1,
                point_key: this.state.point_key + 1 > this.state.length - 3 ? 0 : this.state.point_key + 1,
                scrollNow: false,
                elementX: -(this.state.index + 1) * this.state.carousel_width,
            })


        }
        //如果滑动距离没大于5分之1，那就回到原来位置
        else if (Math.abs(this.state.disX) <= this.state.carousel_width / 5) {
            this.setState({
                scrollNow: false,
                elementX: -this.state.index * this.state.carousel_width,
            })
        }

        // timer = setInterval(this.autoPlay, 1000)
    }



    //自动轮播函数
    autoPlay = () => {


        if (this.state.index === this.state.length - 1) {
            this.setState({
                needTransition: false,
                index: 1,
                elementX: -1 * this.state.carousel_width,
            })
        }

        //先让零界点图片回到应该的位置再执行下一次轮播
        setTimeout(function () {
            this.setState({
                needTransition: true,
                index: this.state.index + 1,
                point_key: this.state.point_key + 1 > this.state.length - 3 ? 0 : this.state.point_key + 1,
                elementX: -(this.state.index + 1) * this.state.carousel_width,
            })
        }.bind(this), 20)


    }
    componentDidMount() {
        this.setState({
            elementX: -document.documentElement.offsetWidth,
            carousel_width: document.documentElement.offsetWidth,
            length: this.props.banner.length,
        })

        // timer = setInterval(this.autoPlay, 1000)
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    
    render(){
        return (
            <div className="topic_content_banner">
                <div className="topic_banner_carousel_wrap" onTouchStart={this.banner_touchStart_fn} onTouchMove={this.banner_touchMove_fn} onTouchEnd={this.banner_touchEnd_fn}>
                    <ul className="topic_banner_carousel clearfix" style={{ transform: this.state.scrollNow ? "translateX(" + (this.state.elementX + this.state.disX) + "px)" : "translateX(" + (-(this.state.index) * this.state.carousel_width) + "px)", transition: this.state.needTransition ? "transform .3s" : 'transform 0s' }}>
                        {
                            this.props.banner.map((item, index) => {
                                return (
                                    <li className="clearfix" key={index}>
                                        <a href={item.link}>
                                            <img src={item.img} alt="" />
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <div className="topic_banner_points_wrap">
                        {
                            this.props.banner.map((item, index) => {

                                if (index <= this.props.banner.length - 3) {
                                    return (
                                        <span key={index} className={this.state.point_key === index ? 'topic_banner_carousel_active' : ''}></span>
                                    )
                                }

                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default TopicBannerComp
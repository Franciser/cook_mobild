import React from "react";
import "./HomeBannerComp.less"
var timer = null;
var scrollTimer=null;
var isStop=true;
class HomeBannerComp extends React.Component{
    
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
            needTransition: true,
        }
    }
    

    banner_touchStart_fn = (e) => {
        clearInterval(timer);
        this.setState({
            needTransition: false,
            startX: e.changedTouches[0].clientX,
            disX: 0,
        })

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

    }

    banner_touchMove_fn = (e) => {
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
                point_key: this.state.point_key-1<0?this.state.length-3:this.state.point_key-1,
                scrollNow: false,
                elementX: -(this.state.index - 1) * this.state.carousel_width,
            })

        }
        //如果滑动距离大于宽度的5分之1并且是从右往左滑动，
        else if (Math.abs(this.state.disX) > this.state.carousel_width / 5 && this.state.disX < 0) {
            this.setState({
                index: this.state.index + 1,
                point_key: this.state.point_key + 1 > this.state.length - 3?0:this.state.point_key+1,
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
    autoPlay=()=>{
    

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
            index: this.state.index+1,
            point_key: this.state.point_key + 1 > this.state.length - 3 ? 0 : this.state.point_key + 1,
            elementX: -(this.state.index+1) * this.state.carousel_width,
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
        // console.log(this.state.elementX)
        // console.log(this.state.point_key)
        return (
            <div className="home_content_banner">
                    <div className="banner_carousel_wrap" onTouchStart={this.banner_touchStart_fn} onTouchMove={this.banner_touchMove_fn} onTouchEnd={this.banner_touchEnd_fn}>
                        <ul className="banner_carousel clearfix" style={{ transform: this.state.scrollNow ? "translateX(" + (this.state.elementX + this.state.disX) + "px)" : "translateX(" + (-(this.state.index) * this.state.carousel_width) + "px)", transition: this.state.needTransition ? "transform .3s" : 'transform 0s' }}>
                            {
                                this.props.banner.map((item, index) => {
                                    return (
                                        <li className="clearfix" key={index}>
                                           <a href={item.link}>
                                            <img src={item.img} alt=""/>
                                           </a>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                        <div className="banner_points_wrap">
                            {
                                this.props.banner.map((item, index) => {

                                    if (index <= this.props.banner.length - 3) {
                                        return (
                                            <span key={index} className={this.state.point_key === index ? 'banner_carousel_active' : ''}></span>
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
export default HomeBannerComp
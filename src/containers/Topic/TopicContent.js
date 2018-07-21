import React from "react";
import "./TopicContent.less"
import TopicHeaderComp from "../../components/TopicComp/TopicHeaderComp/TopicHeaderComp"
import TopicBannerComp from "../../components/TopicComp/TopicBannerComp/TopicBannerComp"
import TopicListComp from "../../components/TopicComp/TopicListComp/TopicListComp"
class TopicContent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            banner: [
                {
                    img: './img/topicBanner_03.jpg',
                    link: 'javascript:;',
                },
                {
                    img: './img/topicBanner_01.jpg',
                    link: 'javascript:;',
                },
                {
                    img: './img/topicBanner_02.jpg',
                    link: 'javascript:;',
                },
                {
                    img: './img/topicBanner_03.jpg',
                    link: 'javascript:;',
                },
                {
                    img: './img/topicBanner_01.jpg',
                    link: 'javascript:;',
                },
                
            ],
            list:[
                {
                    link:'javascript:;',
                    img:'./img/topicList_01.jpg',
                    title:'#方便面的新奇吃法#',
                    detail:'厨友们偶尔也会想吃吃方便面的吧？不是泡就是煮，未免有些单调乏味',
                },
                {
                    link:'javascript:;',
                    img:'./img/topicList_02.jpg',
                    title:'#冷饮的诱惑#',
                    detail:'炎夏是热的海洋，也是冰的天堂，炎炎烈日之下，似乎很少有人能抵挡得住冰莹冷饮的诱惑',
                },
                {
                    link:'javascript:;',
                    img:'./img/topicList_03.jpg',
                    title:'#美味的夏日沙拉#',
                    detail:'沙拉清淡爽口，是炎热夏季不错的选择，健康方便的同时还有清脂的功效',
                },
                {
                    link:'javascript:;',
                    img:'./img/topicList_01.jpg',
                    title:'#方便面的新奇吃法#',
                    detail:'厨友们偶尔也会想吃吃方便面的吧？不是泡就是煮，未免有些单调乏味',
                },
                {
                    link:'javascript:;',
                    img:'./img/topicList_02.jpg',
                    title:'#冷饮的诱惑#',
                    detail:'炎夏是热的海洋，也是冰的天堂，炎炎烈日之下，似乎很少有人能抵挡得住冰莹冷饮的诱惑',
                },
                {
                    link:'javascript:;',
                    img:'./img/topicList_03.jpg',
                    title:'#美味的夏日沙拉#',
                    detail:'沙拉清淡爽口，是炎热夏季不错的选择，健康方便的同时还有清脂的功效',
                },
            ]
        }
    }
    render(){
        return (
            <div className="topic_content">
                <TopicHeaderComp/>
                <TopicBannerComp banner={this.state.banner}/>
                <TopicListComp list={this.state.list}/>
            </div>
        )
    }
}
export default TopicContent
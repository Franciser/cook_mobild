import React from "react";
import "./HomeContent.less"
import HomeNavComp from "../../components/HomeComp/HomeNavComp/HomeNavComp"
import HomeRecommendComp from "../../components/HomeComp/HomeRecommendComp/HomeRecommendComp"
import HomeCookBookComp from "../../components/HomeComp/HomeCookBookComp/HomeCookBookComp"
import HomeBannerComp from "../../components/HomeComp/HomeBannerComp/HomeBannerComp"
import HomeSelectComp from "../../components/HomeComp/HomeSelectComp/HomeSelectComp"

class HomeContent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            recommend: [
                { 
                    left_img: './img/06.jpg',
                    left_link: 'food/1', 
                    left_title: '蒜酱茄子',
                    left_authorImg: './img/author_01.jpg',
                    left_authorName:'千语食记',
                    right_img: './img/07.jpg',
                    right_link: 'food/2', 
                    right_title: '法式乳酪月饼',
                    right_authorImg: './img/author_02.jpg',
                    right_authorName:'尖尖_实验室',
                },
                { 
                    left_img: './img/02.jpg',
                    left_link: 'food/1', 
                    left_title: '凯撒软妹子',
                    left_authorImg: './img/author_01.jpg',
                    left_authorName:'千语食记',
                    right_img: './img/03.jpg',
                    right_link: 'food/2', 
                    right_title: '纸包烤葱油鸡',
                    right_authorImg: './img/author_02.jpg',
                    right_authorName:'尖尖_实验室',
                },
                { 
                    left_img: './img/04.jpg',
                    left_link: 'food/2', 
                    left_title: '微波炉土豆',
                    left_authorImg: './img/author_01.jpg',
                    left_authorName:'千语食记',
                    right_img: './img/05.jpg',
                    right_link: 'food/1', 
                    right_title: '糯米烧卖',
                    right_authorImg: './img/author_02.jpg',
                    right_authorName:'尖尖_实验室',
                },
                {
                    left_img: './img/06.jpg',
                    left_link: 'food/1',
                    left_title: '蒜酱茄子',
                    left_authorImg: './img/author_01.jpg',
                    left_authorName: '千语食记',
                    right_img: './img/07.jpg',
                    right_link: 'food/2',
                    right_title: '法式乳酪月饼',
                    right_authorImg: './img/author_02.jpg',
                    right_authorName: '尖尖_实验室',
                },
                {
                    left_img: './img/02.jpg',
                    left_link: 'food/1',
                    left_title: '凯撒软妹子',
                    left_authorImg: './img/author_01.jpg',
                    left_authorName: '千语食记',
                    right_img: './img/03.jpg',
                    right_link: 'food/2',
                    right_title: '纸包烤葱油鸡',
                    right_authorImg: './img/author_02.jpg',
                    right_authorName: '尖尖_实验室',
                },
            ],
            cookBook: [
                { 
                    left_img: './img/06.jpg',
                    left_link: 'food/1', 
                    left_title: '蒜酱茄子',
                    left_authorImg: './img/author_01.jpg',
                    left_authorName:'千语食记',
                    right_img: './img/07.jpg',
                    right_link: 'food/2', 
                    right_title: '法式乳酪月饼',
                    right_authorImg: './img/author_02.jpg',
                    right_authorName:'尖尖_实验室',
                },
                {
                    left_img: './img/04.jpg',
                    left_link: 'food/1',
                    left_title: '微波炉土豆',
                    left_authorImg: './img/author_01.jpg',
                    left_authorName: '千语食记',
                    right_img: './img/05.jpg',
                    right_link: 'food/2',
                    right_title: '糯米烧卖',
                    right_authorImg: './img/author_02.jpg',
                    right_authorName: '尖尖_实验室',
                },
                { 
                    left_img: './img/02.jpg',
                    left_link: 'food/1', 
                    left_title: '凯撒软妹子',
                    left_authorImg: './img/author_01.jpg',
                    left_authorName:'千语食记',
                    right_img: './img/03.jpg',
                    right_link: 'food/2', 
                    right_title: '纸包烤葱油鸡',
                    right_authorImg: './img/author_02.jpg',
                    right_authorName:'尖尖_实验室',
                },
                
                {
                    left_img: './img/06.jpg',
                    left_link: 'food/1',
                    left_title: '蒜酱茄子',
                    left_authorImg: './img/author_01.jpg',
                    left_authorName: '千语食记',
                    right_img: './img/07.jpg',
                    right_link: 'food/2',
                    right_title: '法式乳酪月饼',
                    right_authorImg: './img/author_02.jpg',
                    right_authorName: '尖尖_实验室',
                },
                {
                    left_img: './img/04.jpg',
                    left_link: 'food/1',
                    left_title: '微波炉土豆',
                    left_authorImg: './img/author_01.jpg',
                    left_authorName: '千语食记',
                    right_img: './img/05.jpg',
                    right_link: 'food/2',
                    right_title: '糯米烧卖',
                    right_authorImg: './img/author_02.jpg',
                    right_authorName: '尖尖_实验室',
                },
            ],
            banner:[
                {
                    img: './img/banner_05.jpg',
                    link: 'food/1',
                },
                {
                    img:'./img/banner_01.jpg',
                    link:'food/2',
                },
                {
                    img:'./img/banner_02.jpg',
                    link:'food/1',
                },
                {
                    img:'./img/banner_03.jpg',
                    link:'food/2',
                },
                {
                    img:'./img/banner_04.jpg',
                    link:'food/1',
                },
                {
                    img:'./img/banner_05.jpg',
                    link:'food/2',
                },
                {
                    img: './img/banner_01.jpg',
                    link: 'food/1',
                },
            ],
            select:[
                {
                    link:'food/1',
                    img:"./img/select_01.jpg",
                    title:"烘焙从蛋挞开始",
                    authorImg:"./img/author_01.jpg",
                    authorName:"千语食记",
                    detail:"共14道菜"
                },
                {
                    link:'food/2',
                    img:"./img/select_02.jpg",
                    title:"便当也这么美味",
                    authorImg:"./img/author_02.jpg",
                    authorName:"尖尖_实验室",
                    detail:"共10道菜"
                },
                {
                    link:'food/1',
                    img:"./img/select_03.jpg",
                    title:"小孩大人都沉迷的嘎嘣脆",
                    authorImg:"./img/author_01.jpg",
                    authorName:"千语食记",
                    detail:"共12道菜"
                },
            ]
        }
    }
    
    render(){
        return (
            <div className="home_content">
                <HomeNavComp/>
                <HomeBannerComp banner={this.state.banner} />
                <HomeRecommendComp recommend={this.state.recommend}/>
                <HomeCookBookComp cookBook={this.state.cookBook}/>
                <HomeSelectComp select={this.state.select}/>
            </div>
        )
    }
}



export default HomeContent
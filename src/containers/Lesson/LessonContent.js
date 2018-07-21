import React from "react";
import "./LessonContent.less"
import LessonRecommendComp from "../../components/LessonComp/LessonRecommendComp/LessonRecommendComp"
import LessonFreeComp from "../../components/LessonComp/LessonFreeComp/LessonFreeComp"
import LessonNavComp from "../../components/LessonComp/LessonNavComp/LessonNavComp"
class LessonContent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lesson_recommend: [
                {
                    img: '../../../img/lessonRecommend_01.jpg',
                    link: 'javascript:;',
                    title: '精致甜美餐食',
                    authorImg: '../../../img/author_01.jpg',
                    authorName: '魔幻厨房',
                    
                },
                {
                    img: '../../../img/lessonRecommend_02.jpg',
                    link: 'javascript:;',
                    title: '给早餐营养',
                    authorImg: '../../../img/author_02.jpg',
                    authorName: '舌尖的美味',
                    
                },
                {
                    img: '../../../img/lessonRecommend_03.jpg',
                    link: 'javascript:;',
                    title: '绝美的搭配',
                    authorImg: '../../../img/author_01.jpg',
                    authorName: '魔幻厨房',
                   
                },
                {
                    img: '../../../img/lessonRecommend_04.jpg',
                    link: 'javascript:;',
                    title: '饭后小点心',
                    authorImg: '../../../img/author_02.jpg',
                    authorName: '舌尖的美味',
                   
                },
                {
                    img: '../../../img/lessonRecommend_05.jpg',
                    link: 'javascript:;',
                    title: '妹子专属甜点',
                    authorImg: '../../../img/author_01.jpg',
                    authorName: '魔幻厨房',
                   
                },
            ],
            lesson_free: [
                {
                    left_img: '../../../img/lessonFree_01.jpg',
                    left_link: 'javascript:;',
                    left_title: '乳酪面包',
                    left_authorImg: '../../../img/author_01.jpg',
                    left_authorName: '千语食记',
                    left_date:'5月16日 周六 14:30开始',
                    right_img: '../../../img/lessonFree_02.jpg',
                    right_link: 'javascript:;',
                    right_title: '花样甜点',
                    right_authorImg: '../../../img/author_02.jpg',
                    right_authorName: '尖尖_实验室',
                    right_date: '5月17日 周日 10:30开始',
                },
            ]
        }
    }
    render(){
        return (
            <div className="lesson_content">
                <LessonNavComp/>
                <LessonRecommendComp lesson_recommend={this.state.lesson_recommend}/>
                <LessonFreeComp lesson_free={this.state.lesson_free}/>
            </div>
        )
    }
}
export default LessonContent
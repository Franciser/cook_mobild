import React from "react";
import "./Topic.less"
import TopicContent from "./TopicContent";
import Footer from "../Footer/Footer"
class Topic extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render(){
        return (
            <div className="topic_wrap">
                <TopicContent/>
                <Footer/>
            </div>
        )
    }
}
export default Topic
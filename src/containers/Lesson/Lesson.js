import React from "react";
import "./Lesson.less"
import LessonContent from "./LessonContent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import SearchPanel from "../SearchPanel/SearchPanel"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as types from "../../constants/actionTypes"
import * as showSearchPanel_action from "../../actions/showSearchPanel_action"
class Lesson extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            type: 'lesson',
            searchHint: '搜索 课程'
        }
    }

    showSearchPanel_fn = () => {
        this.props.showSearchPanelAction.showSearchPanel_action({
            type: types.SHOWSEARCHPANEL,
        })
    }
    hiddenSearchPanel_fn = () => {
        this.props.showSearchPanelAction.showSearchPanel_action({
            type: types.HIDDENSEARCHPANEL,
        })
    }
    
    render(){
        return (
            <div className="lesson_wrap">
                <Header type={this.state.type} searchHint={this.state.searchHint} showSearchPanel_fn={this.showSearchPanel_fn}/>
                <LessonContent/>
                <Footer/>
                <SearchPanel showSearchPanel={this.props.showSearchPanelReducer.showSearchPanel} hiddenSearchPanel_fn={this.hiddenSearchPanel_fn} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        showSearchPanelReducer: state.showSearchPanel_reducer,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        showSearchPanelAction: bindActionCreators(showSearchPanel_action, dispatch),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Lesson)
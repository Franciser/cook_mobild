import React from "react";
import "./SearchPanel.less"
import SearchPanelComp from "../../components/SearchPanelComp/SearchPanelComp"
class SearchPanel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search_history:['甜点'],
            view_history:[{img:'./img/01.jpg',link:'javascript:;',title:'精致甜品',type:'菜谱'}]
        }
    }

    clearHistory_fn=()=>{
        this.setState({
            search_history:[]
        })
    }
    clearView_fn=()=>{
        this.setState({
            view_history: []
        })
    }
    render(){
        // console.log(this.props)
        return (
            <div className={this.props.showSearchPanel===false?"searchPanel":'searchPanel searchPanel_active'}>
                <SearchPanelComp hiddenSearchPanel_fn={this.props.hiddenSearchPanel_fn} search_history={this.state.search_history} view_history={this.state.view_history} clearHistory_fn={this.clearHistory_fn} clearView_fn={this.clearView_fn}/>
            </div>
        )
    }
}
export default SearchPanel
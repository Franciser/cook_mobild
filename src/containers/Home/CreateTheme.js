import React from "react";
import "./CreateTheme.less"
import CreateThemeComp from "../../components/HomeComp/CreateThemeComp/CreateThemeComp"
class CreateTheme extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    
    render(){
        return (
            <div className={this.props.showCreate==="block"?"createTheme create_active":"createTheme"}>
                <CreateThemeComp stopCreateProp={this.props.stopCreateProp}/>
            </div>
        )
    }
}
export default CreateTheme
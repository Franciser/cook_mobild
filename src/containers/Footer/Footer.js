import React from "react";
import "./Footer.less"
import FooterComp from "../../components/FooterComp/FooterComp"
class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <FooterComp/>
            </div>
        )
    }
}
export default Footer
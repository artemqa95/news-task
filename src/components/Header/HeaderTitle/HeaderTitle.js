import React from "react";
import getText from "../../../text/translation";
import {connect} from "react-redux";

const HeaderTitle = props => {
    const text = getText().text
    return (
        <div className={'HeaderTitle'}>
            <h3>{text.title}</h3>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(HeaderTitle)
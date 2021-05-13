import React from "react";
import {changeLanguage} from "../../../../redux/actions";
import {connect} from "react-redux";

const HeaderMenuItem = props => {
    const classes = ['HeaderMenuItem']
    if (props.selector === props.language) classes.push('active')
    return <img
        src={props.src}
        alt={props.language}
        className={classes.join(' ')}
        onClick={() => props.changeLanguage(props.selector)}/>
}

function mapStateToProps(state) {
    return {
        language: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: language => dispatch(changeLanguage(language))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenuItem)
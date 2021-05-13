import getText from "../../../text/translation";
import React from "react";
import {connect} from "react-redux";

const HeaderDescription = props => {
    const text = getText().data.default
    return (
        <div className={'HeaderDescription'}>
            <a href={text['article-info_1_category_url']}>
                <img src={text['hero_1_image']} alt=""/>
                <h3>{text['hero_1_title']}</h3>
                <div>
                    <span>{text['article-info_1_date']}</span>
                    <span>{text['article-info_1_category']}</span>
                    <span>{text['article-info_1_byline']}</span>
                </div>
            </a>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(HeaderDescription)
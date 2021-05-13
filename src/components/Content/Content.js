import getText from "../../text/translation";
import {connect} from "react-redux";
import SelectField from "./SelectField/SelectField";

const Content = () => {
    const text = getText().data.default
    const paragraphs = Object.keys(text)
        .filter(key => key.match(/^p_/))
        .map((key,index) => <p key={index}>{text[key]}</p>)
    const BEGIN_PARAGRAPHS_COUNT = 5;
    return (
        <div className={'content'}>
            <div className={'content-paragraphs'}>
                {paragraphs.slice(0,BEGIN_PARAGRAPHS_COUNT)}
            </div>
            <SelectField/>
            <div className={'content-paragraphs'}>
                {paragraphs.slice(BEGIN_PARAGRAPHS_COUNT)}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(Content)
import getText from "../../../text/translation";
import {connect} from "react-redux";
import {useState} from "react";

const SelectField = () => {
    const textFromData = getText().data.default
    const text = getText().text;
    const [cityIndex, setCityIndex] = useState(null)

    const onChangeHandler = event => {
        setCityIndex(event.target.value)
    }


    const optionsLength = Number(textFromData['total_cities_1_value']);
    const options = new Array(optionsLength).fill('')
        .map((_, index) => {
            const value = textFromData[`compare-tabs_1_city_${index + 1}_name`]
            return (
                <option value={index + 1}
                        key={index + 1}
                >
                    {value}
                </option>
            )
        })


    return (
        <div className={'content-select'}>
            <div>
                {textFromData['compare-tabs_1_method']}
            </div>
            <div>
                {textFromData['compare-tabs_1_title']}
            </div>
            <select name="stat"
                    onChange={onChangeHandler}
            >
                {options}
            </select>
            {cityIndex ?
                <>
                    <div>
                        {text.selectFieldText1} <span>{textFromData[`compare-tabs_1_city_${cityIndex}_cigg`]}</span>
                    </div>
                    <div>
                        {text.selectFieldText2} <span>{textFromData[`compare-tabs_1_city_${cityIndex}_aqi`]}</span>
                    </div>
                </>
                : null
            }
        </div>
    )
}

function mapStateToProps(state)
{
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(SelectField)
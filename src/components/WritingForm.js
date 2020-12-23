import { useState } from 'react';
import Line from './Line';

function WritingForm(props) {

    const [line, setLine] = useState("");
    const [arthor, setArthor] = useState("");



    const [errors, setErrors] = useState({
        empty: undefined,
        length: undefined,
        endOfLine: undefined
    });

    const fieldsNotEmpty = () => line && arthor;

    const validLineLength = () => line.length < 100;

    const validEndOfLine = (text) =>

        text.slice(-1)[0] === "." ||
        text.slice(-1)[0] === "!" ||
        text.slice(-1)[0] === "?";



    const handleChange = function (event) {
        if (event.target.name === "line") {
            setLine(event.target.value);
        }
        if (event.target.name === "arthor") {
            setArthor(event.target.value);
        }
        const newErrors = {
            empty: !fieldsNotEmpty(),
            length: !validLineLength(),
            endOfLine: !validEndOfLine(event.target.value)
        };
        setErrors(newErrors);
    };

    const addLine = props.addLine;
    const lastLine = props.lastLine;
    const handleSubmit = function (event) {
        event.preventDefault();
        if (!errors.empty && !errors.length && !errors.endOfLine) {
            addLine(line, arthor);
            setLine("");
            setArthor("");
            setErrors({ empty: undefined, length: undefined, endOfLine: undefined });
        }
    };



    return (

        <form onSubmit={handleSubmit}>
            <Line />
            {errors.empty && <p>One or more fields are empty</p>}
            {errors.length && <p>line is too long</p>}
            {errors.endOfLine && <p>You need '.', '!' or '?' to complete the line.</p>}
            <input onChange={handleChange} value={line} type="text" name="line" placeholder="Type the next line!" />
            <input onChange={handleChange} value={arthor} type="text" name="arthor" placeholder="Type your name!" />
            <button type="submit" disabled={errors.empty || errors.length || errors.endOfLine}>Add your line to the story</button>
        </form>

    );
}

export default WritingForm;
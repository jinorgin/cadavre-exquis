import Line from "./Line"

function LineList(props){
    const {lines, mode} = props

    const parsedLines = lines.map(line => <Line line={line.line}/>)
    return(
        <ul>
            {parsedLines}
        </ul>

    )
}

export default LineList
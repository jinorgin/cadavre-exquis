function Line(props) {

    const { line, arthor } = props

    return (
        <li>
            <p>{line}</p>
            {arthor && <p>{arthor}</p>}
        </li>

    )
}

export default Line
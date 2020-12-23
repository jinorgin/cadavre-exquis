function ModeToggle(props){

    const {mode, switchMode} = props

    return(
        <div>
            {mode === "reading" && <button onClick={switchMode}>Switch to writing Mode</button>}
            {mode === "writing" && <button onClick={switchMode}>Switch to reading Mode</button>}
        </div>

    )
}

export default ModeToggle
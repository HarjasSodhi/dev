let Task = function (props) {
    return (
        <li>
            <span className="task">{props.taskVal}</span>
            <button onClick={()=>
                props.removeTaskFunction(props.taskVal)
            }>X</button>
        </li>
    )
}
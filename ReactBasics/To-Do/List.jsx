let List = function (prop) {
    return (
        <ul>
            {
                prop.taskData.map((e,index) => {//passing index for unique key error//index is always on second index of map function
                    return <Task removeTaskFunction={prop.removeTaskHandler} key={index} taskVal={e} />
                })
            }
        </ul>
    )
}
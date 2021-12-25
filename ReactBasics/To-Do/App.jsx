class App extends React.Component {

    state = {
        taskData: []
    }

    taskHandler = (value) => {
        let temparr = this.state.taskData;
        temparr.push(value);
        this.setState({
            taskData: temparr
        });
    }

    removeTask = (value) => {
        let filteredArr = this.state.taskData.filter((el) => {
            return el != value;
        })
        this.setState({
            taskData: filteredArr
        });
    }

    render() {

        return (
            <div>
                <Input taskHandlerFunction={this.taskHandler} />
                <List removeTaskHandler={this.removeTask} taskData={this.state.taskData} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />
    , document.querySelector("#root"))
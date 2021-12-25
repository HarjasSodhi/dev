/*
react is faster than dom O(n) time Complexity
dom O(n3)(uses dom tree)
react uses shadow dom and then maps the changes to dom tree
react is a library of js not a framework
react has reusable components.
reactJs functions are complicated and no one uses the anymore
so we will use JSX->extended JS ->html inside js
but we need to convert jsx to js as browser only understands js
to do this we will use a transpiler names babel
*/
// let App=function(){
//     return(<div>
//         <h1>Hello</h1>
//         <h3>bye</h3>
//         <p>fweferferegferfergregferf</p>
//     </div>
// );
// };

class App extends React.Component {
    render() {
        return (<div>
            <h1>Hello</h1>
            <h3>bye</h3>
            <p>fweferferegferfergregferf</p>
        </div>
        );
    }
}

class Counter extends React.Component {

    state = {
        currVal: 0
    }
    //state needs to be lowercase

    render() {
        return (<div>
            <button onClick={() => {
                this.setState({ currVal: this.state.currVal - 1 });
            }}
            >
                -
            </button>
            <p>{this.state.currVal}</p>
            <button onClick={() => {
                this.setState({ currVal: this.state.currVal + 1 });
            }}
            >
                +
            </button>
        </div>
        );
    }
}

// class components provide us feature of state(speacial data which is stored inside our component) and if we update/change that data then our component is rerendered  -->
// functional components dont have the feature of state
// state is always a object
// State value for each instance of the same component can be different
ReactDOM.render(<div>
    <Counter />
    <hr />
    <Counter />
    <hr />
    <Counter />
    <hr />
    <Counter />
    <hr />
</div>, document.querySelector("#root"));
// the above function has 3 instances of App component
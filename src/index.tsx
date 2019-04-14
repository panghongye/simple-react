import * as React from "./react"
import ReactDOM from "./react-dom"

class App extends React.Component {
  
  componentDidMount(){
    debugger
  }

  render() {
    return <h1>Hello,World!</h1>
  }
}

ReactDOM.render(<App />, document.getElementById("root"), null)

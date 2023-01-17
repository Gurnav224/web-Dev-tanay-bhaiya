





class LikeCounter extends React.Component {

  state = {counter:0}

  likeCounterBtn = () =>{
    this.setState({counter:this.state.counter+1})
  }

  
  render() {
    return (
      <div>
        <h1>State and Event Handling Demo</h1>
        <button onClick={this.likeCounterBtn}>❤️</button>
        <h2>Show Count {this.state.counter}</h2>
      </div>
        )
  }
}

ReactDOM.render(
  <LikeCounter />,
  document.getElementById('root')
);

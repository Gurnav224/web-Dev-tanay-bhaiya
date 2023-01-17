

class CheckCart extends React.Component{

    state = {counter:0}

    AddtoCart = () =>{
        this.setState({counter:this.state.counter+1})
    }


    RemovetoCart = () =>{
        this.setState({counter:this.state.counter-1})
    }


    render(){
        return (
            <div>
                <h1>Check your Cart</h1>
                <button onClick={this.AddtoCart}>ADD TO CART  </button>
                <button onClick={this.RemovetoCart}>REMOVE TO CART </button>
                 <h2>Cart Status <strong>{this.state.counter}</strong></h2>
            </div>
        )
    }
}


ReactDOM.render(
    <CheckCart/>
    ,
    document.getElementById('root')
)
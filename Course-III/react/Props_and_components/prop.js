

class SmallSmiley extends React.Component{
    render(){
        return (
            <div>
                <h1>
                <small>{this.props.smiley}</small>
                    {this.props.text}
                </h1>

            </div>
        )
    }
}





class Smiley extends React.Component{
    render() {
        return (
            <div>
                <SmallSmiley smiley={"😉"} text={"Happy"}  />
                <SmallSmiley smiley={"😉"}   text ={"Sad"} />
                <SmallSmiley smiley={"❤️"} text={"love"} />
                <SmallSmiley smiley={"🙃"}  text={"sily"} />
                <SmallSmiley smiley={"😶"} text={"speechless"} />
                <SmallSmiley smiley={"😈 "}  text={"Devilish"} />
            </div>
        )
    }
}


ReactDOM.render(
    <Smiley/>,
    document.getElementById('root')
)
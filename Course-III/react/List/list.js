

const smileyArray = [
    {
        smiley:"😉",
        text:"happy"
    },
    {
        smiley:"😉",
        text:"angry"
    },
    {
        smiley:"❤️",
        text:"love"
    },
    {
        smiley:"😈",
        text:"devilish"
    }
]


class SmallSmiley extends React.Component{
    render(){
        return (
            <div>

                <h1>{this.props.smiley}
                <small>{this.props.text}</small>
                </h1>
            </div>
        )
    }
}

const smileyMapper = item => (
    <SmallSmiley smiley = {item.smiley} text = {item.text} />
)




class ListItem extends React.Component{


    renderSmiley = () =>{
        let smileRender = [];
        for(let i=0; i<smileyArray.length; i++){
            smileRender.push(<SmallSmiley smiley={smileyArray[i].smiley} text={smileyArray[i].text}/>)
        }

        return smileRender;
    }




    render(){
        return(
            <div>
                <h1>List</h1>
                {
                    this.renderSmiley()
                }
                {
                    smileyArray.map(smileyMapper)
                }
            </div>
        )
    }
}


ReactDOM.render(
    <ListItem/>,
    document.getElementById('root')
)
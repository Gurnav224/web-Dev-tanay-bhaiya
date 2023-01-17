
let numcarthasitem =0;

numcarthasitem =5;

function creatItem(){
  if(numcarthasitem){
    return <>{numcarthasitem}</>
  }
  else return "no items"
}





  


class Cart extends React.Component {
  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        <button>Cart {creatItem()}</button>
   
                
      </div>
        )
  }
}

ReactDOM.render(
  <Cart />,


  document.getElementById('root')
);

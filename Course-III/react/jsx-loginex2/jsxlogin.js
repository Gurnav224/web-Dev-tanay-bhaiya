


let isUserLoggedIn = false;

isUserLoggedIn = true;

let username = "Gurnav Chaudhary"


function UserCheck(){

    if(isUserLoggedIn){
        return <h1>hey! {username}</h1>
    }
    else {
        return <button>Login</button>
    }
}
  


class Cart extends React.Component {
  render() {
    return (
      <div>
        <h1>User Status</h1>
   
   {
      isUserLoggedIn &&  <h2>hey! , {username}</h2>
   }
   {
    !isUserLoggedIn &&  <button>Login</button>
   }

    <h1>UserCheck {UserCheck()}</h1>
                
      </div>
        )
  }
}

ReactDOM.render(
  <Cart />,


  document.getElementById('root')
);

import React from "react"
import {Route,BrowserRouter as Router,Link} from "react-router-dom"
import './App.css';
import CardHoldings from "./CardHolding"
import SoldPage from "./SoldPage.jsx"
function App() {
  return (
  	<Router>
  	 <div>
  	 <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <Link class="navbar-brand" to="/">My-Holding</Link>
    <Link class="nav-link bg-dark" to="/sold">Sell</Link>

    <div class="collapse navbar-collapse" id="navbarCollapse">
    
        </div>
  </nav>
  <br/>
  <Route path="/" exact component={CardHoldings}/>
    <Route path="/sold" exact component={SoldPage}/>



    </div>

  	</Router>
   
  );
}

export default App;

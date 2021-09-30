import React, { useState } from "react";
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import { Route, BrowserRouter as Router,Switch } from "react-router-dom";
import Success from "./Success";

function App(){

    const [val, setVal] = useState({})

    return(
        <div className="container">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Header/>
                        <Form state = {setVal}/>
                        <Footer/>
                    </Route>
                    <Route path="/success">
                        <Success value = {val}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
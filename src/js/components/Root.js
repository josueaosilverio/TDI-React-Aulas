import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "../store/index";
import App from "./App";
import Detail from "./Detail";
import Callback from "./Callback";
import User from "./User";

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Cat News</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">

                            <User/>

                        </ul>
                    </div>
                </nav>

                <Route path="/" exact component={App}/>

                <Route path="/detail/:id" component={Detail}/>

                <Route path="/callback" component={Callback}/>

            </div>
        </Router>
    </Provider>

)

export default Root;

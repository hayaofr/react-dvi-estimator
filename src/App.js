import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import NavBar from './navbar/NavBar'
import VueDeNez from './vuedenez/VueDeNez'
import SigneAstro from "./astrologique/SigneAstro";
import {connect} from "react-redux";
import Lune from "./lune/Lune";
import Heure from "./heure/Heure";
import Result from "./result/Result";


const mapStateToProps = state => {
    return {stateObject: state};
};

class App extends Component {
    render() {
        return (
            <section className="section-background">
                <div className="container">
                    <div className="board">
                        <Router>
                            <NavBar/>
                            <div className="tab-content">
                                <Switch>
                                    <Redirect from="/" exact to="/vuedenez"/>
                                    <Route path="/vuedenez" component={VueDeNez}/>
                                    <Route path="/astro" component={SigneAstro}/>
                                    <Route path="/lune" component={Lune}/>
                                    <Route path="/heure" component={Heure}/>
                                    <Route path="/result" component={Result}/>
                                </Switch>
                            </div>

                        </Router>

                    </div>
                    <pre>{JSON.stringify(this.props.stateObject, null, 2)}</pre>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps)(App);

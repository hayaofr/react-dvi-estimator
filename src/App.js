import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import NavBar from './navbar/NavBar'
import VueDeNez from './vuedenez/VueDeNez'
import SigneAstro from "./astrologique/SigneAstro";
import { connect } from "react-redux";
import Lune from "./lune/Lune";


const mapStateToProps = state => {
    return { stateObject: state };
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
                                <Route path="/vuedenez" exact component={VueDeNez}/>
                                <Route path="/astro" component={SigneAstro}/>
                                <Route path="/lune" component={Lune}/>
                            </div>
                        </Router>
                    </div>
                    <pre>{JSON.stringify(this.props.stateObject, null, 2) }</pre>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps)(App);

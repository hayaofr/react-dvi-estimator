import React, {Component} from 'react';
import { NavLink } from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <div className="board-inner" id="status-buttons">
                <ul className="nav nav-tabs" id="myTab">
                    <div className="liner"/>
                    <li>
                        <NavLink to="/vuedenez" activeClassName="active">
                                <span className="round-tabs one">
                                <i className="glyphicon glyphicon-piggy-bank"/>
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/astro" activeClassName="active">
                                <span className="round-tabs two">
                                    <i className="glyphicon glyphicon-plane"/>
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/lune" activeClassName="active">
                                <span className="round-tabs three">
                                    <i className="glyphicon glyphicon-star"/>
                            </span>
                        </NavLink>
                    </li>
                </ul>
                <div className="clearfix"/>
            </div>
        );
    }
}

export default NavBar;

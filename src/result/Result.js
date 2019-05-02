import React, {Component} from 'react';
import {connect} from "react-redux";


const mapStateToProps = state => {
    return { result: state.result };
};

class Result extends Component {

    render() {
        return (
            <div className="tab-pane fade in active">
                <h4 className="head text-center">Résultat de l'estimation</h4>
                <br/>
                <div className='row'>
                    <div className='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>
                        <div className="text-center">
                            {this.props.result.valeur} J/H
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Result);

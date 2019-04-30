import React, {Component} from 'react';
import {updateLune} from "../redux/actions";
import {connect} from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const mapStateToProps = state => {
    return { lune: state.lune };
};

function mapDispatchToProps(dispatch) {
    return {
        updateLune: lune => dispatch(updateLune(lune))
    };
}

class Lune extends Component {
    render() {
        return (
            <Form
                noValidate>
                <div className="tab-pane">
                    <h4 className="head text-center">Quelle est la phase de la lune ?</h4>
                    <br/>
                    <Form.Row>
                        <div className='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>
                            <Form.Group bsPrefix='form-group text-center' controlId="luneId">
                                <Form.Label>Phase de la lune</Form.Label>
                                <Form.Control
                                    required
                                    as="select"
                                    bsPrefix='form-control input-md'
                                    onKeyPress={this.handleKeyPressed()}
                                    onChange={this.handleChange()}
                                    value={this.props.lune.valeur}
                                >
                                    <option value="0">Nouvelle Lune</option>
                                    <option value="1">Pleine Lune</option>
                                    <option value="2">Croissante</option>
                                    <option value="3">Décroissante</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group bsPrefix='form-group text-center' >
                                <Button type="button" bsPrefix='btn btn-success btn-outline-rounded btn-info' onClick={this.handleClick()} >Suivant <span className="btn-style glyphicon glyphicon-arrow-right"/></Button>
                            </Form.Group>
                        </div>
                    </Form.Row>

                </div>
            </Form>
        );
    }

    handleKeyPressed() {
        return e => {
            if (e.key === 'Enter') e.preventDefault();
        };
    }

    handleClick() {
        return () => {
            this.props.history.push('/heure')
        };
    }

    handleChange() {
        return e => {
            this.props.updateLune({ valeur: e.target.value});
        };
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lune);

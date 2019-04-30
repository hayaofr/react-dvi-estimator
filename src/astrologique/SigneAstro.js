import React, {Component} from 'react';
import {updateAstro} from "../redux/actions";
import {connect} from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const mapStateToProps = state => {
    return { astro: state.astro };
};

function mapDispatchToProps(dispatch) {
    return {
        updateAstro: astro => dispatch(updateAstro(astro))
    };
}

class SigneAstro extends Component {
    render() {
        return (
            <Form
                noValidate>
                <div className="tab-pane">
                    <h4 className="head text-center">Votre signe astrologique</h4>
                    <br/>
                    <Form.Row>
                        <div className='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>
                            <Form.Group bsPrefix='form-group text-center' controlId="astroId">
                                <Form.Label>Votre signe astrologique</Form.Label>
                                <Form.Control
                                    required
                                    as="select"
                                    bsPrefix='form-control input-md'
                                    onKeyPress={this.handleKeyPressed()}
                                    onChange={this.handleChange()}
                                    value={this.props.astro.valeur}
                                >
                                    <option value="0">Bélier</option>
                                    <option value="1">Taureau</option>
                                    <option value="2">Gémeaux</option>
                                    <option value="3">Cancer</option>
                                    <option value="4">Lion</option>
                                    <option value="5">Vierge</option>
                                    <option value="6">Balance</option>
                                    <option value="7">Scorpion</option>
                                    <option value="8">Sagittaire</option>
                                    <option value="9">Capricorne</option>
                                    <option value="10">Verseau</option>
                                    <option value="11">Poissons</option>
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
            this.props.history.push('/lune')
        };
    }

    handleChange() {
        return e => {
            this.props.updateAstro({ valeur: e.target.value});
        };
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SigneAstro);

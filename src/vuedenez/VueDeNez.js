import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {updateVueDeNez} from '../redux/actions'
import {connect} from "react-redux";


const mapStateToProps = state => {
    return { vuedenez: state.vuedenez };
};

function mapDispatchToProps(dispatch) {
    return {
        updateVueDeNez: vuedenez => dispatch(updateVueDeNez(vuedenez))
    };
}

class VueDeNez extends Component {

    render() {
        return (
            <Form
                noValidate bsPrefix='editForm'>
                <div className="tab-pane fade in active">
                    <h4 className="head text-center">Votre estimation du projet à vue de nez</h4>
                    <br/>
                    <Form.Row>
                        <div className='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>
                            <Form.Group bsPrefix='form-group text-center' controlId="vuedenezId">
                                <Form.Label>Estimation à Vue de Nez (J/H)</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    bsPrefix='form-control input-md'
                                    placeholder="Estimation Vue de Nez"  onKeyPress={this.handleKeyPressed()}
                                    onChange={this.handleChange()}
                                    isValid={this.props.vuedenez.valid}
                                    isInvalid={!this.props.vuedenez.valid}
                                    value={this.props.vuedenez.valeur}
                                />
                                <div className="alert alert-danger" hidden={this.props.vuedenez.valid} >L'estimation est nécessaire et doit être un entier</div>
                            </Form.Group>
                            <Form.Group bsPrefix='form-group text-center' >
                                <Button type="button" bsPrefix='btn btn-success btn-outline-rounded btn-info' disabled={!this.props.vuedenez.valid} onClick={this.handleClick()} >Suivant <span className="btn-style glyphicon glyphicon-arrow-right"/></Button>
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
            this.props.history.push('/astro')
        };
    }

    handleChange() {
        return e => {
            this.props.updateVueDeNez({ valeur: e.target.value, valid: (e.target.value.length > 0 && this.isNumeric(e.target.value))});
        };
    }

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(VueDeNez);

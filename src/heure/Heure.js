import React, {Component} from 'react';
import {computeResult, displayModal, updateHeure} from "../redux/actions";
import {connect} from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import loadingImg from "../assets/images/loading-bars.svg"

const mapStateToProps = state => {
    return {
        heure: state.heure,
        computeModal: state.computeModal
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateHeure: heure => dispatch(updateHeure(heure)),
        displayModal: showModal => dispatch(displayModal(showModal)),
        computeResult: () => dispatch(computeResult())
    };
}


class Heure extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleClose = this.handleClose.bind(this);

    }

    render() {
        return (
            <div>
                <Form
                    noValidate>
                    <div className="tab-pane">
                        <h4 className="head text-center">Quelle est l'heure de saisie de cette estimation ?</h4>
                        <br/>
                        <Form.Row>
                            <div className='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>
                                <Form.Group bsPrefix='form-group text-center' controlId="luneId">
                                    <Form.Label>Heure de saisie</Form.Label>
                                    <Form.Control
                                        required
                                        as="select"
                                        bsPrefix='form-control input-md'
                                        onKeyPress={this.handleKeyPressed()}
                                        onChange={this.handleChange()}
                                        value={this.props.heure.valeur}
                                    >
                                        <option value="0">Jusqu'à 11h - Frais et dispo</option>
                                        <option value="1">11h à 15h - J'ai faim ou je digère</option>
                                        <option value="2">15h à 18h - Je suis bien concentré</option>
                                        <option value="3">Après 18h - Je fatigue</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group bsPrefix='form-group text-center'>
                                    <Button type="button" bsPrefix='btn btn-success btn-outline-rounded btn-info'
                                            onClick={this.handleClick()}>Suivant <span
                                        className="btn-style glyphicon glyphicon-arrow-right"/></Button>
                                </Form.Group>
                            </div>
                        </Form.Row>

                    </div>
                </Form>
                <Modal bsPrefix="modal" show={this.props.computeModal.show} style={{opacity: 1}}
                       onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title bsPrefix="modal-title text-center">Notre astrologue consulte sa boule de
                            cristal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body bsPrefix="modal-body text-center"><img alt="loading" src={loadingImg} width="64"
                                                                       height="64"/></Modal.Body>
                </Modal>
            </div>

        );
    }

    handleKeyPressed() {
        return e => {
            if (e.key === 'Enter') e.preventDefault();
        };
    }

    handleClick() {
        return () => {
            this.handleShow();
            this.computeResult();
            setTimeout(() => {
                this.handleClose();
                this.props.history.push('/result')
            }, 5000)

        };
    }

    handleChange() {
        return e => {
            this.props.updateHeure({valeur: e.target.value});
        };
    }

    handleShow() {
        this.props.displayModal({show: true});
    }

    computeResult() {
        this.props.computeResult();
    }

    handleClose() {
        this.props.displayModal({show: false});
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Heure);

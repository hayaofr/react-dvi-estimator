import {ASTRO_CHANGED, COMPUTE_RESULT, HEURE_CHANGED, LUNE_CHANGED, SHOW_MODAL, VUEDENEZ_CHANGED} from "../actionTypes";

const initialState = {
    vuedenez: {
        valeur: "0",
        valid: true
    },
    astro: {
        valeur: "0"
    },
    lune: {
        valeur: "0"
    },
    heure: {
        valeur: "0"
    },
    result: {
        valeur: "0"
    },
    computeModal: {
        show: false
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case VUEDENEZ_CHANGED: {
            return {
                ...state,
                vuedenez: action.valeur
            };
        }
        case ASTRO_CHANGED: {
            return {
                ...state,
                astro: action.valeur
            };
        }
        case LUNE_CHANGED: {
            return {
                ...state,
                lune: action.valeur
            };
        }
        case HEURE_CHANGED: {
            return {
                ...state,
                heure: action.valeur
            };
        }
        case COMPUTE_RESULT: {
            return {
                ...state,
                result: computeResult(state)
            };
        }
        case SHOW_MODAL: {
            return {
                ...state,
                computeModal: action.valeur
            };
        }
        default:
            return state;
    }
}

function computeResult(state) {

    let estimation = state.vuedenez.valeur;

    estimation = computeLune(state.lune.valeur, estimation)
    estimation = computeAstro(state.astro.valeur, estimation)
    estimation = computeHeure(state.heure.valeur, estimation)

    return {valeur: Math.trunc(estimation)};
}

function computeLune(lune, estimation) {

    switch (lune) {
        case '0':
            return estimation * 1;
        case '1':
            return estimation * 1.3
        case '2':
            return estimation * 1.1;
        case '3':
            return estimation * 1.2;
        default:
            return estimation;
    }

}

function computeHeure(heure, estimation) {

    switch (heure) {
        case '0':
            return estimation * 1;
        case '1':
            return estimation * 1.2
        case '2':
            return estimation * 1;
        case '3':
            return estimation * 1.2;
        default:
            return estimation;
    }

}

function computeAstro(astro, estimation) {

    switch (astro) {
        case '0':
            return estimation * 1.1;
        case '1':
            return estimation * 1.3
        case '2':
            return estimation * 1.4;
        case '3':
            return estimation * 1.2;
        case '4':
            return estimation * 1.1;
        case '5':
            return estimation * 1.3;
        case '6':
            return estimation * 1.4;
        case '7':
            return estimation * 1.2;
        case '8':
            return estimation * 1.1;
        case '9':
            return estimation * 1.3;
        case '10':
            return estimation * 1.4;
        case '11':
            return estimation * 1.2;
        default:
            return estimation;
    }

}

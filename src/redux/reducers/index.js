import {ASTRO_CHANGED, LUNE_CHANGED, VUEDENEZ_CHANGED} from "../actionTypes";

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
        default:
            return state;
    }
}

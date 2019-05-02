import {ASTRO_CHANGED, COMPUTE_RESULT, HEURE_CHANGED, LUNE_CHANGED, SHOW_MODAL, VUEDENEZ_CHANGED} from "./actionTypes";

export const updateVueDeNez = content => ({
    type: VUEDENEZ_CHANGED,
    valeur: content
});

export const updateAstro = content => ({
    type: ASTRO_CHANGED,
    valeur: content
});

export const updateLune = content => ({
    type: LUNE_CHANGED,
    valeur: content
});

export const updateHeure = content => ({
    type: HEURE_CHANGED,
    valeur: content
});

export const computeResult = content => ({
    type: COMPUTE_RESULT,
    valeur: content
});

export const displayModal = content => ({
    type: SHOW_MODAL,
    valeur: content
});

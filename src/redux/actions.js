import {ASTRO_CHANGED, LUNE_CHANGED, VUEDENEZ_CHANGED} from "./actionTypes";

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

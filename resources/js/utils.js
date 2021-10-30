export function isCountBased(setType) {
    return ['rounds', 'emom', 'tabata'].includes(setType.name);
}

export function isTimeBased(setType) {
    return ['amrap', 'rest'].includes(setType.name);
}

export function hasWorkTime(setType) {
    return ['emom', 'tabata'].includes(setType.name);
}

export function hasRestTime(setType) {
    return ['tabata'].includes(setType.name);
}

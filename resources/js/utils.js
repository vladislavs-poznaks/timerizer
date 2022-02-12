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

export function getModifiedReactSelectTheme(theme) {
    return {
        ...theme,
        borderRadius: '0.5rem',
        colors: {
            ...theme.colors,

            primary25: 'rgb(216 180 254)',
            primary: 'rgb(147 51 234)',
        },
        spacing: {
            ...theme.spacing,
            baseUnit: 5
        }
    }
}

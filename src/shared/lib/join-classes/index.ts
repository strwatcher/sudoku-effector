export function joinClasses(
    ...classes: Array<string | false | null | undefined>
) {
    return classes
        .filter((cl) => !!cl)
        .join(' ')
        .trim()
}

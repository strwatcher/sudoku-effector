export function joinClasses(...classes: Array<string | false | null>) {
    return classes
        .filter((cl) => !!cl)
        .join(' ')
        .trim()
}

export default fns => dispatch => {
    let props = {}
    for (const name in fns) {
        const fn = fns[name]
        props[name] = (...args) => dispatch(fn(...args))
    }
    return props
}


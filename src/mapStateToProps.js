import parse from 'obj-parse'

export default (...names) => state => {
    let props = {}
    for (const name of names) {
        if (typeof name == 'object') {
            const obj = name
            for (const prop in obj) {
                const value = obj[prop]
                if (typeof value == 'function') {
                    props[prop] = value(state)
                } else {
                    props[prop] = parse(value)(state)
                }
            }
        } else {
            props[name] = state[name]
        }
    }
    return props
}


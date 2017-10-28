/**
 * @param arr - array
 * @returns {Proxy} - a proxied array
 */
module.exports = function (arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected an array')
    }

    const handler = {
        get: function (target, prop) {
            if (!isNegativeIntegerString(prop)) {
                return target[prop]
            }

            prop = parseInt(prop)
            return target[prop < 0 ? target.length + prop : prop]
        },
        set: function (target, prop, val) {
            if (!isNegativeIntegerString(prop)) {
                return target[prop] = val
            }

            prop = parseInt(prop)
            return target[prop < 0 ? target.length + prop : prop] = val
        }
    }

    return new Proxy(arr, handler)

    function isNegativeIntegerString(str) {
        return /^-[0-9]+$/.test(str)
    }
}
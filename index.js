const path = require('path')

// Are we running app locally via node?
const isLocal = typeof process.pkg === 'undefined'

// Build the base path based on current running mode (if packaged, we need the location of executable)
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath)

/**
 * Joins the base path with given file name
 * @param file
 * @return {string}
 */
function join (file) {
    return path.join(basePath, file)
}

/**
 * Resolves the file path
 * @param filePath
 * @return {string}
 */
function resolve (filePath) {
    return path.resolve(basePath, filePath)
}

/**
 * Removes current basePath from the given path to
 * make shorter path
 *
 * @param {string} path
 * @return {string}
 */
function toRelative (path) {
    return path.replace(basePath, '.')
}

module.exports = {
    join,
    resolve,
    toRelative,
    isLocal,
    paths: {
        base: basePath,
    }
}

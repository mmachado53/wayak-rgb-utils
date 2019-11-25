
/**
 * @module RGBUtils
 */


/**
 *
 * Transform integer number like 0xff0000 to rgb object like {r:255,g:0,b:0} inverse to RGBToNumber.
 * @function numberToRGB
 * @static
 * @param {integer} number - rgb color.
 * @example
 * // returns {r:255,g:0,b:0}
 * RGBUtils.numberToRGB(0xff0000);
 * @returns {object} a object with r,g,b props
 */
const numberToRGB = function (number) {
    const r = number >> 16 & 0xFF
    const g = number >> 8 & 0xFF
    const b = number & 0xFF
    return {r,g,b}
}

/**
 * Transform rgb values to integer number like 0xff0000 inverse to numberToRGB.
 * @function RGBToNumber
 * @static
 * @param {number} r - red value (0-255).
 * @param {number} g - green value (0-255).
 * @param {number} b - blue value (0-255).
 * @returns {UInt32} a color in uInt32 number like 0xff0000
 * @example
 * // returns 0xff0000
 * RGBUtils.RGBToNumber(255,0,0);
 */
const RGBToNumber = function (r, g, b) {
    return ((r << 16) | (g << 8) | (b))
}


/**
 * Transform uInt32 number like 0xff0000ff to rgb object like {r:255,g:0,b:0,a:255} inverse to RGBAToNumber.
 * @function numberToRGBA
 * @static
 * @param {uInt32} number - rgba color.
 * @returns {Object} a object with r,g,b,a props
 * @example
 * // returns {r:255,g:0,b:0,a:255}
 * RGBUtils.numberToRGBA(0xff0000ff);
 */
const numberToRGBA =  (number)=> {
    const a = number >> 24 & 0xFF
    const b = number >> 16 & 0xFF
    const g = number >> 8 & 0xFF
    const r = number & 0xFF
    return {r,g,b,a}
}

/**
 * Transform rgba values to uInt32 number like 0xff0000ff inverse to RGBAToNumber.
 * @function RGBAToNumber
 * @static
 * @param {number} r - red value (0-255).
 * @param {number} g - green value (0-255).
 * @param {number} b - blue value (0-255).
 * @param {number} a - alpha value (0-255).
 * @returns {UInt32} a color in uInt32 number like 0xff0000ff
 * @example
 * // returns 0xff0000ff
 * RGBUtils.RGBAToNumber(255,0,0,255);
 */
const RGBAToNumber =  (r, g, b, a)=> {
    /* cast to 255 */
    r = r & 0xff
    g = g & 0xff
    b = b & 0xff
    a = a & 0xff

    return (a   << 24) |    // alpha
        (b << 16) |    // blue
        (g <<  8) |    // green
        r;             // red
}


/**
 * Transform a string value like '0xff0000ff' or '#ff0000'  in uInt32 number like 0xff0000ff.
 * @function stringToRGBANumber
 * @static
 * @param {String} string - color string.
 * @returns {UInt32} a color in uInt32 number like 0xff0000ff
 * @example
 * // returns 0xff0000
 * RGBUtils.stringToRGBANumber('#ff0000');
 * @example
 * // returns 0xff0000ff
 * RGBUtils.stringToRGBANumber('ff0000ff');
 */
const stringToRGBANumber =  (string)=> {
    string = string.replace("#","").replace("0x","")
    const number = parseInt(string,16)
    if(string.length === 6){return number}
    const {r:a,g:b,b:g,a:r} = numberToRGBA(number)
    return RGBAToNumber(r,g,b,a)
}

/**
 * Transform a string value like '0xff0000ff' or '#ff0000' in a rgba object like {r:255,g:0,b:0,a:255}.
 * @function stringToRGBAObject
 * @static
 * @param {string} string - color string.
 * @returns {object} a object with r,g,b,a props
 * @example
 * // returns {r:255,g:0,b:0,a:255}
 * RGBUtils.stringToRGBAObject('#ff0000');
 * @example
 * // returns {r:255,g:0,b:0,a:255}
 * RGBUtils.stringToRGBAObject('ff0000ff');
 */
const stringToRGBAObject = (string)=>{
    const number = stringToRGBANumber(string)
    string = string.replace("#","").replace("0x","")
    if(string.length === 6){return {...numberToRGB(number),a:255}}
    return numberToRGBA(number)
}
/**
 * return the distance between two rgb objects
 * @function stringToRGBAObject
 * @static
 * @param {object} rgb1 - color object like {r:255,g:0,b:0}.
 * @param {number} rgb1.r - red value (0-255).
 * @param {number} rgb1.g - green value (0-255).
 * @param {number} rgb1.b - blue value (0-255).
 * @param {object} rgb2 - color object like {r:255,g:0,b:0}.
 * @param {number} rgb2.r - red value (0-255).
 * @param {number} rgb2.g - green value (0-255).
 * @param {number} rgb2.b - blue value (0-255).
 * @returns {number} distance
 * @example
 * // returns 360.62445840513925
 * RGBUtils.RGBDistance({r:255,g:0,b:0},{r:0,g:0,b:255});
 */
const RGBDistance = (rgb1, rgb2)=>{
    /* like a 3d distance */
    const rDiff = rgb1.r - rgb2.r
    const gDiff = rgb1.g - rgb2.g
    const bDiff = rgb1.b - rgb2.b
    return Math.sqrt(rDiff*rDiff+gDiff*gDiff+bDiff*bDiff);
}

const RGBUtils = {RGBDistance,stringToRGBAObject,stringToRGBANumber,RGBAToNumber,numberToRGBA,RGBToNumber,numberToRGB}

export default RGBUtils


<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [RGBUtils][1]
-   [numberToRGB][2]
    -   [Parameters][3]
    -   [Examples][4]
-   [RGBToNumber][5]
    -   [Parameters][6]
    -   [Examples][7]
-   [numberToRGBA][8]
    -   [Parameters][9]
    -   [Examples][10]
-   [RGBAToNumber][11]
    -   [Parameters][12]
    -   [Examples][13]
-   [stringToRGBANumber][14]
    -   [Parameters][15]
    -   [Examples][16]
-   [stringToRGBAObject][17]
    -   [Parameters][18]
    -   [Examples][19]
-   [stringToRGBAObject][20]
    -   [Parameters][21]
    -   [Examples][22]

## RGBUtils

## numberToRGB

Transform integer number like 0xff0000 to rgb object like {r:255,g:0,b:0} inverse to RGBToNumber.

### Parameters

-   `number` **integer** rgb color.

### Examples

```javascript
// returns {r:255,g:0,b:0}
RGBUtils.numberToRGB(0xff0000);
```

Returns **[object][23]** a object with r,g,b props

## RGBToNumber

Transform rgb values to integer number like 0xff0000 inverse to numberToRGB.

### Parameters

-   `r` **[number][24]** red value (0-255).
-   `g` **[number][24]** green value (0-255).
-   `b` **[number][24]** blue value (0-255).

### Examples

```javascript
// returns 0xff0000
RGBUtils.RGBToNumber(255,0,0);
```

Returns **UInt32** a color in uInt32 number like 0xff0000

## numberToRGBA

Transform uInt32 number like 0xff0000ff to rgb object like {r:255,g:0,b:0,a:255} inverse to RGBAToNumber.

### Parameters

-   `number` **uInt32** rgba color.

### Examples

```javascript
// returns {r:255,g:0,b:0,a:255}
RGBUtils.numberToRGBA(0xff0000ff);
```

Returns **[Object][23]** a object with r,g,b,a props

## RGBAToNumber

Transform rgba values to uInt32 number like 0xff0000ff inverse to RGBAToNumber.

### Parameters

-   `r` **[number][24]** red value (0-255).
-   `g` **[number][24]** green value (0-255).
-   `b` **[number][24]** blue value (0-255).
-   `a` **[number][24]** alpha value (0-255).

### Examples

```javascript
// returns 0xff0000ff
RGBUtils.RGBAToNumber(255,0,0,255);
```

Returns **UInt32** a color in uInt32 number like 0xff0000ff

## stringToRGBANumber

Transform a string value like '0xff0000ff' or '#ff0000'  in uInt32 number like 0xff0000ff.

### Parameters

-   `string` **[String][25]** color string.

### Examples

```javascript
// returns 0xff0000
RGBUtils.stringToRGBANumber('#ff0000');
```

```javascript
// returns 0xff0000ff
RGBUtils.stringToRGBANumber('ff0000ff');
```

Returns **UInt32** a color in uInt32 number like 0xff0000ff

## stringToRGBAObject

Transform a string value like '0xff0000ff' or '#ff0000' in a rgba object like {r:255,g:0,b:0,a:255}.

### Parameters

-   `string` **[string][25]** color string.

### Examples

```javascript
// returns {r:255,g:0,b:0,a:255}
RGBUtils.stringToRGBAObject('#ff0000');
```

```javascript
// returns {r:255,g:0,b:0,a:255}
RGBUtils.stringToRGBAObject('ff0000ff');
```

Returns **[object][23]** a object with r,g,b,a props

## stringToRGBAObject

return the distance between two rgb objects

### Parameters

-   `rgb1` **[object][23]** color object like {r:255,g:0,b:0}.
    -   `rgb1.r` **[number][24]** red value (0-255).
    -   `rgb1.g` **[number][24]** green value (0-255).
    -   `rgb1.b` **[number][24]** blue value (0-255).
-   `rgb2` **[object][23]** color object like {r:255,g:0,b:0}.
    -   `rgb2.r` **[number][24]** red value (0-255).
    -   `rgb2.g` **[number][24]** green value (0-255).
    -   `rgb2.b` **[number][24]** blue value (0-255).

### Examples

```javascript
// returns 360.62445840513925
RGBUtils.RGBDistance({r:255,g:0,b:0},{r:0,g:0,b:255});
```

Returns **[number][24]** distance

[1]: #rgbutils

[2]: #numbertorgb

[3]: #parameters

[4]: #examples

[5]: #rgbtonumber

[6]: #parameters-1

[7]: #examples-1

[8]: #numbertorgba

[9]: #parameters-2

[10]: #examples-2

[11]: #rgbatonumber

[12]: #parameters-3

[13]: #examples-3

[14]: #stringtorgbanumber

[15]: #parameters-4

[16]: #examples-4

[17]: #stringtorgbaobject

[18]: #parameters-5

[19]: #examples-5

[20]: #stringtorgbaobject-1

[21]: #parameters-6

[22]: #examples-6

[23]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[24]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[25]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

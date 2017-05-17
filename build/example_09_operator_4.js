'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('9');

function arrayReduce(array, accumulator, startValue) {
    var value = startValue;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            value = accumulator(value, item);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return value;
}

var values = [1, 22, 333, 444, 5555];
var sum = arrayReduce(values, function (acc, i) {
    return acc + i;
}, 0);
console.log(sum);

var max = arrayReduce(values, function (acc, value) {
    if (value > acc) return value;
    return acc;
}, -1);

// const max = arrayReduce(values, Math.max, -1);

console.log(max);

_Rx2.default.Observable.range(1, 10)
// .scan((acc, value) => acc + value)
.reduce(function (acc, value) {
    return acc + value;
}).subscribe((0, _util.createSubscriber)('reduce'));

_Rx2.default.Observable.range(1, 10).map(function (i) {
    return i * i;
}).scan(function (_ref, current) {
    var _ref2 = _slicedToArray(_ref, 1),
        last = _ref2[0];

    return [current, last];
}, []).subscribe((0, _util.createSubscriber)('scan'));

//first value and last value

function scanLast(acc, value) {
    var last = acc[0];
    return [value, last];
}
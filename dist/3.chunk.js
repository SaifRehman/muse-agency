webpackJsonp([3,16],{

/***/ 1070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(399);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator; }), multi: true }
            ]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')), 
        __metadata('design:paramtypes', [String, String])
    ], EqualValidator);
    return EqualValidator;
}());
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extendedforms_extendedforms_component__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__regularforms_regularforms_component__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validationforms_validationforms_component__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wizard_wizard_component__ = __webpack_require__(928);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsRoutes; });




var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'regular',
                component: __WEBPACK_IMPORTED_MODULE_1__regularforms_regularforms_component__["a" /* RegularFormsComponent */]
            }] }, {
        path: '',
        children: [{
                path: 'extended',
                component: __WEBPACK_IMPORTED_MODULE_0__extendedforms_extendedforms_component__["a" /* ExtendedFormsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'validation',
                component: __WEBPACK_IMPORTED_MODULE_2__validationforms_validationforms_component__["a" /* ValidationFormsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'wizard',
                component: __WEBPACK_IMPORTED_MODULE_3__wizard_wizard_component__["a" /* WizardComponent */]
            }]
    }
];
//# sourceMappingURL=forms.routing.js.map

/***/ }),

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 9.2.0 - 2017-01-11 10:35:34 */

(function (factory) {

    if ( true ) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else if ( typeof exports === 'object' ) {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.noUiSlider = factory();
    }

}(function( ){

	'use strict';

	var VERSION = '9.2.0';


	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( target, className ) {
		var div = document.createElement('div');
		addClass(div, className);
		target.appendChild(div);
		return div;
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

	var rect = elem.getBoundingClientRect(),
		doc = elem.ownerDocument,
		docElem = doc.documentElement,
		pageOffset = getPageOffset();

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( ) {

		var supportPageOffset = window.pageXOffset !== undefined,
			isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
			x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct ), a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			a = xPct[j-1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			 that.xVal[i]
			,that.xVal[i+1]
		], n) / subRangeRatio (
			that.xPct[i],
			that.xPct[i+1] );

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	// The interface to Spectrum handles all direction-based
	// conversions, so the above values are unaware.

	function Spectrum ( entry, snap, direction, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;
		this.direction = direction;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
 	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.dir, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
		  case 'horizontal':
			parsed.ort = 0;
			break;
		  case 'vertical':
			parsed.ort = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric.");
		}

		if ( entry === 0 ) {
			return;
		}

		parsed.padding = parsed.spectrum.getMargin(entry);

		if ( !parsed.padding ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number.");
		}

		if ( parsed.padding >= 50 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be less than half the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
		  case 'ltr':
			parsed.dir = 0;
			break;
		  case 'rtl':
			parsed.dir = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testFormat ( parsed, entry ) {

		parsed.format = entry;

		// Any object with a to and from method is supported.
		if ( typeof entry.to === 'function' && typeof entry.from === 'function' ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testCssPrefix ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	function testUseRaf ( parsed, entry ) {
		if ( entry === true || entry === false ) {
			parsed.useRequestAnimationFrame = entry;
		} else {
			throw new Error("noUiSlider (" + VERSION + "): 'useRequestAnimationFrame' option should be true (default) or false.");
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: false, t: testCssPrefix },
			'cssClasses': { r: false, t: testCssClasses },
			'useRequestAnimationFrame': { r: false, t: testUseRaf }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			},
			'useRequestAnimationFrame': true
		};

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( options[name] === undefined && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		var styles = [['left', 'top'], ['right', 'bottom']];

		// Pre-define the styles.
		parsed.style = styles[parsed.dir][parsed.ort];
		parsed.styleOposite = styles[parsed.dir?0:1][parsed.ort];

		return parsed;
	}


function closure ( target, options, originalOptions ){

	var actions = getActions( );

	// All variables local to 'closure' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandle = false;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;


	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(base, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(base, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( target ) {

		// Apply classes and data to the target.
		addClass(target, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(target, options.cssClasses.ltr);
		} else {
			addClass(target, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(target, options.cssClasses.horizontal);
		} else {
			addClass(target, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(target, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( !values ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var spread = ( 100 / (values - 1) );
			var v;
			var i = 0;

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( (v = i++ * spread) <= 100 ) {
				values.push(v);
			}

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the ammount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = document.createElement('div');
		var out = '';
		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function getTags( offset, source, values ) {
			return 'class="' + getClasses(values[1], source) + '" style="' + options.style + ': ' + offset + '%"';
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			out += '<div ' + getTags(offset, options.cssClasses.marker, values) + '></div>';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				out += '<div ' + getTags(offset, options.cssClasses.value, values) + '>' + formatter.to(values[0]) + '</div>';
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		element.innerHTML = out;

		return element;
	}

	function pips ( grid ) {

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		return scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));
	}


	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			if ( scope_Target.hasAttribute('disabled') ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) ) {
				return false;
			}

			e = fixEvent(e, data.pageOffset);

			// Handle reject of multitouch
			if ( !e ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset ) {

		// Prevent scrolling and panning on touch events, while
		// attempting to slide. The tap event also depends on this.
		e.preventDefault();

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;
		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}

		if ( touch ) {

			// Fix bug when user touches with two or more fingers on mobile devices.
			// It's useful when you have two or more sliders on one page,
			// that can be touched simultaneously.
			// #649, #663, #668
			if ( e.touches.length > 1 ) {
				return false;
			}

			// noUiSlider supports one movement at a time,
			// so we can select the first 'changedTouch'.
			x = e.changedTouches[0].pageX;
			y = e.changedTouches[0].pageY;
		}

		pageOffset = pageOffset || getPageOffset();

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();
		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o]);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}


	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( scope_ActiveHandle ) {
			removeClass(scope_ActiveHandle, options.cssClasses.active);
			scope_ActiveHandle = false;
		}

		// Remove cursor styles and text-selection events bound to the body.
		if ( event.cursor ) {
			document.body.style.cursor = '';
			document.body.removeEventListener('selectstart', document.body.noUiListener);
		}

		// Unbind the move and end events, which are added on 'start'.
		document.documentElement.noUiListeners.forEach(function( c ) {
			document.documentElement.removeEventListener(c[0], c[1]);
		});

		// Remove dragging class.
		removeClass(scope_Target, options.cssClasses.drag);

		setZindex();

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('set', handleNumber);
			fireEvent('change', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		if ( data.handleNumbers.length === 1 ) {

			var handle = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handle.hasAttribute('disabled') ) {
				return false;
			}

			// Mark the handle as 'active' so it can be styled.
			scope_ActiveHandle = handle.children[0];
			addClass(scope_ActiveHandle, options.cssClasses.active);
		}

		// Fix #551, where a handle gets selected instead of dragged.
		event.preventDefault();

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, document.documentElement, eventMove, {
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, document.documentElement, eventEnd, {
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", document.documentElement, documentLeave, {
			handleNumbers: data.handleNumbers
		});

		document.documentElement.noUiListeners = moveEvent.concat(endEvent, outEvent);

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			document.body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			var f = function(){
				return false;
			};

			document.body.noUiListener = f;

			// Prevent text selection when dragging the handles.
			document.body.addEventListener('selectstart', f, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('set', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('update', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}


	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] ) {
			return false;
		}

		return to;
	}

	function toPct ( pct ) {
		return pct + '%';
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		// Called synchronously or on the next animationFrame
		var stateUpdate = function() {
			scope_Handles[handleNumber].style[options.style] = toPct(to);
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		};

		// Set the handle to the new position.
		// Use requestAnimationFrame for efficient painting.
		// No significant effect in Chrome, Edge sees dramatic performace improvements.
		// Option to disable is useful for unit tests, and single-step debugging.
		if ( window.requestAnimationFrame && options.useRequestAnimationFrame ) {
			window.requestAnimationFrame(stateUpdate);
		} else {
			stateUpdate();
		}
	}

	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			// Handles before the slider middle are stacked later = higher,
			// Handles after the middle later is lower
			// [[7] [8] .......... | .......... [5] [4]
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		scope_Connects[index].style[options.style] = toPct(l);
		scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
	}

	// ...
	function setValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false ) {
			return;
		}

		// If a formatted number was passed, attemt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);

		// Request an update for all links if the value was invalid.
		// Do so too if setting the handle fails.
		if ( to !== false && !isNaN(to) ) {
			setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
		}
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		values.forEach(setValue);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, false);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0],
				tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated, 'direction' cannot, due to event binding.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		// Save current spectrum direction as testOptions in testRange call
		// doesn't rely on current direction
		newOptions.spectrum.direction = scope_Spectrum.direction;
		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

	// Throw an error if the slider was already initialized.
	if ( scope_Target.noUiSlider ) {
		throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
	}

	// Create the base element, initialise HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		pips: pips // Issue #594
	};

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element.");
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = closure( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expansibility;
	return {
		version: VERSION,
		create: initialize
	};

}));

/***/ }),

/***/ 1143:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">today</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Datetime Picker</h4>\n                        <div class=\"form-group\">\n                            <label class=\"label-control\">Datetime Picker</label>\n                            <input type=\"text\" class=\"form-control datetimepicker\" value=\"10/05/2016\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">library_books</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Datetime Picker</h4>\n                        <div class=\"form-group\">\n                            <label class=\"label-control\">Date Picker</label>\n                            <input type=\"text\" class=\"form-control datepicker\" value=\"10/10/2016\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">av_timer</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Datetime Picker</h4>\n                        <div class=\"form-group\">\n                            <label class=\"label-control\">Time Picker</label>\n                            <input type=\"text\" class=\"form-control timepicker\" value=\"14:00\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <br>\n                        <br>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <legend>Switches</legend>\n                                <div class=\"togglebutton\">\n                                    <label>\n                                        <input type=\"checkbox\" checked> Toggle is on\n                                    </label>\n                                </div>\n                                <div class=\"togglebutton\">\n                                    <label>\n                                        <input type=\"checkbox\"> Toggle is off\n                                    </label>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <legend>Customisable Select</legend>\n                                <div class=\"row\">\n                                    <div class=\"col-lg-5 col-md-6 col-sm-3\">\n                                        <select class=\"selectpicker\" data-style=\"btn btn-primary btn-round\" title=\"Single Select\" data-size=\"7\">\n                                            <option disabled selected>Choose city</option>\n                                            <option value=\"2\">Foobar</option>\n                                            <option value=\"3\">Is great</option>\n                                        </select>\n                                    </div>\n                                    <div class=\"col-lg-5 col-md-6 col-sm-3\">\n                                        <select class=\"selectpicker\" data-style=\"select-with-transition\" multiple title=\"Choose City\" data-size=\"7\">\n                                            <option disabled> Choose city</option>\n                                            <option value=\"2\">Paris </option>\n                                            <option value=\"3\">Bucharest</option>\n                                            <option value=\"4\">Rome</option>\n                                            <option value=\"5\">New York</option>\n                                            <option value=\"6\">Miami </option>\n                                            <option value=\"7\">Piatra Neamt</option>\n                                            <option value=\"8\">Paris </option>\n                                            <option value=\"9\">Bucharest</option>\n                                            <option value=\"10\">Rome</option>\n                                            <option value=\"11\">New York</option>\n                                            <option value=\"12\">Miami </option>\n                                            <option value=\"13\">Piatra Neamt</option>\n                                            <option value=\"14\">Paris </option>\n                                            <option value=\"15\">Bucharest</option>\n                                            <option value=\"16\">Rome</option>\n                                            <option value=\"17\">New York</option>\n                                            <option value=\"18\">Miami </option>\n                                            <option value=\"19\">Piatra Neamt</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <br>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <legend>Tags</legend>\n                                <input type=\"text\" value=\"Amsterdam,Washington,Sydney,Beijing\" class=\"tagsinput\" data-role=\"tagsinput\" data-color=\"rose\" />\n                                <!-- You can change data-color=\"rose\" with one of our colors primary | warning | info | danger | success -->\n                            </div>\n                            <div class=\"col-md-6\">\n                                <legend>Dropdown & Dropup</legend>\n                                <div class=\"row\">\n                                    <div class=\"col-lg-4 col-md-6 col-sm-3\">\n                                        <div class=\"dropdown\">\n                                            <button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropdown\n                                                <b class=\"caret\"></b>\n                                            </button>\n                                            <ul class=\"dropdown-menu dropdown-menu-left\">\n                                                <li class=\"dropdown-header\">Dropdown header</li>\n                                                <li>\n                                                    <a href=\"#pablo\">Action</a>\n                                                </li>\n                                                <li>\n                                                    <a href=\"#pablo\">Another action</a>\n                                                </li>\n                                                <li>\n                                                    <a href=\"#pablo\">Something else here</a>\n                                                </li>\n                                                <li class=\"divider\"></li>\n                                                <li>\n                                                    <a href=\"#pablo\">Separated link</a>\n                                                </li>\n                                                <li class=\"divider\"></li>\n                                                <li>\n                                                    <a href=\"#pablo\">One more separated link</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-4 col-md-6 col-sm-3\">\n                                        <div class=\"dropup\">\n                                            <button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropup\n                                                <b class=\"caret\"></b>\n                                            </button>\n                                            <ul class=\"dropdown-menu dropdown-menu-left\">\n                                                <li class=\"dropdown-header\">Dropdown header</li>\n                                                <li>\n                                                    <a href=\"#pablo\">Action</a>\n                                                </li>\n                                                <li>\n                                                    <a href=\"#pablo\">Another action</a>\n                                                </li>\n                                                <li>\n                                                    <a href=\"#pablo\">Something else here</a>\n                                                </li>\n                                                <li class=\"divider\"></li>\n                                                <li>\n                                                    <a href=\"#pablo\">Separated link</a>\n                                                </li>\n                                                <li class=\"divider\"></li>\n                                                <li>\n                                                    <a href=\"#pablo\">One more separated link</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <br>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <legend>Progress Bars</legend>\n                                <div class=\"progress progress-line-primary\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\">\n                                        <span class=\"sr-only\">60% Complete</span>\n                                    </div>\n                                </div>\n                                <div class=\"progress progress-line-info\">\n                                    <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n                                        <span class=\"sr-only\">60% Complete</span>\n                                    </div>\n                                </div>\n                                <div class=\"progress progress-line-danger\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n                                        <span class=\"sr-only\">35% Complete (success)</span>\n                                    </div>\n                                    <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\n                                        <span class=\"sr-only\">20% Complete (warning)</span>\n                                    </div>\n                                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n                                        <span class=\"sr-only\">10% Complete (danger)</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <legend>Sliders</legend>\n                                <div id=\"sliderRegular\" class=\"slider\"></div>\n                                <div id=\"sliderDouble\" class=\"slider slider-info\"></div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <legend>Regular Image</legend>\n                                <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                    <div class=\"fileinput-new thumbnail\">\n                                        <img src=\"../../assets/img/image_placeholder.jpg\" alt=\"...\">\n                                    </div>\n                                    <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                    <div>\n                                        <span class=\"btn btn-rose btn-round btn-file\">\n                                            <span class=\"fileinput-new\">Select image</span>\n                                            <span class=\"fileinput-exists\">Change</span>\n                                            <input type=\"file\" name=\"...\" />\n                                        </span>\n                                        <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <legend>Avatar</legend>\n                                <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                    <div class=\"fileinput-new thumbnail img-circle\">\n                                        <img src=\"../../assets/img/placeholder.jpg\" alt=\"...\">\n                                    </div>\n                                    <div class=\"fileinput-preview fileinput-exists thumbnail img-circle\"></div>\n                                    <div>\n                                        <span class=\"btn btn-round btn-rose btn-file\">\n                                            <span class=\"fileinput-new\">Add Photo</span>\n                                            <span class=\"fileinput-exists\">Change</span>\n                                            <input type=\"file\" name=\"...\" />\n                                        </span>\n                                        <br />\n                                        <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- end card -->\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1144:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">mail_outline</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Stacked Form</h4>\n                        <form method=\"#\" action=\"#\">\n                            <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Email address</label>\n                                <input type=\"email\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Password</label>\n                                <input type=\"password\" class=\"form-control\">\n                            </div>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" name=\"optionsCheckboxes\"> Subscribe to newsletter\n                                </label>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-fill btn-rose\">Submit</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">contacts</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Horizontal Form</h4>\n                        <form class=\"form-horizontal\">\n                            <div class=\"row\">\n                                <label class=\"col-md-3 label-on-left\">Email</label>\n                                <div class=\"col-md-9\">\n                                    <div class=\"form-group label-floating is-empty\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"email\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-md-3 label-on-left\">Password</label>\n                                <div class=\"col-md-9\">\n                                    <div class=\"form-group label-floating is-empty\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"password\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-md-3\"></label>\n                                <div class=\"col-md-9\">\n                                    <div class=\"checkbox form-horizontal-checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\"> Remember Me\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-md-3\"></label>\n                                <div class=\"col-md-9\">\n                                    <div class=\"form-group form-button\">\n                                        <button type=\"submit\" class=\"btn btn-fill btn-rose\">Sign in</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n                        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n                            <h4 class=\"card-title\">Form Elements</h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">With help</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"form-group label-floating is-empty\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"text\" class=\"form-control\" value>\n                                        <span class=\"help-block\">A block of help text that breaks onto a new line.</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Password</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"form-group label-floating is-empty\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"password\" class=\"form-control\" value>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Placeholder</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"form-group label-floating is-empty\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"placeholder\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Disabled</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"form-group label-floating is-empty\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"text\" placeholder=\"Disabled input here...\" disabled=\"\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Static control</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"form-group\">\n                                        <p class=\"form-control-static\">hello@creative-tim.com</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Checkboxes and radios</label>\n                                <div class=\"col-sm-10 checkbox-radios\">\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\"> First Checkbox\n                                        </label>\n                                    </div>\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\"> Second Checkbox\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"optionsRadios\" checked=\"true\"> First Radio\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"optionsRadios\"> Second Radio\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Inline checkboxes</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"checkbox checkbox-inline\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">a\n                                        </label>\n                                    </div>\n                                    <div class=\"checkbox checkbox-inline\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">b\n                                        </label>\n                                    </div>\n                                    <div class=\"checkbox checkbox-inline\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">c\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n                        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n                            <h4 class=\"card-title\">Input Variants</h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Custom Checkboxes &amp; radios</label>\n                                <div class=\"col-sm-4 col-sm-offset-1 checkbox-radios\">\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\"> Unchecked\n                                        </label>\n                                    </div>\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked> Checked\n                                        </label>\n                                    </div>\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" disabled> Disabled Unchecked\n                                        </label>\n                                    </div>\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked disabled> Disabled Checked\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-5 checkbox-radios\">\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"optionsRadios\"> Radio is off\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"optionsRadios\" checked=\"true\"> Radio is on\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"optionsRadiosDisabled\" disabled> Disabled Radio is off\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"optionsRadiosDisabled\" checked=\"true\" disabled> Disabled Radio is on\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Input with success</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"form-group label-floating is-empty has-success\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"text\" class=\"form-control\" value=\"Success\">\n                                        <span class=\"material-icons form-control-feedback\">done</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Input with error</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"form-group label-floating is-empty has-error\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"text\" class=\"form-control\" value=\"Error Input\">\n                                        <span class=\"material-icons form-control-feedback\">clear</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Column sizing</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-3\">\n                                            <div class=\"form-group label-floating is-empty\">\n                                                <label class=\"control-label\"></label>\n                                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-3\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <div class=\"form-group label-floating is-empty\">\n                                                <label class=\"control-label\"></label>\n                                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <div class=\"form-group label-floating is-empty\">\n                                                <label class=\"control-label\"></label>\n                                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1145:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form #f=\"ngForm\" novalidate (ngSubmit)=\"save(f.value, f.valid)\">\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                            <i class=\"material-icons\">mail_outline</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"card-title\">Register Forms</h4>\n\n                            <div class=\"form-group label-floating\">\n                                <label class=\"control-label\" for=\"\">Email Address:\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"user.email\"\n                                  required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Email is required and format should be <i>john@doe.com</i>.\n                                </small>\n                            </div>\n                            <div class=\"form-group label-floating\">\n                                <label  for=\"\" class=\"control-label\">Password\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"user.password\"\n                                  required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n                                <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Password is required\n                                </small>\n\n                            </div>\n\n                            <div class=\"form-group label-floating\">\n                                <label for=\"\" class=\"control-label\">Confirm Password\n                                    <span class=\"star\">*</span>\n                                </label>\n\n                                <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [ngModel]=\"user.confirmPassword\"\n                                  required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\">\n                                <small [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Password mismatch\n                                </small>\n                            </div>\n                            <div class=\"category form-category\">\n                                <span class=\"star\">*</span> Required fields</div>\n                            <div class=\"form-footer text-right\">\n                                <div class=\"checkbox pull-left\">\n                                    <label>\n                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" [ngModel]> Subscribe to newsletter\n                                    </label>\n                                </div>\n                                <div class=\"form-group\">\n\n                                    <button type=\"submit\" class=\"btn btn-rose btn-fill btn-wd\" [disabled]=\"!f.valid\">Register</button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form #f1=\"ngForm\" novalidate (ngSubmit)=\"save(f1.value, f1.valid)\">\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                            <i class=\"material-icons\">contacts</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"card-title\">Login Form</h4>\n                            <div class=\"form-group label-floating\">\n                                <label class=\"control-label\" for=\"\">Email Address:\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"user.email\"\n                                  required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                <small [hidden]=\"email.valid || (email.pristine && !f1.submitted)\" class=\"text-danger\">\n                                  Email is required and format should be <i>john@doe.com</i>.\n                                </small>\n                            </div>\n                            <div class=\"form-group label-floating\">\n                                <label  for=\"\" class=\"control-label\">Password\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"user.password\"\n                                  required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n                                <small [hidden]=\"password.valid || (password.pristine && !f1.submitted)\" class=\"text-danger\">\n                                  Password is required\n                                </small>\n\n                            </div>\n                            <div class=\"category form-category\">\n                                <span class=\"star\">*</span> Required fields</div>\n                            <div class=\"text-center\">\n                                <button type=\"submit\" class=\"btn btn-rose btn-fill btn-wd\" [disabled]=\"!f1.valid\">Login</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form #f2=\"ngForm\" class=\"form-horizontal\" novalidate (ngSubmit)=\"save(f2.value, f2.valid)\">\n                        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n                            <h4 class=\"card-title\">Type Validation</h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Required Text</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"text\"  [ngModel]=\"typeValidation.text\"\n                                          required  #text=\"ngModel\">\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>required</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n\n                                <label class=\"col-sm-2 label-on-left\">Email</label>\n\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"typeValidation.email\"\n                                          required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                        <small [hidden]=\"email.valid || (email.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          Email is required and format should be <i>john@doe.com</i>.\n                                        </small>\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>email=\"true\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Number</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\"></label>\n                                        <input class=\"form-control\" type=\"number\" name=\"number\" number=\"true\" [ngModel]=\"typeValidation.number\"\n                                          required  #number=\"ngModel\">\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>number=\"true\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Url</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\" for=\"url\"></label>\n                                        <input class=\"form-control\" type=\"text\" id=\"url\" required pattern=\"https?://.+\" [(ngModel)]=\"typeValidation.url\" name=\"url\" #url=\"ngModel\">\n                                          <small [hidden]=\"url.valid || (url.pristine && !f2.submitted)\" class=\"text-danger\">\n                                            Must be a valid URL!\n                                          </small>\n                                    </div>\n                                </div>\n\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>url=\"true\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n\n                                <label class=\"col-sm-2 label-on-left\">Equal to</label>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group label-floating column-sizing\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"text\" class=\"form-control\" name=\"idSource\" [ngModel]=\"typeValidation.idSource\" placeholder=\"#idSource\"\n                                          required validateEqual=\"idDestination\" reverse=\"true\" #idSource=\"ngModel\">\n                                        <small [hidden]=\"idSource.valid || (idSource.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          IdSource is required\n                                        </small>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group label-floating column-sizing\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"text\" class=\"form-control\" name=\"idDestination\" [ngModel]=\"typeValidation.idDestination\" placeholder=\"#idDestination\"\n                                          required validateEqual=\"idSource\" reverse=\"false\" #idDestination=\"ngModel\">\n                                        <small [hidden]=\"idDestination.valid || (idDestination.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          IdSource mismatch!\n                                        </small>\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-4 label-on-right\">\n                                    <code>equalTo=\"#idSource\"</code>\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <button type=\"submit\" class=\"btn btn-rose btn-fill\" [disabled]=\"!f2.valid\">Validate Inputs</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <!-- <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form id=\"RangeValidation\" class=\"form-horizontal\" action=\"\" method=\"\">\n\n                        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n                            <h4 class=\"card-title\">Range Validation</h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Min Length</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"min_length\" minLength=\"5\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>minLength=\"5\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Max Length</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"max_length\" maxLength=\"5\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>maxLength=\"5\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Range</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"range\" range=\"[6,10]\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>range=\"[6,10]\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Min Value</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"min\" min=\"6\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>min=\"6\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Max Value</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"max\" max=\"6\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>max=\"6\"</code>\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <button type=\"submit\" class=\"btn btn-rose btn-fill\">Validate Inputs</button>\n                        </div>\n                    </form>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1146:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"col-sm-8 col-sm-offset-2\">\n            <!--      Wizard container        -->\n            <div class=\"wizard-container\">\n                <div class=\"card wizard-card\" data-color=\"rose\" id=\"wizardProfile\">\n                    <form>\n                        <!--        You can switch \" data-color=\"purple\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"blue\"       -->\n                        <div class=\"wizard-header\">\n                            <h3 class=\"wizard-title\">\n                                Build Your Profile\n                            </h3>\n                            <h5>This information will let us know more about you.</h5>\n                        </div>\n                        <div class=\"wizard-navigation\">\n                            <ul>\n                                <li>\n                                    <a href=\"#about\" data-toggle=\"tab\">About</a>\n                                </li>\n                                <li>\n                                    <a href=\"#account\" data-toggle=\"tab\">Account</a>\n                                </li>\n                                <li>\n                                    <a href=\"#address\" data-toggle=\"tab\">Address</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane\" id=\"about\">\n                                <div class=\"row\">\n                                    <h4 class=\"info-text\"> Let's start with the basic information (with validation)</h4>\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\n                                        <div class=\"picture-container\">\n                                            <div class=\"picture\">\n                                                <img src=\"../../assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\n                                                <input type=\"file\" id=\"wizard-picture\">\n                                            </div>\n                                            <h6>Choose Picture</h6>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">face</i>\n                                            </span>\n                                            <div class=\"form-group label-floating\">\n                                                <label class=\"control-label\">First Name\n                                                    <small>(required)</small>\n                                                </label>\n                                                <input name=\"firstname\" type=\"text\" class=\"form-control\">\n                                            </div>\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">record_voice_over</i>\n                                            </span>\n                                            <div class=\"form-group label-floating\">\n                                                <label class=\"control-label\">Last Name\n                                                    <small>(required)</small>\n                                                </label>\n                                                <input name=\"lastname\" type=\"text\" class=\"form-control\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-10 col-lg-offset-1\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">email</i>\n                                            </span>\n                                            <div class=\"form-group label-floating\">\n                                                <label class=\"control-label\">Email\n                                                    <small>(required)</small>\n                                                </label>\n                                                <input name=\"email\" type=\"email\" class=\"form-control\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane\" id=\"account\">\n                                <h4 class=\"info-text\"> What are you doing? (checkboxes) </h4>\n                                <div class=\"row\">\n                                    <div class=\"col-lg-10 col-lg-offset-1\">\n                                        <div class=\"col-sm-4\">\n                                            <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                                                <input type=\"checkbox\" name=\"jobb\" value=\"Design\">\n                                                <div class=\"icon\">\n                                                    <i class=\"fa fa-pencil\"></i>\n                                                </div>\n                                                <h6>Design</h6>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                                                <input type=\"checkbox\" name=\"jobb\" value=\"Code\">\n                                                <div class=\"icon\">\n                                                    <i class=\"fa fa-terminal\"></i>\n                                                </div>\n                                                <h6>Code</h6>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                                                <input type=\"checkbox\" name=\"jobb\" value=\"Develop\">\n                                                <div class=\"icon\">\n                                                    <i class=\"fa fa-laptop\"></i>\n                                                </div>\n                                                <h6>Develop</h6>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane\" id=\"address\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <h4 class=\"info-text\"> Are you living in a nice area? </h4>\n                                    </div>\n                                    <div class=\"col-sm-7 col-sm-offset-1\">\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Street Name</label>\n                                            <input type=\"text\" class=\"form-control\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Street No.</label>\n                                            <input type=\"text\" class=\"form-control\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-5 col-sm-offset-1\">\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">City</label>\n                                            <input type=\"text\" class=\"form-control\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-5\">\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Country</label>\n                                            <select name=\"country\" class=\"form-control\">\n                                                <option disabled=\"\" selected=\"\"></option>\n                                                <option value=\"Afghanistan\"> Afghanistan </option>\n                                                <option value=\"Albania\"> Albania </option>\n                                                <option value=\"Algeria\"> Algeria </option>\n                                                <option value=\"American Samoa\"> American Samoa </option>\n                                                <option value=\"Andorra\"> Andorra </option>\n                                                <option value=\"Angola\"> Angola </option>\n                                                <option value=\"Anguilla\"> Anguilla </option>\n                                                <option value=\"Antarctica\"> Antarctica </option>\n                                                <option value=\"...\">...</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"wizard-footer\">\n                            <div class=\"pull-right\">\n                                <input type='button' class='btn btn-next btn-fill btn-rose btn-wd' name='next' value='Next' />\n                                <input type='button' class='btn btn-finish btn-fill btn-rose btn-wd' name='finish' value='Finish' />\n                            </div>\n                            <div class=\"pull-left\">\n                                <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <!-- wizard container -->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equal_validator_directive__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_routing__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extendedforms_extendedforms_component__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__regularforms_regularforms_component__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validationforms_validationforms_component__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wizard_wizard_component__ = __webpack_require__(928);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms", function() { return Forms; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Forms = (function () {
    function Forms() {
    }
    Forms = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__forms_routing__["a" /* FormsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__extendedforms_extendedforms_component__["a" /* ExtendedFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__regularforms_regularforms_component__["a" /* RegularFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__validationforms_validationforms_component__["a" /* ValidationFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__wizard_wizard_component__["a" /* WizardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__equal_validator_directive__["a" /* EqualValidator */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Forms);
    return Forms;
}());
//# sourceMappingURL=forms.module.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedFormsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtendedFormsComponent = (function () {
    function ExtendedFormsComponent() {
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/plugins/bootstrap-datetimepicker.js');
        // $.getScript('../../../assets/js/plugins/jquery.tagsinput.js');
        //
        // // Init Tags Input
        if ($(".tagsinput").length != 0) {
            $(".tagsinput").tagsinput();
        }
        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker();
        }
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
        $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove',
                inline: true
            }
        });
        $('.timepicker').datetimepicker({
            //          format: 'H:mm',    // use this format if you want the 24hours timepicker
            format: 'h:mm A',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove',
                inline: true
            }
        });
        var noUiSlider = __webpack_require__(1132);
        var sliderDouble = document.getElementById('sliderDouble');
        noUiSlider.create(sliderDouble, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
        var sliderRegular = document.getElementById('sliderRegular');
        noUiSlider.create(sliderRegular, {
            start: 40,
            connect: "lower",
            range: {
                min: 0,
                max: 100
            }
        });
    };
    ExtendedFormsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'extendedforms-cmp',
            template: __webpack_require__(1143)
        }), 
        __metadata('design:paramtypes', [])
    ], ExtendedFormsComponent);
    return ExtendedFormsComponent;
}());
//# sourceMappingURL=extendedforms.component.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegularFormsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegularFormsComponent = (function () {
    function RegularFormsComponent() {
    }
    RegularFormsComponent.prototype.ngOnInit = function () {
    };
    RegularFormsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'regularforms-cmp',
            template: __webpack_require__(1144)
        }), 
        __metadata('design:paramtypes', [])
    ], RegularFormsComponent);
    return RegularFormsComponent;
}());
//# sourceMappingURL=regularforms.component.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationFormsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationFormsComponent = (function () {
    function ValidationFormsComponent() {
    }
    ValidationFormsComponent.prototype.ngOnInit = function () {
        this.user = {
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.typeValidation = {
            text: '',
            email: '',
            idSource: '',
            idDestination: '',
            url: ''
        };
    };
    ValidationFormsComponent.prototype.save = function (model, isValid) {
        // call API to save customer
        console.log(model, isValid);
    };
    ValidationFormsComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    ValidationFormsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'validationforms-cmp',
            template: __webpack_require__(1145)
        }), 
        __metadata('design:paramtypes', [])
    ], ValidationFormsComponent);
    return ValidationFormsComponent;
}());
//# sourceMappingURL=validationforms.component.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardComponent = (function () {
    function WizardComponent() {
    }
    WizardComponent.prototype.readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    WizardComponent.prototype.ngOnInit = function () {
        // Code for the Validator
        var $validator = $('.wizard-card form').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 3
                },
                lastname: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    minlength: 3,
                }
            },
            errorPlacement: function (error, element) {
                $(element).parent('div').addClass('has-error');
            }
        });
        // Wizard Initialization
        $('.wizard-card').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',
            onNext: function (tab, navigation, index) {
                var $valid = $('.wizard-card form').valid();
                if (!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                //check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $width = 100 / $total;
                var $wizard = navigation.closest('.wizard-card');
                var $display_width = $(document).width();
                if ($display_width < 600 && $total > 3) {
                    $width = 50;
                }
                navigation.find('li').css('width', $width + '%');
                var $first_li = navigation.find('li:first-child a').html();
                var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
                $('.wizard-card .wizard-navigation').append($moving_div);
                //    this.refreshAnimation($wizard, index);
                var total_steps = $wizard.find('li').length;
                var move_distance = $wizard.width() / total_steps;
                var step_width = move_distance;
                move_distance *= index;
                var $current = index + 1;
                if ($current == 1) {
                    move_distance -= 8;
                }
                else if ($current == total_steps) {
                    move_distance += 8;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css('transition', 'transform 0s');
            },
            onTabClick: function (tab, navigation, index) {
                var $valid = $('.wizard-card form').valid();
                if (!$valid) {
                    return false;
                }
                else {
                    return true;
                }
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var $wizard = navigation.closest('.wizard-card');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                }
                else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }
                var button_text = navigation.find('li:nth-child(' + $current + ') a').html();
                setTimeout(function () {
                    $('.moving-tab').text(button_text);
                }, 150);
                var checkbox = $('.footer-checkbox');
                if (index !== 0) {
                    $(checkbox).css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'position': 'absolute'
                    });
                }
                else {
                    $(checkbox).css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }
                // this.refreshAnimation($wizard, index);
                var total_steps = $wizard.find('li').length;
                var move_distance = $wizard.width() / total_steps;
                var step_width = move_distance;
                move_distance *= index;
                var $current = index + 1;
                if ($current == 1) {
                    move_distance -= 8;
                }
                else if ($current == total_steps) {
                    move_distance += 8;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
            }
        });
        // Prepare the preview for profile picture
        $("#wizard-picture").change(function () {
            this.readURL(this);
        });
        $('[data-toggle="wizard-radio"]').click(function () {
            console.log('click');
            var wizard = $(this).closest('.wizard-card');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });
        $('[data-toggle="wizard-checkbox"]').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            }
            else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });
        $('.set-full-height').css('height', 'auto');
    };
    WizardComponent.prototype.ngOnChanges = function () {
        var input = $(this);
        var target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    WizardComponent.prototype.ngAfterViewInit = function () {
        $('.wizard-card').each(function () {
            var $wizard = $(this);
            var index = $wizard.bootstrapWizard('currentIndex');
            // this.refreshAnimation($wizard, index);
            var total_steps = $wizard.find('li').length;
            var move_distance = $wizard.width() / total_steps;
            var step_width = move_distance;
            move_distance *= index;
            var $current = index + 1;
            if ($current == 1) {
                move_distance -= 8;
            }
            else if ($current == total_steps) {
                move_distance += 8;
            }
            $wizard.find('.moving-tab').css('width', step_width);
            $('.moving-tab').css({
                'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
            });
            $('.moving-tab').css({
                'transition': 'transform 0s'
            });
        });
    };
    WizardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'wizard-cmp',
            template: __webpack_require__(1146)
        }), 
        __metadata('design:paramtypes', [])
    ], WizardComponent);
    return WizardComponent;
}());
//# sourceMappingURL=wizard.component.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map
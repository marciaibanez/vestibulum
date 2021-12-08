/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './src/js/index.js')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './node_modules/@glidejs/glide/dist/css/glide.core.css':
      /*!*************************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/css/glide.core.css ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../../css-loader!../../../../postcss-loader/src!../../../../sass-loader/dist/cjs.js!./glide.core.css */ './node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@glidejs/glide/dist/css/glide.core.css'
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../../style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js'
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
      },

    /***/ './node_modules/@glidejs/glide/dist/css/glide.theme.css':
      /*!**************************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/css/glide.theme.css ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../../css-loader!../../../../postcss-loader/src!../../../../sass-loader/dist/cjs.js!./glide.theme.css */ './node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@glidejs/glide/dist/css/glide.theme.css'
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../../style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js'
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
      },

    /***/ './node_modules/@glidejs/glide/dist/glide.esm.js':
      /*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return Glide;
          }
        );
        /*!
         * Glide.js v3.5.2
         * (c) 2013-2021 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
         * Released under the MIT License.
         */

        function _typeof(obj) {
          '@babel/helpers - typeof';

          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          }

          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };

          return _setPrototypeOf(o, p);
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === 'function') return true;

          try {
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function() {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }

          return self;
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (typeof call === 'object' || typeof call === 'function')
          ) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError(
              'Derived constructors may only return object or undefined'
            );
          }

          return _assertThisInitialized(self);
        }

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();

          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;

            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;

              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
          };
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }

          return object;
        }

        function _get() {
          if (typeof Reflect !== 'undefined' && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);

              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);

              if (desc.get) {
                return desc.get.call(arguments.length < 3 ? target : receiver);
              }

              return desc.value;
            };
          }

          return _get.apply(this, arguments);
        }

        var defaults = {
          /**
           * Type of the movement.
           *
           * Available types:
           * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
           * `carousel` - Changes slides without starting over when it reaches the first or last slide.
           *
           * @type {String}
           */
          type: 'slider',

          /**
           * Start at specific slide number defined with zero-based index.
           *
           * @type {Number}
           */
          startAt: 0,

          /**
           * A number of slides visible on the single viewport.
           *
           * @type {Number}
           */
          perView: 1,

          /**
           * Focus currently active slide at a specified position in the track.
           *
           * Available inputs:
           * `center` - Current slide will be always focused at the center of a track.
           * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
           *
           * @type {String|Number}
           */
          focusAt: 0,

          /**
           * A size of the gap added between slides.
           *
           * @type {Number}
           */
          gap: 10,

          /**
           * Change slides after a specified interval. Use `false` for turning off autoplay.
           *
           * @type {Number|Boolean}
           */
          autoplay: false,

          /**
           * Stop autoplay on mouseover event.
           *
           * @type {Boolean}
           */
          hoverpause: true,

          /**
           * Allow for changing slides with left and right keyboard arrows.
           *
           * @type {Boolean}
           */
          keyboard: true,

          /**
           * Stop running `perView` number of slides from the end. Use this
           * option if you don't want to have an empty space after
           * a slider. Works only with `slider` type and a
           * non-centered `focusAt` setting.
           *
           * @type {Boolean}
           */
          bound: false,

          /**
           * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
           *
           * @type {Number|Boolean}
           */
          swipeThreshold: 80,

          /**
           * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
           *
           * @type {Number|Boolean}
           */
          dragThreshold: 120,

          /**
           * A number of slides moved on single swipe.
           *
           * Available types:
           * `` - Moves slider by one slide per swipe
           * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
           *
           * @type {String}
           */
          perSwipe: '',

          /**
           * Moving distance ratio of the slides on a swiping and dragging.
           *
           * @type {Number}
           */
          touchRatio: 0.5,

          /**
           * Angle required to activate slides moving on swiping or dragging.
           *
           * @type {Number}
           */
          touchAngle: 45,

          /**
           * Duration of the animation in milliseconds.
           *
           * @type {Number}
           */
          animationDuration: 400,

          /**
           * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
           *
           * @type {Boolean}
           */
          rewind: true,

          /**
           * Duration of the rewinding animation of the `slider` type in milliseconds.
           *
           * @type {Number}
           */
          rewindDuration: 800,

          /**
           * Easing function for the animation.
           *
           * @type {String}
           */
          animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

          /**
           * Wait for the animation to finish until the next user input can be processed
           *
           * @type {boolean}
           */
          waitForTransition: true,

          /**
           * Throttle costly events at most once per every wait milliseconds.
           *
           * @type {Number}
           */
          throttle: 10,

          /**
           * Moving direction mode.
           *
           * Available inputs:
           * - 'ltr' - left to right movement,
           * - 'rtl' - right to left movement.
           *
           * @type {String}
           */
          direction: 'ltr',

          /**
           * The distance value of the next and previous viewports which
           * have to peek in the current view. Accepts number and
           * pixels as a string. Left and right peeking can be
           * set up separately with a directions object.
           *
           * For example:
           * `100` - Peek 100px on the both sides.
           * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
           *
           * @type {Number|String|Object}
           */
          peek: 0,

          /**
           * Defines how many clones of current viewport will be generated.
           *
           * @type {Number}
           */
          cloningRatio: 1,

          /**
           * Collection of options applied at specified media breakpoints.
           * For example: display two slides per view under 800px.
           * `{
           *   '800px': {
           *     perView: 2
           *   }
           * }`
           */
          breakpoints: {},

          /**
           * Collection of internally used HTML classes.
           *
           * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
           * @type {Object}
           */
          classes: {
            swipeable: 'glide--swipeable',
            dragging: 'glide--dragging',
            direction: {
              ltr: 'glide--ltr',
              rtl: 'glide--rtl'
            },
            type: {
              slider: 'glide--slider',
              carousel: 'glide--carousel'
            },
            slide: {
              clone: 'glide__slide--clone',
              active: 'glide__slide--active'
            },
            arrow: {
              disabled: 'glide__arrow--disabled'
            },
            nav: {
              active: 'glide__bullet--active'
            }
          }
        };

        /**
         * Outputs warning message to the bowser console.
         *
         * @param  {String} msg
         * @return {Void}
         */
        function warn(msg) {
          console.error('[Glide warn]: '.concat(msg));
        }

        /**
         * Converts value entered as number
         * or string to integer value.
         *
         * @param {String} value
         * @returns {Number}
         */
        function toInt(value) {
          return parseInt(value);
        }
        /**
         * Converts value entered as number
         * or string to flat value.
         *
         * @param {String} value
         * @returns {Number}
         */

        function toFloat(value) {
          return parseFloat(value);
        }
        /**
         * Indicates whether the specified value is a string.
         *
         * @param  {*}   value
         * @return {Boolean}
         */

        function isString(value) {
          return typeof value === 'string';
        }
        /**
         * Indicates whether the specified value is an object.
         *
         * @param  {*} value
         * @return {Boolean}
         *
         * @see https://github.com/jashkenas/underscore
         */

        function isObject(value) {
          var type = _typeof(value);

          return type === 'function' || (type === 'object' && !!value); // eslint-disable-line no-mixed-operators
        }
        /**
         * Indicates whether the specified value is a function.
         *
         * @param  {*} value
         * @return {Boolean}
         */

        function isFunction(value) {
          return typeof value === 'function';
        }
        /**
         * Indicates whether the specified value is undefined.
         *
         * @param  {*} value
         * @return {Boolean}
         */

        function isUndefined(value) {
          return typeof value === 'undefined';
        }
        /**
         * Indicates whether the specified value is an array.
         *
         * @param  {*} value
         * @return {Boolean}
         */

        function isArray(value) {
          return value.constructor === Array;
        }

        /**
         * Creates and initializes specified collection of extensions.
         * Each extension receives access to instance of glide and rest of components.
         *
         * @param {Object} glide
         * @param {Object} extensions
         *
         * @returns {Object}
         */

        function mount(glide, extensions, events) {
          var components = {};

          for (var name in extensions) {
            if (isFunction(extensions[name])) {
              components[name] = extensions[name](glide, components, events);
            } else {
              warn('Extension must be a function');
            }
          }

          for (var _name in components) {
            if (isFunction(components[_name].mount)) {
              components[_name].mount();
            }
          }

          return components;
        }

        /**
         * Defines getter and setter property on the specified object.
         *
         * @param  {Object} obj         Object where property has to be defined.
         * @param  {String} prop        Name of the defined property.
         * @param  {Object} definition  Get and set definitions for the property.
         * @return {Void}
         */
        function define(obj, prop, definition) {
          Object.defineProperty(obj, prop, definition);
        }
        /**
         * Sorts aphabetically object keys.
         *
         * @param  {Object} obj
         * @return {Object}
         */

        function sortKeys(obj) {
          return Object.keys(obj)
            .sort()
            .reduce(function(r, k) {
              r[k] = obj[k];
              return r[k], r;
            }, {});
        }
        /**
         * Merges passed settings object with default options.
         *
         * @param  {Object} defaults
         * @param  {Object} settings
         * @return {Object}
         */

        function mergeOptions(defaults, settings) {
          var options = Object.assign({}, defaults, settings); // `Object.assign` do not deeply merge objects, so we
          // have to do it manually for every nested object
          // in options. Although it does not look smart,
          // it's smaller and faster than some fancy
          // merging deep-merge algorithm script.

          if (settings.hasOwnProperty('classes')) {
            options.classes = Object.assign(
              {},
              defaults.classes,
              settings.classes
            );

            if (settings.classes.hasOwnProperty('direction')) {
              options.classes.direction = Object.assign(
                {},
                defaults.classes.direction,
                settings.classes.direction
              );
            }

            if (settings.classes.hasOwnProperty('type')) {
              options.classes.type = Object.assign(
                {},
                defaults.classes.type,
                settings.classes.type
              );
            }

            if (settings.classes.hasOwnProperty('slide')) {
              options.classes.slide = Object.assign(
                {},
                defaults.classes.slide,
                settings.classes.slide
              );
            }

            if (settings.classes.hasOwnProperty('arrow')) {
              options.classes.arrow = Object.assign(
                {},
                defaults.classes.arrow,
                settings.classes.arrow
              );
            }

            if (settings.classes.hasOwnProperty('nav')) {
              options.classes.nav = Object.assign(
                {},
                defaults.classes.nav,
                settings.classes.nav
              );
            }
          }

          if (settings.hasOwnProperty('breakpoints')) {
            options.breakpoints = Object.assign(
              {},
              defaults.breakpoints,
              settings.breakpoints
            );
          }

          return options;
        }

        var EventsBus = /*#__PURE__*/ (function() {
          /**
           * Construct a EventBus instance.
           *
           * @param {Object} events
           */
          function EventsBus() {
            var events =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};

            _classCallCheck(this, EventsBus);

            this.events = events;
            this.hop = events.hasOwnProperty;
          }
          /**
           * Adds listener to the specifed event.
           *
           * @param {String|Array} event
           * @param {Function} handler
           */

          _createClass(EventsBus, [
            {
              key: 'on',
              value: function on(event, handler) {
                if (isArray(event)) {
                  for (var i = 0; i < event.length; i++) {
                    this.on(event[i], handler);
                  }

                  return;
                } // Create the event's object if not yet created

                if (!this.hop.call(this.events, event)) {
                  this.events[event] = [];
                } // Add the handler to queue

                var index = this.events[event].push(handler) - 1; // Provide handle back for removal of event

                return {
                  remove: function remove() {
                    delete this.events[event][index];
                  }
                };
              }
              /**
               * Runs registered handlers for specified event.
               *
               * @param {String|Array} event
               * @param {Object=} context
               */
            },
            {
              key: 'emit',
              value: function emit(event, context) {
                if (isArray(event)) {
                  for (var i = 0; i < event.length; i++) {
                    this.emit(event[i], context);
                  }

                  return;
                } // If the event doesn't exist, or there's no handlers in queue, just leave

                if (!this.hop.call(this.events, event)) {
                  return;
                } // Cycle through events queue, fire!

                this.events[event].forEach(function(item) {
                  item(context || {});
                });
              }
            }
          ]);

          return EventsBus;
        })();

        var Glide$1 = /*#__PURE__*/ (function() {
          /**
           * Construct glide.
           *
           * @param  {String} selector
           * @param  {Object} options
           */
          function Glide(selector) {
            var options =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};

            _classCallCheck(this, Glide);

            this._c = {};
            this._t = [];
            this._e = new EventsBus();
            this.disabled = false;
            this.selector = selector;
            this.settings = mergeOptions(defaults, options);
            this.index = this.settings.startAt;
          }
          /**
           * Initializes glide.
           *
           * @param {Object} extensions Collection of extensions to initialize.
           * @return {Glide}
           */

          _createClass(Glide, [
            {
              key: 'mount',
              value: function mount$1() {
                var extensions =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};

                this._e.emit('mount.before');

                if (isObject(extensions)) {
                  this._c = mount(this, extensions, this._e);
                } else {
                  warn('You need to provide a object on `mount()`');
                }

                this._e.emit('mount.after');

                return this;
              }
              /**
               * Collects an instance `translate` transformers.
               *
               * @param  {Array} transformers Collection of transformers.
               * @return {Void}
               */
            },
            {
              key: 'mutate',
              value: function mutate() {
                var transformers =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : [];

                if (isArray(transformers)) {
                  this._t = transformers;
                } else {
                  warn('You need to provide a array on `mutate()`');
                }

                return this;
              }
              /**
               * Updates glide with specified settings.
               *
               * @param {Object} settings
               * @return {Glide}
               */
            },
            {
              key: 'update',
              value: function update() {
                var settings =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                this.settings = mergeOptions(this.settings, settings);

                if (settings.hasOwnProperty('startAt')) {
                  this.index = settings.startAt;
                }

                this._e.emit('update');

                return this;
              }
              /**
               * Change slide with specified pattern. A pattern must be in the special format:
               * `>` - Move one forward
               * `<` - Move one backward
               * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
               * `>>` - Rewinds to end (last slide)
               * `<<` - Rewinds to start (first slide)
               * `|>` - Move one viewport forward
               * `|<` - Move one viewport backward
               *
               * @param {String} pattern
               * @return {Glide}
               */
            },
            {
              key: 'go',
              value: function go(pattern) {
                this._c.Run.make(pattern);

                return this;
              }
              /**
               * Move track by specified distance.
               *
               * @param {String} distance
               * @return {Glide}
               */
            },
            {
              key: 'move',
              value: function move(distance) {
                this._c.Transition.disable();

                this._c.Move.make(distance);

                return this;
              }
              /**
               * Destroy instance and revert all changes done by this._c.
               *
               * @return {Glide}
               */
            },
            {
              key: 'destroy',
              value: function destroy() {
                this._e.emit('destroy');

                return this;
              }
              /**
               * Start instance autoplaying.
               *
               * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
               * @return {Glide}
               */
            },
            {
              key: 'play',
              value: function play() {
                var interval =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : false;

                if (interval) {
                  this.settings.autoplay = interval;
                }

                this._e.emit('play');

                return this;
              }
              /**
               * Stop instance autoplaying.
               *
               * @return {Glide}
               */
            },
            {
              key: 'pause',
              value: function pause() {
                this._e.emit('pause');

                return this;
              }
              /**
               * Sets glide into a idle status.
               *
               * @return {Glide}
               */
            },
            {
              key: 'disable',
              value: function disable() {
                this.disabled = true;
                return this;
              }
              /**
               * Sets glide into a active status.
               *
               * @return {Glide}
               */
            },
            {
              key: 'enable',
              value: function enable() {
                this.disabled = false;
                return this;
              }
              /**
               * Adds cuutom event listener with handler.
               *
               * @param  {String|Array} event
               * @param  {Function} handler
               * @return {Glide}
               */
            },
            {
              key: 'on',
              value: function on(event, handler) {
                this._e.on(event, handler);

                return this;
              }
              /**
               * Checks if glide is a precised type.
               *
               * @param  {String} name
               * @return {Boolean}
               */
            },
            {
              key: 'isType',
              value: function isType(name) {
                return this.settings.type === name;
              }
              /**
               * Gets value of the core options.
               *
               * @return {Object}
               */
            },
            {
              key: 'settings',
              get: function get() {
                return this._o;
              },
              /**
               * Sets value of the core options.
               *
               * @param  {Object} o
               * @return {Void}
               */
              set: function set(o) {
                if (isObject(o)) {
                  this._o = o;
                } else {
                  warn('Options must be an `object` instance.');
                }
              }
              /**
               * Gets current index of the slider.
               *
               * @return {Object}
               */
            },
            {
              key: 'index',
              get: function get() {
                return this._i;
              },
              /**
               * Sets current index a slider.
               *
               * @return {Object}
               */
              set: function set(i) {
                this._i = toInt(i);
              }
              /**
               * Gets type name of the slider.
               *
               * @return {String}
               */
            },
            {
              key: 'type',
              get: function get() {
                return this.settings.type;
              }
              /**
               * Gets value of the idle status.
               *
               * @return {Boolean}
               */
            },
            {
              key: 'disabled',
              get: function get() {
                return this._d;
              },
              /**
               * Sets value of the idle status.
               *
               * @return {Boolean}
               */
              set: function set(status) {
                this._d = !!status;
              }
            }
          ]);

          return Glide;
        })();

        function Run(Glide, Components, Events) {
          var Run = {
            /**
             * Initializes autorunning of the glide.
             *
             * @return {Void}
             */
            mount: function mount() {
              this._o = false;
            },

            /**
             * Makes glides running based on the passed moving schema.
             *
             * @param {String} move
             */
            make: function make(move) {
              var _this = this;

              if (!Glide.disabled) {
                !Glide.settings.waitForTransition || Glide.disable();
                this.move = move;
                Events.emit('run.before', this.move);
                this.calculate();
                Events.emit('run', this.move);
                Components.Transition.after(function() {
                  if (_this.isStart()) {
                    Events.emit('run.start', _this.move);
                  }

                  if (_this.isEnd()) {
                    Events.emit('run.end', _this.move);
                  }

                  if (_this.isOffset()) {
                    _this._o = false;
                    Events.emit('run.offset', _this.move);
                  }

                  Events.emit('run.after', _this.move);
                  Glide.enable();
                });
              }
            },

            /**
             * Calculates current index based on defined move.
             *
             * @return {Number|Undefined}
             */
            calculate: function calculate() {
              var move = this.move,
                length = this.length;
              var steps = move.steps,
                direction = move.direction; // By default assume that size of view is equal to one slide

              var viewSize = 1; // While direction is `=` we want jump to
              // a specified index described in steps.

              if (direction === '=') {
                // Check if bound is true,
                // as we want to avoid whitespaces.
                if (Glide.settings.bound && toInt(steps) > length) {
                  Glide.index = length;
                  return;
                }

                Glide.index = steps;
                return;
              } // When pattern is equal to `>>` we want
              // fast forward to the last slide.

              if (direction === '>' && steps === '>') {
                Glide.index = length;
                return;
              } // When pattern is equal to `<<` we want
              // fast forward to the first slide.

              if (direction === '<' && steps === '<') {
                Glide.index = 0;
                return;
              } // pagination movement

              if (direction === '|') {
                viewSize = Glide.settings.perView || 1;
              } // we are moving forward

              if (direction === '>' || (direction === '|' && steps === '>')) {
                var index = calculateForwardIndex(viewSize);

                if (index > length) {
                  this._o = true;
                }

                Glide.index = normalizeForwardIndex(index, viewSize);
                return;
              } // we are moving backward

              if (direction === '<' || (direction === '|' && steps === '<')) {
                var _index = calculateBackwardIndex(viewSize);

                if (_index < 0) {
                  this._o = true;
                }

                Glide.index = normalizeBackwardIndex(_index, viewSize);
                return;
              }

              warn(
                'Invalid direction pattern ['
                  .concat(direction)
                  .concat(steps, '] has been used')
              );
            },

            /**
             * Checks if we are on the first slide.
             *
             * @return {Boolean}
             */
            isStart: function isStart() {
              return Glide.index <= 0;
            },

            /**
             * Checks if we are on the last slide.
             *
             * @return {Boolean}
             */
            isEnd: function isEnd() {
              return Glide.index >= this.length;
            },

            /**
             * Checks if we are making a offset run.
             *
             * @param {String} direction
             * @return {Boolean}
             */
            isOffset: function isOffset() {
              var direction =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : undefined;

              if (!direction) {
                return this._o;
              }

              if (!this._o) {
                return false;
              } // did we view to the right?

              if (direction === '|>') {
                return this.move.direction === '|' && this.move.steps === '>';
              } // did we view to the left?

              if (direction === '|<') {
                return this.move.direction === '|' && this.move.steps === '<';
              }

              return this.move.direction === direction;
            },

            /**
             * Checks if bound mode is active
             *
             * @return {Boolean}
             */
            isBound: function isBound() {
              return (
                Glide.isType('slider') &&
                Glide.settings.focusAt !== 'center' &&
                Glide.settings.bound
              );
            }
          };
          /**
           * Returns index value to move forward/to the right
           *
           * @param viewSize
           * @returns {Number}
           */

          function calculateForwardIndex(viewSize) {
            var index = Glide.index;

            if (Glide.isType('carousel')) {
              return index + viewSize;
            }

            return index + (viewSize - (index % viewSize));
          }
          /**
           * Normalizes the given forward index based on glide settings, preventing it to exceed certain boundaries
           *
           * @param index
           * @param length
           * @param viewSize
           * @returns {Number}
           */

          function normalizeForwardIndex(index, viewSize) {
            var length = Run.length;

            if (index <= length) {
              return index;
            }

            if (Glide.isType('carousel')) {
              return index - (length + 1);
            }

            if (Glide.settings.rewind) {
              // bound does funny things with the length, therefor we have to be certain
              // that we are on the last possible index value given by bound
              if (Run.isBound() && !Run.isEnd()) {
                return length;
              }

              return 0;
            }

            if (Run.isBound()) {
              return length;
            }

            return Math.floor(length / viewSize) * viewSize;
          }
          /**
           * Calculates index value to move backward/to the left
           *
           * @param viewSize
           * @returns {Number}
           */

          function calculateBackwardIndex(viewSize) {
            var index = Glide.index;

            if (Glide.isType('carousel')) {
              return index - viewSize;
            } // ensure our back navigation results in the same index as a forward navigation
            // to experience a homogeneous paging

            var view = Math.ceil(index / viewSize);
            return (view - 1) * viewSize;
          }
          /**
           * Normalizes the given backward index based on glide settings, preventing it to exceed certain boundaries
           *
           * @param index
           * @param length
           * @param viewSize
           * @returns {*}
           */

          function normalizeBackwardIndex(index, viewSize) {
            var length = Run.length;

            if (index >= 0) {
              return index;
            }

            if (Glide.isType('carousel')) {
              return index + (length + 1);
            }

            if (Glide.settings.rewind) {
              // bound does funny things with the length, therefor we have to be certain
              // that we are on first possible index value before we to rewind to the length given by bound
              if (Run.isBound() && Run.isStart()) {
                return length;
              }

              return Math.floor(length / viewSize) * viewSize;
            }

            return 0;
          }

          define(Run, 'move', {
            /**
             * Gets value of the move schema.
             *
             * @returns {Object}
             */
            get: function get() {
              return this._m;
            },

            /**
             * Sets value of the move schema.
             *
             * @returns {Object}
             */
            set: function set(value) {
              var step = value.substr(1);
              this._m = {
                direction: value.substr(0, 1),
                steps: step ? (toInt(step) ? toInt(step) : step) : 0
              };
            }
          });
          define(Run, 'length', {
            /**
             * Gets value of the running distance based
             * on zero-indexing number of slides.
             *
             * @return {Number}
             */
            get: function get() {
              var settings = Glide.settings;
              var length = Components.Html.slides.length; // If the `bound` option is active, a maximum running distance should be
              // reduced by `perView` and `focusAt` settings. Running distance
              // should end before creating an empty space after instance.

              if (this.isBound()) {
                return (
                  length -
                  1 -
                  (toInt(settings.perView) - 1) +
                  toInt(settings.focusAt)
                );
              }

              return length - 1;
            }
          });
          define(Run, 'offset', {
            /**
             * Gets status of the offsetting flag.
             *
             * @return {Boolean}
             */
            get: function get() {
              return this._o;
            }
          });
          return Run;
        }

        /**
         * Returns a current time.
         *
         * @return {Number}
         */
        function now() {
          return new Date().getTime();
        }

        /**
         * Returns a function, that, when invoked, will only be triggered
         * at most once during a given window of time.
         *
         * @param {Function} func
         * @param {Number} wait
         * @param {Object=} options
         * @return {Function}
         *
         * @see https://github.com/jashkenas/underscore
         */

        function throttle(func, wait, options) {
          var timeout, context, args, result;
          var previous = 0;
          if (!options) options = {};

          var later = function later() {
            previous = options.leading === false ? 0 : now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          };

          var throttled = function throttled() {
            var at = now();
            if (!previous && options.leading === false) previous = at;
            var remaining = wait - (at - previous);
            context = this;
            args = arguments;

            if (remaining <= 0 || remaining > wait) {
              if (timeout) {
                clearTimeout(timeout);
                timeout = null;
              }

              previous = at;
              result = func.apply(context, args);
              if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
              timeout = setTimeout(later, remaining);
            }

            return result;
          };

          throttled.cancel = function() {
            clearTimeout(timeout);
            previous = 0;
            timeout = context = args = null;
          };

          return throttled;
        }

        var MARGIN_TYPE = {
          ltr: ['marginLeft', 'marginRight'],
          rtl: ['marginRight', 'marginLeft']
        };
        function Gaps(Glide, Components, Events) {
          var Gaps = {
            /**
             * Applies gaps between slides. First and last
             * slides do not receive it's edge margins.
             *
             * @param {HTMLCollection} slides
             * @return {Void}
             */
            apply: function apply(slides) {
              for (var i = 0, len = slides.length; i < len; i++) {
                var style = slides[i].style;
                var direction = Components.Direction.value;

                if (i !== 0) {
                  style[MARGIN_TYPE[direction][0]] = ''.concat(
                    this.value / 2,
                    'px'
                  );
                } else {
                  style[MARGIN_TYPE[direction][0]] = '';
                }

                if (i !== slides.length - 1) {
                  style[MARGIN_TYPE[direction][1]] = ''.concat(
                    this.value / 2,
                    'px'
                  );
                } else {
                  style[MARGIN_TYPE[direction][1]] = '';
                }
              }
            },

            /**
             * Removes gaps from the slides.
             *
             * @param {HTMLCollection} slides
             * @returns {Void}
             */
            remove: function remove(slides) {
              for (var i = 0, len = slides.length; i < len; i++) {
                var style = slides[i].style;
                style.marginLeft = '';
                style.marginRight = '';
              }
            }
          };
          define(Gaps, 'value', {
            /**
             * Gets value of the gap.
             *
             * @returns {Number}
             */
            get: function get() {
              return toInt(Glide.settings.gap);
            }
          });
          define(Gaps, 'grow', {
            /**
             * Gets additional dimensions value caused by gaps.
             * Used to increase width of the slides wrapper.
             *
             * @returns {Number}
             */
            get: function get() {
              return Gaps.value * Components.Sizes.length;
            }
          });
          define(Gaps, 'reductor', {
            /**
             * Gets reduction value caused by gaps.
             * Used to subtract width of the slides.
             *
             * @returns {Number}
             */
            get: function get() {
              var perView = Glide.settings.perView;
              return (Gaps.value * (perView - 1)) / perView;
            }
          });
          /**
           * Apply calculated gaps:
           * - after building, so slides (including clones) will receive proper margins
           * - on updating via API, to recalculate gaps with new options
           */

          Events.on(
            ['build.after', 'update'],
            throttle(function() {
              Gaps.apply(Components.Html.wrapper.children);
            }, 30)
          );
          /**
           * Remove gaps:
           * - on destroying to bring markup to its inital state
           */

          Events.on('destroy', function() {
            Gaps.remove(Components.Html.wrapper.children);
          });
          return Gaps;
        }

        /**
         * Finds siblings nodes of the passed node.
         *
         * @param  {Element} node
         * @return {Array}
         */
        function siblings(node) {
          if (node && node.parentNode) {
            var n = node.parentNode.firstChild;
            var matched = [];

            for (; n; n = n.nextSibling) {
              if (n.nodeType === 1 && n !== node) {
                matched.push(n);
              }
            }

            return matched;
          }

          return [];
        }
        /**
         * Checks if passed node exist and is a valid element.
         *
         * @param  {Element} node
         * @return {Boolean}
         */

        function exist(node) {
          if (node && node instanceof window.HTMLElement) {
            return true;
          }

          return false;
        }

        var TRACK_SELECTOR = '[data-glide-el="track"]';
        function Html(Glide, Components, Events) {
          var Html = {
            /**
             * Setup slider HTML nodes.
             *
             * @param {Glide} glide
             */
            mount: function mount() {
              this.root = Glide.selector;
              this.track = this.root.querySelector(TRACK_SELECTOR);
              this.collectSlides();
            },

            /**
             * Collect slides
             */
            collectSlides: function collectSlides() {
              this.slides = Array.prototype.slice
                .call(this.wrapper.children)
                .filter(function(slide) {
                  return !slide.classList.contains(
                    Glide.settings.classes.slide.clone
                  );
                });
            }
          };
          define(Html, 'root', {
            /**
             * Gets node of the glide main element.
             *
             * @return {Object}
             */
            get: function get() {
              return Html._r;
            },

            /**
             * Sets node of the glide main element.
             *
             * @return {Object}
             */
            set: function set(r) {
              if (isString(r)) {
                r = document.querySelector(r);
              }

              if (exist(r)) {
                Html._r = r;
              } else {
                warn('Root element must be a existing Html node');
              }
            }
          });
          define(Html, 'track', {
            /**
             * Gets node of the glide track with slides.
             *
             * @return {Object}
             */
            get: function get() {
              return Html._t;
            },

            /**
             * Sets node of the glide track with slides.
             *
             * @return {Object}
             */
            set: function set(t) {
              if (exist(t)) {
                Html._t = t;
              } else {
                warn(
                  'Could not find track element. Please use '.concat(
                    TRACK_SELECTOR,
                    ' attribute.'
                  )
                );
              }
            }
          });
          define(Html, 'wrapper', {
            /**
             * Gets node of the slides wrapper.
             *
             * @return {Object}
             */
            get: function get() {
              return Html.track.children[0];
            }
          });
          /**
           * Add/remove/reorder dynamic slides
           */

          Events.on('update', function() {
            Html.collectSlides();
          });
          return Html;
        }

        function Peek(Glide, Components, Events) {
          var Peek = {
            /**
             * Setups how much to peek based on settings.
             *
             * @return {Void}
             */
            mount: function mount() {
              this.value = Glide.settings.peek;
            }
          };
          define(Peek, 'value', {
            /**
             * Gets value of the peek.
             *
             * @returns {Number|Object}
             */
            get: function get() {
              return Peek._v;
            },

            /**
             * Sets value of the peek.
             *
             * @param {Number|Object} value
             * @return {Void}
             */
            set: function set(value) {
              if (isObject(value)) {
                value.before = toInt(value.before);
                value.after = toInt(value.after);
              } else {
                value = toInt(value);
              }

              Peek._v = value;
            }
          });
          define(Peek, 'reductor', {
            /**
             * Gets reduction value caused by peek.
             *
             * @returns {Number}
             */
            get: function get() {
              var value = Peek.value;
              var perView = Glide.settings.perView;

              if (isObject(value)) {
                return value.before / perView + value.after / perView;
              }

              return (value * 2) / perView;
            }
          });
          /**
           * Recalculate peeking sizes on:
           * - when resizing window to update to proper percents
           */

          Events.on(['resize', 'update'], function() {
            Peek.mount();
          });
          return Peek;
        }

        function Move(Glide, Components, Events) {
          var Move = {
            /**
             * Constructs move component.
             *
             * @returns {Void}
             */
            mount: function mount() {
              this._o = 0;
            },

            /**
             * Calculates a movement value based on passed offset and currently active index.
             *
             * @param  {Number} offset
             * @return {Void}
             */
            make: function make() {
              var _this = this;

              var offset =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 0;
              this.offset = offset;
              Events.emit('move', {
                movement: this.value
              });
              Components.Transition.after(function() {
                Events.emit('move.after', {
                  movement: _this.value
                });
              });
            }
          };
          define(Move, 'offset', {
            /**
             * Gets an offset value used to modify current translate.
             *
             * @return {Object}
             */
            get: function get() {
              return Move._o;
            },

            /**
             * Sets an offset value used to modify current translate.
             *
             * @return {Object}
             */
            set: function set(value) {
              Move._o = !isUndefined(value) ? toInt(value) : 0;
            }
          });
          define(Move, 'translate', {
            /**
             * Gets a raw movement value.
             *
             * @return {Number}
             */
            get: function get() {
              return Components.Sizes.slideWidth * Glide.index;
            }
          });
          define(Move, 'value', {
            /**
             * Gets an actual movement value corrected by offset.
             *
             * @return {Number}
             */
            get: function get() {
              var offset = this.offset;
              var translate = this.translate;

              if (Components.Direction.is('rtl')) {
                return translate + offset;
              }

              return translate - offset;
            }
          });
          /**
           * Make movement to proper slide on:
           * - before build, so glide will start at `startAt` index
           * - on each standard run to move to newly calculated index
           */

          Events.on(['build.before', 'run'], function() {
            Move.make();
          });
          return Move;
        }

        function Sizes(Glide, Components, Events) {
          var Sizes = {
            /**
             * Setups dimensions of slides.
             *
             * @return {Void}
             */
            setupSlides: function setupSlides() {
              var width = ''.concat(this.slideWidth, 'px');
              var slides = Components.Html.slides;

              for (var i = 0; i < slides.length; i++) {
                slides[i].style.width = width;
              }
            },

            /**
             * Setups dimensions of slides wrapper.
             *
             * @return {Void}
             */
            setupWrapper: function setupWrapper() {
              Components.Html.wrapper.style.width = ''.concat(
                this.wrapperSize,
                'px'
              );
            },

            /**
             * Removes applied styles from HTML elements.
             *
             * @returns {Void}
             */
            remove: function remove() {
              var slides = Components.Html.slides;

              for (var i = 0; i < slides.length; i++) {
                slides[i].style.width = '';
              }

              Components.Html.wrapper.style.width = '';
            }
          };
          define(Sizes, 'length', {
            /**
             * Gets count number of the slides.
             *
             * @return {Number}
             */
            get: function get() {
              return Components.Html.slides.length;
            }
          });
          define(Sizes, 'width', {
            /**
             * Gets width value of the slider (visible area).
             *
             * @return {Number}
             */
            get: function get() {
              return Components.Html.track.offsetWidth;
            }
          });
          define(Sizes, 'wrapperSize', {
            /**
             * Gets size of the slides wrapper.
             *
             * @return {Number}
             */
            get: function get() {
              return (
                Sizes.slideWidth * Sizes.length +
                Components.Gaps.grow +
                Components.Clones.grow
              );
            }
          });
          define(Sizes, 'slideWidth', {
            /**
             * Gets width value of a single slide.
             *
             * @return {Number}
             */
            get: function get() {
              return (
                Sizes.width / Glide.settings.perView -
                Components.Peek.reductor -
                Components.Gaps.reductor
              );
            }
          });
          /**
           * Apply calculated glide's dimensions:
           * - before building, so other dimensions (e.g. translate) will be calculated propertly
           * - when resizing window to recalculate sildes dimensions
           * - on updating via API, to calculate dimensions based on new options
           */

          Events.on(['build.before', 'resize', 'update'], function() {
            Sizes.setupSlides();
            Sizes.setupWrapper();
          });
          /**
           * Remove calculated glide's dimensions:
           * - on destoting to bring markup to its inital state
           */

          Events.on('destroy', function() {
            Sizes.remove();
          });
          return Sizes;
        }

        function Build(Glide, Components, Events) {
          var Build = {
            /**
             * Init glide building. Adds classes, sets
             * dimensions and setups initial state.
             *
             * @return {Void}
             */
            mount: function mount() {
              Events.emit('build.before');
              this.typeClass();
              this.activeClass();
              Events.emit('build.after');
            },

            /**
             * Adds `type` class to the glide element.
             *
             * @return {Void}
             */
            typeClass: function typeClass() {
              Components.Html.root.classList.add(
                Glide.settings.classes.type[Glide.settings.type]
              );
            },

            /**
             * Sets active class to current slide.
             *
             * @return {Void}
             */
            activeClass: function activeClass() {
              var classes = Glide.settings.classes;
              var slide = Components.Html.slides[Glide.index];

              if (slide) {
                slide.classList.add(classes.slide.active);
                siblings(slide).forEach(function(sibling) {
                  sibling.classList.remove(classes.slide.active);
                });
              }
            },

            /**
             * Removes HTML classes applied at building.
             *
             * @return {Void}
             */
            removeClasses: function removeClasses() {
              var _Glide$settings$class = Glide.settings.classes,
                type = _Glide$settings$class.type,
                slide = _Glide$settings$class.slide;
              Components.Html.root.classList.remove(type[Glide.settings.type]);
              Components.Html.slides.forEach(function(sibling) {
                sibling.classList.remove(slide.active);
              });
            }
          };
          /**
           * Clear building classes:
           * - on destroying to bring HTML to its initial state
           * - on updating to remove classes before remounting component
           */

          Events.on(['destroy', 'update'], function() {
            Build.removeClasses();
          });
          /**
           * Remount component:
           * - on resizing of the window to calculate new dimensions
           * - on updating settings via API
           */

          Events.on(['resize', 'update'], function() {
            Build.mount();
          });
          /**
           * Swap active class of current slide:
           * - after each move to the new index
           */

          Events.on('move.after', function() {
            Build.activeClass();
          });
          return Build;
        }

        function Clones(Glide, Components, Events) {
          var Clones = {
            /**
             * Create pattern map and collect slides to be cloned.
             */
            mount: function mount() {
              this.items = [];

              if (Glide.isType('carousel')) {
                this.items = this.collect();
              }
            },

            /**
             * Collect clones with pattern.
             *
             * @return {[]}
             */
            collect: function collect() {
              var items =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              var slides = Components.Html.slides;
              var _Glide$settings = Glide.settings,
                perView = _Glide$settings.perView,
                classes = _Glide$settings.classes,
                cloningRatio = _Glide$settings.cloningRatio;

              if (slides.length !== 0) {
                var peekIncrementer = +!!Glide.settings.peek;
                var cloneCount =
                  perView + peekIncrementer + Math.round(perView / 2);
                var append = slides.slice(0, cloneCount).reverse();
                var prepend = slides.slice(cloneCount * -1);

                for (
                  var r = 0;
                  r <
                  Math.max(cloningRatio, Math.floor(perView / slides.length));
                  r++
                ) {
                  for (var i = 0; i < append.length; i++) {
                    var clone = append[i].cloneNode(true);
                    clone.classList.add(classes.slide.clone);
                    items.push(clone);
                  }

                  for (var _i = 0; _i < prepend.length; _i++) {
                    var _clone = prepend[_i].cloneNode(true);

                    _clone.classList.add(classes.slide.clone);

                    items.unshift(_clone);
                  }
                }
              }

              return items;
            },

            /**
             * Append cloned slides with generated pattern.
             *
             * @return {Void}
             */
            append: function append() {
              var items = this.items;
              var _Components$Html = Components.Html,
                wrapper = _Components$Html.wrapper,
                slides = _Components$Html.slides;
              var half = Math.floor(items.length / 2);
              var prepend = items.slice(0, half).reverse();
              var append = items.slice(half * -1).reverse();
              var width = ''.concat(Components.Sizes.slideWidth, 'px');

              for (var i = 0; i < append.length; i++) {
                wrapper.appendChild(append[i]);
              }

              for (var _i2 = 0; _i2 < prepend.length; _i2++) {
                wrapper.insertBefore(prepend[_i2], slides[0]);
              }

              for (var _i3 = 0; _i3 < items.length; _i3++) {
                items[_i3].style.width = width;
              }
            },

            /**
             * Remove all cloned slides.
             *
             * @return {Void}
             */
            remove: function remove() {
              var items = this.items;

              for (var i = 0; i < items.length; i++) {
                Components.Html.wrapper.removeChild(items[i]);
              }
            }
          };
          define(Clones, 'grow', {
            /**
             * Gets additional dimensions value caused by clones.
             *
             * @return {Number}
             */
            get: function get() {
              return (
                (Components.Sizes.slideWidth + Components.Gaps.value) *
                Clones.items.length
              );
            }
          });
          /**
           * Append additional slide's clones:
           * - while glide's type is `carousel`
           */

          Events.on('update', function() {
            Clones.remove();
            Clones.mount();
            Clones.append();
          });
          /**
           * Append additional slide's clones:
           * - while glide's type is `carousel`
           */

          Events.on('build.before', function() {
            if (Glide.isType('carousel')) {
              Clones.append();
            }
          });
          /**
           * Remove clones HTMLElements:
           * - on destroying, to bring HTML to its initial state
           */

          Events.on('destroy', function() {
            Clones.remove();
          });
          return Clones;
        }

        var EventsBinder = /*#__PURE__*/ (function() {
          /**
           * Construct a EventsBinder instance.
           */
          function EventsBinder() {
            var listeners =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};

            _classCallCheck(this, EventsBinder);

            this.listeners = listeners;
          }
          /**
           * Adds events listeners to arrows HTML elements.
           *
           * @param  {String|Array} events
           * @param  {Element|Window|Document} el
           * @param  {Function} closure
           * @param  {Boolean|Object} capture
           * @return {Void}
           */

          _createClass(EventsBinder, [
            {
              key: 'on',
              value: function on(events, el, closure) {
                var capture =
                  arguments.length > 3 && arguments[3] !== undefined
                    ? arguments[3]
                    : false;

                if (isString(events)) {
                  events = [events];
                }

                for (var i = 0; i < events.length; i++) {
                  this.listeners[events[i]] = closure;
                  el.addEventListener(
                    events[i],
                    this.listeners[events[i]],
                    capture
                  );
                }
              }
              /**
               * Removes event listeners from arrows HTML elements.
               *
               * @param  {String|Array} events
               * @param  {Element|Window|Document} el
               * @param  {Boolean|Object} capture
               * @return {Void}
               */
            },
            {
              key: 'off',
              value: function off(events, el) {
                var capture =
                  arguments.length > 2 && arguments[2] !== undefined
                    ? arguments[2]
                    : false;

                if (isString(events)) {
                  events = [events];
                }

                for (var i = 0; i < events.length; i++) {
                  el.removeEventListener(
                    events[i],
                    this.listeners[events[i]],
                    capture
                  );
                }
              }
              /**
               * Destroy collected listeners.
               *
               * @returns {Void}
               */
            },
            {
              key: 'destroy',
              value: function destroy() {
                delete this.listeners;
              }
            }
          ]);

          return EventsBinder;
        })();

        function Resize(Glide, Components, Events) {
          /**
           * Instance of the binder for DOM Events.
           *
           * @type {EventsBinder}
           */
          var Binder = new EventsBinder();
          var Resize = {
            /**
             * Initializes window bindings.
             */
            mount: function mount() {
              this.bind();
            },

            /**
             * Binds `rezsize` listener to the window.
             * It's a costly event, so we are debouncing it.
             *
             * @return {Void}
             */
            bind: function bind() {
              Binder.on(
                'resize',
                window,
                throttle(function() {
                  Events.emit('resize');
                }, Glide.settings.throttle)
              );
            },

            /**
             * Unbinds listeners from the window.
             *
             * @return {Void}
             */
            unbind: function unbind() {
              Binder.off('resize', window);
            }
          };
          /**
           * Remove bindings from window:
           * - on destroying, to remove added EventListener
           */

          Events.on('destroy', function() {
            Resize.unbind();
            Binder.destroy();
          });
          return Resize;
        }

        var VALID_DIRECTIONS = ['ltr', 'rtl'];
        var FLIPED_MOVEMENTS = {
          '>': '<',
          '<': '>',
          '=': '='
        };
        function Direction(Glide, Components, Events) {
          var Direction = {
            /**
             * Setups gap value based on settings.
             *
             * @return {Void}
             */
            mount: function mount() {
              this.value = Glide.settings.direction;
            },

            /**
             * Resolves pattern based on direction value
             *
             * @param {String} pattern
             * @returns {String}
             */
            resolve: function resolve(pattern) {
              var token = pattern.slice(0, 1);

              if (this.is('rtl')) {
                return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
              }

              return pattern;
            },

            /**
             * Checks value of direction mode.
             *
             * @param {String} direction
             * @returns {Boolean}
             */
            is: function is(direction) {
              return this.value === direction;
            },

            /**
             * Applies direction class to the root HTML element.
             *
             * @return {Void}
             */
            addClass: function addClass() {
              Components.Html.root.classList.add(
                Glide.settings.classes.direction[this.value]
              );
            },

            /**
             * Removes direction class from the root HTML element.
             *
             * @return {Void}
             */
            removeClass: function removeClass() {
              Components.Html.root.classList.remove(
                Glide.settings.classes.direction[this.value]
              );
            }
          };
          define(Direction, 'value', {
            /**
             * Gets value of the direction.
             *
             * @returns {Number}
             */
            get: function get() {
              return Direction._v;
            },

            /**
             * Sets value of the direction.
             *
             * @param {String} value
             * @return {Void}
             */
            set: function set(value) {
              if (VALID_DIRECTIONS.indexOf(value) > -1) {
                Direction._v = value;
              } else {
                warn('Direction value must be `ltr` or `rtl`');
              }
            }
          });
          /**
           * Clear direction class:
           * - on destroy to bring HTML to its initial state
           * - on update to remove class before reappling bellow
           */

          Events.on(['destroy', 'update'], function() {
            Direction.removeClass();
          });
          /**
           * Remount component:
           * - on update to reflect changes in direction value
           */

          Events.on('update', function() {
            Direction.mount();
          });
          /**
           * Apply direction class:
           * - before building to apply class for the first time
           * - on updating to reapply direction class that may changed
           */

          Events.on(['build.before', 'update'], function() {
            Direction.addClass();
          });
          return Direction;
        }

        /**
         * Reflects value of glide movement.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */
        function Rtl(Glide, Components) {
          return {
            /**
             * Negates the passed translate if glide is in RTL option.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            modify: function modify(translate) {
              if (Components.Direction.is('rtl')) {
                return -translate;
              }

              return translate;
            }
          };
        }

        /**
         * Updates glide movement with a `gap` settings.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */
        function Gap(Glide, Components) {
          return {
            /**
             * Modifies passed translate value with number in the `gap` settings.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            modify: function modify(translate) {
              var multiplier = Math.floor(
                translate / Components.Sizes.slideWidth
              );
              return translate + Components.Gaps.value * multiplier;
            }
          };
        }

        /**
         * Updates glide movement with width of additional clones width.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */
        function Grow(Glide, Components) {
          return {
            /**
             * Adds to the passed translate width of the half of clones.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            modify: function modify(translate) {
              return translate + Components.Clones.grow / 2;
            }
          };
        }

        /**
         * Updates glide movement with a `peek` settings.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */

        function Peeking(Glide, Components) {
          return {
            /**
             * Modifies passed translate value with a `peek` setting.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            modify: function modify(translate) {
              if (Glide.settings.focusAt >= 0) {
                var peek = Components.Peek.value;

                if (isObject(peek)) {
                  return translate - peek.before;
                }

                return translate - peek;
              }

              return translate;
            }
          };
        }

        /**
         * Updates glide movement with a `focusAt` settings.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */
        function Focusing(Glide, Components) {
          return {
            /**
             * Modifies passed translate value with index in the `focusAt` setting.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            modify: function modify(translate) {
              var gap = Components.Gaps.value;
              var width = Components.Sizes.width;
              var focusAt = Glide.settings.focusAt;
              var slideWidth = Components.Sizes.slideWidth;

              if (focusAt === 'center') {
                return translate - (width / 2 - slideWidth / 2);
              }

              return translate - slideWidth * focusAt - gap * focusAt;
            }
          };
        }

        /**
         * Applies diffrent transformers on translate value.
         *
         * @param  {Object} Glide
         * @param  {Object} Components
         * @return {Object}
         */

        function mutator(Glide, Components, Events) {
          /**
           * Merge instance transformers with collection of default transformers.
           * It's important that the Rtl component be last on the list,
           * so it reflects all previous transformations.
           *
           * @type {Array}
           */
          var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [
            Rtl
          ]);
          return {
            /**
             * Piplines translate value with registered transformers.
             *
             * @param  {Number} translate
             * @return {Number}
             */
            mutate: function mutate(translate) {
              for (var i = 0; i < TRANSFORMERS.length; i++) {
                var transformer = TRANSFORMERS[i];

                if (
                  isFunction(transformer) &&
                  isFunction(transformer().modify)
                ) {
                  translate = transformer(Glide, Components, Events).modify(
                    translate
                  );
                } else {
                  warn(
                    'Transformer should be a function that returns an object with `modify()` method'
                  );
                }
              }

              return translate;
            }
          };
        }

        function Translate(Glide, Components, Events) {
          var Translate = {
            /**
             * Sets value of translate on HTML element.
             *
             * @param {Number} value
             * @return {Void}
             */
            set: function set(value) {
              var transform = mutator(Glide, Components).mutate(value);
              var translate3d = 'translate3d('.concat(
                -1 * transform,
                'px, 0px, 0px)'
              );
              Components.Html.wrapper.style.mozTransform = translate3d; // needed for supported Firefox 10-15

              Components.Html.wrapper.style.webkitTransform = translate3d; // needed for supported Chrome 10-35, Safari 5.1-8, and Opera 15-22

              Components.Html.wrapper.style.transform = translate3d;
            },

            /**
             * Removes value of translate from HTML element.
             *
             * @return {Void}
             */
            remove: function remove() {
              Components.Html.wrapper.style.transform = '';
            },

            /**
             * @return {number}
             */
            getStartIndex: function getStartIndex() {
              var length = Components.Sizes.length;
              var index = Glide.index;
              var perView = Glide.settings.perView;

              if (
                Components.Run.isOffset('>') ||
                Components.Run.isOffset('|>')
              ) {
                return length + (index - perView);
              } // "modulo length" converts an index that equals length to zero

              return (index + perView) % length;
            },

            /**
             * @return {number}
             */
            getTravelDistance: function getTravelDistance() {
              var travelDistance =
                Components.Sizes.slideWidth * Glide.settings.perView;

              if (
                Components.Run.isOffset('>') ||
                Components.Run.isOffset('|>')
              ) {
                // reverse travel distance so that we don't have to change subtract operations
                return travelDistance * -1;
              }

              return travelDistance;
            }
          };
          /**
           * Set new translate value:
           * - on move to reflect index change
           * - on updating via API to reflect possible changes in options
           */

          Events.on('move', function(context) {
            if (!Glide.isType('carousel') || !Components.Run.isOffset()) {
              return Translate.set(context.movement);
            }

            Components.Transition.after(function() {
              Events.emit('translate.jump');
              Translate.set(Components.Sizes.slideWidth * Glide.index);
            });
            var startWidth =
              Components.Sizes.slideWidth *
              Components.Translate.getStartIndex();
            return Translate.set(
              startWidth - Components.Translate.getTravelDistance()
            );
          });
          /**
           * Remove translate:
           * - on destroying to bring markup to its inital state
           */

          Events.on('destroy', function() {
            Translate.remove();
          });
          return Translate;
        }

        function Transition(Glide, Components, Events) {
          /**
           * Holds inactivity status of transition.
           * When true transition is not applied.
           *
           * @type {Boolean}
           */
          var disabled = false;
          var Transition = {
            /**
             * Composes string of the CSS transition.
             *
             * @param {String} property
             * @return {String}
             */
            compose: function compose(property) {
              var settings = Glide.settings;

              if (!disabled) {
                return ''
                  .concat(property, ' ')
                  .concat(this.duration, 'ms ')
                  .concat(settings.animationTimingFunc);
              }

              return ''
                .concat(property, ' 0ms ')
                .concat(settings.animationTimingFunc);
            },

            /**
             * Sets value of transition on HTML element.
             *
             * @param {String=} property
             * @return {Void}
             */
            set: function set() {
              var property =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 'transform';
              Components.Html.wrapper.style.transition = this.compose(property);
            },

            /**
             * Removes value of transition from HTML element.
             *
             * @return {Void}
             */
            remove: function remove() {
              Components.Html.wrapper.style.transition = '';
            },

            /**
             * Runs callback after animation.
             *
             * @param  {Function} callback
             * @return {Void}
             */
            after: function after(callback) {
              setTimeout(function() {
                callback();
              }, this.duration);
            },

            /**
             * Enable transition.
             *
             * @return {Void}
             */
            enable: function enable() {
              disabled = false;
              this.set();
            },

            /**
             * Disable transition.
             *
             * @return {Void}
             */
            disable: function disable() {
              disabled = true;
              this.set();
            }
          };
          define(Transition, 'duration', {
            /**
             * Gets duration of the transition based
             * on currently running animation type.
             *
             * @return {Number}
             */
            get: function get() {
              var settings = Glide.settings;

              if (Glide.isType('slider') && Components.Run.offset) {
                return settings.rewindDuration;
              }

              return settings.animationDuration;
            }
          });
          /**
           * Set transition `style` value:
           * - on each moving, because it may be cleared by offset move
           */

          Events.on('move', function() {
            Transition.set();
          });
          /**
           * Disable transition:
           * - before initial build to avoid transitioning from `0` to `startAt` index
           * - while resizing window and recalculating dimensions
           * - on jumping from offset transition at start and end edges in `carousel` type
           */

          Events.on(['build.before', 'resize', 'translate.jump'], function() {
            Transition.disable();
          });
          /**
           * Enable transition:
           * - on each running, because it may be disabled by offset move
           */

          Events.on('run', function() {
            Transition.enable();
          });
          /**
           * Remove transition:
           * - on destroying to bring markup to its inital state
           */

          Events.on('destroy', function() {
            Transition.remove();
          });
          return Transition;
        }

        /**
         * Test via a getter in the options object to see
         * if the passive property is accessed.
         *
         * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
         */
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener('testPassive', null, opts);
          window.removeEventListener('testPassive', null, opts);
        } catch (e) {}

        var supportsPassive$1 = supportsPassive;

        var START_EVENTS = ['touchstart', 'mousedown'];
        var MOVE_EVENTS = ['touchmove', 'mousemove'];
        var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
        var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
        function Swipe(Glide, Components, Events) {
          /**
           * Instance of the binder for DOM Events.
           *
           * @type {EventsBinder}
           */
          var Binder = new EventsBinder();
          var swipeSin = 0;
          var swipeStartX = 0;
          var swipeStartY = 0;
          var disabled = false;
          var capture = supportsPassive$1
            ? {
                passive: true
              }
            : false;
          var Swipe = {
            /**
             * Initializes swipe bindings.
             *
             * @return {Void}
             */
            mount: function mount() {
              this.bindSwipeStart();
            },

            /**
             * Handler for `swipestart` event. Calculates entry points of the user's tap.
             *
             * @param {Object} event
             * @return {Void}
             */
            start: function start(event) {
              if (!disabled && !Glide.disabled) {
                this.disable();
                var swipe = this.touches(event);
                swipeSin = null;
                swipeStartX = toInt(swipe.pageX);
                swipeStartY = toInt(swipe.pageY);
                this.bindSwipeMove();
                this.bindSwipeEnd();
                Events.emit('swipe.start');
              }
            },

            /**
             * Handler for `swipemove` event. Calculates user's tap angle and distance.
             *
             * @param {Object} event
             */
            move: function move(event) {
              if (!Glide.disabled) {
                var _Glide$settings = Glide.settings,
                  touchAngle = _Glide$settings.touchAngle,
                  touchRatio = _Glide$settings.touchRatio,
                  classes = _Glide$settings.classes;
                var swipe = this.touches(event);
                var subExSx = toInt(swipe.pageX) - swipeStartX;
                var subEySy = toInt(swipe.pageY) - swipeStartY;
                var powEX = Math.abs(subExSx << 2);
                var powEY = Math.abs(subEySy << 2);
                var swipeHypotenuse = Math.sqrt(powEX + powEY);
                var swipeCathetus = Math.sqrt(powEY);
                swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

                if ((swipeSin * 180) / Math.PI < touchAngle) {
                  event.stopPropagation();
                  Components.Move.make(subExSx * toFloat(touchRatio));
                  Components.Html.root.classList.add(classes.dragging);
                  Events.emit('swipe.move');
                } else {
                  return false;
                }
              }
            },

            /**
             * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
             *
             * @param {Object} event
             * @return {Void}
             */
            end: function end(event) {
              if (!Glide.disabled) {
                var _Glide$settings2 = Glide.settings,
                  perSwipe = _Glide$settings2.perSwipe,
                  touchAngle = _Glide$settings2.touchAngle,
                  classes = _Glide$settings2.classes;
                var swipe = this.touches(event);
                var threshold = this.threshold(event);
                var swipeDistance = swipe.pageX - swipeStartX;
                var swipeDeg = (swipeSin * 180) / Math.PI;
                this.enable();

                if (swipeDistance > threshold && swipeDeg < touchAngle) {
                  Components.Run.make(
                    Components.Direction.resolve(''.concat(perSwipe, '<'))
                  );
                } else if (
                  swipeDistance < -threshold &&
                  swipeDeg < touchAngle
                ) {
                  Components.Run.make(
                    Components.Direction.resolve(''.concat(perSwipe, '>'))
                  );
                } else {
                  // While swipe don't reach distance apply previous transform.
                  Components.Move.make();
                }

                Components.Html.root.classList.remove(classes.dragging);
                this.unbindSwipeMove();
                this.unbindSwipeEnd();
                Events.emit('swipe.end');
              }
            },

            /**
             * Binds swipe's starting event.
             *
             * @return {Void}
             */
            bindSwipeStart: function bindSwipeStart() {
              var _this = this;

              var _Glide$settings3 = Glide.settings,
                swipeThreshold = _Glide$settings3.swipeThreshold,
                dragThreshold = _Glide$settings3.dragThreshold;

              if (swipeThreshold) {
                Binder.on(
                  START_EVENTS[0],
                  Components.Html.wrapper,
                  function(event) {
                    _this.start(event);
                  },
                  capture
                );
              }

              if (dragThreshold) {
                Binder.on(
                  START_EVENTS[1],
                  Components.Html.wrapper,
                  function(event) {
                    _this.start(event);
                  },
                  capture
                );
              }
            },

            /**
             * Unbinds swipe's starting event.
             *
             * @return {Void}
             */
            unbindSwipeStart: function unbindSwipeStart() {
              Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
              Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
            },

            /**
             * Binds swipe's moving event.
             *
             * @return {Void}
             */
            bindSwipeMove: function bindSwipeMove() {
              var _this2 = this;

              Binder.on(
                MOVE_EVENTS,
                Components.Html.wrapper,
                throttle(function(event) {
                  _this2.move(event);
                }, Glide.settings.throttle),
                capture
              );
            },

            /**
             * Unbinds swipe's moving event.
             *
             * @return {Void}
             */
            unbindSwipeMove: function unbindSwipeMove() {
              Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
            },

            /**
             * Binds swipe's ending event.
             *
             * @return {Void}
             */
            bindSwipeEnd: function bindSwipeEnd() {
              var _this3 = this;

              Binder.on(END_EVENTS, Components.Html.wrapper, function(event) {
                _this3.end(event);
              });
            },

            /**
             * Unbinds swipe's ending event.
             *
             * @return {Void}
             */
            unbindSwipeEnd: function unbindSwipeEnd() {
              Binder.off(END_EVENTS, Components.Html.wrapper);
            },

            /**
             * Normalizes event touches points accorting to different types.
             *
             * @param {Object} event
             */
            touches: function touches(event) {
              if (MOUSE_EVENTS.indexOf(event.type) > -1) {
                return event;
              }

              return event.touches[0] || event.changedTouches[0];
            },

            /**
             * Gets value of minimum swipe distance settings based on event type.
             *
             * @return {Number}
             */
            threshold: function threshold(event) {
              var settings = Glide.settings;

              if (MOUSE_EVENTS.indexOf(event.type) > -1) {
                return settings.dragThreshold;
              }

              return settings.swipeThreshold;
            },

            /**
             * Enables swipe event.
             *
             * @return {self}
             */
            enable: function enable() {
              disabled = false;
              Components.Transition.enable();
              return this;
            },

            /**
             * Disables swipe event.
             *
             * @return {self}
             */
            disable: function disable() {
              disabled = true;
              Components.Transition.disable();
              return this;
            }
          };
          /**
           * Add component class:
           * - after initial building
           */

          Events.on('build.after', function() {
            Components.Html.root.classList.add(
              Glide.settings.classes.swipeable
            );
          });
          /**
           * Remove swiping bindings:
           * - on destroying, to remove added EventListeners
           */

          Events.on('destroy', function() {
            Swipe.unbindSwipeStart();
            Swipe.unbindSwipeMove();
            Swipe.unbindSwipeEnd();
            Binder.destroy();
          });
          return Swipe;
        }

        function Images(Glide, Components, Events) {
          /**
           * Instance of the binder for DOM Events.
           *
           * @type {EventsBinder}
           */
          var Binder = new EventsBinder();
          var Images = {
            /**
             * Binds listener to glide wrapper.
             *
             * @return {Void}
             */
            mount: function mount() {
              this.bind();
            },

            /**
             * Binds `dragstart` event on wrapper to prevent dragging images.
             *
             * @return {Void}
             */
            bind: function bind() {
              Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
            },

            /**
             * Unbinds `dragstart` event on wrapper.
             *
             * @return {Void}
             */
            unbind: function unbind() {
              Binder.off('dragstart', Components.Html.wrapper);
            },

            /**
             * Event handler. Prevents dragging.
             *
             * @return {Void}
             */
            dragstart: function dragstart(event) {
              event.preventDefault();
            }
          };
          /**
           * Remove bindings from images:
           * - on destroying, to remove added EventListeners
           */

          Events.on('destroy', function() {
            Images.unbind();
            Binder.destroy();
          });
          return Images;
        }

        function Anchors(Glide, Components, Events) {
          /**
           * Instance of the binder for DOM Events.
           *
           * @type {EventsBinder}
           */
          var Binder = new EventsBinder();
          /**
           * Holds detaching status of anchors.
           * Prevents detaching of already detached anchors.
           *
           * @private
           * @type {Boolean}
           */

          var detached = false;
          /**
           * Holds preventing status of anchors.
           * If `true` redirection after click will be disabled.
           *
           * @private
           * @type {Boolean}
           */

          var prevented = false;
          var Anchors = {
            /**
             * Setups a initial state of anchors component.
             *
             * @returns {Void}
             */
            mount: function mount() {
              /**
               * Holds collection of anchors elements.
               *
               * @private
               * @type {HTMLCollection}
               */
              this._a = Components.Html.wrapper.querySelectorAll('a');
              this.bind();
            },

            /**
             * Binds events to anchors inside a track.
             *
             * @return {Void}
             */
            bind: function bind() {
              Binder.on('click', Components.Html.wrapper, this.click);
            },

            /**
             * Unbinds events attached to anchors inside a track.
             *
             * @return {Void}
             */
            unbind: function unbind() {
              Binder.off('click', Components.Html.wrapper);
            },

            /**
             * Handler for click event. Prevents clicks when glide is in `prevent` status.
             *
             * @param  {Object} event
             * @return {Void}
             */
            click: function click(event) {
              if (prevented) {
                event.stopPropagation();
                event.preventDefault();
              }
            },

            /**
             * Detaches anchors click event inside glide.
             *
             * @return {self}
             */
            detach: function detach() {
              prevented = true;

              if (!detached) {
                for (var i = 0; i < this.items.length; i++) {
                  this.items[i].draggable = false;
                }

                detached = true;
              }

              return this;
            },

            /**
             * Attaches anchors click events inside glide.
             *
             * @return {self}
             */
            attach: function attach() {
              prevented = false;

              if (detached) {
                for (var i = 0; i < this.items.length; i++) {
                  this.items[i].draggable = true;
                }

                detached = false;
              }

              return this;
            }
          };
          define(Anchors, 'items', {
            /**
             * Gets collection of the arrows HTML elements.
             *
             * @return {HTMLElement[]}
             */
            get: function get() {
              return Anchors._a;
            }
          });
          /**
           * Detach anchors inside slides:
           * - on swiping, so they won't redirect to its `href` attributes
           */

          Events.on('swipe.move', function() {
            Anchors.detach();
          });
          /**
           * Attach anchors inside slides:
           * - after swiping and transitions ends, so they can redirect after click again
           */

          Events.on('swipe.end', function() {
            Components.Transition.after(function() {
              Anchors.attach();
            });
          });
          /**
           * Unbind anchors inside slides:
           * - on destroying, to bring anchors to its initial state
           */

          Events.on('destroy', function() {
            Anchors.attach();
            Anchors.unbind();
            Binder.destroy();
          });
          return Anchors;
        }

        var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
        var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
        var PREVIOUS_CONTROLS_SELECTOR = ''.concat(
          CONTROLS_SELECTOR,
          ' [data-glide-dir*="<"]'
        );
        var NEXT_CONTROLS_SELECTOR = ''.concat(
          CONTROLS_SELECTOR,
          ' [data-glide-dir*=">"]'
        );
        function Controls(Glide, Components, Events) {
          /**
           * Instance of the binder for DOM Events.
           *
           * @type {EventsBinder}
           */
          var Binder = new EventsBinder();
          var capture = supportsPassive$1
            ? {
                passive: true
              }
            : false;
          var Controls = {
            /**
             * Inits arrows. Binds events listeners
             * to the arrows HTML elements.
             *
             * @return {Void}
             */
            mount: function mount() {
              /**
               * Collection of navigation HTML elements.
               *
               * @private
               * @type {HTMLCollection}
               */
              this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);
              /**
               * Collection of controls HTML elements.
               *
               * @private
               * @type {HTMLCollection}
               */

              this._c = Components.Html.root.querySelectorAll(
                CONTROLS_SELECTOR
              );
              /**
               * Collection of arrow control HTML elements.
               *
               * @private
               * @type {Object}
               */

              this._arrowControls = {
                previous: Components.Html.root.querySelectorAll(
                  PREVIOUS_CONTROLS_SELECTOR
                ),
                next: Components.Html.root.querySelectorAll(
                  NEXT_CONTROLS_SELECTOR
                )
              };
              this.addBindings();
            },

            /**
             * Sets active class to current slide.
             *
             * @return {Void}
             */
            setActive: function setActive() {
              for (var i = 0; i < this._n.length; i++) {
                this.addClass(this._n[i].children);
              }
            },

            /**
             * Removes active class to current slide.
             *
             * @return {Void}
             */
            removeActive: function removeActive() {
              for (var i = 0; i < this._n.length; i++) {
                this.removeClass(this._n[i].children);
              }
            },

            /**
             * Toggles active class on items inside navigation.
             *
             * @param  {HTMLElement} controls
             * @return {Void}
             */
            addClass: function addClass(controls) {
              var settings = Glide.settings;
              var item = controls[Glide.index];

              if (!item) {
                return;
              }

              if (item) {
                item.classList.add(settings.classes.nav.active);
                siblings(item).forEach(function(sibling) {
                  sibling.classList.remove(settings.classes.nav.active);
                });
              }
            },

            /**
             * Removes active class from active control.
             *
             * @param  {HTMLElement} controls
             * @return {Void}
             */
            removeClass: function removeClass(controls) {
              var item = controls[Glide.index];

              if (item) {
                item.classList.remove(Glide.settings.classes.nav.active);
              }
            },

            /**
             * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
             */
            setArrowState: function setArrowState() {
              if (Glide.settings.rewind) {
                return;
              }

              var next = Controls._arrowControls.next;
              var previous = Controls._arrowControls.previous;
              this.resetArrowState(next, previous);

              if (Glide.index === 0) {
                this.disableArrow(previous);
              }

              if (Glide.index === Components.Run.length) {
                this.disableArrow(next);
              }
            },

            /**
             * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
             *
             * @param {NodeList[]} lists
             */
            resetArrowState: function resetArrowState() {
              var settings = Glide.settings;

              for (
                var _len = arguments.length, lists = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                lists[_key] = arguments[_key];
              }

              lists.forEach(function(list) {
                list.forEach(function(element) {
                  element.classList.remove(settings.classes.arrow.disabled);
                });
              });
            },

            /**
             * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
             *
             * @param {NodeList[]} lists
             */
            disableArrow: function disableArrow() {
              var settings = Glide.settings;

              for (
                var _len2 = arguments.length,
                  lists = new Array(_len2),
                  _key2 = 0;
                _key2 < _len2;
                _key2++
              ) {
                lists[_key2] = arguments[_key2];
              }

              lists.forEach(function(list) {
                list.forEach(function(element) {
                  element.classList.add(settings.classes.arrow.disabled);
                });
              });
            },

            /**
             * Adds handles to the each group of controls.
             *
             * @return {Void}
             */
            addBindings: function addBindings() {
              for (var i = 0; i < this._c.length; i++) {
                this.bind(this._c[i].children);
              }
            },

            /**
             * Removes handles from the each group of controls.
             *
             * @return {Void}
             */
            removeBindings: function removeBindings() {
              for (var i = 0; i < this._c.length; i++) {
                this.unbind(this._c[i].children);
              }
            },

            /**
             * Binds events to arrows HTML elements.
             *
             * @param {HTMLCollection} elements
             * @return {Void}
             */
            bind: function bind(elements) {
              for (var i = 0; i < elements.length; i++) {
                Binder.on('click', elements[i], this.click);
                Binder.on('touchstart', elements[i], this.click, capture);
              }
            },

            /**
             * Unbinds events binded to the arrows HTML elements.
             *
             * @param {HTMLCollection} elements
             * @return {Void}
             */
            unbind: function unbind(elements) {
              for (var i = 0; i < elements.length; i++) {
                Binder.off(['click', 'touchstart'], elements[i]);
              }
            },

            /**
             * Handles `click` event on the arrows HTML elements.
             * Moves slider in direction given via the
             * `data-glide-dir` attribute.
             *
             * @param {Object} event
             * @return {void}
             */
            click: function click(event) {
              if (!supportsPassive$1 && event.type === 'touchstart') {
                event.preventDefault();
              }

              var direction = event.currentTarget.getAttribute(
                'data-glide-dir'
              );
              Components.Run.make(Components.Direction.resolve(direction));
            }
          };
          define(Controls, 'items', {
            /**
             * Gets collection of the controls HTML elements.
             *
             * @return {HTMLElement[]}
             */
            get: function get() {
              return Controls._c;
            }
          });
          /**
           * Swap active class of current navigation item:
           * - after mounting to set it to initial index
           * - after each move to the new index
           */

          Events.on(['mount.after', 'move.after'], function() {
            Controls.setActive();
          });
          /**
           * Add or remove disabled class of arrow elements
           */

          Events.on(['mount.after', 'run'], function() {
            Controls.setArrowState();
          });
          /**
           * Remove bindings and HTML Classes:
           * - on destroying, to bring markup to its initial state
           */

          Events.on('destroy', function() {
            Controls.removeBindings();
            Controls.removeActive();
            Binder.destroy();
          });
          return Controls;
        }

        function Keyboard(Glide, Components, Events) {
          /**
           * Instance of the binder for DOM Events.
           *
           * @type {EventsBinder}
           */
          var Binder = new EventsBinder();
          var Keyboard = {
            /**
             * Binds keyboard events on component mount.
             *
             * @return {Void}
             */
            mount: function mount() {
              if (Glide.settings.keyboard) {
                this.bind();
              }
            },

            /**
             * Adds keyboard press events.
             *
             * @return {Void}
             */
            bind: function bind() {
              Binder.on('keyup', document, this.press);
            },

            /**
             * Removes keyboard press events.
             *
             * @return {Void}
             */
            unbind: function unbind() {
              Binder.off('keyup', document);
            },

            /**
             * Handles keyboard's arrows press and moving glide foward and backward.
             *
             * @param  {Object} event
             * @return {Void}
             */
            press: function press(event) {
              var perSwipe = Glide.settings.perSwipe;

              if (event.keyCode === 39) {
                Components.Run.make(
                  Components.Direction.resolve(''.concat(perSwipe, '>'))
                );
              }

              if (event.keyCode === 37) {
                Components.Run.make(
                  Components.Direction.resolve(''.concat(perSwipe, '<'))
                );
              }
            }
          };
          /**
           * Remove bindings from keyboard:
           * - on destroying to remove added events
           * - on updating to remove events before remounting
           */

          Events.on(['destroy', 'update'], function() {
            Keyboard.unbind();
          });
          /**
           * Remount component
           * - on updating to reflect potential changes in settings
           */

          Events.on('update', function() {
            Keyboard.mount();
          });
          /**
           * Destroy binder:
           * - on destroying to remove listeners
           */

          Events.on('destroy', function() {
            Binder.destroy();
          });
          return Keyboard;
        }

        function Autoplay(Glide, Components, Events) {
          /**
           * Instance of the binder for DOM Events.
           *
           * @type {EventsBinder}
           */
          var Binder = new EventsBinder();
          var Autoplay = {
            /**
             * Initializes autoplaying and events.
             *
             * @return {Void}
             */
            mount: function mount() {
              this.enable();
              this.start();

              if (Glide.settings.hoverpause) {
                this.bind();
              }
            },

            /**
             * Enables autoplaying
             *
             * @returns {Void}
             */
            enable: function enable() {
              this._e = true;
            },

            /**
             * Disables autoplaying.
             *
             * @returns {Void}
             */
            disable: function disable() {
              this._e = false;
            },

            /**
             * Starts autoplaying in configured interval.
             *
             * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
             * @return {Void}
             */
            start: function start() {
              var _this = this;

              if (!this._e) {
                return;
              }

              this.enable();

              if (Glide.settings.autoplay) {
                if (isUndefined(this._i)) {
                  this._i = setInterval(function() {
                    _this.stop();

                    Components.Run.make('>');

                    _this.start();

                    Events.emit('autoplay');
                  }, this.time);
                }
              }
            },

            /**
             * Stops autorunning of the glide.
             *
             * @return {Void}
             */
            stop: function stop() {
              this._i = clearInterval(this._i);
            },

            /**
             * Stops autoplaying while mouse is over glide's area.
             *
             * @return {Void}
             */
            bind: function bind() {
              var _this2 = this;

              Binder.on('mouseover', Components.Html.root, function() {
                if (_this2._e) {
                  _this2.stop();
                }
              });
              Binder.on('mouseout', Components.Html.root, function() {
                if (_this2._e) {
                  _this2.start();
                }
              });
            },

            /**
             * Unbind mouseover events.
             *
             * @returns {Void}
             */
            unbind: function unbind() {
              Binder.off(['mouseover', 'mouseout'], Components.Html.root);
            }
          };
          define(Autoplay, 'time', {
            /**
             * Gets time period value for the autoplay interval. Prioritizes
             * times in `data-glide-autoplay` attrubutes over options.
             *
             * @return {Number}
             */
            get: function get() {
              var autoplay = Components.Html.slides[Glide.index].getAttribute(
                'data-glide-autoplay'
              );

              if (autoplay) {
                return toInt(autoplay);
              }

              return toInt(Glide.settings.autoplay);
            }
          });
          /**
           * Stop autoplaying and unbind events:
           * - on destroying, to clear defined interval
           * - on updating via API to reset interval that may changed
           */

          Events.on(['destroy', 'update'], function() {
            Autoplay.unbind();
          });
          /**
           * Stop autoplaying:
           * - before each run, to restart autoplaying
           * - on pausing via API
           * - on destroying, to clear defined interval
           * - while starting a swipe
           * - on updating via API to reset interval that may changed
           */

          Events.on(['run.before', 'swipe.start', 'update'], function() {
            Autoplay.stop();
          });
          Events.on(['pause', 'destroy'], function() {
            Autoplay.disable();
            Autoplay.stop();
          });
          /**
           * Start autoplaying:
           * - after each run, to restart autoplaying
           * - on playing via API
           * - while ending a swipe
           */

          Events.on(['run.after', 'swipe.end'], function() {
            Autoplay.start();
          });
          /**
           * Start autoplaying:
           * - after each run, to restart autoplaying
           * - on playing via API
           * - while ending a swipe
           */

          Events.on(['play'], function() {
            Autoplay.enable();
            Autoplay.start();
          });
          /**
           * Remount autoplaying:
           * - on updating via API to reset interval that may changed
           */

          Events.on('update', function() {
            Autoplay.mount();
          });
          /**
           * Destroy a binder:
           * - on destroying glide instance to clearup listeners
           */

          Events.on('destroy', function() {
            Binder.destroy();
          });
          return Autoplay;
        }

        /**
         * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
         *
         * @param {Object} points
         * @returns {Object}
         */

        function sortBreakpoints(points) {
          if (isObject(points)) {
            return sortKeys(points);
          } else {
            warn('Breakpoints option must be an object');
          }

          return {};
        }

        function Breakpoints(Glide, Components, Events) {
          /**
           * Instance of the binder for DOM Events.
           *
           * @type {EventsBinder}
           */
          var Binder = new EventsBinder();
          /**
           * Holds reference to settings.
           *
           * @type {Object}
           */

          var settings = Glide.settings;
          /**
           * Holds reference to breakpoints object in settings. Sorts breakpoints
           * from smaller to larger. It is required in order to proper
           * matching currently active breakpoint settings.
           *
           * @type {Object}
           */

          var points = sortBreakpoints(settings.breakpoints);
          /**
           * Cache initial settings before overwritting.
           *
           * @type {Object}
           */

          var defaults = Object.assign({}, settings);
          var Breakpoints = {
            /**
             * Matches settings for currectly matching media breakpoint.
             *
             * @param {Object} points
             * @returns {Object}
             */
            match: function match(points) {
              if (typeof window.matchMedia !== 'undefined') {
                for (var point in points) {
                  if (points.hasOwnProperty(point)) {
                    if (
                      window.matchMedia('(max-width: '.concat(point, 'px)'))
                        .matches
                    ) {
                      return points[point];
                    }
                  }
                }
              }

              return defaults;
            }
          };
          /**
           * Overwrite instance settings with currently matching breakpoint settings.
           * This happens right after component initialization.
           */

          Object.assign(settings, Breakpoints.match(points));
          /**
           * Update glide with settings of matched brekpoint:
           * - window resize to update slider
           */

          Binder.on(
            'resize',
            window,
            throttle(function() {
              Glide.settings = mergeOptions(
                settings,
                Breakpoints.match(points)
              );
            }, Glide.settings.throttle)
          );
          /**
           * Resort and update default settings:
           * - on reinit via API, so breakpoint matching will be performed with options
           */

          Events.on('update', function() {
            points = sortBreakpoints(points);
            defaults = Object.assign({}, settings);
          });
          /**
           * Unbind resize listener:
           * - on destroying, to bring markup to its initial state
           */

          Events.on('destroy', function() {
            Binder.off('resize', window);
          });
          return Breakpoints;
        }

        var COMPONENTS = {
          // Required
          Html: Html,
          Translate: Translate,
          Transition: Transition,
          Direction: Direction,
          Peek: Peek,
          Sizes: Sizes,
          Gaps: Gaps,
          Move: Move,
          Clones: Clones,
          Resize: Resize,
          Build: Build,
          Run: Run,
          // Optional
          Swipe: Swipe,
          Images: Images,
          Anchors: Anchors,
          Controls: Controls,
          Keyboard: Keyboard,
          Autoplay: Autoplay,
          Breakpoints: Breakpoints
        };

        var Glide = /*#__PURE__*/ (function(_Core) {
          _inherits(Glide, _Core);

          var _super = _createSuper(Glide);

          function Glide() {
            _classCallCheck(this, Glide);

            return _super.apply(this, arguments);
          }

          _createClass(Glide, [
            {
              key: 'mount',
              value: function mount() {
                var extensions =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                return _get(
                  _getPrototypeOf(Glide.prototype),
                  'mount',
                  this
                ).call(this, Object.assign({}, COMPONENTS, extensions));
              }
            }
          ]);

          return Glide;
        })(Glide$1);

        /***/
      },

    /***/ './node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@glidejs/glide/dist/css/glide.core.css':
      /*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/@glidejs/glide/dist/css/glide.core.css ***!
  \****************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../../css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js'
        )(false);
        // imports

        // module
        exports.push([
          module.i,
          '.glide{position:relative;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.glide *{-webkit-box-sizing:inherit;box-sizing:inherit}.glide__slides,.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-ms-touch-action:pan-Y;touch-action:pan-Y;margin:0;padding:0;white-space:nowrap;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;will-change:transform}.glide__slide,.glide__slides--dragging{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;-ms-flex-negative:0;flex-shrink:0;white-space:normal;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glide--rtl{direction:rtl}',
          ''
        ]);

        // exports

        /***/
      },

    /***/ './node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@glidejs/glide/dist/css/glide.theme.css':
      /*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/@glidejs/glide/dist/css/glide.theme.css ***!
  \*****************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../../css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js'
        )(false);
        // imports

        // module
        exports.push([
          module.i,
          '.glide__arrow{position:absolute;display:block;top:50%;z-index:2;color:#fff;text-transform:uppercase;padding:9px 12px;background-color:transparent;border:2px solid hsla(0,0%,100%,.5);border-radius:4px;-webkit-box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;-webkit-transition:opacity .15s ease,border .3s ease-in-out;transition:opacity .15s ease,border .3s ease-in-out;-webkit-transform:translateY(-50%);transform:translateY(-50%);line-height:1}.glide__arrow:focus{outline:none}.glide__arrow:hover{border-color:#fff}.glide__arrow--left{left:2em}.glide__arrow--right{right:2em}.glide__arrow--disabled{opacity:.33}.glide__bullets{position:absolute;z-index:2;bottom:2em;left:50%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;list-style:none;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.glide__bullet{background-color:hsla(0,0%,100%,.5);width:9px;height:9px;padding:0;border-radius:50%;border:2px solid transparent;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;cursor:pointer;line-height:0;-webkit-box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);margin:0 .25em}.glide__bullet:focus{outline:none}.glide__bullet:focus,.glide__bullet:hover{border:2px solid #fff;background-color:hsla(0,0%,100%,.5)}.glide__bullet--active{background-color:#fff}.glide--swipeable{cursor:grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-webkit-grabbing}',
          ''
        ]);

        // exports

        /***/
      },

    /***/ './node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss':
      /*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*******************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var escape = __webpack_require__(
          /*! ../../node_modules/css-loader/lib/url/escape.js */ './node_modules/css-loader/lib/url/escape.js'
        );
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js'
        )(false);
        // imports

        // module
        exports.push([
          module.i,
          'html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}body{font-family:Open Sans,sans-serif}h2{font-size:1.8rem;color:#687272}.no-list{margin:0;padding:0}.container{max-width:1280px;margin:0 auto}.flex-container{display:-webkit-box;display:-ms-flexbox;display:flex}.glide{margin-top:-16px}.slider__bullets{bottom:0}.glide__bullet--active{background-color:#f8665c!important}.slider__bullet{background:#7f8c8c;border:0;width:50px;height:4px;margin-right:10px;outline:none}.slider-button{position:absolute;top:calc(50% - 26px)}.slider-button:first-child{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.slider-button:last-child{right:0;border-top-right-radius:0!important;border-bottom-right-radius:0!important}.fas.fa-chevron-left:first-child{position:relative;right:-6px;font-size:1.5rem}.fas.fa-chevron-left:last-child{position:relative;right:2px;font-size:1.5rem}.fas.fa-chevron-right:first-child{position:relative;left:5px;font-size:1.5rem}.fas.fa-chevron-right:last-child{position:relative;left:-3px;font-size:1.5rem}.slider-background{width:100%;height:600px;background:#7f8c8c;text-align:center;padding:200px 0 0;color:#fff}.vestibulum{font-size:3rem;font-weight:800;padding:0 1rem;background:#f8665c;margin-bottom:1rem}.maecenas,.vestibulum{display:inline-block;border-radius:5px}.maecenas{background:rgba(0,0,0,.6);padding:1rem}header{background-color:#76c7c0;font-size:1em;background-image:url(' +
            escape(
              __webpack_require__(
                /*! ../img/menu-pattern.png */ './src/img/menu-pattern.png'
              )
            ) +
            ');background-repeat:repeat-x;background-position:bottom}.modus{font-weight:800;font-size:2rem}.versus{font-weight:300;font-size:1.7rem}.burger-menu{color:#f8f8f8;margin:.8rem 1rem 0 auto;cursor:pointer}nav ul{list-style-type:none;display:-webkit-box;display:-ms-flexbox;display:flex}nav li{margin:1rem;border-radius:5px;color:#f8f8f8;background-color:#76c7c0;border-style:none;padding:.5em 1em;border-bottom:3px solid #76c7c0}.dropdown-menu li{background-color:#f77c73;border-bottom:#e8665c}nav li:hover{color:#f8f8f8;background-color:#6fb3ae;border-bottom:3px solid #639995}nav li:active{color:#f8f8f8;background-color:#f77c73;border-bottom-color:#f8665c}nav a{text-decoration:none}.brand,nav a{color:#f8f8f8}.brand{margin:.8rem 0;min-width:210px}.dropdown{position:relative;width:133px}.dropdown-menu{display:none;position:absolute;background-color:#f8665c;border-radius:5px;margin:0;padding:0;top:3rem;left:0}.dropdown .arrow{display:none;position:absolute;width:10px;height:10px;background:#f8665c;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:2.7rem;left:1rem}#portfolioMenu{width:150px;z-index:1}.top-services{background-color:#ececec;margin-top:3rem;padding:.1rem 2rem 1rem;border-radius:5px;color:#7f8c8c;display:-webkit-box;display:-ms-flexbox;display:flex}.top-services h2{margin-bottom:0}.view-more-button-container{margin-left:auto}.top-services p{font-size:.8rem;margin-top:5px}.view-more-button{padding:1rem 3.5rem;font-weight:700;font-size:1.2rem;margin:1.5rem 0 0;min-width:150px;display:inline-block}.cards{margin-top:3rem;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-ms-flex-wrap:wrap;flex-wrap:wrap}.cards h4{color:#687272;font-weight:700}.card-text{font-size:.8rem;color:#687272}.card{-ms-flex-preferred-size:300px;flex-basis:300px;text-align:center;background:#f8f8f8;border-radius:5px;padding:3rem 1rem;-webkit-box-shadow:0 3px rgba(0,0,0,.05);box-shadow:0 3px rgba(0,0,0,.05);fill:#76c7c0;margin-bottom:3rem}.card:active svg{fill:#e8665c}.card:active{background-color:#fff}.card .button-secondary{position:relative;top:55px;padding:1rem 4.5rem}.windows-container{background-color:#ececec;margin-bottom:10vw;margin-top:-7vw}.your-image{font-size:2em;color:#f8f8f8;text-align:center;font-weight:500;margin-top:3em}.windows{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.7vw;position:relative;top:8vw}.window{background:#d8d6d9;width:40em;height:22.5em;border-radius:.375em;border:1px solid #ccc;-ms-flex-negative:0;flex-shrink:0;z-index:2}.window:first-child,.window:last-child{width:32em;height:18em;z-index:1}.window:first-child{margin-right:-5em}.window:last-child{margin-left:-5em}.window-body{border:.1875em solid #d8d6d9;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:90%;background-color:#7f8c8c}.window-header{padding:.5em .6em}.window-ball{width:.625em;height:.625em;border-radius:100%;background:#fff;display:inline-block}.window-minimize{float:right;background:#fff;border-radius:.125em;width:.75em;height:.375em;margin:.3em}.window:first-child .window-body,.window:last-child .window-body{background-color:#76c7c0}.charts{text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.charts p{font-size:.8rem;color:#687272}.charts p a{color:#e8665c}.chart-number{font-size:1.5rem;top:-2rem}.chart-name,.chart-number{font-weight:800;position:relative;color:#7f8c8c}.chart-name{font-size:1.1rem;top:-1.5rem}.donut{width:60%;height:90%}.clients-say{-ms-flex-preferred-size:20%;flex-basis:20%}.clients-say h5{color:#7f8c8c;font-size:1rem}.clients-say h6,.clients-say p{color:#7f8c8c;font-size:.8rem}.clients-say p{font-style:italic;background-color:#fff;padding:1rem;border-radius:5px;line-height:1.5rem;margin:0}.client-name{display:inline;font-size:.8rem}.client-balloon{position:relative}.client-balloon h6{position:absolute;left:50px;bottom:-50px}.arrow-right{width:0;height:0;border-top:25px solid #fff;border-bottom:25px solid transparent;border-left:25px solid transparent;position:absolute;left:15px}.modus-versus{background-color:#ececec;margin-top:4rem;text-align:center;background-image:url(' +
            escape(
              __webpack_require__(
                /*! ../img/rule-pattern.png */ './src/img/rule-pattern.png'
              )
            ) +
            ');background-repeat:repeat-x;background-position:top;padding:2rem}.modus-versus h1{font-weight:700;font-size:2.3rem;color:#e8645a}.modus-versus p{font-size:.8rem;color:#687272;margin:0 1rem}.choose-us{-ms-flex-preferred-size:20%;flex-basis:20%;margin-left:1rem}.choose-us h5{color:#7f8c8c;font-size:1rem}.choose-us ul{font-size:.8rem;color:#7f8c8c;list-style-type:none;line-height:1.5rem}.happy-clients-container{margin-top:3rem}.happy-clients{position:relative}.happy-buttons{position:absolute;right:0;top:0}.fa-arrow-right{color:#e8645a;font-size:.8rem}.happy-clients img{max-width:100%;margin-bottom:1rem}.happy-clients h4{font-size:1rem;color:#687272;font-weight:700;-ms-flex-preferred-size:350px;flex-basis:350px;margin:.7rem 0}.happy-clients .button-primary{background-color:#9aa4a4;border-bottom-color:#687272;padding:.5rem .8rem;margin-left:.5rem}.happy-clients .button-primary:active{background-color:#e8645a;border-bottom-color:#b8453d}.happy-clients .button-secondary .fas.fa-chevron-left,.happy-clients .button-secondary .fas.fa-chevron-right{font-size:1.5rem}hr{border:0;border-bottom:1px solid #dee0e0;width:100%;margin:1.3rem 7rem 0 0}footer{background-color:#76c7c0;padding-top:2rem;background-image:url(' +
            escape(
              __webpack_require__(
                /*! ../img/bottom-pattern.png */ './src/img/bottom-pattern.png'
              )
            ) +
            ');background-repeat:repeat-x;background-position:top}footer ul{padding-left:20px}.brand-footer{color:#f8f8f8;-ms-flex-preferred-size:35%;flex-basis:35%}.brand-footer p{font-size:.8rem;line-height:1.5rem}.contact{color:#f8f8f8}.contact p{font-size:.8rem}.company h5{color:#5e9f9a;font-size:1rem}.company li{list-style-type:none;padding-top:.5rem}.mail,.phone{font-size:1rem}.company li a{color:#f8f8f8;text-decoration:none;font-size:.8rem}.community h5{color:#5e9f9a;font-size:1rem}.community li{list-style-type:none;padding-top:.5rem}.community li a{color:#f8f8f8;text-decoration:none;font-size:.8rem}.from-blog{-ms-flex-preferred-size:35%;flex-basis:35%}.from-blog h5{color:#f8f8f8;font-size:1rem}.from-the{font-style:italic;font-weight:300}.footer-placeholder{border-radius:3px;margin-right:auto;float:left}.footer-container{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.from-blog .data-p{color:#5e9f9a;font-size:.8rem}.from-blog p{color:#f8f8f8;font-size:.8rem;position:relative;margin-left:4rem}.social{background-color:#6ab3ac;padding:1rem;margin-top:2rem}.social ul{display:-webkit-box;display:-ms-flexbox;display:flex;list-style-type:none;margin-left:auto}.social i{padding-left:1rem;color:#f8f8f8}.watermark{position:absolute;font-size:.7rem;color:#f8f8f8;margin-top:-.3rem}.community{-ms-flex-preferred-size:10%;flex-basis:10%}.community .fas.fa-chevron-right,.company .fas.fa-chevron-right{font-size:.5rem}.button{color:#f8f8f8;border-radius:5px;border:none;border-bottom:3px solid;cursor:pointer;padding:1rem;text-decoration:none;outline:none}.button-primary{background-color:#e8665c;border-color:#b8453d}.button-secondary{background-color:#62bdbd;border-color:#5f9995}.button-secondary:active{background-color:#e8665c;border-color:#b8453d}@media screen and (max-width:39.9375em){nav{position:relative}nav ul{position:absolute;right:0;top:61px;z-index:1;display:block;background-color:#76c7c0;text-align:center}nav li{margin:.5rem}.brand{margin-left:1rem}.slider-background{padding:200px 1rem 0}.slider-button{display:none}.top-services{display:block}.clients-say{-ms-flex-preferred-size:100%;flex-basis:100%;padding:0 1rem;margin-top:4rem}.footer-container{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:1rem}.brand-footer,.company-community,.from-blog{-ms-flex-preferred-size:100%;flex-basis:100%}.company-community{-ms-flex-pack:distribute;justify-content:space-around}.community,.company{-ms-flex-preferred-size:101px;flex-basis:101px}.charts-choose-clients{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem}.choose-us{-ms-flex-preferred-size:182px;flex-basis:182px;margin-bottom:2rem}.charts{-ms-flex-wrap:wrap;flex-wrap:wrap}.chart-svg{-ms-flex-preferred-size:50%;flex-basis:50%;margin-bottom:1rem}.chart-number{font-size:1rem;top:-1.5rem}.chart-name{font-size:.7rem;top:-1rem}.happy-clients{margin:0 1rem}.vestibulum{font-size:2.5rem}}@media screen and (min-width:40em){.burger-menu{display:none}nav{display:-webkit-box;display:-ms-flexbox;display:flex}}@media screen and (min-width:40em) and (max-width:63.9375em){nav ul{-ms-flex-wrap:wrap;flex-wrap:wrap}.chart-svg{-ms-flex-preferred-size:50%;flex-basis:50%;margin-bottom:1rem}.chart-number{font-size:.8rem;top:-1.4rem}.chart-name{font-size:.7rem;top:-1rem}}@media screen and (min-width:64em){.cards{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.card{margin-bottom:0}}',
          ''
        ]);

        // exports

        /***/
      },

    /***/ './node_modules/css-loader/lib/css-base.js':
      /*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        module.exports = function(useSourceMap) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function(item) {
              var content = cssWithMappingToString(item, useSourceMap);
              if (item[2]) {
                return '@media ' + item[2] + '{' + content + '}';
              } else {
                return content;
              }
            }).join('');
          };

          // import a list of modules into the list
          list.i = function(modules, mediaQuery) {
            if (typeof modules === 'string') modules = [[null, modules, '']];
            var alreadyImportedModules = {};
            for (var i = 0; i < this.length; i++) {
              var id = this[i][0];
              if (typeof id === 'number') alreadyImportedModules[id] = true;
            }
            for (i = 0; i < modules.length; i++) {
              var item = modules[i];
              // skip already imported module
              // this implementation is not 100% perfect for weird media query combinations
              //  when a module is imported multiple times with different media queries.
              //  I hope this will never occur (Hey this way we have smaller bundles)
              if (
                typeof item[0] !== 'number' ||
                !alreadyImportedModules[item[0]]
              ) {
                if (mediaQuery && !item[2]) {
                  item[2] = mediaQuery;
                } else if (mediaQuery) {
                  item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
                }
                list.push(item);
              }
            }
          };
          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || '';
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function(source) {
              return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
            });

            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join('\n');
          }

          return [content].join('\n');
        }

        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(
            unescape(encodeURIComponent(JSON.stringify(sourceMap)))
          );
          var data =
            'sourceMappingURL=data:application/json;charset=utf-8;base64,' +
            base64;

          return '/*# ' + data + ' */';
        }

        /***/
      },

    /***/ './node_modules/css-loader/lib/url/escape.js':
      /*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function escape(url) {
          if (typeof url !== 'string') {
            return url;
          }
          // If url is already wrapped in quotes, remove them
          if (/^['"].*['"]$/.test(url)) {
            url = url.slice(1, -1);
          }
          // Should url be wrapped?
          // See https://drafts.csswg.org/css-values-3/#urls
          if (/["'() \t\n]/.test(url)) {
            return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
          }

          return url;
        };

        /***/
      },

    /***/ './node_modules/style-loader/lib/addStyles.js':
      /*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

        var stylesInDom = {};

        var memoize = function(fn) {
          var memo;

          return function() {
            if (typeof memo === 'undefined') memo = fn.apply(this, arguments);
            return memo;
          };
        };

        var isOldIE = memoize(function() {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          return window && document && document.all && !window.atob;
        });

        var getTarget = function(target, parent) {
          if (parent) {
            return parent.querySelector(target);
          }
          return document.querySelector(target);
        };

        var getElement = (function(fn) {
          var memo = {};

          return function(target, parent) {
            // If passing function in options, then use it for resolve "head" element.
            // Useful for Shadow Root style i.e
            // {
            //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
            // }
            if (typeof target === 'function') {
              return target();
            }
            if (typeof memo[target] === 'undefined') {
              var styleTarget = getTarget.call(this, target, parent);
              // Special case to return head of iframe instead of iframe itself
              if (
                window.HTMLIFrameElement &&
                styleTarget instanceof window.HTMLIFrameElement
              ) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  styleTarget = null;
                }
              }
              memo[target] = styleTarget;
            }
            return memo[target];
          };
        })();

        var singleton = null;
        var singletonCounter = 0;
        var stylesInsertedAtTop = [];

        var fixUrls = __webpack_require__(
          /*! ./urls */ './node_modules/style-loader/lib/urls.js'
        );

        module.exports = function(list, options) {
          if (typeof DEBUG !== 'undefined' && DEBUG) {
            if (typeof document !== 'object')
              throw new Error(
                'The style-loader cannot be used in a non-browser environment'
              );
          }

          options = options || {};

          options.attrs =
            typeof options.attrs === 'object' ? options.attrs : {};

          // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page
          if (!options.singleton && typeof options.singleton !== 'boolean')
            options.singleton = isOldIE();

          // By default, add <style> tags to the <head> element
          if (!options.insertInto) options.insertInto = 'head';

          // By default, add <style> tags to the bottom of the target
          if (!options.insertAt) options.insertAt = 'bottom';

          var styles = listToStyles(list, options);

          addStylesToDom(styles, options);

          return function update(newList) {
            var mayRemove = [];

            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];

              domStyle.refs--;
              mayRemove.push(domStyle);
            }

            if (newList) {
              var newStyles = listToStyles(newList, options);
              addStylesToDom(newStyles, options);
            }

            for (var i = 0; i < mayRemove.length; i++) {
              var domStyle = mayRemove[i];

              if (domStyle.refs === 0) {
                for (var j = 0; j < domStyle.parts.length; j++)
                  domStyle.parts[j]();

                delete stylesInDom[domStyle.id];
              }
            }
          };
        };

        function addStylesToDom(styles, options) {
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];

            if (domStyle) {
              domStyle.refs++;

              for (var j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j](item.parts[j]);
              }

              for (; j < item.parts.length; j++) {
                domStyle.parts.push(addStyle(item.parts[j], options));
              }
            } else {
              var parts = [];

              for (var j = 0; j < item.parts.length; j++) {
                parts.push(addStyle(item.parts[j], options));
              }

              stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
            }
          }
        }

        function listToStyles(list, options) {
          var styles = [];
          var newStyles = {};

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = { css: css, media: media, sourceMap: sourceMap };

            if (!newStyles[id])
              styles.push((newStyles[id] = { id: id, parts: [part] }));
            else newStyles[id].parts.push(part);
          }

          return styles;
        }

        function insertStyleElement(options, style) {
          var target = getElement(options.insertInto);

          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          }

          var lastStyleElementInsertedAtTop =
            stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

          if (options.insertAt === 'top') {
            if (!lastStyleElementInsertedAtTop) {
              target.insertBefore(style, target.firstChild);
            } else if (lastStyleElementInsertedAtTop.nextSibling) {
              target.insertBefore(
                style,
                lastStyleElementInsertedAtTop.nextSibling
              );
            } else {
              target.appendChild(style);
            }
            stylesInsertedAtTop.push(style);
          } else if (options.insertAt === 'bottom') {
            target.appendChild(style);
          } else if (
            typeof options.insertAt === 'object' &&
            options.insertAt.before
          ) {
            var nextSibling = getElement(options.insertAt.before, target);
            target.insertBefore(style, nextSibling);
          } else {
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          }
        }

        function removeStyleElement(style) {
          if (style.parentNode === null) return false;
          style.parentNode.removeChild(style);

          var idx = stylesInsertedAtTop.indexOf(style);
          if (idx >= 0) {
            stylesInsertedAtTop.splice(idx, 1);
          }
        }

        function createStyleElement(options) {
          var style = document.createElement('style');

          if (options.attrs.type === undefined) {
            options.attrs.type = 'text/css';
          }

          if (options.attrs.nonce === undefined) {
            var nonce = getNonce();
            if (nonce) {
              options.attrs.nonce = nonce;
            }
          }

          addAttrs(style, options.attrs);
          insertStyleElement(options, style);

          return style;
        }

        function createLinkElement(options) {
          var link = document.createElement('link');

          if (options.attrs.type === undefined) {
            options.attrs.type = 'text/css';
          }
          options.attrs.rel = 'stylesheet';

          addAttrs(link, options.attrs);
          insertStyleElement(options, link);

          return link;
        }

        function addAttrs(el, attrs) {
          Object.keys(attrs).forEach(function(key) {
            el.setAttribute(key, attrs[key]);
          });
        }

        function getNonce() {
          if (false) {
          }

          return __webpack_require__.nc;
        }

        function addStyle(obj, options) {
          var style, update, remove, result;

          // If a transform function was defined, run it on the css
          if (options.transform && obj.css) {
            result =
              typeof options.transform === 'function'
                ? options.transform(obj.css)
                : options.transform.default(obj.css);

            if (result) {
              // If transform returns a value, use that instead of the original css.
              // This allows running runtime transformations on the css.
              obj.css = result;
            } else {
              // If the transform function returns a falsy value, don't add this css.
              // This allows conditional loading of css
              return function() {
                // noop
              };
            }
          }

          if (options.singleton) {
            var styleIndex = singletonCounter++;

            style = singleton || (singleton = createStyleElement(options));

            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else if (
            obj.sourceMap &&
            typeof URL === 'function' &&
            typeof URL.createObjectURL === 'function' &&
            typeof URL.revokeObjectURL === 'function' &&
            typeof Blob === 'function' &&
            typeof btoa === 'function'
          ) {
            style = createLinkElement(options);
            update = updateLink.bind(null, style, options);
            remove = function() {
              removeStyleElement(style);

              if (style.href) URL.revokeObjectURL(style.href);
            };
          } else {
            style = createStyleElement(options);
            update = applyToTag.bind(null, style);
            remove = function() {
              removeStyleElement(style);
            };
          }

          update(obj);

          return function updateStyle(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap
              ) {
                return;
              }

              update((obj = newObj));
            } else {
              remove();
            }
          };
        }

        var replaceText = (function() {
          var textStore = [];

          return function(index, replacement) {
            textStore[index] = replacement;

            return textStore.filter(Boolean).join('\n');
          };
        })();

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove ? '' : obj.css;

          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;

            if (childNodes[index]) style.removeChild(childNodes[index]);

            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }

        function applyToTag(style, obj) {
          var css = obj.css;
          var media = obj.media;

          if (media) {
            style.setAttribute('media', media);
          }

          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        function updateLink(link, options, obj) {
          var css = obj.css;
          var sourceMap = obj.sourceMap;

          /*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
          var autoFixUrls =
            options.convertToAbsoluteUrls === undefined && sourceMap;

          if (options.convertToAbsoluteUrls || autoFixUrls) {
            css = fixUrls(css);
          }

          if (sourceMap) {
            // http://stackoverflow.com/a/26603875
            css +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
              ' */';
          }

          var blob = new Blob([css], { type: 'text/css' });

          var oldSrc = link.href;

          link.href = URL.createObjectURL(blob);

          if (oldSrc) URL.revokeObjectURL(oldSrc);
        }

        /***/
      },

    /***/ './node_modules/style-loader/lib/urls.js':
      /*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /**
         * When source maps are enabled, `style-loader` uses a link element with a data-uri to
         * embed the css on the page. This breaks all relative urls because now they are relative to a
         * bundle instead of the current page.
         *
         * One solution is to only use full urls, but that may be impossible.
         *
         * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
         *
         * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
         *
         */

        module.exports = function(css) {
          // get current location
          var location = typeof window !== 'undefined' && window.location;

          if (!location) {
            throw new Error('fixUrls requires window.location');
          }

          // blank or null?
          if (!css || typeof css !== 'string') {
            return css;
          }

          var baseUrl = location.protocol + '//' + location.host;
          var currentDir =
            baseUrl + location.pathname.replace(/\/[^\/]*$/, '/');

          // convert each url(...)
          /*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
          var fixedCss = css.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function(fullMatch, origUrl) {
              // strip quotes (if they exist)
              var unquotedOrigUrl = origUrl
                .trim()
                .replace(/^"(.*)"$/, function(o, $1) {
                  return $1;
                })
                .replace(/^'(.*)'$/, function(o, $1) {
                  return $1;
                });

              // already a full url? no change
              if (
                /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                  unquotedOrigUrl
                )
              ) {
                return fullMatch;
              }

              // convert the url to a full url
              var newUrl;

              if (unquotedOrigUrl.indexOf('//') === 0) {
                //TODO: should we add protocol?
                newUrl = unquotedOrigUrl;
              } else if (unquotedOrigUrl.indexOf('/') === 0) {
                // path should be relative to the base url
                newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
              } else {
                // path should be relative to current directory
                newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ''); // Strip leading './'
              }

              // send back the fixed url(...)
              return 'url(' + JSON.stringify(newUrl) + ')';
            }
          );

          // send back the fixed css
          return fixedCss;
        };

        /***/
      },

    /***/ './src/img/bottom-pattern.png':
      /*!************************************!*\
  !*** ./src/img/bottom-pattern.png ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + '15809eb8c10650832dc3fcb87952893f.png';

        /***/
      },

    /***/ './src/img/menu-pattern.png':
      /*!**********************************!*\
  !*** ./src/img/menu-pattern.png ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + '7676de170c48f64542f212211ed168d3.png';

        /***/
      },

    /***/ './src/img/rule-pattern.png':
      /*!**********************************!*\
  !*** ./src/img/rule-pattern.png ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'cb7ee8581a3c1cc47855e27a2f6a3dfe.png';

        /***/
      },

    /***/ './src/js/index.js':
      /*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../scss/main.scss */ './src/scss/main.scss'
        );
        /* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @glidejs/glide */ './node_modules/@glidejs/glide/dist/glide.esm.js'
        );
        /* harmony import */ var _glidejs_glide_dist_css_glide_core_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @glidejs/glide/dist/css/glide.core.css */ './node_modules/@glidejs/glide/dist/css/glide.core.css'
        );
        /* harmony import */ var _glidejs_glide_dist_css_glide_core_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _glidejs_glide_dist_css_glide_core_css__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _glidejs_glide_dist_css_glide_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @glidejs/glide/dist/css/glide.theme.css */ './node_modules/@glidejs/glide/dist/css/glide.theme.css'
        );
        /* harmony import */ var _glidejs_glide_dist_css_glide_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _glidejs_glide_dist_css_glide_theme_css__WEBPACK_IMPORTED_MODULE_3__
        );

        var portfolioButton = document.getElementById('portfolio');
        var portfolioMenu = document.getElementById('portfolioMenu');
        var dropdownMenuArrow = document.getElementById('dropdownMenuArrow');
        var burgerMenu = document.getElementById('burgerMenu');
        var nav = document.getElementById('nav');
        var allButHeader = document.querySelectorAll('body > *:not(header)');
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__['default']('.glide', {
          type: 'carousel',
          perView: 1,
          focusAt: 'center',
          gap: 0
        }).mount();
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__['default'](
          '.glide-img',
          {
            type: 'carousel',
            perView: 6,
            focusAt: 'center',
            breakpoints: {
              1000: {
                perView: 5
              },
              800: {
                perView: 4
              },
              600: {
                perView: 3
              },
              400: {
                perView: 2
              }
            }
          }
        ).mount();
        var isBurgerMenuOpened = false;
        var isMenuOpened = false;

        var openBurgerMenu = function openBurgerMenu() {
          nav.style.display = 'flex';
          isBurgerMenuOpened = true;
        };

        var closeBurgerMenu = function closeBurgerMenu() {
          nav.style.display = 'none';
          isBurgerMenuOpened = false;
        };

        var openPortfolioMenu = function openPortfolioMenu() {
          portfolioMenu.style.display = 'block';
          dropdownMenuArrow.style.display = 'block';
          isMenuOpened = true;
        };

        var closePortfolioMenu = function closePortfolioMenu() {
          portfolioMenu.style.display = 'none';
          dropdownMenuArrow.style.display = 'none';
          isMenuOpened = false;
        };

        var isMediumUp = function isMediumUp() {
          return window.matchMedia('(min-width: 40em)').matches;
        };

        var isSmallOnly = function isSmallOnly() {
          return window.matchMedia('(max-width: 39.9375em)').matches;
        };

        if (isMediumUp()) {
          openBurgerMenu();
        } else {
          closeBurgerMenu();
        }

        burgerMenu.addEventListener('click', function() {
          if (isBurgerMenuOpened) {
            closeBurgerMenu();
          } else {
            openBurgerMenu();
          }
        });
        portfolioButton.addEventListener('click', function() {
          if (isMenuOpened) {
            closePortfolioMenu();
          } else {
            openPortfolioMenu();
          }
        });
        allButHeader.forEach(function(el, i) {
          el.addEventListener('click', function() {
            if (isSmallOnly()) {
              closePortfolioMenu();
              closeBurgerMenu();
            }
          });
        });
        window.addEventListener('resize', function(event) {
          if (isMediumUp()) {
            openBurgerMenu();
          } else {
            closeBurgerMenu();
          }
        });

        /***/
      },

    /***/ './src/scss/main.scss':
      /*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ './node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss'
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js'
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BnbGlkZWpzL2dsaWRlL2Rpc3QvY3NzL2dsaWRlLmNvcmUuY3NzP2I3ZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BnbGlkZWpzL2dsaWRlL2Rpc3QvY3NzL2dsaWRlLnRoZW1lLmNzcz83MTI5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZ2xpZGVqcy9nbGlkZS9kaXN0L2dsaWRlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGdsaWRlanMvZ2xpZGUvZGlzdC9jc3MvZ2xpZGUuY29yZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BnbGlkZWpzL2dsaWRlL2Rpc3QvY3NzL2dsaWRlLnRoZW1lLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvYm90dG9tLXBhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWVudS1wYXR0ZXJuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3J1bGUtcGF0dGVybi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz8zYjg3Il0sIm5hbWVzIjpbInBvcnRmb2xpb0J1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwb3J0Zm9saW9NZW51IiwiZHJvcGRvd25NZW51QXJyb3ciLCJidXJnZXJNZW51IiwibmF2IiwiYWxsQnV0SGVhZGVyIiwicXVlcnlTZWxlY3RvckFsbCIsIkdsaWRlIiwidHlwZSIsInBlclZpZXciLCJmb2N1c0F0IiwiZ2FwIiwibW91bnQiLCJicmVha3BvaW50cyIsImlzQnVyZ2VyTWVudU9wZW5lZCIsImlzTWVudU9wZW5lZCIsIm9wZW5CdXJnZXJNZW51Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xvc2VCdXJnZXJNZW51Iiwib3BlblBvcnRmb2xpb01lbnUiLCJjbG9zZVBvcnRmb2xpb01lbnUiLCJpc01lZGl1bVVwIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJpc1NtYWxsT25seSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwiZWwiLCJpIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkEsY0FBYyxtQkFBTyxDQUFDLCtSQUFnSTs7QUFFdEosNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLCtGQUE0Qzs7QUFFakU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbEJmLGNBQWMsbUJBQU8sQ0FBQyxpU0FBaUk7O0FBRXZKLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQywrRkFBNEM7O0FBRWpFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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Szs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQSxp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Q0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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NENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbGlkZS5jb3JlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsaWRlLmNvcmUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbGlkZS5jb3JlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsaWRlLnRoZW1lLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsaWRlLnRoZW1lLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xpZGUudGhlbWUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyohXG4gKiBHbGlkZS5qcyB2My41LjJcbiAqIChjKSAyMDEzLTIwMjEgSsSZZHJ6ZWogQ2hhxYJ1YmVrIChodHRwczovL2dpdGh1Yi5jb20vamVkcnplamNoYWx1YmVrLylcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIG1vdmVtZW50LlxuICAgKlxuICAgKiBBdmFpbGFibGUgdHlwZXM6XG4gICAqIGBzbGlkZXJgIC0gUmV3aW5kcyBzbGlkZXIgdG8gdGhlIHN0YXJ0L2VuZCB3aGVuIGl0IHJlYWNoZXMgdGhlIGZpcnN0IG9yIGxhc3Qgc2xpZGUuXG4gICAqIGBjYXJvdXNlbGAgLSBDaGFuZ2VzIHNsaWRlcyB3aXRob3V0IHN0YXJ0aW5nIG92ZXIgd2hlbiBpdCByZWFjaGVzIHRoZSBmaXJzdCBvciBsYXN0IHNsaWRlLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgdHlwZTogJ3NsaWRlcicsXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGF0IHNwZWNpZmljIHNsaWRlIG51bWJlciBkZWZpbmVkIHdpdGggemVyby1iYXNlZCBpbmRleC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHN0YXJ0QXQ6IDAsXG5cbiAgLyoqXG4gICAqIEEgbnVtYmVyIG9mIHNsaWRlcyB2aXNpYmxlIG9uIHRoZSBzaW5nbGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBwZXJWaWV3OiAxLFxuXG4gIC8qKlxuICAgKiBGb2N1cyBjdXJyZW50bHkgYWN0aXZlIHNsaWRlIGF0IGEgc3BlY2lmaWVkIHBvc2l0aW9uIGluIHRoZSB0cmFjay5cbiAgICpcbiAgICogQXZhaWxhYmxlIGlucHV0czpcbiAgICogYGNlbnRlcmAgLSBDdXJyZW50IHNsaWRlIHdpbGwgYmUgYWx3YXlzIGZvY3VzZWQgYXQgdGhlIGNlbnRlciBvZiBhIHRyYWNrLlxuICAgKiBgMCwxLDIsMy4uLmAgLSBDdXJyZW50IHNsaWRlIHdpbGwgYmUgZm9jdXNlZCBvbiB0aGUgc3BlY2lmaWVkIHplcm8tYmFzZWQgaW5kZXguXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd8TnVtYmVyfVxuICAgKi9cbiAgZm9jdXNBdDogMCxcblxuICAvKipcbiAgICogQSBzaXplIG9mIHRoZSBnYXAgYWRkZWQgYmV0d2VlbiBzbGlkZXMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnYXA6IDEwLFxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2xpZGVzIGFmdGVyIGEgc3BlY2lmaWVkIGludGVydmFsLiBVc2UgYGZhbHNlYCBmb3IgdHVybmluZyBvZmYgYXV0b3BsYXkuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8Qm9vbGVhbn1cbiAgICovXG4gIGF1dG9wbGF5OiBmYWxzZSxcblxuICAvKipcbiAgICogU3RvcCBhdXRvcGxheSBvbiBtb3VzZW92ZXIgZXZlbnQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgaG92ZXJwYXVzZTogdHJ1ZSxcblxuICAvKipcbiAgICogQWxsb3cgZm9yIGNoYW5naW5nIHNsaWRlcyB3aXRoIGxlZnQgYW5kIHJpZ2h0IGtleWJvYXJkIGFycm93cy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBrZXlib2FyZDogdHJ1ZSxcblxuICAvKipcbiAgICogU3RvcCBydW5uaW5nIGBwZXJWaWV3YCBudW1iZXIgb2Ygc2xpZGVzIGZyb20gdGhlIGVuZC4gVXNlIHRoaXNcbiAgICogb3B0aW9uIGlmIHlvdSBkb24ndCB3YW50IHRvIGhhdmUgYW4gZW1wdHkgc3BhY2UgYWZ0ZXJcbiAgICogYSBzbGlkZXIuIFdvcmtzIG9ubHkgd2l0aCBgc2xpZGVyYCB0eXBlIGFuZCBhXG4gICAqIG5vbi1jZW50ZXJlZCBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBib3VuZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIE1pbmltYWwgc3dpcGUgZGlzdGFuY2UgbmVlZGVkIHRvIGNoYW5nZSB0aGUgc2xpZGUuIFVzZSBgZmFsc2VgIGZvciB0dXJuaW5nIG9mZiBhIHN3aXBpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8Qm9vbGVhbn1cbiAgICovXG4gIHN3aXBlVGhyZXNob2xkOiA4MCxcblxuICAvKipcbiAgICogTWluaW1hbCBtb3VzZSBkcmFnIGRpc3RhbmNlIG5lZWRlZCB0byBjaGFuZ2UgdGhlIHNsaWRlLiBVc2UgYGZhbHNlYCBmb3IgdHVybmluZyBvZmYgYSBkcmFnZ2luZy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgZHJhZ1RocmVzaG9sZDogMTIwLFxuXG4gIC8qKlxuICAgKiBBIG51bWJlciBvZiBzbGlkZXMgbW92ZWQgb24gc2luZ2xlIHN3aXBlLlxuICAgKlxuICAgKiBBdmFpbGFibGUgdHlwZXM6XG4gICAqIGBgIC0gTW92ZXMgc2xpZGVyIGJ5IG9uZSBzbGlkZSBwZXIgc3dpcGVcbiAgICogYHxgIC0gTW92ZXMgc2xpZGVyIGJldHdlZW4gdmlld3MgcGVyIHN3aXBlIChudW1iZXIgb2Ygc2xpZGVzIGRlZmluZWQgaW4gYHBlclZpZXdgIG9wdGlvbnMpXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBwZXJTd2lwZTogJycsXG5cbiAgLyoqXG4gICAqIE1vdmluZyBkaXN0YW5jZSByYXRpbyBvZiB0aGUgc2xpZGVzIG9uIGEgc3dpcGluZyBhbmQgZHJhZ2dpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICB0b3VjaFJhdGlvOiAwLjUsXG5cbiAgLyoqXG4gICAqIEFuZ2xlIHJlcXVpcmVkIHRvIGFjdGl2YXRlIHNsaWRlcyBtb3Zpbmcgb24gc3dpcGluZyBvciBkcmFnZ2luZy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHRvdWNoQW5nbGU6IDQ1LFxuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiA0MDAsXG5cbiAgLyoqXG4gICAqIEFsbG93cyBsb29waW5nIHRoZSBgc2xpZGVyYCB0eXBlLiBTbGlkZXIgd2lsbCByZXdpbmQgdG8gdGhlIGZpcnN0L2xhc3Qgc2xpZGUgd2hlbiBpdCdzIGF0IHRoZSBzdGFydC9lbmQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgcmV3aW5kOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBvZiB0aGUgcmV3aW5kaW5nIGFuaW1hdGlvbiBvZiB0aGUgYHNsaWRlcmAgdHlwZSBpbiBtaWxsaXNlY29uZHMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICByZXdpbmREdXJhdGlvbjogODAwLFxuXG4gIC8qKlxuICAgKiBFYXNpbmcgZnVuY3Rpb24gZm9yIHRoZSBhbmltYXRpb24uXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBhbmltYXRpb25UaW1pbmdGdW5jOiAnY3ViaWMtYmV6aWVyKC4xNjUsIC44NDAsIC40NDAsIDEpJyxcblxuICAvKipcbiAgICogV2FpdCBmb3IgdGhlIGFuaW1hdGlvbiB0byBmaW5pc2ggdW50aWwgdGhlIG5leHQgdXNlciBpbnB1dCBjYW4gYmUgcHJvY2Vzc2VkXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXG5cbiAgLyoqXG4gICAqIFRocm90dGxlIGNvc3RseSBldmVudHMgYXQgbW9zdCBvbmNlIHBlciBldmVyeSB3YWl0IG1pbGxpc2Vjb25kcy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHRocm90dGxlOiAxMCxcblxuICAvKipcbiAgICogTW92aW5nIGRpcmVjdGlvbiBtb2RlLlxuICAgKlxuICAgKiBBdmFpbGFibGUgaW5wdXRzOlxuICAgKiAtICdsdHInIC0gbGVmdCB0byByaWdodCBtb3ZlbWVudCxcbiAgICogLSAncnRsJyAtIHJpZ2h0IHRvIGxlZnQgbW92ZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBkaXJlY3Rpb246ICdsdHInLFxuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgdmFsdWUgb2YgdGhlIG5leHQgYW5kIHByZXZpb3VzIHZpZXdwb3J0cyB3aGljaFxuICAgKiBoYXZlIHRvIHBlZWsgaW4gdGhlIGN1cnJlbnQgdmlldy4gQWNjZXB0cyBudW1iZXIgYW5kXG4gICAqIHBpeGVscyBhcyBhIHN0cmluZy4gTGVmdCBhbmQgcmlnaHQgcGVla2luZyBjYW4gYmVcbiAgICogc2V0IHVwIHNlcGFyYXRlbHkgd2l0aCBhIGRpcmVjdGlvbnMgb2JqZWN0LlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogYDEwMGAgLSBQZWVrIDEwMHB4IG9uIHRoZSBib3RoIHNpZGVzLlxuICAgKiB7IGJlZm9yZTogMTAwLCBhZnRlcjogNTAgfWAgLSBQZWVrIDEwMHB4IG9uIHRoZSBsZWZ0IHNpZGUgYW5kIDUwcHggb24gdGhlIHJpZ2h0IHNpZGUuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH1cbiAgICovXG4gIHBlZWs6IDAsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgaG93IG1hbnkgY2xvbmVzIG9mIGN1cnJlbnQgdmlld3BvcnQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBjbG9uaW5nUmF0aW86IDEsXG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2Ygb3B0aW9ucyBhcHBsaWVkIGF0IHNwZWNpZmllZCBtZWRpYSBicmVha3BvaW50cy5cbiAgICogRm9yIGV4YW1wbGU6IGRpc3BsYXkgdHdvIHNsaWRlcyBwZXIgdmlldyB1bmRlciA4MDBweC5cbiAgICogYHtcbiAgICogICAnODAwcHgnOiB7XG4gICAqICAgICBwZXJWaWV3OiAyXG4gICAqICAgfVxuICAgKiB9YFxuICAgKi9cbiAgYnJlYWtwb2ludHM6IHt9LFxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIGludGVybmFsbHkgdXNlZCBIVE1MIGNsYXNzZXMuXG4gICAqXG4gICAqIEB0b2RvIFJlZmFjdG9yIGBzbGlkZXJgIGFuZCBgY2Fyb3VzZWxgIHByb3BlcnRpZXMgdG8gc2luZ2xlIGB0eXBlOiB7IHNsaWRlcjogJycsIGNhcm91c2VsOiAnJyB9YCBvYmplY3RcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNsYXNzZXM6IHtcbiAgICBzd2lwZWFibGU6ICdnbGlkZS0tc3dpcGVhYmxlJyxcbiAgICBkcmFnZ2luZzogJ2dsaWRlLS1kcmFnZ2luZycsXG4gICAgZGlyZWN0aW9uOiB7XG4gICAgICBsdHI6ICdnbGlkZS0tbHRyJyxcbiAgICAgIHJ0bDogJ2dsaWRlLS1ydGwnXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICBzbGlkZXI6ICdnbGlkZS0tc2xpZGVyJyxcbiAgICAgIGNhcm91c2VsOiAnZ2xpZGUtLWNhcm91c2VsJ1xuICAgIH0sXG4gICAgc2xpZGU6IHtcbiAgICAgIGNsb25lOiAnZ2xpZGVfX3NsaWRlLS1jbG9uZScsXG4gICAgICBhY3RpdmU6ICdnbGlkZV9fc2xpZGUtLWFjdGl2ZSdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBkaXNhYmxlZDogJ2dsaWRlX19hcnJvdy0tZGlzYWJsZWQnXG4gICAgfSxcbiAgICBuYXY6IHtcbiAgICAgIGFjdGl2ZTogJ2dsaWRlX19idWxsZXQtLWFjdGl2ZSdcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogT3V0cHV0cyB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGJvd3NlciBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbXNnXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICBjb25zb2xlLmVycm9yKFwiW0dsaWRlIHdhcm5dOiBcIi5jb25jYXQobXNnKSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdmFsdWUgZW50ZXJlZCBhcyBudW1iZXJcbiAqIG9yIHN0cmluZyB0byBpbnRlZ2VyIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gdG9JbnQodmFsdWUpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcbn1cbi8qKlxuICogQ29udmVydHMgdmFsdWUgZW50ZXJlZCBhcyBudW1iZXJcbiAqIG9yIHN0cmluZyB0byBmbGF0IHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuXG5mdW5jdGlvbiB0b0Zsb2F0KHZhbHVlKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbn1cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHsqfSAgIHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZVxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gX3R5cGVvZih2YWx1ZSk7XG5cbiAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgISF2YWx1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1taXhlZC1vcGVyYXRvcnNcbn1cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAgeyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG4vKipcbiAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuY29uc3RydWN0b3IgPT09IEFycmF5O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIGluaXRpYWxpemVzIHNwZWNpZmllZCBjb2xsZWN0aW9uIG9mIGV4dGVuc2lvbnMuXG4gKiBFYWNoIGV4dGVuc2lvbiByZWNlaXZlcyBhY2Nlc3MgdG8gaW5zdGFuY2Ugb2YgZ2xpZGUgYW5kIHJlc3Qgb2YgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZ2xpZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBtb3VudChnbGlkZSwgZXh0ZW5zaW9ucywgZXZlbnRzKSB7XG4gIHZhciBjb21wb25lbnRzID0ge307XG5cbiAgZm9yICh2YXIgbmFtZSBpbiBleHRlbnNpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZXh0ZW5zaW9uc1tuYW1lXSkpIHtcbiAgICAgIGNvbXBvbmVudHNbbmFtZV0gPSBleHRlbnNpb25zW25hbWVdKGdsaWRlLCBjb21wb25lbnRzLCBldmVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKCdFeHRlbnNpb24gbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgX25hbWUgaW4gY29tcG9uZW50cykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbXBvbmVudHNbX25hbWVdLm1vdW50KSkge1xuICAgICAgY29tcG9uZW50c1tfbmFtZV0ubW91bnQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuLyoqXG4gKiBEZWZpbmVzIGdldHRlciBhbmQgc2V0dGVyIHByb3BlcnR5IG9uIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqICAgICAgICAgT2JqZWN0IHdoZXJlIHByb3BlcnR5IGhhcyB0byBiZSBkZWZpbmVkLlxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wICAgICAgICBOYW1lIG9mIHRoZSBkZWZpbmVkIHByb3BlcnR5LlxuICogQHBhcmFtICB7T2JqZWN0fSBkZWZpbml0aW9uICBHZXQgYW5kIHNldCBkZWZpbml0aW9ucyBmb3IgdGhlIHByb3BlcnR5LlxuICogQHJldHVybiB7Vm9pZH1cbiAqL1xuZnVuY3Rpb24gZGVmaW5lKG9iaiwgcHJvcCwgZGVmaW5pdGlvbikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZWZpbml0aW9uKTtcbn1cbi8qKlxuICogU29ydHMgYXBoYWJldGljYWxseSBvYmplY3Qga2V5cy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIHNvcnRLZXlzKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChyLCBrKSB7XG4gICAgcltrXSA9IG9ialtrXTtcbiAgICByZXR1cm4gcltrXSwgcjtcbiAgfSwge30pO1xufVxuLyoqXG4gKiBNZXJnZXMgcGFzc2VkIHNldHRpbmdzIG9iamVjdCB3aXRoIGRlZmF1bHQgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlZmF1bHRzXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNldHRpbmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gbWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBzZXR0aW5ncykge1xuICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBzZXR0aW5ncyk7IC8vIGBPYmplY3QuYXNzaWduYCBkbyBub3QgZGVlcGx5IG1lcmdlIG9iamVjdHMsIHNvIHdlXG4gIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkgZm9yIGV2ZXJ5IG5lc3RlZCBvYmplY3RcbiAgLy8gaW4gb3B0aW9ucy4gQWx0aG91Z2ggaXQgZG9lcyBub3QgbG9vayBzbWFydCxcbiAgLy8gaXQncyBzbWFsbGVyIGFuZCBmYXN0ZXIgdGhhbiBzb21lIGZhbmN5XG4gIC8vIG1lcmdpbmcgZGVlcC1tZXJnZSBhbGdvcml0aG0gc2NyaXB0LlxuXG4gIGlmIChzZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NlcycpKSB7XG4gICAgb3B0aW9ucy5jbGFzc2VzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMuY2xhc3Nlcywgc2V0dGluZ3MuY2xhc3Nlcyk7XG5cbiAgICBpZiAoc2V0dGluZ3MuY2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eSgnZGlyZWN0aW9uJykpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3Nlcy5kaXJlY3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy5jbGFzc2VzLmRpcmVjdGlvbiwgc2V0dGluZ3MuY2xhc3Nlcy5kaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncy5jbGFzc2VzLmhhc093blByb3BlcnR5KCd0eXBlJykpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3Nlcy50eXBlID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMuY2xhc3Nlcy50eXBlLCBzZXR0aW5ncy5jbGFzc2VzLnR5cGUpO1xuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncy5jbGFzc2VzLmhhc093blByb3BlcnR5KCdzbGlkZScpKSB7XG4gICAgICBvcHRpb25zLmNsYXNzZXMuc2xpZGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy5jbGFzc2VzLnNsaWRlLCBzZXR0aW5ncy5jbGFzc2VzLnNsaWRlKTtcbiAgICB9XG5cbiAgICBpZiAoc2V0dGluZ3MuY2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eSgnYXJyb3cnKSkge1xuICAgICAgb3B0aW9ucy5jbGFzc2VzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMuY2xhc3Nlcy5hcnJvdywgc2V0dGluZ3MuY2xhc3Nlcy5hcnJvdyk7XG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzLmNsYXNzZXMuaGFzT3duUHJvcGVydHkoJ25hdicpKSB7XG4gICAgICBvcHRpb25zLmNsYXNzZXMubmF2ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMuY2xhc3Nlcy5uYXYsIHNldHRpbmdzLmNsYXNzZXMubmF2KTtcbiAgICB9XG4gIH1cblxuICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ2JyZWFrcG9pbnRzJykpIHtcbiAgICBvcHRpb25zLmJyZWFrcG9pbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMuYnJlYWtwb2ludHMsIHNldHRpbmdzLmJyZWFrcG9pbnRzKTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG52YXIgRXZlbnRzQnVzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEV2ZW50QnVzIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRzXG4gICAqL1xuICBmdW5jdGlvbiBFdmVudHNCdXMoKSB7XG4gICAgdmFyIGV2ZW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRzQnVzKTtcblxuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuaG9wID0gZXZlbnRzLmhhc093blByb3BlcnR5O1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGxpc3RlbmVyIHRvIHRoZSBzcGVjaWZlZCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRXZlbnRzQnVzLCBbe1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgaGFuZGxlcikge1xuICAgICAgaWYgKGlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLm9uKGV2ZW50W2ldLCBoYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gQ3JlYXRlIHRoZSBldmVudCdzIG9iamVjdCBpZiBub3QgeWV0IGNyZWF0ZWRcblxuXG4gICAgICBpZiAoIXRoaXMuaG9wLmNhbGwodGhpcy5ldmVudHMsIGV2ZW50KSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXTtcbiAgICAgIH0gLy8gQWRkIHRoZSBoYW5kbGVyIHRvIHF1ZXVlXG5cblxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goaGFuZGxlcikgLSAxOyAvLyBQcm92aWRlIGhhbmRsZSBiYWNrIGZvciByZW1vdmFsIG9mIGV2ZW50XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudF1baW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSdW5zIHJlZ2lzdGVyZWQgaGFuZGxlcnMgZm9yIHNwZWNpZmllZCBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBldmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0PX0gY29udGV4dFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBpZiAoaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuZW1pdChldmVudFtpXSwgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIElmIHRoZSBldmVudCBkb2Vzbid0IGV4aXN0LCBvciB0aGVyZSdzIG5vIGhhbmRsZXJzIGluIHF1ZXVlLCBqdXN0IGxlYXZlXG5cblxuICAgICAgaWYgKCF0aGlzLmhvcC5jYWxsKHRoaXMuZXZlbnRzLCBldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBDeWNsZSB0aHJvdWdoIGV2ZW50cyBxdWV1ZSwgZmlyZSFcblxuXG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtKGNvbnRleHQgfHwge30pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV2ZW50c0J1cztcbn0oKTtcblxudmFyIEdsaWRlJDEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDb25zdHJ1Y3QgZ2xpZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHNlbGVjdG9yXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICovXG4gIGZ1bmN0aW9uIEdsaWRlKHNlbGVjdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdsaWRlKTtcblxuICAgIHRoaXMuX2MgPSB7fTtcbiAgICB0aGlzLl90ID0gW107XG4gICAgdGhpcy5fZSA9IG5ldyBFdmVudHNCdXMoKTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLnNldHRpbmdzLnN0YXJ0QXQ7XG4gIH1cbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgZ2xpZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5zaW9ucyBDb2xsZWN0aW9uIG9mIGV4dGVuc2lvbnMgdG8gaW5pdGlhbGl6ZS5cclxuICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhHbGlkZSwgW3tcbiAgICBrZXk6IFwibW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW91bnQkMSgpIHtcbiAgICAgIHZhciBleHRlbnNpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgdGhpcy5fZS5lbWl0KCdtb3VudC5iZWZvcmUnKTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGV4dGVuc2lvbnMpKSB7XG4gICAgICAgIHRoaXMuX2MgPSBtb3VudCh0aGlzLCBleHRlbnNpb25zLCB0aGlzLl9lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBvYmplY3Qgb24gYG1vdW50KClgJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgnbW91bnQuYWZ0ZXInKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQ29sbGVjdHMgYW4gaW5zdGFuY2UgYHRyYW5zbGF0ZWAgdHJhbnNmb3JtZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge0FycmF5fSB0cmFuc2Zvcm1lcnMgQ29sbGVjdGlvbiBvZiB0cmFuc2Zvcm1lcnMuXHJcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtdXRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbXV0YXRlKCkge1xuICAgICAgdmFyIHRyYW5zZm9ybWVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG5cbiAgICAgIGlmIChpc0FycmF5KHRyYW5zZm9ybWVycykpIHtcbiAgICAgICAgdGhpcy5fdCA9IHRyYW5zZm9ybWVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBhcnJheSBvbiBgbXV0YXRlKClgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgZ2xpZGUgd2l0aCBzcGVjaWZpZWQgc2V0dGluZ3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmdzXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICB0aGlzLnNldHRpbmdzID0gbWVyZ2VPcHRpb25zKHRoaXMuc2V0dGluZ3MsIHNldHRpbmdzKTtcblxuICAgICAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KCdzdGFydEF0JykpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHNldHRpbmdzLnN0YXJ0QXQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgndXBkYXRlJyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIENoYW5nZSBzbGlkZSB3aXRoIHNwZWNpZmllZCBwYXR0ZXJuLiBBIHBhdHRlcm4gbXVzdCBiZSBpbiB0aGUgc3BlY2lhbCBmb3JtYXQ6XHJcbiAgICAgKiBgPmAgLSBNb3ZlIG9uZSBmb3J3YXJkXHJcbiAgICAgKiBgPGAgLSBNb3ZlIG9uZSBiYWNrd2FyZFxyXG4gICAgICogYD17aX1gIC0gR28gdG8ge2l9IHplcm8tYmFzZWQgc2xpZGUgKGVxLiAnPTEnLCB3aWxsIGdvIHRvIHNlY29uZCBzbGlkZSlcclxuICAgICAqIGA+PmAgLSBSZXdpbmRzIHRvIGVuZCAobGFzdCBzbGlkZSlcclxuICAgICAqIGA8PGAgLSBSZXdpbmRzIHRvIHN0YXJ0IChmaXJzdCBzbGlkZSlcclxuICAgICAqIGB8PmAgLSBNb3ZlIG9uZSB2aWV3cG9ydCBmb3J3YXJkXHJcbiAgICAgKiBgfDxgIC0gTW92ZSBvbmUgdmlld3BvcnQgYmFja3dhcmRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0dGVyblxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdvKHBhdHRlcm4pIHtcbiAgICAgIHRoaXMuX2MuUnVuLm1ha2UocGF0dGVybik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIE1vdmUgdHJhY2sgYnkgc3BlY2lmaWVkIGRpc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXN0YW5jZVxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZShkaXN0YW5jZSkge1xuICAgICAgdGhpcy5fYy5UcmFuc2l0aW9uLmRpc2FibGUoKTtcblxuICAgICAgdGhpcy5fYy5Nb3ZlLm1ha2UoZGlzdGFuY2UpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IGluc3RhbmNlIGFuZCByZXZlcnQgYWxsIGNoYW5nZXMgZG9uZSBieSB0aGlzLl9jLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9lLmVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgaW5zdGFuY2UgYXV0b3BsYXlpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufE51bWJlcn0gaW50ZXJ2YWwgUnVuIGF1dG9wbGF5aW5nIHdpdGggcGFzc2VkIGludGVydmFsIHJlZ2FyZGxlc3Mgb2YgYGF1dG9wbGF5YCBzZXR0aW5nc1xyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBsYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHZhciBpbnRlcnZhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmF1dG9wbGF5ID0gaW50ZXJ2YWw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgncGxheScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGluc3RhbmNlIGF1dG9wbGF5aW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMuX2UuZW1pdCgncGF1c2UnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0cyBnbGlkZSBpbnRvIGEgaWRsZSBzdGF0dXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRpc2FibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0cyBnbGlkZSBpbnRvIGEgYWN0aXZlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW5hYmxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEFkZHMgY3V1dG9tIGV2ZW50IGxpc3RlbmVyIHdpdGggaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlclxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICB0aGlzLl9lLm9uKGV2ZW50LCBoYW5kbGVyKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIGdsaWRlIGlzIGEgcHJlY2lzZWQgdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzVHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1R5cGUobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudHlwZSA9PT0gbmFtZTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBjb3JlIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXR0aW5nc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX287XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgY29yZSBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb1xyXG4gICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvKSB7XG4gICAgICBpZiAoaXNPYmplY3QobykpIHtcbiAgICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdPcHRpb25zIG11c3QgYmUgYW4gYG9iamVjdGAgaW5zdGFuY2UuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0cyBjdXJyZW50IGluZGV4IG9mIHRoZSBzbGlkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbmRleFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2k7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0cyBjdXJyZW50IGluZGV4IGEgc2xpZGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChpKSB7XG4gICAgICB0aGlzLl9pID0gdG9JbnQoaSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0eXBlIG5hbWUgb2YgdGhlIHNsaWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnR5cGU7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgaWRsZSBzdGF0dXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzYWJsZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFNldHMgdmFsdWUgb2YgdGhlIGlkbGUgc3RhdHVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdHVzKSB7XG4gICAgICB0aGlzLl9kID0gISFzdGF0dXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdsaWRlO1xufSgpO1xuXG5mdW5jdGlvbiBSdW4gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIFJ1biA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhdXRvcnVubmluZyBvZiB0aGUgZ2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuX28gPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgZ2xpZGVzIHJ1bm5pbmcgYmFzZWQgb24gdGhlIHBhc3NlZCBtb3Zpbmcgc2NoZW1hLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1vdmVcbiAgICAgKi9cbiAgICBtYWtlOiBmdW5jdGlvbiBtYWtlKG1vdmUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghR2xpZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgIUdsaWRlLnNldHRpbmdzLndhaXRGb3JUcmFuc2l0aW9uIHx8IEdsaWRlLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gbW92ZTtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3J1bi5iZWZvcmUnLCB0aGlzLm1vdmUpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuICAgICAgICBFdmVudHMuZW1pdCgncnVuJywgdGhpcy5tb3ZlKTtcbiAgICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuaXNTdGFydCgpKSB7XG4gICAgICAgICAgICBFdmVudHMuZW1pdCgncnVuLnN0YXJ0JywgX3RoaXMubW92ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzLmlzRW5kKCkpIHtcbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uZW5kJywgX3RoaXMubW92ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzLmlzT2Zmc2V0KCkpIHtcbiAgICAgICAgICAgIF90aGlzLl9vID0gZmFsc2U7XG4gICAgICAgICAgICBFdmVudHMuZW1pdCgncnVuLm9mZnNldCcsIF90aGlzLm1vdmUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uYWZ0ZXInLCBfdGhpcy5tb3ZlKTtcbiAgICAgICAgICBHbGlkZS5lbmFibGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgY3VycmVudCBpbmRleCBiYXNlZCBvbiBkZWZpbmVkIG1vdmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ8VW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGNhbGN1bGF0ZTogZnVuY3Rpb24gY2FsY3VsYXRlKCkge1xuICAgICAgdmFyIG1vdmUgPSB0aGlzLm1vdmUsXG4gICAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgICB2YXIgc3RlcHMgPSBtb3ZlLnN0ZXBzLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IG1vdmUuZGlyZWN0aW9uOyAvLyBCeSBkZWZhdWx0IGFzc3VtZSB0aGF0IHNpemUgb2YgdmlldyBpcyBlcXVhbCB0byBvbmUgc2xpZGVcblxuICAgICAgdmFyIHZpZXdTaXplID0gMTsgLy8gV2hpbGUgZGlyZWN0aW9uIGlzIGA9YCB3ZSB3YW50IGp1bXAgdG9cbiAgICAgIC8vIGEgc3BlY2lmaWVkIGluZGV4IGRlc2NyaWJlZCBpbiBzdGVwcy5cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJz0nKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGJvdW5kIGlzIHRydWUsIFxuICAgICAgICAvLyBhcyB3ZSB3YW50IHRvIGF2b2lkIHdoaXRlc3BhY2VzLlxuICAgICAgICBpZiAoR2xpZGUuc2V0dGluZ3MuYm91bmQgJiYgdG9JbnQoc3RlcHMpID4gbGVuZ3RoKSB7XG4gICAgICAgICAgR2xpZGUuaW5kZXggPSBsZW5ndGg7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgR2xpZGUuaW5kZXggPSBzdGVwcztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXaGVuIHBhdHRlcm4gaXMgZXF1YWwgdG8gYD4+YCB3ZSB3YW50XG4gICAgICAvLyBmYXN0IGZvcndhcmQgdG8gdGhlIGxhc3Qgc2xpZGUuXG5cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJz4nICYmIHN0ZXBzID09PSAnPicpIHtcbiAgICAgICAgR2xpZGUuaW5kZXggPSBsZW5ndGg7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2hlbiBwYXR0ZXJuIGlzIGVxdWFsIHRvIGA8PGAgd2Ugd2FudFxuICAgICAgLy8gZmFzdCBmb3J3YXJkIHRvIHRoZSBmaXJzdCBzbGlkZS5cblxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnPCcgJiYgc3RlcHMgPT09ICc8Jykge1xuICAgICAgICBHbGlkZS5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gcGFnaW5hdGlvbiBtb3ZlbWVudFxuXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd8Jykge1xuICAgICAgICB2aWV3U2l6ZSA9IEdsaWRlLnNldHRpbmdzLnBlclZpZXcgfHwgMTtcbiAgICAgIH0gLy8gd2UgYXJlIG1vdmluZyBmb3J3YXJkXG5cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJz4nIHx8IGRpcmVjdGlvbiA9PT0gJ3wnICYmIHN0ZXBzID09PSAnPicpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY2FsY3VsYXRlRm9yd2FyZEluZGV4KHZpZXdTaXplKTtcblxuICAgICAgICBpZiAoaW5kZXggPiBsZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9vID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEdsaWRlLmluZGV4ID0gbm9ybWFsaXplRm9yd2FyZEluZGV4KGluZGV4LCB2aWV3U2l6ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gd2UgYXJlIG1vdmluZyBiYWNrd2FyZFxuXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICc8JyB8fCBkaXJlY3Rpb24gPT09ICd8JyAmJiBzdGVwcyA9PT0gJzwnKSB7XG4gICAgICAgIHZhciBfaW5kZXggPSBjYWxjdWxhdGVCYWNrd2FyZEluZGV4KHZpZXdTaXplKTtcblxuICAgICAgICBpZiAoX2luZGV4IDwgMCkge1xuICAgICAgICAgIHRoaXMuX28gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgR2xpZGUuaW5kZXggPSBub3JtYWxpemVCYWNrd2FyZEluZGV4KF9pbmRleCwgdmlld1NpemUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdhcm4oXCJJbnZhbGlkIGRpcmVjdGlvbiBwYXR0ZXJuIFtcIi5jb25jYXQoZGlyZWN0aW9uKS5jb25jYXQoc3RlcHMsIFwiXSBoYXMgYmVlbiB1c2VkXCIpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHdlIGFyZSBvbiB0aGUgZmlyc3Qgc2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzU3RhcnQ6IGZ1bmN0aW9uIGlzU3RhcnQoKSB7XG4gICAgICByZXR1cm4gR2xpZGUuaW5kZXggPD0gMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHdlIGFyZSBvbiB0aGUgbGFzdCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNFbmQ6IGZ1bmN0aW9uIGlzRW5kKCkge1xuICAgICAgcmV0dXJuIEdsaWRlLmluZGV4ID49IHRoaXMubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG1ha2luZyBhIG9mZnNldCBydW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc09mZnNldDogZnVuY3Rpb24gaXNPZmZzZXQoKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX28pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSAvLyBkaWQgd2UgdmlldyB0byB0aGUgcmlnaHQ/XG5cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3w+Jykge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlLmRpcmVjdGlvbiA9PT0gJ3wnICYmIHRoaXMubW92ZS5zdGVwcyA9PT0gJz4nO1xuICAgICAgfSAvLyBkaWQgd2UgdmlldyB0byB0aGUgbGVmdD9cblxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnfDwnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmUuZGlyZWN0aW9uID09PSAnfCcgJiYgdGhpcy5tb3ZlLnN0ZXBzID09PSAnPCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLm1vdmUuZGlyZWN0aW9uID09PSBkaXJlY3Rpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBib3VuZCBtb2RlIGlzIGFjdGl2ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0JvdW5kOiBmdW5jdGlvbiBpc0JvdW5kKCkge1xuICAgICAgcmV0dXJuIEdsaWRlLmlzVHlwZSgnc2xpZGVyJykgJiYgR2xpZGUuc2V0dGluZ3MuZm9jdXNBdCAhPT0gJ2NlbnRlcicgJiYgR2xpZGUuc2V0dGluZ3MuYm91bmQ7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmV0dXJucyBpbmRleCB2YWx1ZSB0byBtb3ZlIGZvcndhcmQvdG8gdGhlIHJpZ2h0XG4gICAqXG4gICAqIEBwYXJhbSB2aWV3U2l6ZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cblxuICBmdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkSW5kZXgodmlld1NpemUpIHtcbiAgICB2YXIgaW5kZXggPSBHbGlkZS5pbmRleDtcblxuICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykpIHtcbiAgICAgIHJldHVybiBpbmRleCArIHZpZXdTaXplO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleCArICh2aWV3U2l6ZSAtIGluZGV4ICUgdmlld1NpemUpO1xuICB9XG4gIC8qKlxuICAgKiBOb3JtYWxpemVzIHRoZSBnaXZlbiBmb3J3YXJkIGluZGV4IGJhc2VkIG9uIGdsaWRlIHNldHRpbmdzLCBwcmV2ZW50aW5nIGl0IHRvIGV4Y2VlZCBjZXJ0YWluIGJvdW5kYXJpZXNcbiAgICpcbiAgICogQHBhcmFtIGluZGV4XG4gICAqIEBwYXJhbSBsZW5ndGhcbiAgICogQHBhcmFtIHZpZXdTaXplXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplRm9yd2FyZEluZGV4KGluZGV4LCB2aWV3U2l6ZSkge1xuICAgIHZhciBsZW5ndGggPSBSdW4ubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4IDw9IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykpIHtcbiAgICAgIHJldHVybiBpbmRleCAtIChsZW5ndGggKyAxKTtcbiAgICB9XG5cbiAgICBpZiAoR2xpZGUuc2V0dGluZ3MucmV3aW5kKSB7XG4gICAgICAvLyBib3VuZCBkb2VzIGZ1bm55IHRoaW5ncyB3aXRoIHRoZSBsZW5ndGgsIHRoZXJlZm9yIHdlIGhhdmUgdG8gYmUgY2VydGFpblxuICAgICAgLy8gdGhhdCB3ZSBhcmUgb24gdGhlIGxhc3QgcG9zc2libGUgaW5kZXggdmFsdWUgZ2l2ZW4gYnkgYm91bmRcbiAgICAgIGlmIChSdW4uaXNCb3VuZCgpICYmICFSdW4uaXNFbmQoKSkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoUnVuLmlzQm91bmQoKSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihsZW5ndGggLyB2aWV3U2l6ZSkgKiB2aWV3U2l6ZTtcbiAgfVxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBpbmRleCB2YWx1ZSB0byBtb3ZlIGJhY2t3YXJkL3RvIHRoZSBsZWZ0XG4gICAqXG4gICAqIEBwYXJhbSB2aWV3U2l6ZVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2t3YXJkSW5kZXgodmlld1NpemUpIHtcbiAgICB2YXIgaW5kZXggPSBHbGlkZS5pbmRleDtcblxuICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykpIHtcbiAgICAgIHJldHVybiBpbmRleCAtIHZpZXdTaXplO1xuICAgIH0gLy8gZW5zdXJlIG91ciBiYWNrIG5hdmlnYXRpb24gcmVzdWx0cyBpbiB0aGUgc2FtZSBpbmRleCBhcyBhIGZvcndhcmQgbmF2aWdhdGlvblxuICAgIC8vIHRvIGV4cGVyaWVuY2UgYSBob21vZ2VuZW91cyBwYWdpbmdcblxuXG4gICAgdmFyIHZpZXcgPSBNYXRoLmNlaWwoaW5kZXggLyB2aWV3U2l6ZSk7XG4gICAgcmV0dXJuICh2aWV3IC0gMSkgKiB2aWV3U2l6ZTtcbiAgfVxuICAvKipcbiAgICogTm9ybWFsaXplcyB0aGUgZ2l2ZW4gYmFja3dhcmQgaW5kZXggYmFzZWQgb24gZ2xpZGUgc2V0dGluZ3MsIHByZXZlbnRpbmcgaXQgdG8gZXhjZWVkIGNlcnRhaW4gYm91bmRhcmllc1xuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHBhcmFtIGxlbmd0aFxuICAgKiBAcGFyYW0gdmlld1NpemVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplQmFja3dhcmRJbmRleChpbmRleCwgdmlld1NpemUpIHtcbiAgICB2YXIgbGVuZ3RoID0gUnVuLmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgKGxlbmd0aCArIDEpO1xuICAgIH1cblxuICAgIGlmIChHbGlkZS5zZXR0aW5ncy5yZXdpbmQpIHtcbiAgICAgIC8vIGJvdW5kIGRvZXMgZnVubnkgdGhpbmdzIHdpdGggdGhlIGxlbmd0aCwgdGhlcmVmb3Igd2UgaGF2ZSB0byBiZSBjZXJ0YWluXG4gICAgICAvLyB0aGF0IHdlIGFyZSBvbiBmaXJzdCBwb3NzaWJsZSBpbmRleCB2YWx1ZSBiZWZvcmUgd2UgdG8gcmV3aW5kIHRvIHRoZSBsZW5ndGggZ2l2ZW4gYnkgYm91bmRcbiAgICAgIGlmIChSdW4uaXNCb3VuZCgpICYmIFJ1bi5pc1N0YXJ0KCkpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IobGVuZ3RoIC8gdmlld1NpemUpICogdmlld1NpemU7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBkZWZpbmUoUnVuLCAnbW92ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBtb3ZlIHNjaGVtYS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgbW92ZSBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YXIgc3RlcCA9IHZhbHVlLnN1YnN0cigxKTtcbiAgICAgIHRoaXMuX20gPSB7XG4gICAgICAgIGRpcmVjdGlvbjogdmFsdWUuc3Vic3RyKDAsIDEpLFxuICAgICAgICBzdGVwczogc3RlcCA/IHRvSW50KHN0ZXApID8gdG9JbnQoc3RlcCkgOiBzdGVwIDogMFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuICBkZWZpbmUoUnVuLCAnbGVuZ3RoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIHJ1bm5pbmcgZGlzdGFuY2UgYmFzZWRcbiAgICAgKiBvbiB6ZXJvLWluZGV4aW5nIG51bWJlciBvZiBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcbiAgICAgIHZhciBsZW5ndGggPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmxlbmd0aDsgLy8gSWYgdGhlIGBib3VuZGAgb3B0aW9uIGlzIGFjdGl2ZSwgYSBtYXhpbXVtIHJ1bm5pbmcgZGlzdGFuY2Ugc2hvdWxkIGJlXG4gICAgICAvLyByZWR1Y2VkIGJ5IGBwZXJWaWV3YCBhbmQgYGZvY3VzQXRgIHNldHRpbmdzLiBSdW5uaW5nIGRpc3RhbmNlXG4gICAgICAvLyBzaG91bGQgZW5kIGJlZm9yZSBjcmVhdGluZyBhbiBlbXB0eSBzcGFjZSBhZnRlciBpbnN0YW5jZS5cblxuICAgICAgaWYgKHRoaXMuaXNCb3VuZCgpKSB7XG4gICAgICAgIHJldHVybiBsZW5ndGggLSAxIC0gKHRvSW50KHNldHRpbmdzLnBlclZpZXcpIC0gMSkgKyB0b0ludChzZXR0aW5ncy5mb2N1c0F0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxlbmd0aCAtIDE7XG4gICAgfVxuICB9KTtcbiAgZGVmaW5lKFJ1biwgJ29mZnNldCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHN0YXR1cyBvZiB0aGUgb2Zmc2V0dGluZyBmbGFnLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBSdW47XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGN1cnJlbnQgdGltZS5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkXG4gKiBhdCBtb3N0IG9uY2UgZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmVcbiAqL1xuXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciB0aW1lb3V0LCBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gIHZhciBwcmV2aW91cyA9IDA7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuXG4gIHZhciBsYXRlciA9IGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBub3coKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuXG4gIHZhciB0aHJvdHRsZWQgPSBmdW5jdGlvbiB0aHJvdHRsZWQoKSB7XG4gICAgdmFyIGF0ID0gbm93KCk7XG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IGF0O1xuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKGF0IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBhdDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHRocm90dGxlZC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHByZXZpb3VzID0gMDtcbiAgICB0aW1lb3V0ID0gY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiB0aHJvdHRsZWQ7XG59XG5cbnZhciBNQVJHSU5fVFlQRSA9IHtcbiAgbHRyOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgcnRsOiBbJ21hcmdpblJpZ2h0JywgJ21hcmdpbkxlZnQnXVxufTtcbmZ1bmN0aW9uIEdhcHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIEdhcHMgPSB7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBnYXBzIGJldHdlZW4gc2xpZGVzLiBGaXJzdCBhbmQgbGFzdFxuICAgICAqIHNsaWRlcyBkbyBub3QgcmVjZWl2ZSBpdCdzIGVkZ2UgbWFyZ2lucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IHNsaWRlc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgc3R5bGUgPSBzbGlkZXNbaV0uc3R5bGU7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBDb21wb25lbnRzLkRpcmVjdGlvbi52YWx1ZTtcblxuICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMF1dID0gXCJcIi5jb25jYXQodGhpcy52YWx1ZSAvIDIsIFwicHhcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3R5bGVbTUFSR0lOX1RZUEVbZGlyZWN0aW9uXVswXV0gPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpICE9PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMV1dID0gXCJcIi5jb25jYXQodGhpcy52YWx1ZSAvIDIsIFwicHhcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3R5bGVbTUFSR0lOX1RZUEVbZGlyZWN0aW9uXVsxXV0gPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGdhcHMgZnJvbSB0aGUgc2xpZGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MQ29sbGVjdGlvbn0gc2xpZGVzXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShzbGlkZXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzbGlkZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHN0eWxlID0gc2xpZGVzW2ldLnN0eWxlO1xuICAgICAgICBzdHlsZS5tYXJnaW5MZWZ0ID0gJyc7XG4gICAgICAgIHN0eWxlLm1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBkZWZpbmUoR2FwcywgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGdhcC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdG9JbnQoR2xpZGUuc2V0dGluZ3MuZ2FwKTtcbiAgICB9XG4gIH0pO1xuICBkZWZpbmUoR2FwcywgJ2dyb3cnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBhZGRpdGlvbmFsIGRpbWVuc2lvbnMgdmFsdWUgY2F1c2VkIGJ5IGdhcHMuXG4gICAgICogVXNlZCB0byBpbmNyZWFzZSB3aWR0aCBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEdhcHMudmFsdWUgKiBDb21wb25lbnRzLlNpemVzLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuICBkZWZpbmUoR2FwcywgJ3JlZHVjdG9yJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgcmVkdWN0aW9uIHZhbHVlIGNhdXNlZCBieSBnYXBzLlxuICAgICAqIFVzZWQgdG8gc3VidHJhY3Qgd2lkdGggb2YgdGhlIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcGVyVmlldyA9IEdsaWRlLnNldHRpbmdzLnBlclZpZXc7XG4gICAgICByZXR1cm4gR2Fwcy52YWx1ZSAqIChwZXJWaWV3IC0gMSkgLyBwZXJWaWV3O1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBBcHBseSBjYWxjdWxhdGVkIGdhcHM6XG4gICAqIC0gYWZ0ZXIgYnVpbGRpbmcsIHNvIHNsaWRlcyAoaW5jbHVkaW5nIGNsb25lcykgd2lsbCByZWNlaXZlIHByb3BlciBtYXJnaW5zXG4gICAqIC0gb24gdXBkYXRpbmcgdmlhIEFQSSwgdG8gcmVjYWxjdWxhdGUgZ2FwcyB3aXRoIG5ldyBvcHRpb25zXG4gICAqL1xuXG4gIEV2ZW50cy5vbihbJ2J1aWxkLmFmdGVyJywgJ3VwZGF0ZSddLCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgR2Fwcy5hcHBseShDb21wb25lbnRzLkh0bWwud3JhcHBlci5jaGlsZHJlbik7XG4gIH0sIDMwKSk7XG4gIC8qKlxuICAgKiBSZW1vdmUgZ2FwczpcbiAgICogLSBvbiBkZXN0cm95aW5nIHRvIGJyaW5nIG1hcmt1cCB0byBpdHMgaW5pdGFsIHN0YXRlXG4gICAqL1xuXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBHYXBzLnJlbW92ZShDb21wb25lbnRzLkh0bWwud3JhcHBlci5jaGlsZHJlbik7XG4gIH0pO1xuICByZXR1cm4gR2Fwcztcbn1cblxuLyoqXG4gKiBGaW5kcyBzaWJsaW5ncyBub2RlcyBvZiB0aGUgcGFzc2VkIG5vZGUuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNpYmxpbmdzKG5vZGUpIHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgdmFyIG4gPSBub2RlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcbiAgICB2YXIgbWF0Y2hlZCA9IFtdO1xuXG4gICAgZm9yICg7IG47IG4gPSBuLm5leHRTaWJsaW5nKSB7XG4gICAgICBpZiAobi5ub2RlVHlwZSA9PT0gMSAmJiBuICE9PSBub2RlKSB7XG4gICAgICAgIG1hdGNoZWQucHVzaChuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlZDtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHBhc3NlZCBub2RlIGV4aXN0IGFuZCBpcyBhIHZhbGlkIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBleGlzdChub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIFRSQUNLX1NFTEVDVE9SID0gJ1tkYXRhLWdsaWRlLWVsPVwidHJhY2tcIl0nO1xuZnVuY3Rpb24gSHRtbCAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgSHRtbCA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cCBzbGlkZXIgSFRNTCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7R2xpZGV9IGdsaWRlXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5yb290ID0gR2xpZGUuc2VsZWN0b3I7XG4gICAgICB0aGlzLnRyYWNrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoVFJBQ0tfU0VMRUNUT1IpO1xuICAgICAgdGhpcy5jb2xsZWN0U2xpZGVzKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbGxlY3Qgc2xpZGVzXG4gICAgICovXG4gICAgY29sbGVjdFNsaWRlczogZnVuY3Rpb24gY29sbGVjdFNsaWRlcygpIHtcbiAgICAgIHRoaXMuc2xpZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy53cmFwcGVyLmNoaWxkcmVuKS5maWx0ZXIoZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIHJldHVybiAhc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuc2xpZGUuY2xvbmUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBkZWZpbmUoSHRtbCwgJ3Jvb3QnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBub2RlIG9mIHRoZSBnbGlkZSBtYWluIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gSHRtbC5fcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBub2RlIG9mIHRoZSBnbGlkZSBtYWluIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQocikge1xuICAgICAgaWYgKGlzU3RyaW5nKHIpKSB7XG4gICAgICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhpc3QocikpIHtcbiAgICAgICAgSHRtbC5fciA9IHI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdSb290IGVsZW1lbnQgbXVzdCBiZSBhIGV4aXN0aW5nIEh0bWwgbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGRlZmluZShIdG1sLCAndHJhY2snLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBub2RlIG9mIHRoZSBnbGlkZSB0cmFjayB3aXRoIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBIdG1sLl90O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIG5vZGUgb2YgdGhlIGdsaWRlIHRyYWNrIHdpdGggc2xpZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHQpIHtcbiAgICAgIGlmIChleGlzdCh0KSkge1xuICAgICAgICBIdG1sLl90ID0gdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXCJDb3VsZCBub3QgZmluZCB0cmFjayBlbGVtZW50LiBQbGVhc2UgdXNlIFwiLmNvbmNhdChUUkFDS19TRUxFQ1RPUiwgXCIgYXR0cmlidXRlLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgZGVmaW5lKEh0bWwsICd3cmFwcGVyJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgbm9kZSBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gSHRtbC50cmFjay5jaGlsZHJlblswXTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogQWRkL3JlbW92ZS9yZW9yZGVyIGR5bmFtaWMgc2xpZGVzXG4gICAqL1xuXG4gIEV2ZW50cy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIEh0bWwuY29sbGVjdFNsaWRlcygpO1xuICB9KTtcbiAgcmV0dXJuIEh0bWw7XG59XG5cbmZ1bmN0aW9uIFBlZWsgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIFBlZWsgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXBzIGhvdyBtdWNoIHRvIHBlZWsgYmFzZWQgb24gc2V0dGluZ3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBHbGlkZS5zZXR0aW5ncy5wZWVrO1xuICAgIH1cbiAgfTtcbiAgZGVmaW5lKFBlZWssICd2YWx1ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBwZWVrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcnxPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gUGVlay5fdjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgcGVlay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfE9iamVjdH0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlLmJlZm9yZSA9IHRvSW50KHZhbHVlLmJlZm9yZSk7XG4gICAgICAgIHZhbHVlLmFmdGVyID0gdG9JbnQodmFsdWUuYWZ0ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0b0ludCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIFBlZWsuX3YgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuICBkZWZpbmUoUGVlaywgJ3JlZHVjdG9yJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgcmVkdWN0aW9uIHZhbHVlIGNhdXNlZCBieSBwZWVrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IFBlZWsudmFsdWU7XG4gICAgICB2YXIgcGVyVmlldyA9IEdsaWRlLnNldHRpbmdzLnBlclZpZXc7XG5cbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmJlZm9yZSAvIHBlclZpZXcgKyB2YWx1ZS5hZnRlciAvIHBlclZpZXc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZSAqIDIgLyBwZXJWaWV3O1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZSBwZWVraW5nIHNpemVzIG9uOlxuICAgKiAtIHdoZW4gcmVzaXppbmcgd2luZG93IHRvIHVwZGF0ZSB0byBwcm9wZXIgcGVyY2VudHNcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsncmVzaXplJywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgUGVlay5tb3VudCgpO1xuICB9KTtcbiAgcmV0dXJuIFBlZWs7XG59XG5cbmZ1bmN0aW9uIE1vdmUgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIE1vdmUgPSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBtb3ZlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuX28gPSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIGEgbW92ZW1lbnQgdmFsdWUgYmFzZWQgb24gcGFzc2VkIG9mZnNldCBhbmQgY3VycmVudGx5IGFjdGl2ZSBpbmRleC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtYWtlOiBmdW5jdGlvbiBtYWtlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgRXZlbnRzLmVtaXQoJ21vdmUnLCB7XG4gICAgICAgIG1vdmVtZW50OiB0aGlzLnZhbHVlXG4gICAgICB9KTtcbiAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5hZnRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdtb3ZlLmFmdGVyJywge1xuICAgICAgICAgIG1vdmVtZW50OiBfdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgZGVmaW5lKE1vdmUsICdvZmZzZXQnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBvZmZzZXQgdmFsdWUgdXNlZCB0byBtb2RpZnkgY3VycmVudCB0cmFuc2xhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTW92ZS5fbztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBvZmZzZXQgdmFsdWUgdXNlZCB0byBtb2RpZnkgY3VycmVudCB0cmFuc2xhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIE1vdmUuX28gPSAhaXNVbmRlZmluZWQodmFsdWUpID8gdG9JbnQodmFsdWUpIDogMDtcbiAgICB9XG4gIH0pO1xuICBkZWZpbmUoTW92ZSwgJ3RyYW5zbGF0ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGEgcmF3IG1vdmVtZW50IHZhbHVlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudHMuU2l6ZXMuc2xpZGVXaWR0aCAqIEdsaWRlLmluZGV4O1xuICAgIH1cbiAgfSk7XG4gIGRlZmluZShNb3ZlLCAndmFsdWUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBhY3R1YWwgbW92ZW1lbnQgdmFsdWUgY29ycmVjdGVkIGJ5IG9mZnNldC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgIHZhciB0cmFuc2xhdGUgPSB0aGlzLnRyYW5zbGF0ZTtcblxuICAgICAgaWYgKENvbXBvbmVudHMuRGlyZWN0aW9uLmlzKCdydGwnKSkge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlICsgb2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlIC0gb2Zmc2V0O1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBNYWtlIG1vdmVtZW50IHRvIHByb3BlciBzbGlkZSBvbjpcbiAgICogLSBiZWZvcmUgYnVpbGQsIHNvIGdsaWRlIHdpbGwgc3RhcnQgYXQgYHN0YXJ0QXRgIGluZGV4XG4gICAqIC0gb24gZWFjaCBzdGFuZGFyZCBydW4gdG8gbW92ZSB0byBuZXdseSBjYWxjdWxhdGVkIGluZGV4XG4gICAqL1xuXG4gIEV2ZW50cy5vbihbJ2J1aWxkLmJlZm9yZScsICdydW4nXSwgZnVuY3Rpb24gKCkge1xuICAgIE1vdmUubWFrZSgpO1xuICB9KTtcbiAgcmV0dXJuIE1vdmU7XG59XG5cbmZ1bmN0aW9uIFNpemVzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBTaXplcyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZGltZW5zaW9ucyBvZiBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldHVwU2xpZGVzOiBmdW5jdGlvbiBzZXR1cFNsaWRlcygpIHtcbiAgICAgIHZhciB3aWR0aCA9IFwiXCIuY29uY2F0KHRoaXMuc2xpZGVXaWR0aCwgXCJweFwiKTtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0dXBzIGRpbWVuc2lvbnMgb2Ygc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldHVwV3JhcHBlcjogZnVuY3Rpb24gc2V0dXBXcmFwcGVyKCkge1xuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdCh0aGlzLndyYXBwZXJTaXplLCBcInB4XCIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFwcGxpZWQgc3R5bGVzIGZyb20gSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIHNsaWRlcyA9IENvbXBvbmVudHMuSHRtbC5zbGlkZXM7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5zdHlsZS53aWR0aCA9ICcnO1xuICAgIH1cbiAgfTtcbiAgZGVmaW5lKFNpemVzLCAnbGVuZ3RoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY291bnQgbnVtYmVyIG9mIHRoZSBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5IdG1sLnNsaWRlcy5sZW5ndGg7XG4gICAgfVxuICB9KTtcbiAgZGVmaW5lKFNpemVzLCAnd2lkdGgnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB3aWR0aCB2YWx1ZSBvZiB0aGUgc2xpZGVyICh2aXNpYmxlIGFyZWEpLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudHMuSHRtbC50cmFjay5vZmZzZXRXaWR0aDtcbiAgICB9XG4gIH0pO1xuICBkZWZpbmUoU2l6ZXMsICd3cmFwcGVyU2l6ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHNpemUgb2YgdGhlIHNsaWRlcyB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFNpemVzLnNsaWRlV2lkdGggKiBTaXplcy5sZW5ndGggKyBDb21wb25lbnRzLkdhcHMuZ3JvdyArIENvbXBvbmVudHMuQ2xvbmVzLmdyb3c7XG4gICAgfVxuICB9KTtcbiAgZGVmaW5lKFNpemVzLCAnc2xpZGVXaWR0aCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHdpZHRoIHZhbHVlIG9mIGEgc2luZ2xlIHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFNpemVzLndpZHRoIC8gR2xpZGUuc2V0dGluZ3MucGVyVmlldyAtIENvbXBvbmVudHMuUGVlay5yZWR1Y3RvciAtIENvbXBvbmVudHMuR2Fwcy5yZWR1Y3RvcjtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogQXBwbHkgY2FsY3VsYXRlZCBnbGlkZSdzIGRpbWVuc2lvbnM6XG4gICAqIC0gYmVmb3JlIGJ1aWxkaW5nLCBzbyBvdGhlciBkaW1lbnNpb25zIChlLmcuIHRyYW5zbGF0ZSkgd2lsbCBiZSBjYWxjdWxhdGVkIHByb3BlcnRseVxuICAgKiAtIHdoZW4gcmVzaXppbmcgd2luZG93IHRvIHJlY2FsY3VsYXRlIHNpbGRlcyBkaW1lbnNpb25zXG4gICAqIC0gb24gdXBkYXRpbmcgdmlhIEFQSSwgdG8gY2FsY3VsYXRlIGRpbWVuc2lvbnMgYmFzZWQgb24gbmV3IG9wdGlvbnNcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIFNpemVzLnNldHVwU2xpZGVzKCk7XG4gICAgU2l6ZXMuc2V0dXBXcmFwcGVyKCk7XG4gIH0pO1xuICAvKipcbiAgICogUmVtb3ZlIGNhbGN1bGF0ZWQgZ2xpZGUncyBkaW1lbnNpb25zOlxuICAgKiAtIG9uIGRlc3RvdGluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cblxuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgU2l6ZXMucmVtb3ZlKCk7XG4gIH0pO1xuICByZXR1cm4gU2l6ZXM7XG59XG5cbmZ1bmN0aW9uIEJ1aWxkIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBCdWlsZCA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0IGdsaWRlIGJ1aWxkaW5nLiBBZGRzIGNsYXNzZXMsIHNldHNcbiAgICAgKiBkaW1lbnNpb25zIGFuZCBzZXR1cHMgaW5pdGlhbCBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgRXZlbnRzLmVtaXQoJ2J1aWxkLmJlZm9yZScpO1xuICAgICAgdGhpcy50eXBlQ2xhc3MoKTtcbiAgICAgIHRoaXMuYWN0aXZlQ2xhc3MoKTtcbiAgICAgIEV2ZW50cy5lbWl0KCdidWlsZC5hZnRlcicpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGB0eXBlYCBjbGFzcyB0byB0aGUgZ2xpZGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdHlwZUNsYXNzOiBmdW5jdGlvbiB0eXBlQ2xhc3MoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QuYWRkKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMudHlwZVtHbGlkZS5zZXR0aW5ncy50eXBlXSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYWN0aXZlIGNsYXNzIHRvIGN1cnJlbnQgc2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFjdGl2ZUNsYXNzOiBmdW5jdGlvbiBhY3RpdmVDbGFzcygpIHtcbiAgICAgIHZhciBjbGFzc2VzID0gR2xpZGUuc2V0dGluZ3MuY2xhc3NlcztcbiAgICAgIHZhciBzbGlkZSA9IENvbXBvbmVudHMuSHRtbC5zbGlkZXNbR2xpZGUuaW5kZXhdO1xuXG4gICAgICBpZiAoc2xpZGUpIHtcbiAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZChjbGFzc2VzLnNsaWRlLmFjdGl2ZSk7XG4gICAgICAgIHNpYmxpbmdzKHNsaWRlKS5mb3JFYWNoKGZ1bmN0aW9uIChzaWJsaW5nKSB7XG4gICAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuc2xpZGUuYWN0aXZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgSFRNTCBjbGFzc2VzIGFwcGxpZWQgYXQgYnVpbGRpbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUNsYXNzZXM6IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoKSB7XG4gICAgICB2YXIgX0dsaWRlJHNldHRpbmdzJGNsYXNzID0gR2xpZGUuc2V0dGluZ3MuY2xhc3NlcyxcbiAgICAgICAgICB0eXBlID0gX0dsaWRlJHNldHRpbmdzJGNsYXNzLnR5cGUsXG4gICAgICAgICAgc2xpZGUgPSBfR2xpZGUkc2V0dGluZ3MkY2xhc3Muc2xpZGU7XG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKHR5cGVbR2xpZGUuc2V0dGluZ3MudHlwZV0pO1xuICAgICAgQ29tcG9uZW50cy5IdG1sLnNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWJsaW5nKSB7XG4gICAgICAgIHNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShzbGlkZS5hY3RpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQ2xlYXIgYnVpbGRpbmcgY2xhc3NlczpcbiAgICogLSBvbiBkZXN0cm95aW5nIHRvIGJyaW5nIEhUTUwgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICogLSBvbiB1cGRhdGluZyB0byByZW1vdmUgY2xhc3NlcyBiZWZvcmUgcmVtb3VudGluZyBjb21wb25lbnRcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEJ1aWxkLnJlbW92ZUNsYXNzZXMoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBSZW1vdW50IGNvbXBvbmVudDpcbiAgICogLSBvbiByZXNpemluZyBvZiB0aGUgd2luZG93IHRvIGNhbGN1bGF0ZSBuZXcgZGltZW5zaW9uc1xuICAgKiAtIG9uIHVwZGF0aW5nIHNldHRpbmdzIHZpYSBBUElcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsncmVzaXplJywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQnVpbGQubW91bnQoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBTd2FwIGFjdGl2ZSBjbGFzcyBvZiBjdXJyZW50IHNsaWRlOlxuICAgKiAtIGFmdGVyIGVhY2ggbW92ZSB0byB0aGUgbmV3IGluZGV4XG4gICAqL1xuXG4gIEV2ZW50cy5vbignbW92ZS5hZnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBCdWlsZC5hY3RpdmVDbGFzcygpO1xuICB9KTtcbiAgcmV0dXJuIEJ1aWxkO1xufVxuXG5mdW5jdGlvbiBDbG9uZXMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIENsb25lcyA9IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGF0dGVybiBtYXAgYW5kIGNvbGxlY3Qgc2xpZGVzIHRvIGJlIGNsb25lZC5cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG5cbiAgICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuY29sbGVjdCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0IGNsb25lcyB3aXRoIHBhdHRlcm4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtbXX1cbiAgICAgKi9cbiAgICBjb2xsZWN0OiBmdW5jdGlvbiBjb2xsZWN0KCkge1xuICAgICAgdmFyIGl0ZW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuICAgICAgdmFyIF9HbGlkZSRzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzLFxuICAgICAgICAgIHBlclZpZXcgPSBfR2xpZGUkc2V0dGluZ3MucGVyVmlldyxcbiAgICAgICAgICBjbGFzc2VzID0gX0dsaWRlJHNldHRpbmdzLmNsYXNzZXMsXG4gICAgICAgICAgY2xvbmluZ1JhdGlvID0gX0dsaWRlJHNldHRpbmdzLmNsb25pbmdSYXRpbztcblxuICAgICAgaWYgKHNsaWRlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdmFyIHBlZWtJbmNyZW1lbnRlciA9ICshIUdsaWRlLnNldHRpbmdzLnBlZWs7XG4gICAgICAgIHZhciBjbG9uZUNvdW50ID0gcGVyVmlldyArIHBlZWtJbmNyZW1lbnRlciArIE1hdGgucm91bmQocGVyVmlldyAvIDIpO1xuICAgICAgICB2YXIgYXBwZW5kID0gc2xpZGVzLnNsaWNlKDAsIGNsb25lQ291bnQpLnJldmVyc2UoKTtcbiAgICAgICAgdmFyIHByZXBlbmQgPSBzbGlkZXMuc2xpY2UoY2xvbmVDb3VudCAqIC0xKTtcblxuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IE1hdGgubWF4KGNsb25pbmdSYXRpbywgTWF0aC5mbG9vcihwZXJWaWV3IC8gc2xpZGVzLmxlbmd0aCkpOyByKyspIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFwcGVuZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNsb25lID0gYXBwZW5kW2ldLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNsb25lLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcy5zbGlkZS5jbG9uZSk7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGNsb25lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgcHJlcGVuZC5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBfY2xvbmUgPSBwcmVwZW5kW19pXS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgICAgICAgIF9jbG9uZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuc2xpZGUuY2xvbmUpO1xuXG4gICAgICAgICAgICBpdGVtcy51bnNoaWZ0KF9jbG9uZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGNsb25lZCBzbGlkZXMgd2l0aCBnZW5lcmF0ZWQgcGF0dGVybi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYXBwZW5kOiBmdW5jdGlvbiBhcHBlbmQoKSB7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgdmFyIF9Db21wb25lbnRzJEh0bWwgPSBDb21wb25lbnRzLkh0bWwsXG4gICAgICAgICAgd3JhcHBlciA9IF9Db21wb25lbnRzJEh0bWwud3JhcHBlcixcbiAgICAgICAgICBzbGlkZXMgPSBfQ29tcG9uZW50cyRIdG1sLnNsaWRlcztcbiAgICAgIHZhciBoYWxmID0gTWF0aC5mbG9vcihpdGVtcy5sZW5ndGggLyAyKTtcbiAgICAgIHZhciBwcmVwZW5kID0gaXRlbXMuc2xpY2UoMCwgaGFsZikucmV2ZXJzZSgpO1xuICAgICAgdmFyIGFwcGVuZCA9IGl0ZW1zLnNsaWNlKGhhbGYgKiAtMSkucmV2ZXJzZSgpO1xuICAgICAgdmFyIHdpZHRoID0gXCJcIi5jb25jYXQoQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoLCBcInB4XCIpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFwcGVuZC5sZW5ndGg7IGkrKykge1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFwcGVuZFtpXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHByZXBlbmQubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICB3cmFwcGVyLmluc2VydEJlZm9yZShwcmVwZW5kW19pMl0sIHNsaWRlc1swXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IGl0ZW1zLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgICAgaXRlbXNbX2kzXS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGNsb25lZCBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5yZW1vdmVDaGlsZChpdGVtc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBkZWZpbmUoQ2xvbmVzLCAnZ3JvdycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFkZGl0aW9uYWwgZGltZW5zaW9ucyB2YWx1ZSBjYXVzZWQgYnkgY2xvbmVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIChDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyBDb21wb25lbnRzLkdhcHMudmFsdWUpICogQ2xvbmVzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogQXBwZW5kIGFkZGl0aW9uYWwgc2xpZGUncyBjbG9uZXM6XG4gICAqIC0gd2hpbGUgZ2xpZGUncyB0eXBlIGlzIGBjYXJvdXNlbGBcbiAgICovXG5cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgQ2xvbmVzLnJlbW92ZSgpO1xuICAgIENsb25lcy5tb3VudCgpO1xuICAgIENsb25lcy5hcHBlbmQoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBBcHBlbmQgYWRkaXRpb25hbCBzbGlkZSdzIGNsb25lczpcbiAgICogLSB3aGlsZSBnbGlkZSdzIHR5cGUgaXMgYGNhcm91c2VsYFxuICAgKi9cblxuICBFdmVudHMub24oJ2J1aWxkLmJlZm9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoR2xpZGUuaXNUeXBlKCdjYXJvdXNlbCcpKSB7XG4gICAgICBDbG9uZXMuYXBwZW5kKCk7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIFJlbW92ZSBjbG9uZXMgSFRNTEVsZW1lbnRzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIGJyaW5nIEhUTUwgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIENsb25lcy5yZW1vdmUoKTtcbiAgfSk7XG4gIHJldHVybiBDbG9uZXM7XG59XG5cbnZhciBFdmVudHNCaW5kZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ29uc3RydWN0IGEgRXZlbnRzQmluZGVyIGluc3RhbmNlLlxuICAgKi9cbiAgZnVuY3Rpb24gRXZlbnRzQmluZGVyKCkge1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50c0JpbmRlcik7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgfVxuICAvKipcbiAgICogQWRkcyBldmVudHMgbGlzdGVuZXJzIHRvIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50c1xuICAgKiBAcGFyYW0gIHtFbGVtZW50fFdpbmRvd3xEb2N1bWVudH0gZWxcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNsb3N1cmVcbiAgICogQHBhcmFtICB7Qm9vbGVhbnxPYmplY3R9IGNhcHR1cmVcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRXZlbnRzQmluZGVyLCBbe1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudHMsIGVsLCBjbG9zdXJlKSB7XG4gICAgICB2YXIgY2FwdHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpc1N0cmluZyhldmVudHMpKSB7XG4gICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudHNbaV1dID0gY2xvc3VyZTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIHRoaXMubGlzdGVuZXJzW2V2ZW50c1tpXV0sIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGV2ZW50IGxpc3RlbmVycyBmcm9tIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fSBldmVudHNcbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fFdpbmRvd3xEb2N1bWVudH0gZWxcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufE9iamVjdH0gY2FwdHVyZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvZmZcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWwpIHtcbiAgICAgIHZhciBjYXB0dXJlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgaWYgKGlzU3RyaW5nKGV2ZW50cykpIHtcbiAgICAgICAgZXZlbnRzID0gW2V2ZW50c107XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCB0aGlzLmxpc3RlbmVyc1tldmVudHNbaV1dLCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVzdHJveSBjb2xsZWN0ZWQgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV2ZW50c0JpbmRlcjtcbn0oKTtcblxuZnVuY3Rpb24gUmVzaXplIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcbiAgdmFyIFJlc2l6ZSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB3aW5kb3cgYmluZGluZ3MuXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGByZXpzaXplYCBsaXN0ZW5lciB0byB0aGUgd2luZG93LlxuICAgICAqIEl0J3MgYSBjb3N0bHkgZXZlbnQsIHNvIHdlIGFyZSBkZWJvdW5jaW5nIGl0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdyZXNpemUnLCB3aW5kb3csIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Jlc2l6ZScpO1xuICAgICAgfSwgR2xpZGUuc2V0dGluZ3MudGhyb3R0bGUpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBsaXN0ZW5lcnMgZnJvbSB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ3Jlc2l6ZScsIHdpbmRvdyk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmVtb3ZlIGJpbmRpbmdzIGZyb20gd2luZG93OlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIHJlbW92ZSBhZGRlZCBFdmVudExpc3RlbmVyXG4gICAqL1xuXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBSZXNpemUudW5iaW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG4gIHJldHVybiBSZXNpemU7XG59XG5cbnZhciBWQUxJRF9ESVJFQ1RJT05TID0gWydsdHInLCAncnRsJ107XG52YXIgRkxJUEVEX01PVkVNRU5UUyA9IHtcbiAgJz4nOiAnPCcsXG4gICc8JzogJz4nLFxuICAnPSc6ICc9J1xufTtcbmZ1bmN0aW9uIERpcmVjdGlvbiAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgRGlyZWN0aW9uID0ge1xuICAgIC8qKlxuICAgICAqIFNldHVwcyBnYXAgdmFsdWUgYmFzZWQgb24gc2V0dGluZ3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBHbGlkZS5zZXR0aW5ncy5kaXJlY3Rpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHBhdHRlcm4gYmFzZWQgb24gZGlyZWN0aW9uIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0dGVyblxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZShwYXR0ZXJuKSB7XG4gICAgICB2YXIgdG9rZW4gPSBwYXR0ZXJuLnNsaWNlKDAsIDEpO1xuXG4gICAgICBpZiAodGhpcy5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4uc3BsaXQodG9rZW4pLmpvaW4oRkxJUEVEX01PVkVNRU5UU1t0b2tlbl0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHZhbHVlIG9mIGRpcmVjdGlvbiBtb2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvblxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzOiBmdW5jdGlvbiBpcyhkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBkaXJlY3Rpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgZGlyZWN0aW9uIGNsYXNzIHRvIHRoZSByb290IEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIGFkZENsYXNzKCkge1xuICAgICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LmFkZChHbGlkZS5zZXR0aW5ncy5jbGFzc2VzLmRpcmVjdGlvblt0aGlzLnZhbHVlXSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGlyZWN0aW9uIGNsYXNzIGZyb20gdGhlIHJvb3QgSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uW3RoaXMudmFsdWVdKTtcbiAgICB9XG4gIH07XG4gIGRlZmluZShEaXJlY3Rpb24sICd2YWx1ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBkaXJlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERpcmVjdGlvbi5fdjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgZGlyZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgaWYgKFZBTElEX0RJUkVDVElPTlMuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xuICAgICAgICBEaXJlY3Rpb24uX3YgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ0RpcmVjdGlvbiB2YWx1ZSBtdXN0IGJlIGBsdHJgIG9yIGBydGxgJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIENsZWFyIGRpcmVjdGlvbiBjbGFzczpcbiAgICogLSBvbiBkZXN0cm95IHRvIGJyaW5nIEhUTUwgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVtb3ZlIGNsYXNzIGJlZm9yZSByZWFwcGxpbmcgYmVsbG93XG4gICAqL1xuXG4gIEV2ZW50cy5vbihbJ2Rlc3Ryb3knLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBEaXJlY3Rpb24ucmVtb3ZlQ2xhc3MoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBSZW1vdW50IGNvbXBvbmVudDpcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVmbGVjdCBjaGFuZ2VzIGluIGRpcmVjdGlvbiB2YWx1ZVxuICAgKi9cblxuICBFdmVudHMub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBEaXJlY3Rpb24ubW91bnQoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBBcHBseSBkaXJlY3Rpb24gY2xhc3M6XG4gICAqIC0gYmVmb3JlIGJ1aWxkaW5nIHRvIGFwcGx5IGNsYXNzIGZvciB0aGUgZmlyc3QgdGltZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlYXBwbHkgZGlyZWN0aW9uIGNsYXNzIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLmFkZENsYXNzKCk7XG4gIH0pO1xuICByZXR1cm4gRGlyZWN0aW9uO1xufVxuXG4vKipcbiAqIFJlZmxlY3RzIHZhbHVlIG9mIGdsaWRlIG1vdmVtZW50LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gR2xpZGVcbiAqIEBwYXJhbSAge09iamVjdH0gQ29tcG9uZW50c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBSdGwgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyB0aGUgcGFzc2VkIHRyYW5zbGF0ZSBpZiBnbGlkZSBpcyBpbiBSVEwgb3B0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgIHJldHVybiAtdHJhbnNsYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgZ2FwYCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR2FwIChHbGlkZSwgQ29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIE1vZGlmaWVzIHBhc3NlZCB0cmFuc2xhdGUgdmFsdWUgd2l0aCBudW1iZXIgaW4gdGhlIGBnYXBgIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICB2YXIgbXVsdGlwbGllciA9IE1hdGguZmxvb3IodHJhbnNsYXRlIC8gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoKTtcbiAgICAgIHJldHVybiB0cmFuc2xhdGUgKyBDb21wb25lbnRzLkdhcHMudmFsdWUgKiBtdWx0aXBsaWVyO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggd2lkdGggb2YgYWRkaXRpb25hbCBjbG9uZXMgd2lkdGguXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIEdyb3cgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogQWRkcyB0byB0aGUgcGFzc2VkIHRyYW5zbGF0ZSB3aWR0aCBvZiB0aGUgaGFsZiBvZiBjbG9uZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBtb2RpZnk6IGZ1bmN0aW9uIG1vZGlmeSh0cmFuc2xhdGUpIHtcbiAgICAgIHJldHVybiB0cmFuc2xhdGUgKyBDb21wb25lbnRzLkNsb25lcy5ncm93IC8gMjtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlcyBnbGlkZSBtb3ZlbWVudCB3aXRoIGEgYHBlZWtgIHNldHRpbmdzLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gR2xpZGVcbiAqIEBwYXJhbSAge09iamVjdH0gQ29tcG9uZW50c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIFBlZWtpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGEgYHBlZWtgIHNldHRpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBtb2RpZnk6IGZ1bmN0aW9uIG1vZGlmeSh0cmFuc2xhdGUpIHtcbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5mb2N1c0F0ID49IDApIHtcbiAgICAgICAgdmFyIHBlZWsgPSBDb21wb25lbnRzLlBlZWsudmFsdWU7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KHBlZWspKSB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWsuYmVmb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCBhIGBmb2N1c0F0YCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gRm9jdXNpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGluZGV4IGluIHRoZSBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICAgIHZhciB3aWR0aCA9IENvbXBvbmVudHMuU2l6ZXMud2lkdGg7XG4gICAgICB2YXIgZm9jdXNBdCA9IEdsaWRlLnNldHRpbmdzLmZvY3VzQXQ7XG4gICAgICB2YXIgc2xpZGVXaWR0aCA9IENvbXBvbmVudHMuU2l6ZXMuc2xpZGVXaWR0aDtcblxuICAgICAgaWYgKGZvY3VzQXQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUgLSAod2lkdGggLyAyIC0gc2xpZGVXaWR0aCAvIDIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlIC0gc2xpZGVXaWR0aCAqIGZvY3VzQXQgLSBnYXAgKiBmb2N1c0F0O1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGRpZmZyZW50IHRyYW5zZm9ybWVycyBvbiB0cmFuc2xhdGUgdmFsdWUuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gbXV0YXRvciAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogTWVyZ2UgaW5zdGFuY2UgdHJhbnNmb3JtZXJzIHdpdGggY29sbGVjdGlvbiBvZiBkZWZhdWx0IHRyYW5zZm9ybWVycy5cbiAgICogSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgUnRsIGNvbXBvbmVudCBiZSBsYXN0IG9uIHRoZSBsaXN0LFxuICAgKiBzbyBpdCByZWZsZWN0cyBhbGwgcHJldmlvdXMgdHJhbnNmb3JtYXRpb25zLlxuICAgKlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgVFJBTlNGT1JNRVJTID0gW0dhcCwgR3JvdywgUGVla2luZywgRm9jdXNpbmddLmNvbmNhdChHbGlkZS5fdCwgW1J0bF0pO1xuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFBpcGxpbmVzIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIHJlZ2lzdGVyZWQgdHJhbnNmb3JtZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbXV0YXRlOiBmdW5jdGlvbiBtdXRhdGUodHJhbnNsYXRlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFRSQU5TRk9STUVSUy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHJhbnNmb3JtZXIgPSBUUkFOU0ZPUk1FUlNbaV07XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odHJhbnNmb3JtZXIpICYmIGlzRnVuY3Rpb24odHJhbnNmb3JtZXIoKS5tb2RpZnkpKSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gdHJhbnNmb3JtZXIoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykubW9kaWZ5KHRyYW5zbGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybignVHJhbnNmb3JtZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGBtb2RpZnkoKWAgbWV0aG9kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIFRyYW5zbGF0ZSAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgVHJhbnNsYXRlID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdHJhbnNsYXRlIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBtdXRhdG9yKEdsaWRlLCBDb21wb25lbnRzKS5tdXRhdGUodmFsdWUpO1xuICAgICAgdmFyIHRyYW5zbGF0ZTNkID0gXCJ0cmFuc2xhdGUzZChcIi5jb25jYXQoLTEgKiB0cmFuc2Zvcm0sIFwicHgsIDBweCwgMHB4KVwiKTtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLm1velRyYW5zZm9ybSA9IHRyYW5zbGF0ZTNkOyAvLyBuZWVkZWQgZm9yIHN1cHBvcnRlZCBGaXJlZm94IDEwLTE1XG5cbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zbGF0ZTNkOyAvLyBuZWVkZWQgZm9yIHN1cHBvcnRlZCBDaHJvbWUgMTAtMzUsIFNhZmFyaSA1LjEtOCwgYW5kIE9wZXJhIDE1LTIyXG5cbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZTNkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHZhbHVlIG9mIHRyYW5zbGF0ZSBmcm9tIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldFN0YXJ0SW5kZXgoKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gQ29tcG9uZW50cy5TaXplcy5sZW5ndGg7XG4gICAgICB2YXIgaW5kZXggPSBHbGlkZS5pbmRleDtcbiAgICAgIHZhciBwZXJWaWV3ID0gR2xpZGUuc2V0dGluZ3MucGVyVmlldztcblxuICAgICAgaWYgKENvbXBvbmVudHMuUnVuLmlzT2Zmc2V0KCc+JykgfHwgQ29tcG9uZW50cy5SdW4uaXNPZmZzZXQoJ3w+JykpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCArIChpbmRleCAtIHBlclZpZXcpO1xuICAgICAgfSAvLyBcIm1vZHVsbyBsZW5ndGhcIiBjb252ZXJ0cyBhbiBpbmRleCB0aGF0IGVxdWFscyBsZW5ndGggdG8gemVyb1xuXG5cbiAgICAgIHJldHVybiAoaW5kZXggKyBwZXJWaWV3KSAlIGxlbmd0aDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRyYXZlbERpc3RhbmNlOiBmdW5jdGlvbiBnZXRUcmF2ZWxEaXN0YW5jZSgpIHtcbiAgICAgIHZhciB0cmF2ZWxEaXN0YW5jZSA9IENvbXBvbmVudHMuU2l6ZXMuc2xpZGVXaWR0aCAqIEdsaWRlLnNldHRpbmdzLnBlclZpZXc7XG5cbiAgICAgIGlmIChDb21wb25lbnRzLlJ1bi5pc09mZnNldCgnPicpIHx8IENvbXBvbmVudHMuUnVuLmlzT2Zmc2V0KCd8PicpKSB7XG4gICAgICAgIC8vIHJldmVyc2UgdHJhdmVsIGRpc3RhbmNlIHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBjaGFuZ2Ugc3VidHJhY3Qgb3BlcmF0aW9uc1xuICAgICAgICByZXR1cm4gdHJhdmVsRGlzdGFuY2UgKiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYXZlbERpc3RhbmNlO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFNldCBuZXcgdHJhbnNsYXRlIHZhbHVlOlxuICAgKiAtIG9uIG1vdmUgdG8gcmVmbGVjdCBpbmRleCBjaGFuZ2VcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJIHRvIHJlZmxlY3QgcG9zc2libGUgY2hhbmdlcyBpbiBvcHRpb25zXG4gICAqL1xuXG4gIEV2ZW50cy5vbignbW92ZScsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgaWYgKCFHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykgfHwgIUNvbXBvbmVudHMuUnVuLmlzT2Zmc2V0KCkpIHtcbiAgICAgIHJldHVybiBUcmFuc2xhdGUuc2V0KGNvbnRleHQubW92ZW1lbnQpO1xuICAgIH1cblxuICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5hZnRlcihmdW5jdGlvbiAoKSB7XG4gICAgICBFdmVudHMuZW1pdCgndHJhbnNsYXRlLmp1bXAnKTtcbiAgICAgIFRyYW5zbGF0ZS5zZXQoQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoICogR2xpZGUuaW5kZXgpO1xuICAgIH0pO1xuICAgIHZhciBzdGFydFdpZHRoID0gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoICogQ29tcG9uZW50cy5UcmFuc2xhdGUuZ2V0U3RhcnRJbmRleCgpO1xuICAgIHJldHVybiBUcmFuc2xhdGUuc2V0KHN0YXJ0V2lkdGggLSBDb21wb25lbnRzLlRyYW5zbGF0ZS5nZXRUcmF2ZWxEaXN0YW5jZSgpKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBSZW1vdmUgdHJhbnNsYXRlOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0YWwgc3RhdGVcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zbGF0ZS5yZW1vdmUoKTtcbiAgfSk7XG4gIHJldHVybiBUcmFuc2xhdGU7XG59XG5cbmZ1bmN0aW9uIFRyYW5zaXRpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEhvbGRzIGluYWN0aXZpdHkgc3RhdHVzIG9mIHRyYW5zaXRpb24uXG4gICAqIFdoZW4gdHJ1ZSB0cmFuc2l0aW9uIGlzIG5vdCBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuICB2YXIgVHJhbnNpdGlvbiA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzdHJpbmcgb2YgdGhlIENTUyB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIGNvbXBvc2U6IGZ1bmN0aW9uIGNvbXBvc2UocHJvcGVydHkpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcm9wZXJ0eSwgXCIgXCIpLmNvbmNhdCh0aGlzLmR1cmF0aW9uLCBcIm1zIFwiKS5jb25jYXQoc2V0dGluZ3MuYW5pbWF0aW9uVGltaW5nRnVuYyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcm9wZXJ0eSwgXCIgMG1zIFwiKS5jb25jYXQoc2V0dGluZ3MuYW5pbWF0aW9uVGltaW5nRnVuYyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdHJhbnNpdGlvbiBvbiBIVE1MIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZz19IHByb3BlcnR5XG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgIHZhciBwcm9wZXJ0eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ3RyYW5zZm9ybSc7XG4gICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy5jb21wb3NlKHByb3BlcnR5KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB2YWx1ZSBvZiB0cmFuc2l0aW9uIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUnVucyBjYWxsYmFjayBhZnRlciBhbmltYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFmdGVyOiBmdW5jdGlvbiBhZnRlcihjYWxsYmFjaykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgdHJhbnNpdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0KCk7XG4gICAgfVxuICB9O1xuICBkZWZpbmUoVHJhbnNpdGlvbiwgJ2R1cmF0aW9uJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gYmFzZWRcbiAgICAgKiBvbiBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb24gdHlwZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiBDb21wb25lbnRzLlJ1bi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzLnJld2luZER1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0dGluZ3MuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIFNldCB0cmFuc2l0aW9uIGBzdHlsZWAgdmFsdWU6XG4gICAqIC0gb24gZWFjaCBtb3ZpbmcsIGJlY2F1c2UgaXQgbWF5IGJlIGNsZWFyZWQgYnkgb2Zmc2V0IG1vdmVcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24uc2V0KCk7XG4gIH0pO1xuICAvKipcbiAgICogRGlzYWJsZSB0cmFuc2l0aW9uOlxuICAgKiAtIGJlZm9yZSBpbml0aWFsIGJ1aWxkIHRvIGF2b2lkIHRyYW5zaXRpb25pbmcgZnJvbSBgMGAgdG8gYHN0YXJ0QXRgIGluZGV4XG4gICAqIC0gd2hpbGUgcmVzaXppbmcgd2luZG93IGFuZCByZWNhbGN1bGF0aW5nIGRpbWVuc2lvbnNcbiAgICogLSBvbiBqdW1waW5nIGZyb20gb2Zmc2V0IHRyYW5zaXRpb24gYXQgc3RhcnQgYW5kIGVuZCBlZGdlcyBpbiBgY2Fyb3VzZWxgIHR5cGVcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd0cmFuc2xhdGUuanVtcCddLCBmdW5jdGlvbiAoKSB7XG4gICAgVHJhbnNpdGlvbi5kaXNhYmxlKCk7XG4gIH0pO1xuICAvKipcbiAgICogRW5hYmxlIHRyYW5zaXRpb246XG4gICAqIC0gb24gZWFjaCBydW5uaW5nLCBiZWNhdXNlIGl0IG1heSBiZSBkaXNhYmxlZCBieSBvZmZzZXQgbW92ZVxuICAgKi9cblxuICBFdmVudHMub24oJ3J1bicsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2l0aW9uLmVuYWJsZSgpO1xuICB9KTtcbiAgLyoqXG4gICAqIFJlbW92ZSB0cmFuc2l0aW9uOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0YWwgc3RhdGVcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24ucmVtb3ZlKCk7XG4gIH0pO1xuICByZXR1cm4gVHJhbnNpdGlvbjtcbn1cblxuLyoqXG4gKiBUZXN0IHZpYSBhIGdldHRlciBpbiB0aGUgb3B0aW9ucyBvYmplY3QgdG8gc2VlXG4gKiBpZiB0aGUgcGFzc2l2ZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kI2ZlYXR1cmUtZGV0ZWN0aW9uXG4gKi9cbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG59IGNhdGNoIChlKSB7fVxuXG52YXIgc3VwcG9ydHNQYXNzaXZlJDEgPSBzdXBwb3J0c1Bhc3NpdmU7XG5cbnZhciBTVEFSVF9FVkVOVFMgPSBbJ3RvdWNoc3RhcnQnLCAnbW91c2Vkb3duJ107XG52YXIgTU9WRV9FVkVOVFMgPSBbJ3RvdWNobW92ZScsICdtb3VzZW1vdmUnXTtcbnZhciBFTkRfRVZFTlRTID0gWyd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICdtb3VzZXVwJywgJ21vdXNlbGVhdmUnXTtcbnZhciBNT1VTRV9FVkVOVFMgPSBbJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcsICdtb3VzZWxlYXZlJ107XG5mdW5jdGlvbiBTd2lwZSAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSW5zdGFuY2Ugb2YgdGhlIGJpbmRlciBmb3IgRE9NIEV2ZW50cy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50c0JpbmRlcn1cbiAgICovXG4gIHZhciBCaW5kZXIgPSBuZXcgRXZlbnRzQmluZGVyKCk7XG4gIHZhciBzd2lwZVNpbiA9IDA7XG4gIHZhciBzd2lwZVN0YXJ0WCA9IDA7XG4gIHZhciBzd2lwZVN0YXJ0WSA9IDA7XG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuICB2YXIgY2FwdHVyZSA9IHN1cHBvcnRzUGFzc2l2ZSQxID8ge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSA6IGZhbHNlO1xuICB2YXIgU3dpcGUgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgc3dpcGUgYmluZGluZ3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuYmluZFN3aXBlU3RhcnQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlc3RhcnRgIGV2ZW50LiBDYWxjdWxhdGVzIGVudHJ5IHBvaW50cyBvZiB0aGUgdXNlcidzIHRhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGV2ZW50KSB7XG4gICAgICBpZiAoIWRpc2FibGVkICYmICFHbGlkZS5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgdmFyIHN3aXBlID0gdGhpcy50b3VjaGVzKGV2ZW50KTtcbiAgICAgICAgc3dpcGVTaW4gPSBudWxsO1xuICAgICAgICBzd2lwZVN0YXJ0WCA9IHRvSW50KHN3aXBlLnBhZ2VYKTtcbiAgICAgICAgc3dpcGVTdGFydFkgPSB0b0ludChzd2lwZS5wYWdlWSk7XG4gICAgICAgIHRoaXMuYmluZFN3aXBlTW92ZSgpO1xuICAgICAgICB0aGlzLmJpbmRTd2lwZUVuZCgpO1xuICAgICAgICBFdmVudHMuZW1pdCgnc3dpcGUuc3RhcnQnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlbW92ZWAgZXZlbnQuIENhbGN1bGF0ZXMgdXNlcidzIHRhcCBhbmdsZSBhbmQgZGlzdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBtb3ZlOiBmdW5jdGlvbiBtb3ZlKGV2ZW50KSB7XG4gICAgICBpZiAoIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIHZhciBfR2xpZGUkc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncyxcbiAgICAgICAgICAgIHRvdWNoQW5nbGUgPSBfR2xpZGUkc2V0dGluZ3MudG91Y2hBbmdsZSxcbiAgICAgICAgICAgIHRvdWNoUmF0aW8gPSBfR2xpZGUkc2V0dGluZ3MudG91Y2hSYXRpbyxcbiAgICAgICAgICAgIGNsYXNzZXMgPSBfR2xpZGUkc2V0dGluZ3MuY2xhc3NlcztcbiAgICAgICAgdmFyIHN3aXBlID0gdGhpcy50b3VjaGVzKGV2ZW50KTtcbiAgICAgICAgdmFyIHN1YkV4U3ggPSB0b0ludChzd2lwZS5wYWdlWCkgLSBzd2lwZVN0YXJ0WDtcbiAgICAgICAgdmFyIHN1YkV5U3kgPSB0b0ludChzd2lwZS5wYWdlWSkgLSBzd2lwZVN0YXJ0WTtcbiAgICAgICAgdmFyIHBvd0VYID0gTWF0aC5hYnMoc3ViRXhTeCA8PCAyKTtcbiAgICAgICAgdmFyIHBvd0VZID0gTWF0aC5hYnMoc3ViRXlTeSA8PCAyKTtcbiAgICAgICAgdmFyIHN3aXBlSHlwb3RlbnVzZSA9IE1hdGguc3FydChwb3dFWCArIHBvd0VZKTtcbiAgICAgICAgdmFyIHN3aXBlQ2F0aGV0dXMgPSBNYXRoLnNxcnQocG93RVkpO1xuICAgICAgICBzd2lwZVNpbiA9IE1hdGguYXNpbihzd2lwZUNhdGhldHVzIC8gc3dpcGVIeXBvdGVudXNlKTtcblxuICAgICAgICBpZiAoc3dpcGVTaW4gKiAxODAgLyBNYXRoLlBJIDwgdG91Y2hBbmdsZSkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIENvbXBvbmVudHMuTW92ZS5tYWtlKHN1YkV4U3ggKiB0b0Zsb2F0KHRvdWNoUmF0aW8pKTtcbiAgICAgICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuZHJhZ2dpbmcpO1xuICAgICAgICAgIEV2ZW50cy5lbWl0KCdzd2lwZS5tb3ZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIGBzd2lwZWVuZGAgZXZlbnQuIEZpbml0aWFsaXplcyB1c2VyJ3MgdGFwIGFuZCBkZWNpZGVzIGFib3V0IGdsaWRlIG1vdmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGVuZDogZnVuY3Rpb24gZW5kKGV2ZW50KSB7XG4gICAgICBpZiAoIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIHZhciBfR2xpZGUkc2V0dGluZ3MyID0gR2xpZGUuc2V0dGluZ3MsXG4gICAgICAgICAgICBwZXJTd2lwZSA9IF9HbGlkZSRzZXR0aW5nczIucGVyU3dpcGUsXG4gICAgICAgICAgICB0b3VjaEFuZ2xlID0gX0dsaWRlJHNldHRpbmdzMi50b3VjaEFuZ2xlLFxuICAgICAgICAgICAgY2xhc3NlcyA9IF9HbGlkZSRzZXR0aW5nczIuY2xhc3NlcztcbiAgICAgICAgdmFyIHN3aXBlID0gdGhpcy50b3VjaGVzKGV2ZW50KTtcbiAgICAgICAgdmFyIHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkKGV2ZW50KTtcbiAgICAgICAgdmFyIHN3aXBlRGlzdGFuY2UgPSBzd2lwZS5wYWdlWCAtIHN3aXBlU3RhcnRYO1xuICAgICAgICB2YXIgc3dpcGVEZWcgPSBzd2lwZVNpbiAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG5cbiAgICAgICAgaWYgKHN3aXBlRGlzdGFuY2UgPiB0aHJlc2hvbGQgJiYgc3dpcGVEZWcgPCB0b3VjaEFuZ2xlKSB7XG4gICAgICAgICAgQ29tcG9uZW50cy5SdW4ubWFrZShDb21wb25lbnRzLkRpcmVjdGlvbi5yZXNvbHZlKFwiXCIuY29uY2F0KHBlclN3aXBlLCBcIjxcIikpKTtcbiAgICAgICAgfSBlbHNlIGlmIChzd2lwZURpc3RhbmNlIDwgLXRocmVzaG9sZCAmJiBzd2lwZURlZyA8IHRvdWNoQW5nbGUpIHtcbiAgICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoXCJcIi5jb25jYXQocGVyU3dpcGUsIFwiPlwiKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdoaWxlIHN3aXBlIGRvbid0IHJlYWNoIGRpc3RhbmNlIGFwcGx5IHByZXZpb3VzIHRyYW5zZm9ybS5cbiAgICAgICAgICBDb21wb25lbnRzLk1vdmUubWFrZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLmRyYWdnaW5nKTtcbiAgICAgICAgdGhpcy51bmJpbmRTd2lwZU1vdmUoKTtcbiAgICAgICAgdGhpcy51bmJpbmRTd2lwZUVuZCgpO1xuICAgICAgICBFdmVudHMuZW1pdCgnc3dpcGUuZW5kJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3Mgc3RhcnRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmRTd2lwZVN0YXJ0OiBmdW5jdGlvbiBiaW5kU3dpcGVTdGFydCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBfR2xpZGUkc2V0dGluZ3MzID0gR2xpZGUuc2V0dGluZ3MsXG4gICAgICAgICAgc3dpcGVUaHJlc2hvbGQgPSBfR2xpZGUkc2V0dGluZ3MzLnN3aXBlVGhyZXNob2xkLFxuICAgICAgICAgIGRyYWdUaHJlc2hvbGQgPSBfR2xpZGUkc2V0dGluZ3MzLmRyYWdUaHJlc2hvbGQ7XG5cbiAgICAgIGlmIChzd2lwZVRocmVzaG9sZCkge1xuICAgICAgICBCaW5kZXIub24oU1RBUlRfRVZFTlRTWzBdLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgX3RoaXMuc3RhcnQoZXZlbnQpO1xuICAgICAgICB9LCBjYXB0dXJlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdUaHJlc2hvbGQpIHtcbiAgICAgICAgQmluZGVyLm9uKFNUQVJUX0VWRU5UU1sxXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIF90aGlzLnN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBzdGFydGluZyBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kU3dpcGVTdGFydDogZnVuY3Rpb24gdW5iaW5kU3dpcGVTdGFydCgpIHtcbiAgICAgIEJpbmRlci5vZmYoU1RBUlRfRVZFTlRTWzBdLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgY2FwdHVyZSk7XG4gICAgICBCaW5kZXIub2ZmKFNUQVJUX0VWRU5UU1sxXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGNhcHR1cmUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBzd2lwZSdzIG1vdmluZyBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZFN3aXBlTW92ZTogZnVuY3Rpb24gYmluZFN3aXBlTW92ZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBCaW5kZXIub24oTU9WRV9FVkVOVFMsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCB0aHJvdHRsZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMyLm1vdmUoZXZlbnQpO1xuICAgICAgfSwgR2xpZGUuc2V0dGluZ3MudGhyb3R0bGUpLCBjYXB0dXJlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBzd2lwZSdzIG1vdmluZyBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kU3dpcGVNb3ZlOiBmdW5jdGlvbiB1bmJpbmRTd2lwZU1vdmUoKSB7XG4gICAgICBCaW5kZXIub2ZmKE1PVkVfRVZFTlRTLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgY2FwdHVyZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3MgZW5kaW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVFbmQ6IGZ1bmN0aW9uIGJpbmRTd2lwZUVuZCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBCaW5kZXIub24oRU5EX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczMuZW5kKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHN3aXBlJ3MgZW5kaW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmRTd2lwZUVuZDogZnVuY3Rpb24gdW5iaW5kU3dpcGVFbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKEVORF9FVkVOVFMsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTm9ybWFsaXplcyBldmVudCB0b3VjaGVzIHBvaW50cyBhY2NvcnRpbmcgdG8gZGlmZmVyZW50IHR5cGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgdG91Y2hlczogZnVuY3Rpb24gdG91Y2hlcyhldmVudCkge1xuICAgICAgaWYgKE1PVVNFX0VWRU5UUy5pbmRleE9mKGV2ZW50LnR5cGUpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnQudG91Y2hlc1swXSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiBtaW5pbXVtIHN3aXBlIGRpc3RhbmNlIHNldHRpbmdzIGJhc2VkIG9uIGV2ZW50IHR5cGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhyZXNob2xkOiBmdW5jdGlvbiB0aHJlc2hvbGQoZXZlbnQpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoTU9VU0VfRVZFTlRTLmluZGV4T2YoZXZlbnQudHlwZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MuZHJhZ1RocmVzaG9sZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldHRpbmdzLnN3aXBlVGhyZXNob2xkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHN3aXBlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7c2VsZn1cbiAgICAgKi9cbiAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uZW5hYmxlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgc3dpcGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzZWxmfVxuICAgICAqL1xuICAgIGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uZGlzYWJsZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQWRkIGNvbXBvbmVudCBjbGFzczpcbiAgICogLSBhZnRlciBpbml0aWFsIGJ1aWxkaW5nXG4gICAqL1xuXG4gIEV2ZW50cy5vbignYnVpbGQuYWZ0ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LmFkZChHbGlkZS5zZXR0aW5ncy5jbGFzc2VzLnN3aXBlYWJsZSk7XG4gIH0pO1xuICAvKipcbiAgICogUmVtb3ZlIHN3aXBpbmcgYmluZGluZ3M6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gcmVtb3ZlIGFkZGVkIEV2ZW50TGlzdGVuZXJzXG4gICAqL1xuXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBTd2lwZS51bmJpbmRTd2lwZVN0YXJ0KCk7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVNb3ZlKCk7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVFbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcbiAgcmV0dXJuIFN3aXBlO1xufVxuXG5mdW5jdGlvbiBJbWFnZXMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuICB2YXIgSW1hZ2VzID0ge1xuICAgIC8qKlxuICAgICAqIEJpbmRzIGxpc3RlbmVyIHRvIGdsaWRlIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuYmluZCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBgZHJhZ3N0YXJ0YCBldmVudCBvbiB3cmFwcGVyIHRvIHByZXZlbnQgZHJhZ2dpbmcgaW1hZ2VzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdkcmFnc3RhcnQnLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgdGhpcy5kcmFnc3RhcnQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIGBkcmFnc3RhcnRgIGV2ZW50IG9uIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgQmluZGVyLm9mZignZHJhZ3N0YXJ0JywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyLiBQcmV2ZW50cyBkcmFnZ2luZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgZHJhZ3N0YXJ0OiBmdW5jdGlvbiBkcmFnc3RhcnQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmVtb3ZlIGJpbmRpbmdzIGZyb20gaW1hZ2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIHJlbW92ZSBhZGRlZCBFdmVudExpc3RlbmVyc1xuICAgKi9cblxuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgSW1hZ2VzLnVuYmluZCgpO1xuICAgIEJpbmRlci5kZXN0cm95KCk7XG4gIH0pO1xuICByZXR1cm4gSW1hZ2VzO1xufVxuXG5mdW5jdGlvbiBBbmNob3JzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcbiAgLyoqXG4gICAqIEhvbGRzIGRldGFjaGluZyBzdGF0dXMgb2YgYW5jaG9ycy5cbiAgICogUHJldmVudHMgZGV0YWNoaW5nIG9mIGFscmVhZHkgZGV0YWNoZWQgYW5jaG9ycy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIHZhciBkZXRhY2hlZCA9IGZhbHNlO1xuICAvKipcbiAgICogSG9sZHMgcHJldmVudGluZyBzdGF0dXMgb2YgYW5jaG9ycy5cbiAgICogSWYgYHRydWVgIHJlZGlyZWN0aW9uIGFmdGVyIGNsaWNrIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cblxuICB2YXIgcHJldmVudGVkID0gZmFsc2U7XG4gIHZhciBBbmNob3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHVwcyBhIGluaXRpYWwgc3RhdGUgb2YgYW5jaG9ycyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEhvbGRzIGNvbGxlY3Rpb24gb2YgYW5jaG9ycyBlbGVtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge0hUTUxDb2xsZWN0aW9ufVxuICAgICAgICovXG4gICAgICB0aGlzLl9hID0gQ29tcG9uZW50cy5IdG1sLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhbmNob3JzIGluc2lkZSBhIHRyYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdjbGljaycsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCB0aGlzLmNsaWNrKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBldmVudHMgYXR0YWNoZWQgdG8gYW5jaG9ycyBpbnNpZGUgYSB0cmFjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdjbGljaycsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgY2xpY2sgZXZlbnQuIFByZXZlbnRzIGNsaWNrcyB3aGVuIGdsaWRlIGlzIGluIGBwcmV2ZW50YCBzdGF0dXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBjbGljazogZnVuY3Rpb24gY2xpY2soZXZlbnQpIHtcbiAgICAgIGlmIChwcmV2ZW50ZWQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGFjaGVzIGFuY2hvcnMgY2xpY2sgZXZlbnQgaW5zaWRlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c2VsZn1cbiAgICAgKi9cbiAgICBkZXRhY2g6IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICAgIHByZXZlbnRlZCA9IHRydWU7XG5cbiAgICAgIGlmICghZGV0YWNoZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5pdGVtc1tpXS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRldGFjaGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuY2hvcnMgY2xpY2sgZXZlbnRzIGluc2lkZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgYXR0YWNoOiBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgICBwcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKGRldGFjaGVkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRldGFjaGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcbiAgZGVmaW5lKEFuY2hvcnMsICdpdGVtcycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGNvbGxlY3Rpb24gb2YgdGhlIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBBbmNob3JzLl9hO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBEZXRhY2ggYW5jaG9ycyBpbnNpZGUgc2xpZGVzOlxuICAgKiAtIG9uIHN3aXBpbmcsIHNvIHRoZXkgd29uJ3QgcmVkaXJlY3QgdG8gaXRzIGBocmVmYCBhdHRyaWJ1dGVzXG4gICAqL1xuXG4gIEV2ZW50cy5vbignc3dpcGUubW92ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBBbmNob3JzLmRldGFjaCgpO1xuICB9KTtcbiAgLyoqXG4gICAqIEF0dGFjaCBhbmNob3JzIGluc2lkZSBzbGlkZXM6XG4gICAqIC0gYWZ0ZXIgc3dpcGluZyBhbmQgdHJhbnNpdGlvbnMgZW5kcywgc28gdGhleSBjYW4gcmVkaXJlY3QgYWZ0ZXIgY2xpY2sgYWdhaW5cbiAgICovXG5cbiAgRXZlbnRzLm9uKCdzd2lwZS5lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIEFuY2hvcnMuYXR0YWNoKCk7XG4gICAgfSk7XG4gIH0pO1xuICAvKipcbiAgICogVW5iaW5kIGFuY2hvcnMgaW5zaWRlIHNsaWRlczpcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byBicmluZyBhbmNob3JzIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAqL1xuXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBBbmNob3JzLmF0dGFjaCgpO1xuICAgIEFuY2hvcnMudW5iaW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG4gIHJldHVybiBBbmNob3JzO1xufVxuXG52YXIgTkFWX1NFTEVDVE9SID0gJ1tkYXRhLWdsaWRlLWVsPVwiY29udHJvbHNbbmF2XVwiXSc7XG52YXIgQ09OVFJPTFNfU0VMRUNUT1IgPSAnW2RhdGEtZ2xpZGUtZWxePVwiY29udHJvbHNcIl0nO1xudmFyIFBSRVZJT1VTX0NPTlRST0xTX1NFTEVDVE9SID0gXCJcIi5jb25jYXQoQ09OVFJPTFNfU0VMRUNUT1IsIFwiIFtkYXRhLWdsaWRlLWRpcio9XFxcIjxcXFwiXVwiKTtcbnZhciBORVhUX0NPTlRST0xTX1NFTEVDVE9SID0gXCJcIi5jb25jYXQoQ09OVFJPTFNfU0VMRUNUT1IsIFwiIFtkYXRhLWdsaWRlLWRpcio9XFxcIj5cXFwiXVwiKTtcbmZ1bmN0aW9uIENvbnRyb2xzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcbiAgdmFyIGNhcHR1cmUgPSBzdXBwb3J0c1Bhc3NpdmUkMSA/IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0gOiBmYWxzZTtcbiAgdmFyIENvbnRyb2xzID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRzIGFycm93cy4gQmluZHMgZXZlbnRzIGxpc3RlbmVyc1xuICAgICAqIHRvIHRoZSBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgLyoqXG4gICAgICAgKiBDb2xsZWN0aW9uIG9mIG5hdmlnYXRpb24gSFRNTCBlbGVtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge0hUTUxDb2xsZWN0aW9ufVxuICAgICAgICovXG4gICAgICB0aGlzLl9uID0gQ29tcG9uZW50cy5IdG1sLnJvb3QucXVlcnlTZWxlY3RvckFsbChOQVZfU0VMRUNUT1IpO1xuICAgICAgLyoqXG4gICAgICAgKiBDb2xsZWN0aW9uIG9mIGNvbnRyb2xzIEhUTUwgZWxlbWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbn1cbiAgICAgICAqL1xuXG4gICAgICB0aGlzLl9jID0gQ29tcG9uZW50cy5IdG1sLnJvb3QucXVlcnlTZWxlY3RvckFsbChDT05UUk9MU19TRUxFQ1RPUik7XG4gICAgICAvKipcbiAgICAgICAqIENvbGxlY3Rpb24gb2YgYXJyb3cgY29udHJvbCBIVE1MIGVsZW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICovXG5cbiAgICAgIHRoaXMuX2Fycm93Q29udHJvbHMgPSB7XG4gICAgICAgIHByZXZpb3VzOiBDb21wb25lbnRzLkh0bWwucm9vdC5xdWVyeVNlbGVjdG9yQWxsKFBSRVZJT1VTX0NPTlRST0xTX1NFTEVDVE9SKSxcbiAgICAgICAgbmV4dDogQ29tcG9uZW50cy5IdG1sLnJvb3QucXVlcnlTZWxlY3RvckFsbChORVhUX0NPTlRST0xTX1NFTEVDVE9SKVxuICAgICAgfTtcbiAgICAgIHRoaXMuYWRkQmluZGluZ3MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0QWN0aXZlOiBmdW5jdGlvbiBzZXRBY3RpdmUoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyh0aGlzLl9uW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQWN0aXZlOiBmdW5jdGlvbiByZW1vdmVBY3RpdmUoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyh0aGlzLl9uW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyBhY3RpdmUgY2xhc3Mgb24gaXRlbXMgaW5zaWRlIG5hdmlnYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gY29udHJvbHNcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFkZENsYXNzOiBmdW5jdGlvbiBhZGRDbGFzcyhjb250cm9scykge1xuICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG4gICAgICB2YXIgaXRlbSA9IGNvbnRyb2xzW0dsaWRlLmluZGV4XTtcblxuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLmNsYXNzZXMubmF2LmFjdGl2ZSk7XG4gICAgICAgIHNpYmxpbmdzKGl0ZW0pLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgICBzaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MuY2xhc3Nlcy5uYXYuYWN0aXZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWN0aXZlIGNsYXNzIGZyb20gYWN0aXZlIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gY29udHJvbHNcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiByZW1vdmVDbGFzcyhjb250cm9scykge1xuICAgICAgdmFyIGl0ZW0gPSBjb250cm9sc1tHbGlkZS5pbmRleF07XG5cbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShHbGlkZS5zZXR0aW5ncy5jbGFzc2VzLm5hdi5hY3RpdmUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzLCByZW1vdmVzIG9yIGFkZHMgYEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuZGlzYWJsZWRBcnJvd2AgY2xhc3Mgb24gdGhlIGNvbnRyb2wgYXJyb3dzXG4gICAgICovXG4gICAgc2V0QXJyb3dTdGF0ZTogZnVuY3Rpb24gc2V0QXJyb3dTdGF0ZSgpIHtcbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5yZXdpbmQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dCA9IENvbnRyb2xzLl9hcnJvd0NvbnRyb2xzLm5leHQ7XG4gICAgICB2YXIgcHJldmlvdXMgPSBDb250cm9scy5fYXJyb3dDb250cm9scy5wcmV2aW91cztcbiAgICAgIHRoaXMucmVzZXRBcnJvd1N0YXRlKG5leHQsIHByZXZpb3VzKTtcblxuICAgICAgaWYgKEdsaWRlLmluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZUFycm93KHByZXZpb3VzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEdsaWRlLmluZGV4ID09PSBDb21wb25lbnRzLlJ1bi5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlQXJyb3cobmV4dCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuZGlzYWJsZWRBcnJvd2AgZnJvbSBnaXZlbiBOb2RlTGlzdCBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdFtdfSBsaXN0c1xuICAgICAqL1xuICAgIHJlc2V0QXJyb3dTdGF0ZTogZnVuY3Rpb24gcmVzZXRBcnJvd1N0YXRlKCkge1xuICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBsaXN0cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgbGlzdHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGxpc3RzLmZvckVhY2goZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmNsYXNzZXMuYXJyb3cuZGlzYWJsZWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzLmRpc2FibGVkQXJyb3dgIHRvIGdpdmVuIE5vZGVMaXN0IGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0W119IGxpc3RzXG4gICAgICovXG4gICAgZGlzYWJsZUFycm93OiBmdW5jdGlvbiBkaXNhYmxlQXJyb3coKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBsaXN0cyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBsaXN0c1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBsaXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5jbGFzc2VzLmFycm93LmRpc2FibGVkKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyBoYW5kbGVzIHRvIHRoZSBlYWNoIGdyb3VwIG9mIGNvbnRyb2xzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBhZGRCaW5kaW5nczogZnVuY3Rpb24gYWRkQmluZGluZ3MoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5iaW5kKHRoaXMuX2NbaV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGhhbmRsZXMgZnJvbSB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQmluZGluZ3M6IGZ1bmN0aW9uIHJlbW92ZUJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudW5iaW5kKHRoaXMuX2NbaV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBldmVudHMgdG8gYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZChlbGVtZW50cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBCaW5kZXIub24oJ2NsaWNrJywgZWxlbWVudHNbaV0sIHRoaXMuY2xpY2spO1xuICAgICAgICBCaW5kZXIub24oJ3RvdWNoc3RhcnQnLCBlbGVtZW50c1tpXSwgdGhpcy5jbGljaywgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgZXZlbnRzIGJpbmRlZCB0byB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoZWxlbWVudHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQmluZGVyLm9mZihbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXSwgZWxlbWVudHNbaV0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGBjbGlja2AgZXZlbnQgb24gdGhlIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgICAqIE1vdmVzIHNsaWRlciBpbiBkaXJlY3Rpb24gZ2l2ZW4gdmlhIHRoZVxuICAgICAqIGBkYXRhLWdsaWRlLWRpcmAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBjbGljazogZnVuY3Rpb24gY2xpY2soZXZlbnQpIHtcbiAgICAgIGlmICghc3VwcG9ydHNQYXNzaXZlJDEgJiYgZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXJlY3Rpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1nbGlkZS1kaXInKTtcbiAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZShkaXJlY3Rpb24pKTtcbiAgICB9XG4gIH07XG4gIGRlZmluZShDb250cm9scywgJ2l0ZW1zJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY29sbGVjdGlvbiBvZiB0aGUgY29udHJvbHMgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29udHJvbHMuX2M7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIFN3YXAgYWN0aXZlIGNsYXNzIG9mIGN1cnJlbnQgbmF2aWdhdGlvbiBpdGVtOlxuICAgKiAtIGFmdGVyIG1vdW50aW5nIHRvIHNldCBpdCB0byBpbml0aWFsIGluZGV4XG4gICAqIC0gYWZ0ZXIgZWFjaCBtb3ZlIHRvIHRoZSBuZXcgaW5kZXhcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsnbW91bnQuYWZ0ZXInLCAnbW92ZS5hZnRlciddLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29udHJvbHMuc2V0QWN0aXZlKCk7XG4gIH0pO1xuICAvKipcbiAgICogQWRkIG9yIHJlbW92ZSBkaXNhYmxlZCBjbGFzcyBvZiBhcnJvdyBlbGVtZW50c1xuICAgKi9cblxuICBFdmVudHMub24oWydtb3VudC5hZnRlcicsICdydW4nXSwgZnVuY3Rpb24gKCkge1xuICAgIENvbnRyb2xzLnNldEFycm93U3RhdGUoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBSZW1vdmUgYmluZGluZ3MgYW5kIEhUTUwgQ2xhc3NlczpcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIENvbnRyb2xzLnJlbW92ZUJpbmRpbmdzKCk7XG4gICAgQ29udHJvbHMucmVtb3ZlQWN0aXZlKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG4gIHJldHVybiBDb250cm9scztcbn1cblxuZnVuY3Rpb24gS2V5Ym9hcmQgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuICB2YXIgS2V5Ym9hcmQgPSB7XG4gICAgLyoqXG4gICAgICogQmluZHMga2V5Ym9hcmQgZXZlbnRzIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGtleWJvYXJkIHByZXNzIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIEJpbmRlci5vbigna2V5dXAnLCBkb2N1bWVudCwgdGhpcy5wcmVzcyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMga2V5Ym9hcmQgcHJlc3MgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ2tleXVwJywgZG9jdW1lbnQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleWJvYXJkJ3MgYXJyb3dzIHByZXNzIGFuZCBtb3ZpbmcgZ2xpZGUgZm93YXJkIGFuZCBiYWNrd2FyZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHByZXNzOiBmdW5jdGlvbiBwcmVzcyhldmVudCkge1xuICAgICAgdmFyIHBlclN3aXBlID0gR2xpZGUuc2V0dGluZ3MucGVyU3dpcGU7XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoXCJcIi5jb25jYXQocGVyU3dpcGUsIFwiPlwiKSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgQ29tcG9uZW50cy5SdW4ubWFrZShDb21wb25lbnRzLkRpcmVjdGlvbi5yZXNvbHZlKFwiXCIuY29uY2F0KHBlclN3aXBlLCBcIjxcIikpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSZW1vdmUgYmluZGluZ3MgZnJvbSBrZXlib2FyZDpcbiAgICogLSBvbiBkZXN0cm95aW5nIHRvIHJlbW92ZSBhZGRlZCBldmVudHNcbiAgICogLSBvbiB1cGRhdGluZyB0byByZW1vdmUgZXZlbnRzIGJlZm9yZSByZW1vdW50aW5nXG4gICAqL1xuXG4gIEV2ZW50cy5vbihbJ2Rlc3Ryb3knLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBLZXlib2FyZC51bmJpbmQoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBSZW1vdW50IGNvbXBvbmVudFxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlZmxlY3QgcG90ZW50aWFsIGNoYW5nZXMgaW4gc2V0dGluZ3NcbiAgICovXG5cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgS2V5Ym9hcmQubW91bnQoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBEZXN0cm95IGJpbmRlcjpcbiAgICogLSBvbiBkZXN0cm95aW5nIHRvIHJlbW92ZSBsaXN0ZW5lcnNcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEJpbmRlci5kZXN0cm95KCk7XG4gIH0pO1xuICByZXR1cm4gS2V5Ym9hcmQ7XG59XG5cbmZ1bmN0aW9uIEF1dG9wbGF5IChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcbiAgdmFyIEF1dG9wbGF5ID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGF1dG9wbGF5aW5nIGFuZCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG5cbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5ob3ZlcnBhdXNlKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIGF1dG9wbGF5aW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuX2UgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBhdXRvcGxheWluZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLl9lID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBhdXRvcGxheWluZyBpbiBjb25maWd1cmVkIGludGVydmFsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufE51bWJlcn0gZm9yY2UgUnVuIGF1dG9wbGF5aW5nIHdpdGggcGFzc2VkIGludGVydmFsIHJlZ2FyZGxlc3Mgb2YgYGF1dG9wbGF5YCBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLl9lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbmFibGUoKTtcblxuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh0aGlzLl9pKSkge1xuICAgICAgICAgIHRoaXMuX2kgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoJz4nKTtcblxuICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcblxuICAgICAgICAgICAgRXZlbnRzLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgICAgfSwgdGhpcy50aW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyBhdXRvcnVubmluZyBvZiB0aGUgZ2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLl9pID0gY2xlYXJJbnRlcnZhbCh0aGlzLl9pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYXV0b3BsYXlpbmcgd2hpbGUgbW91c2UgaXMgb3ZlciBnbGlkZSdzIGFyZWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgQmluZGVyLm9uKCdtb3VzZW92ZXInLCBDb21wb25lbnRzLkh0bWwucm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMyLl9lKSB7XG4gICAgICAgICAgX3RoaXMyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBCaW5kZXIub24oJ21vdXNlb3V0JywgQ29tcG9uZW50cy5IdG1sLnJvb3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5fZSkge1xuICAgICAgICAgIF90aGlzMi5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kIG1vdXNlb3ZlciBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoWydtb3VzZW92ZXInLCAnbW91c2VvdXQnXSwgQ29tcG9uZW50cy5IdG1sLnJvb3QpO1xuICAgIH1cbiAgfTtcbiAgZGVmaW5lKEF1dG9wbGF5LCAndGltZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRpbWUgcGVyaW9kIHZhbHVlIGZvciB0aGUgYXV0b3BsYXkgaW50ZXJ2YWwuIFByaW9yaXRpemVzXG4gICAgICogdGltZXMgaW4gYGRhdGEtZ2xpZGUtYXV0b3BsYXlgIGF0dHJ1YnV0ZXMgb3ZlciBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGF1dG9wbGF5ID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlc1tHbGlkZS5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWdsaWRlLWF1dG9wbGF5Jyk7XG5cbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICByZXR1cm4gdG9JbnQoYXV0b3BsYXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9JbnQoR2xpZGUuc2V0dGluZ3MuYXV0b3BsYXkpO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBTdG9wIGF1dG9wbGF5aW5nIGFuZCB1bmJpbmQgZXZlbnRzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIGNsZWFyIGRlZmluZWQgaW50ZXJ2YWxcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJIHRvIHJlc2V0IGludGVydmFsIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5LnVuYmluZCgpO1xuICB9KTtcbiAgLyoqXG4gICAqIFN0b3AgYXV0b3BsYXlpbmc6XG4gICAqIC0gYmVmb3JlIGVhY2ggcnVuLCB0byByZXN0YXJ0IGF1dG9wbGF5aW5nXG4gICAqIC0gb24gcGF1c2luZyB2aWEgQVBJXG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gY2xlYXIgZGVmaW5lZCBpbnRlcnZhbFxuICAgKiAtIHdoaWxlIHN0YXJ0aW5nIGEgc3dpcGVcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJIHRvIHJlc2V0IGludGVydmFsIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsncnVuLmJlZm9yZScsICdzd2lwZS5zdGFydCcsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5LnN0b3AoKTtcbiAgfSk7XG4gIEV2ZW50cy5vbihbJ3BhdXNlJywgJ2Rlc3Ryb3knXSwgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5LmRpc2FibGUoKTtcbiAgICBBdXRvcGxheS5zdG9wKCk7XG4gIH0pO1xuICAvKipcbiAgICogU3RhcnQgYXV0b3BsYXlpbmc6XG4gICAqIC0gYWZ0ZXIgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwbGF5aW5nIHZpYSBBUElcbiAgICogLSB3aGlsZSBlbmRpbmcgYSBzd2lwZVxuICAgKi9cblxuICBFdmVudHMub24oWydydW4uYWZ0ZXInLCAnc3dpcGUuZW5kJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBBdXRvcGxheS5zdGFydCgpO1xuICB9KTtcbiAgLyoqXG4gICAqIFN0YXJ0IGF1dG9wbGF5aW5nOlxuICAgKiAtIGFmdGVyIGVhY2ggcnVuLCB0byByZXN0YXJ0IGF1dG9wbGF5aW5nXG4gICAqIC0gb24gcGxheWluZyB2aWEgQVBJXG4gICAqIC0gd2hpbGUgZW5kaW5nIGEgc3dpcGVcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsncGxheSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQXV0b3BsYXkuZW5hYmxlKCk7XG4gICAgQXV0b3BsYXkuc3RhcnQoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBSZW1vdW50IGF1dG9wbGF5aW5nOlxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cblxuICBFdmVudHMub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBBdXRvcGxheS5tb3VudCgpO1xuICB9KTtcbiAgLyoqXG4gICAqIERlc3Ryb3kgYSBiaW5kZXI6XG4gICAqIC0gb24gZGVzdHJveWluZyBnbGlkZSBpbnN0YW5jZSB0byBjbGVhcnVwIGxpc3RlbmVyc1xuICAgKi9cblxuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG4gIHJldHVybiBBdXRvcGxheTtcbn1cblxuLyoqXG4gKiBTb3J0cyBrZXlzIG9mIGJyZWFrcG9pbnQgb2JqZWN0IHNvIHRoZXkgd2lsbCBiZSBvcmRlcmVkIGZyb20gbG93ZXIgdG8gYmlnZ2VyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwb2ludHNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gc29ydEJyZWFrcG9pbnRzKHBvaW50cykge1xuICBpZiAoaXNPYmplY3QocG9pbnRzKSkge1xuICAgIHJldHVybiBzb3J0S2V5cyhwb2ludHMpO1xuICB9IGVsc2Uge1xuICAgIHdhcm4oXCJCcmVha3BvaW50cyBvcHRpb24gbXVzdCBiZSBhbiBvYmplY3RcIik7XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIEJyZWFrcG9pbnRzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcbiAgLyoqXG4gICAqIEhvbGRzIHJlZmVyZW5jZSB0byBzZXR0aW5ncy5cbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG5cbiAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG4gIC8qKlxuICAgKiBIb2xkcyByZWZlcmVuY2UgdG8gYnJlYWtwb2ludHMgb2JqZWN0IGluIHNldHRpbmdzLiBTb3J0cyBicmVha3BvaW50c1xuICAgKiBmcm9tIHNtYWxsZXIgdG8gbGFyZ2VyLiBJdCBpcyByZXF1aXJlZCBpbiBvcmRlciB0byBwcm9wZXJcbiAgICogbWF0Y2hpbmcgY3VycmVudGx5IGFjdGl2ZSBicmVha3BvaW50IHNldHRpbmdzLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cblxuICB2YXIgcG9pbnRzID0gc29ydEJyZWFrcG9pbnRzKHNldHRpbmdzLmJyZWFrcG9pbnRzKTtcbiAgLyoqXG4gICAqIENhY2hlIGluaXRpYWwgc2V0dGluZ3MgYmVmb3JlIG92ZXJ3cml0dGluZy5cbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG5cbiAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MpO1xuICB2YXIgQnJlYWtwb2ludHMgPSB7XG4gICAgLyoqXG4gICAgICogTWF0Y2hlcyBzZXR0aW5ncyBmb3IgY3VycmVjdGx5IG1hdGNoaW5nIG1lZGlhIGJyZWFrcG9pbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcG9pbnRzXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2gocG9pbnRzKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKHZhciBwb2ludCBpbiBwb2ludHMpIHtcbiAgICAgICAgICBpZiAocG9pbnRzLmhhc093blByb3BlcnR5KHBvaW50KSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogXCIuY29uY2F0KHBvaW50LCBcInB4KVwiKSkubWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gcG9pbnRzW3BvaW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIE92ZXJ3cml0ZSBpbnN0YW5jZSBzZXR0aW5ncyB3aXRoIGN1cnJlbnRseSBtYXRjaGluZyBicmVha3BvaW50IHNldHRpbmdzLlxuICAgKiBUaGlzIGhhcHBlbnMgcmlnaHQgYWZ0ZXIgY29tcG9uZW50IGluaXRpYWxpemF0aW9uLlxuICAgKi9cblxuICBPYmplY3QuYXNzaWduKHNldHRpbmdzLCBCcmVha3BvaW50cy5tYXRjaChwb2ludHMpKTtcbiAgLyoqXG4gICAqIFVwZGF0ZSBnbGlkZSB3aXRoIHNldHRpbmdzIG9mIG1hdGNoZWQgYnJla3BvaW50OlxuICAgKiAtIHdpbmRvdyByZXNpemUgdG8gdXBkYXRlIHNsaWRlclxuICAgKi9cblxuICBCaW5kZXIub24oJ3Jlc2l6ZScsIHdpbmRvdywgdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xuICAgIEdsaWRlLnNldHRpbmdzID0gbWVyZ2VPcHRpb25zKHNldHRpbmdzLCBCcmVha3BvaW50cy5tYXRjaChwb2ludHMpKTtcbiAgfSwgR2xpZGUuc2V0dGluZ3MudGhyb3R0bGUpKTtcbiAgLyoqXG4gICAqIFJlc29ydCBhbmQgdXBkYXRlIGRlZmF1bHQgc2V0dGluZ3M6XG4gICAqIC0gb24gcmVpbml0IHZpYSBBUEksIHNvIGJyZWFrcG9pbnQgbWF0Y2hpbmcgd2lsbCBiZSBwZXJmb3JtZWQgd2l0aCBvcHRpb25zXG4gICAqL1xuXG4gIEV2ZW50cy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIHBvaW50cyA9IHNvcnRCcmVha3BvaW50cyhwb2ludHMpO1xuICAgIGRlZmF1bHRzID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MpO1xuICB9KTtcbiAgLyoqXG4gICAqIFVuYmluZCByZXNpemUgbGlzdGVuZXI6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAqL1xuXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBCaW5kZXIub2ZmKCdyZXNpemUnLCB3aW5kb3cpO1xuICB9KTtcbiAgcmV0dXJuIEJyZWFrcG9pbnRzO1xufVxuXG52YXIgQ09NUE9ORU5UUyA9IHtcbiAgLy8gUmVxdWlyZWRcbiAgSHRtbDogSHRtbCxcbiAgVHJhbnNsYXRlOiBUcmFuc2xhdGUsXG4gIFRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gIERpcmVjdGlvbjogRGlyZWN0aW9uLFxuICBQZWVrOiBQZWVrLFxuICBTaXplczogU2l6ZXMsXG4gIEdhcHM6IEdhcHMsXG4gIE1vdmU6IE1vdmUsXG4gIENsb25lczogQ2xvbmVzLFxuICBSZXNpemU6IFJlc2l6ZSxcbiAgQnVpbGQ6IEJ1aWxkLFxuICBSdW46IFJ1bixcbiAgLy8gT3B0aW9uYWxcbiAgU3dpcGU6IFN3aXBlLFxuICBJbWFnZXM6IEltYWdlcyxcbiAgQW5jaG9yczogQW5jaG9ycyxcbiAgQ29udHJvbHM6IENvbnRyb2xzLFxuICBLZXlib2FyZDogS2V5Ym9hcmQsXG4gIEF1dG9wbGF5OiBBdXRvcGxheSxcbiAgQnJlYWtwb2ludHM6IEJyZWFrcG9pbnRzXG59O1xuXG52YXIgR2xpZGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db3JlKSB7XG4gIF9pbmhlcml0cyhHbGlkZSwgX0NvcmUpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoR2xpZGUpO1xuXG4gIGZ1bmN0aW9uIEdsaWRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHbGlkZSk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR2xpZGUsIFt7XG4gICAga2V5OiBcIm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKEdsaWRlLnByb3RvdHlwZSksIFwibW91bnRcIiwgdGhpcykuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCBDT01QT05FTlRTLCBleHRlbnNpb25zKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdsaWRlO1xufShHbGlkZSQxKTtcblxuZXhwb3J0IHsgR2xpZGUgYXMgZGVmYXVsdCB9O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5nbGlkZXtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uZ2xpZGUgKnstd2Via2l0LWJveC1zaXppbmc6aW5oZXJpdDtib3gtc2l6aW5nOmluaGVyaXR9LmdsaWRlX19zbGlkZXMsLmdsaWRlX190cmFja3tvdmVyZmxvdzpoaWRkZW59LmdsaWRlX19zbGlkZXN7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtsaXN0LXN0eWxlOm5vbmU7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7LW1zLXRvdWNoLWFjdGlvbjpwYW4tWTt0b3VjaC1hY3Rpb246cGFuLVk7bWFyZ2luOjA7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXdyYXA6bm93cmFwO2ZsZXgtd3JhcDpub3dyYXA7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5nbGlkZV9fc2xpZGUsLmdsaWRlX19zbGlkZXMtLWRyYWdnaW5ney13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZ2xpZGVfX3NsaWRle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO3doaXRlLXNwYWNlOm5vcm1hbDstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9LmdsaWRlX19zbGlkZSBhey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1kcmFnOm5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lfS5nbGlkZV9fYXJyb3dzLC5nbGlkZV9fYnVsbGV0c3std2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmdsaWRlLS1ydGx7ZGlyZWN0aW9uOnJ0bH1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdsaWRlX19hcnJvd3twb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO3RvcDo1MCU7ei1pbmRleDoyO2NvbG9yOiNmZmY7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3BhZGRpbmc6OXB4IDEycHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6MnB4IHNvbGlkIGhzbGEoMCwwJSwxMDAlLC41KTtib3JkZXItcmFkaXVzOjRweDstd2Via2l0LWJveC1zaGFkb3c6MCAuMjVlbSAuNWVtIDAgcmdiYSgwLDAsMCwuMSk7Ym94LXNoYWRvdzowIC4yNWVtIC41ZW0gMCByZ2JhKDAsMCwwLC4xKTt0ZXh0LXNoYWRvdzowIC4yNWVtIC41ZW0gcmdiYSgwLDAsMCwuMSk7b3BhY2l0eToxO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSxib3JkZXIgLjNzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UsYm9yZGVyIC4zcyBlYXNlLWluLW91dDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO2xpbmUtaGVpZ2h0OjF9LmdsaWRlX19hcnJvdzpmb2N1c3tvdXRsaW5lOm5vbmV9LmdsaWRlX19hcnJvdzpob3Zlcntib3JkZXItY29sb3I6I2ZmZn0uZ2xpZGVfX2Fycm93LS1sZWZ0e2xlZnQ6MmVtfS5nbGlkZV9fYXJyb3ctLXJpZ2h0e3JpZ2h0OjJlbX0uZ2xpZGVfX2Fycm93LS1kaXNhYmxlZHtvcGFjaXR5Oi4zM30uZ2xpZGVfX2J1bGxldHN7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO2JvdHRvbToyZW07bGVmdDo1MCU7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtsaXN0LXN0eWxlOm5vbmU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX0uZ2xpZGVfX2J1bGxldHtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC41KTt3aWR0aDo5cHg7aGVpZ2h0OjlweDtwYWRkaW5nOjA7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4zcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7Y3Vyc29yOnBvaW50ZXI7bGluZS1oZWlnaHQ6MDstd2Via2l0LWJveC1zaGFkb3c6MCAuMjVlbSAuNWVtIDAgcmdiYSgwLDAsMCwuMSk7Ym94LXNoYWRvdzowIC4yNWVtIC41ZW0gMCByZ2JhKDAsMCwwLC4xKTttYXJnaW46MCAuMjVlbX0uZ2xpZGVfX2J1bGxldDpmb2N1c3tvdXRsaW5lOm5vbmV9LmdsaWRlX19idWxsZXQ6Zm9jdXMsLmdsaWRlX19idWxsZXQ6aG92ZXJ7Ym9yZGVyOjJweCBzb2xpZCAjZmZmO2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjUpfS5nbGlkZV9fYnVsbGV0LS1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5nbGlkZS0tc3dpcGVhYmxle2N1cnNvcjpncmFiO2N1cnNvcjotd2Via2l0LWdyYWJ9LmdsaWRlLS1kcmFnZ2luZ3tjdXJzb3I6Z3JhYmJpbmc7Y3Vyc29yOi13ZWJraXQtZ3JhYmJpbmd9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbHstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Kiw6YWZ0ZXIsOmJlZm9yZXstd2Via2l0LWJveC1zaXppbmc6aW5oZXJpdDtib3gtc2l6aW5nOmluaGVyaXR9Ym9keXtmb250LWZhbWlseTpPcGVuIFNhbnMsc2Fucy1zZXJpZn1oMntmb250LXNpemU6MS44cmVtO2NvbG9yOiM2ODcyNzJ9Lm5vLWxpc3R7bWFyZ2luOjA7cGFkZGluZzowfS5jb250YWluZXJ7bWF4LXdpZHRoOjEyODBweDttYXJnaW46MCBhdXRvfS5mbGV4LWNvbnRhaW5lcntkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5nbGlkZXttYXJnaW4tdG9wOi0xNnB4fS5zbGlkZXJfX2J1bGxldHN7Ym90dG9tOjB9LmdsaWRlX19idWxsZXQtLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmODY2NWMhaW1wb3J0YW50fS5zbGlkZXJfX2J1bGxldHtiYWNrZ3JvdW5kOiM3ZjhjOGM7Ym9yZGVyOjA7d2lkdGg6NTBweDtoZWlnaHQ6NHB4O21hcmdpbi1yaWdodDoxMHB4O291dGxpbmU6bm9uZX0uc2xpZGVyLWJ1dHRvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Y2FsYyg1MCUgLSAyNnB4KX0uc2xpZGVyLWJ1dHRvbjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjAhaW1wb3J0YW50O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MCFpbXBvcnRhbnR9LnNsaWRlci1idXR0b246bGFzdC1jaGlsZHtyaWdodDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjAhaW1wb3J0YW50O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjAhaW1wb3J0YW50fS5mYXMuZmEtY2hldnJvbi1sZWZ0OmZpcnN0LWNoaWxke3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0Oi02cHg7Zm9udC1zaXplOjEuNXJlbX0uZmFzLmZhLWNoZXZyb24tbGVmdDpsYXN0LWNoaWxke3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0OjJweDtmb250LXNpemU6MS41cmVtfS5mYXMuZmEtY2hldnJvbi1yaWdodDpmaXJzdC1jaGlsZHtwb3NpdGlvbjpyZWxhdGl2ZTtsZWZ0OjVweDtmb250LXNpemU6MS41cmVtfS5mYXMuZmEtY2hldnJvbi1yaWdodDpsYXN0LWNoaWxke3Bvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6LTNweDtmb250LXNpemU6MS41cmVtfS5zbGlkZXItYmFja2dyb3VuZHt3aWR0aDoxMDAlO2hlaWdodDo2MDBweDtiYWNrZ3JvdW5kOiM3ZjhjOGM7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyMDBweCAwIDA7Y29sb3I6I2ZmZn0udmVzdGlidWx1bXtmb250LXNpemU6M3JlbTtmb250LXdlaWdodDo4MDA7cGFkZGluZzowIDFyZW07YmFja2dyb3VuZDojZjg2NjVjO21hcmdpbi1ib3R0b206MXJlbX0ubWFlY2VuYXMsLnZlc3RpYnVsdW17ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czo1cHh9Lm1hZWNlbmFze2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNik7cGFkZGluZzoxcmVtfWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiM3NmM3YzA7Zm9udC1zaXplOjFlbTtiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL21lbnUtcGF0dGVybi5wbmdcIikpICsgXCIpO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14O2JhY2tncm91bmQtcG9zaXRpb246Ym90dG9tfS5tb2R1c3tmb250LXdlaWdodDo4MDA7Zm9udC1zaXplOjJyZW19LnZlcnN1c3tmb250LXdlaWdodDozMDA7Zm9udC1zaXplOjEuN3JlbX0uYnVyZ2VyLW1lbnV7Y29sb3I6I2Y4ZjhmODttYXJnaW46LjhyZW0gMXJlbSAwIGF1dG87Y3Vyc29yOnBvaW50ZXJ9bmF2IHVse2xpc3Qtc3R5bGUtdHlwZTpub25lO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9bmF2IGxpe21hcmdpbjoxcmVtO2JvcmRlci1yYWRpdXM6NXB4O2NvbG9yOiNmOGY4Zjg7YmFja2dyb3VuZC1jb2xvcjojNzZjN2MwO2JvcmRlci1zdHlsZTpub25lO3BhZGRpbmc6LjVlbSAxZW07Ym9yZGVyLWJvdHRvbTozcHggc29saWQgIzc2YzdjMH0uZHJvcGRvd24tbWVudSBsaXtiYWNrZ3JvdW5kLWNvbG9yOiNmNzdjNzM7Ym9yZGVyLWJvdHRvbTojZTg2NjVjfW5hdiBsaTpob3Zlcntjb2xvcjojZjhmOGY4O2JhY2tncm91bmQtY29sb3I6IzZmYjNhZTtib3JkZXItYm90dG9tOjNweCBzb2xpZCAjNjM5OTk1fW5hdiBsaTphY3RpdmV7Y29sb3I6I2Y4ZjhmODtiYWNrZ3JvdW5kLWNvbG9yOiNmNzdjNzM7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZjg2NjVjfW5hdiBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5icmFuZCxuYXYgYXtjb2xvcjojZjhmOGY4fS5icmFuZHttYXJnaW46LjhyZW0gMDttaW4td2lkdGg6MjEwcHh9LmRyb3Bkb3due3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEzM3B4fS5kcm9wZG93bi1tZW51e2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOiNmODY2NWM7Ym9yZGVyLXJhZGl1czo1cHg7bWFyZ2luOjA7cGFkZGluZzowO3RvcDozcmVtO2xlZnQ6MH0uZHJvcGRvd24gLmFycm93e2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O2JhY2tncm91bmQ6I2Y4NjY1Yzstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RvcDoyLjdyZW07bGVmdDoxcmVtfSNwb3J0Zm9saW9NZW51e3dpZHRoOjE1MHB4O3otaW5kZXg6MX0udG9wLXNlcnZpY2Vze2JhY2tncm91bmQtY29sb3I6I2VjZWNlYzttYXJnaW4tdG9wOjNyZW07cGFkZGluZzouMXJlbSAycmVtIDFyZW07Ym9yZGVyLXJhZGl1czo1cHg7Y29sb3I6IzdmOGM4YztkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS50b3Atc2VydmljZXMgaDJ7bWFyZ2luLWJvdHRvbTowfS52aWV3LW1vcmUtYnV0dG9uLWNvbnRhaW5lcnttYXJnaW4tbGVmdDphdXRvfS50b3Atc2VydmljZXMgcHtmb250LXNpemU6LjhyZW07bWFyZ2luLXRvcDo1cHh9LnZpZXctbW9yZS1idXR0b257cGFkZGluZzoxcmVtIDMuNXJlbTtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEuMnJlbTttYXJnaW46MS41cmVtIDAgMDttaW4td2lkdGg6MTUwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmNhcmRze21hcmdpbi10b3A6M3JlbTstd2Via2l0LWJveC1wYWNrOnNwYWNlLWV2ZW5seTstbXMtZmxleC1wYWNrOnNwYWNlLWV2ZW5seTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5Oy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcH0uY2FyZHMgaDR7Y29sb3I6IzY4NzI3Mjtmb250LXdlaWdodDo3MDB9LmNhcmQtdGV4dHtmb250LXNpemU6LjhyZW07Y29sb3I6IzY4NzI3Mn0uY2FyZHstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTozMDBweDtmbGV4LWJhc2lzOjMwMHB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2Y4ZjhmODtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjNyZW0gMXJlbTstd2Via2l0LWJveC1zaGFkb3c6MCAzcHggcmdiYSgwLDAsMCwuMDUpO2JveC1zaGFkb3c6MCAzcHggcmdiYSgwLDAsMCwuMDUpO2ZpbGw6Izc2YzdjMDttYXJnaW4tYm90dG9tOjNyZW19LmNhcmQ6YWN0aXZlIHN2Z3tmaWxsOiNlODY2NWN9LmNhcmQ6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2ZmZn0uY2FyZCAuYnV0dG9uLXNlY29uZGFyeXtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6NTVweDtwYWRkaW5nOjFyZW0gNC41cmVtfS53aW5kb3dzLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNlY2VjZWM7bWFyZ2luLWJvdHRvbToxMHZ3O21hcmdpbi10b3A6LTd2d30ueW91ci1pbWFnZXtmb250LXNpemU6MmVtO2NvbG9yOiNmOGY4Zjg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC13ZWlnaHQ6NTAwO21hcmdpbi10b3A6M2VtfS53aW5kb3dze2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmb250LXNpemU6Ljd2dztwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6OHZ3fS53aW5kb3d7YmFja2dyb3VuZDojZDhkNmQ5O3dpZHRoOjQwZW07aGVpZ2h0OjIyLjVlbTtib3JkZXItcmFkaXVzOi4zNzVlbTtib3JkZXI6MXB4IHNvbGlkICNjY2M7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO3otaW5kZXg6Mn0ud2luZG93OmZpcnN0LWNoaWxkLC53aW5kb3c6bGFzdC1jaGlsZHt3aWR0aDozMmVtO2hlaWdodDoxOGVtO3otaW5kZXg6MX0ud2luZG93OmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDotNWVtfS53aW5kb3c6bGFzdC1jaGlsZHttYXJnaW4tbGVmdDotNWVtfS53aW5kb3ctYm9keXtib3JkZXI6LjE4NzVlbSBzb2xpZCAjZDhkNmQ5Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2hlaWdodDo5MCU7YmFja2dyb3VuZC1jb2xvcjojN2Y4YzhjfS53aW5kb3ctaGVhZGVye3BhZGRpbmc6LjVlbSAuNmVtfS53aW5kb3ctYmFsbHt3aWR0aDouNjI1ZW07aGVpZ2h0Oi42MjVlbTtib3JkZXItcmFkaXVzOjEwMCU7YmFja2dyb3VuZDojZmZmO2Rpc3BsYXk6aW5saW5lLWJsb2NrfS53aW5kb3ctbWluaW1pemV7ZmxvYXQ6cmlnaHQ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6LjEyNWVtO3dpZHRoOi43NWVtO2hlaWdodDouMzc1ZW07bWFyZ2luOi4zZW19LndpbmRvdzpmaXJzdC1jaGlsZCAud2luZG93LWJvZHksLndpbmRvdzpsYXN0LWNoaWxkIC53aW5kb3ctYm9keXtiYWNrZ3JvdW5kLWNvbG9yOiM3NmM3YzB9LmNoYXJ0c3t0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5jaGFydHMgcHtmb250LXNpemU6LjhyZW07Y29sb3I6IzY4NzI3Mn0uY2hhcnRzIHAgYXtjb2xvcjojZTg2NjVjfS5jaGFydC1udW1iZXJ7Zm9udC1zaXplOjEuNXJlbTt0b3A6LTJyZW19LmNoYXJ0LW5hbWUsLmNoYXJ0LW51bWJlcntmb250LXdlaWdodDo4MDA7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6IzdmOGM4Y30uY2hhcnQtbmFtZXtmb250LXNpemU6MS4xcmVtO3RvcDotMS41cmVtfS5kb251dHt3aWR0aDo2MCU7aGVpZ2h0OjkwJX0uY2xpZW50cy1zYXl7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6MjAlO2ZsZXgtYmFzaXM6MjAlfS5jbGllbnRzLXNheSBoNXtjb2xvcjojN2Y4YzhjO2ZvbnQtc2l6ZToxcmVtfS5jbGllbnRzLXNheSBoNiwuY2xpZW50cy1zYXkgcHtjb2xvcjojN2Y4YzhjO2ZvbnQtc2l6ZTouOHJlbX0uY2xpZW50cy1zYXkgcHtmb250LXN0eWxlOml0YWxpYztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzoxcmVtO2JvcmRlci1yYWRpdXM6NXB4O2xpbmUtaGVpZ2h0OjEuNXJlbTttYXJnaW46MH0uY2xpZW50LW5hbWV7ZGlzcGxheTppbmxpbmU7Zm9udC1zaXplOi44cmVtfS5jbGllbnQtYmFsbG9vbntwb3NpdGlvbjpyZWxhdGl2ZX0uY2xpZW50LWJhbGxvb24gaDZ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MHB4O2JvdHRvbTotNTBweH0uYXJyb3ctcmlnaHR7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItdG9wOjI1cHggc29saWQgI2ZmZjtib3JkZXItYm90dG9tOjI1cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6MjVweCBzb2xpZCB0cmFuc3BhcmVudDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjE1cHh9Lm1vZHVzLXZlcnN1c3tiYWNrZ3JvdW5kLWNvbG9yOiNlY2VjZWM7bWFyZ2luLXRvcDo0cmVtO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWcvcnVsZS1wYXR0ZXJuLnBuZ1wiKSkgKyBcIik7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXg7YmFja2dyb3VuZC1wb3NpdGlvbjp0b3A7cGFkZGluZzoycmVtfS5tb2R1cy12ZXJzdXMgaDF7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToyLjNyZW07Y29sb3I6I2U4NjQ1YX0ubW9kdXMtdmVyc3VzIHB7Zm9udC1zaXplOi44cmVtO2NvbG9yOiM2ODcyNzI7bWFyZ2luOjAgMXJlbX0uY2hvb3NlLXVzey1tcy1mbGV4LXByZWZlcnJlZC1zaXplOjIwJTtmbGV4LWJhc2lzOjIwJTttYXJnaW4tbGVmdDoxcmVtfS5jaG9vc2UtdXMgaDV7Y29sb3I6IzdmOGM4Yztmb250LXNpemU6MXJlbX0uY2hvb3NlLXVzIHVse2ZvbnQtc2l6ZTouOHJlbTtjb2xvcjojN2Y4YzhjO2xpc3Qtc3R5bGUtdHlwZTpub25lO2xpbmUtaGVpZ2h0OjEuNXJlbX0uaGFwcHktY2xpZW50cy1jb250YWluZXJ7bWFyZ2luLXRvcDozcmVtfS5oYXBweS1jbGllbnRze3Bvc2l0aW9uOnJlbGF0aXZlfS5oYXBweS1idXR0b25ze3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9LmZhLWFycm93LXJpZ2h0e2NvbG9yOiNlODY0NWE7Zm9udC1zaXplOi44cmVtfS5oYXBweS1jbGllbnRzIGltZ3ttYXgtd2lkdGg6MTAwJTttYXJnaW4tYm90dG9tOjFyZW19LmhhcHB5LWNsaWVudHMgaDR7Zm9udC1zaXplOjFyZW07Y29sb3I6IzY4NzI3Mjtmb250LXdlaWdodDo3MDA7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6MzUwcHg7ZmxleC1iYXNpczozNTBweDttYXJnaW46LjdyZW0gMH0uaGFwcHktY2xpZW50cyAuYnV0dG9uLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojOWFhNGE0O2JvcmRlci1ib3R0b20tY29sb3I6IzY4NzI3MjtwYWRkaW5nOi41cmVtIC44cmVtO21hcmdpbi1sZWZ0Oi41cmVtfS5oYXBweS1jbGllbnRzIC5idXR0b24tcHJpbWFyeTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZTg2NDVhO2JvcmRlci1ib3R0b20tY29sb3I6I2I4NDUzZH0uaGFwcHktY2xpZW50cyAuYnV0dG9uLXNlY29uZGFyeSAuZmFzLmZhLWNoZXZyb24tbGVmdCwuaGFwcHktY2xpZW50cyAuYnV0dG9uLXNlY29uZGFyeSAuZmFzLmZhLWNoZXZyb24tcmlnaHR7Zm9udC1zaXplOjEuNXJlbX1ocntib3JkZXI6MDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGVlMGUwO3dpZHRoOjEwMCU7bWFyZ2luOjEuM3JlbSA3cmVtIDAgMH1mb290ZXJ7YmFja2dyb3VuZC1jb2xvcjojNzZjN2MwO3BhZGRpbmctdG9wOjJyZW07YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltZy9ib3R0b20tcGF0dGVybi5wbmdcIikpICsgXCIpO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14O2JhY2tncm91bmQtcG9zaXRpb246dG9wfWZvb3RlciB1bHtwYWRkaW5nLWxlZnQ6MjBweH0uYnJhbmQtZm9vdGVye2NvbG9yOiNmOGY4Zjg7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6MzUlO2ZsZXgtYmFzaXM6MzUlfS5icmFuZC1mb290ZXIgcHtmb250LXNpemU6LjhyZW07bGluZS1oZWlnaHQ6MS41cmVtfS5jb250YWN0e2NvbG9yOiNmOGY4Zjh9LmNvbnRhY3QgcHtmb250LXNpemU6LjhyZW19LmNvbXBhbnkgaDV7Y29sb3I6IzVlOWY5YTtmb250LXNpemU6MXJlbX0uY29tcGFueSBsaXtsaXN0LXN0eWxlLXR5cGU6bm9uZTtwYWRkaW5nLXRvcDouNXJlbX0ubWFpbCwucGhvbmV7Zm9udC1zaXplOjFyZW19LmNvbXBhbnkgbGkgYXtjb2xvcjojZjhmOGY4O3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZTouOHJlbX0uY29tbXVuaXR5IGg1e2NvbG9yOiM1ZTlmOWE7Zm9udC1zaXplOjFyZW19LmNvbW11bml0eSBsaXtsaXN0LXN0eWxlLXR5cGU6bm9uZTtwYWRkaW5nLXRvcDouNXJlbX0uY29tbXVuaXR5IGxpIGF7Y29sb3I6I2Y4ZjhmODt0ZXh0LWRlY29yYXRpb246bm9uZTtmb250LXNpemU6LjhyZW19LmZyb20tYmxvZ3stbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTozNSU7ZmxleC1iYXNpczozNSV9LmZyb20tYmxvZyBoNXtjb2xvcjojZjhmOGY4O2ZvbnQtc2l6ZToxcmVtfS5mcm9tLXRoZXtmb250LXN0eWxlOml0YWxpYztmb250LXdlaWdodDozMDB9LmZvb3Rlci1wbGFjZWhvbGRlcntib3JkZXItcmFkaXVzOjNweDttYXJnaW4tcmlnaHQ6YXV0bztmbG9hdDpsZWZ0fS5mb290ZXItY29udGFpbmVyey13ZWJraXQtYm94LXBhY2s6anVzdGlmeTstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmZyb20tYmxvZyAuZGF0YS1we2NvbG9yOiM1ZTlmOWE7Zm9udC1zaXplOi44cmVtfS5mcm9tLWJsb2cgcHtjb2xvcjojZjhmOGY4O2ZvbnQtc2l6ZTouOHJlbTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tbGVmdDo0cmVtfS5zb2NpYWx7YmFja2dyb3VuZC1jb2xvcjojNmFiM2FjO3BhZGRpbmc6MXJlbTttYXJnaW4tdG9wOjJyZW19LnNvY2lhbCB1bHtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1sZWZ0OmF1dG99LnNvY2lhbCBpe3BhZGRpbmctbGVmdDoxcmVtO2NvbG9yOiNmOGY4Zjh9LndhdGVybWFya3twb3NpdGlvbjphYnNvbHV0ZTtmb250LXNpemU6LjdyZW07Y29sb3I6I2Y4ZjhmODttYXJnaW4tdG9wOi0uM3JlbX0uY29tbXVuaXR5ey1tcy1mbGV4LXByZWZlcnJlZC1zaXplOjEwJTtmbGV4LWJhc2lzOjEwJX0uY29tbXVuaXR5IC5mYXMuZmEtY2hldnJvbi1yaWdodCwuY29tcGFueSAuZmFzLmZhLWNoZXZyb24tcmlnaHR7Zm9udC1zaXplOi41cmVtfS5idXR0b257Y29sb3I6I2Y4ZjhmODtib3JkZXItcmFkaXVzOjVweDtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjNweCBzb2xpZDtjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOjFyZW07dGV4dC1kZWNvcmF0aW9uOm5vbmU7b3V0bGluZTpub25lfS5idXR0b24tcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNlODY2NWM7Ym9yZGVyLWNvbG9yOiNiODQ1M2R9LmJ1dHRvbi1zZWNvbmRhcnl7YmFja2dyb3VuZC1jb2xvcjojNjJiZGJkO2JvcmRlci1jb2xvcjojNWY5OTk1fS5idXR0b24tc2Vjb25kYXJ5OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNlODY2NWM7Ym9yZGVyLWNvbG9yOiNiODQ1M2R9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozOS45Mzc1ZW0pe25hdntwb3NpdGlvbjpyZWxhdGl2ZX1uYXYgdWx7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6NjFweDt6LWluZGV4OjE7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLWNvbG9yOiM3NmM3YzA7dGV4dC1hbGlnbjpjZW50ZXJ9bmF2IGxpe21hcmdpbjouNXJlbX0uYnJhbmR7bWFyZ2luLWxlZnQ6MXJlbX0uc2xpZGVyLWJhY2tncm91bmR7cGFkZGluZzoyMDBweCAxcmVtIDB9LnNsaWRlci1idXR0b257ZGlzcGxheTpub25lfS50b3Atc2VydmljZXN7ZGlzcGxheTpibG9ja30uY2xpZW50cy1zYXl7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6MTAwJTtmbGV4LWJhc2lzOjEwMCU7cGFkZGluZzowIDFyZW07bWFyZ2luLXRvcDo0cmVtfS5mb290ZXItY29udGFpbmVyey13ZWJraXQtYm94LXBhY2s6anVzdGlmeTstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwO21hcmdpbjoxcmVtfS5icmFuZC1mb290ZXIsLmNvbXBhbnktY29tbXVuaXR5LC5mcm9tLWJsb2d7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6MTAwJTtmbGV4LWJhc2lzOjEwMCV9LmNvbXBhbnktY29tbXVuaXR5ey1tcy1mbGV4LXBhY2s6ZGlzdHJpYnV0ZTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb21tdW5pdHksLmNvbXBhbnl7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6MTAxcHg7ZmxleC1iYXNpczoxMDFweH0uY2hhcnRzLWNob29zZS1jbGllbnRzey1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MCAxcmVtfS5jaG9vc2UtdXN7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6MTgycHg7ZmxleC1iYXNpczoxODJweDttYXJnaW4tYm90dG9tOjJyZW19LmNoYXJ0c3stbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9LmNoYXJ0LXN2Z3stbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTo1MCU7ZmxleC1iYXNpczo1MCU7bWFyZ2luLWJvdHRvbToxcmVtfS5jaGFydC1udW1iZXJ7Zm9udC1zaXplOjFyZW07dG9wOi0xLjVyZW19LmNoYXJ0LW5hbWV7Zm9udC1zaXplOi43cmVtO3RvcDotMXJlbX0uaGFwcHktY2xpZW50c3ttYXJnaW46MCAxcmVtfS52ZXN0aWJ1bHVte2ZvbnQtc2l6ZToyLjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDBlbSl7LmJ1cmdlci1tZW51e2Rpc3BsYXk6bm9uZX1uYXZ7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0MGVtKSBhbmQgKG1heC13aWR0aDo2My45Mzc1ZW0pe25hdiB1bHstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9LmNoYXJ0LXN2Z3stbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTo1MCU7ZmxleC1iYXNpczo1MCU7bWFyZ2luLWJvdHRvbToxcmVtfS5jaGFydC1udW1iZXJ7Zm9udC1zaXplOi44cmVtO3RvcDotMS40cmVtfS5jaGFydC1uYW1le2ZvbnQtc2l6ZTouN3JlbTt0b3A6LTFyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjRlbSl7LmNhcmRzey13ZWJraXQtYm94LXBhY2s6anVzdGlmeTstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmNhcmR7bWFyZ2luLWJvdHRvbTowfX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTU4MDllYjhjMTA2NTA4MzJkYzNmY2I4Nzk1Mjg5M2YucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzY3NmRlMTcwYzQ4ZjY0NTQyZjIxMjIxMWVkMTY4ZDMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2I3ZWU4NTgxYTNjMWNjNDc4NTVlMjdhMmY2YTNkZmUucG5nXCI7IiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgR2xpZGUgZnJvbSAnQGdsaWRlanMvZ2xpZGUnO1xuaW1wb3J0ICdAZ2xpZGVqcy9nbGlkZS9kaXN0L2Nzcy9nbGlkZS5jb3JlLmNzcyc7XG5pbXBvcnQgJ0BnbGlkZWpzL2dsaWRlL2Rpc3QvY3NzL2dsaWRlLnRoZW1lLmNzcyc7XG5cbmNvbnN0IHBvcnRmb2xpb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Zm9saW8nKTtcbmNvbnN0IHBvcnRmb2xpb01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvTWVudScpO1xuY29uc3QgZHJvcGRvd25NZW51QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd25NZW51QXJyb3cnKTtcbmNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyTWVudScpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpO1xuY29uc3QgYWxsQnV0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSA+ICo6bm90KGhlYWRlciknKTtcblxubmV3IEdsaWRlKCcuZ2xpZGUnLCB7XG4gIHR5cGU6ICdjYXJvdXNlbCcsXG4gIHBlclZpZXc6IDEsXG4gIGZvY3VzQXQ6ICdjZW50ZXInLFxuICBnYXA6IDBcbn0pLm1vdW50KCk7XG5cbm5ldyBHbGlkZSgnLmdsaWRlLWltZycsIHtcbiAgdHlwZTogJ2Nhcm91c2VsJyxcbiAgcGVyVmlldzogNixcbiAgZm9jdXNBdDogJ2NlbnRlcicsXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAwMDoge1xuICAgICAgcGVyVmlldzogNVxuICAgIH0sXG4gICAgODAwOiB7XG4gICAgICBwZXJWaWV3OiA0XG4gICAgfSxcbiAgICA2MDA6IHtcbiAgICAgIHBlclZpZXc6IDNcbiAgICB9LFxuICAgIDQwMDoge1xuICAgICAgcGVyVmlldzogMlxuICAgIH1cbiAgfVxufSkubW91bnQoKTtcblxubGV0IGlzQnVyZ2VyTWVudU9wZW5lZCA9IGZhbHNlO1xubGV0IGlzTWVudU9wZW5lZCA9IGZhbHNlO1xuXG5jb25zdCBvcGVuQnVyZ2VyTWVudSA9ICgpID0+IHtcbiAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGlzQnVyZ2VyTWVudU9wZW5lZCA9IHRydWU7XG59O1xuXG5jb25zdCBjbG9zZUJ1cmdlck1lbnUgPSAoKSA9PiB7XG4gIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpc0J1cmdlck1lbnVPcGVuZWQgPSBmYWxzZTtcbn07XG5cbmNvbnN0IG9wZW5Qb3J0Zm9saW9NZW51ID0gKCkgPT4ge1xuICBwb3J0Zm9saW9NZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBkcm9wZG93bk1lbnVBcnJvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgaXNNZW51T3BlbmVkID0gdHJ1ZTtcbn07XG5cbmNvbnN0IGNsb3NlUG9ydGZvbGlvTWVudSA9ICgpID0+IHtcbiAgcG9ydGZvbGlvTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkcm9wZG93bk1lbnVBcnJvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpc01lbnVPcGVuZWQgPSBmYWxzZTtcbn07XG5cbmNvbnN0IGlzTWVkaXVtVXAgPSAoKSA9PiB7XG4gIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNDBlbSknKS5tYXRjaGVzO1xufTtcblxuY29uc3QgaXNTbWFsbE9ubHkgPSAoKSA9PiB7XG4gIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMzkuOTM3NWVtKScpLm1hdGNoZXM7XG59O1xuXG5pZiAoaXNNZWRpdW1VcCgpKSB7XG4gIG9wZW5CdXJnZXJNZW51KCk7XG59IGVsc2Uge1xuICBjbG9zZUJ1cmdlck1lbnUoKTtcbn1cblxuYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGlzQnVyZ2VyTWVudU9wZW5lZCkge1xuICAgIGNsb3NlQnVyZ2VyTWVudSgpO1xuICB9IGVsc2Uge1xuICAgIG9wZW5CdXJnZXJNZW51KCk7XG4gIH1cbn0pO1xuXG5wb3J0Zm9saW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChpc01lbnVPcGVuZWQpIHtcbiAgICBjbG9zZVBvcnRmb2xpb01lbnUoKTtcbiAgfSBlbHNlIHtcbiAgICBvcGVuUG9ydGZvbGlvTWVudSgpO1xuICB9XG59KTtcblxuYWxsQnV0SGVhZGVyLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChpc1NtYWxsT25seSgpKSB7XG4gICAgICBjbG9zZVBvcnRmb2xpb01lbnUoKTtcbiAgICAgIGNsb3NlQnVyZ2VyTWVudSgpO1xuICAgIH1cbiAgfSk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmIChpc01lZGl1bVVwKCkpIHtcbiAgICBvcGVuQnVyZ2VyTWVudSgpO1xuICB9IGVsc2Uge1xuICAgIGNsb3NlQnVyZ2VyTWVudSgpO1xuICB9XG59KTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=

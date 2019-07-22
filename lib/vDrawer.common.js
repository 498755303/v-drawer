module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "cfc6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c3c68d7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e2b5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c3c68d7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c3c68d7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c3c68d7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e2b5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var v_click_outside_x_esm_namespaceObject = {};
__webpack_require__.r(v_click_outside_x_esm_namespaceObject);
__webpack_require__.d(v_click_outside_x_esm_namespaceObject, "directive", function() { return directive; });
__webpack_require__.d(v_click_outside_x_esm_namespaceObject, "install", function() { return install; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4907403b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/hldrawer/src/index.vue?vue&type=template&id=5c3c68d7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('transition',{attrs:{"name":"fade"}},[(_vm.modal)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],class:_vm.drawerMaskClass,style:(_vm.modalStyle),on:{"click":function($event){$event.stopPropagation();return _vm.onClickMask($event)}}}):_vm._e()]),_c('transition',{attrs:{"name":'drawer-animation-'+_vm.placement}},[_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.onClickOutside),expression:"onClickOutside"},{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],class:_vm.drawerClassTrans,style:({
          width: _vm.fullscreen?'100vw':_vm.width
        })},[_c('div',{class:_vm.prefixCls+'-inner'},[_c('div',{class:_vm.prefixCls+'__header-slot'},[_vm._t("header")],2),(_vm.showHead)?_c('div',{class:_vm.prefixCls+'__header'},[(_vm.title)?_c('div',{class:_vm.prefixCls+'__title',style:(_vm.betweenStyle)},[_vm._v(_vm._s(_vm.title))]):_vm._e(),(_vm.closable)?_c('span',{class:_vm.prefixCls+'__close',on:{"click":function($event){$event.stopPropagation();return _vm.close($event)}}}):_vm._e()]):_vm._e(),_c('div',{class:_vm.prefixCls+'__body',style:(_vm.styles)},[_vm._t("default")],2)])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/hldrawer/src/index.vue?vue&type=template&id=5c3c68d7&scoped=true&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/v-click-outside-x/dist/v-click-outside-x.esm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @typedef {import("../types/index.d.ts")} VClickOutsidePlugin
 */
var CLICK = 'click';
var captureInstances = Object.create(null);
var nonCaptureInstances = Object.create(null);
var captureEventHandlers = Object.create(null);
var nonCaptureEventHandlers = Object.create(null);
var instancesList = [captureInstances, nonCaptureInstances];
/**
 * The common event handler for bot capture and non-capture events.
 *
 * @param {!object} context - The event context.
 * @param {!object} instances - The capture or non-capture registered instances.
 * @param {Event} event - The event object.
 * @param {string} arg - The event type.
 * @returns {undefined} Default.
 */

var commonHandler = function _onCommonEvent(context, instances, event, arg) {
  var target = event.target;

  var itemIteratee = function _itemIteratee(item) {
    var el = item.el;

    if (el !== target && !el.contains(target)) {
      var binding = item.binding;

      if (binding.modifiers.stop) {
        event.stopPropagation();
      }

      if (binding.modifiers.prevent) {
        event.preventDefault();
      }

      binding.value.call(context, event);
    }
  };

  instances[arg].forEach(itemIteratee);
};
/**
 * Get the correct event handler: Capture or non-capture.
 *
 * @param {boolean} useCapture - Indicate which handler to use; 'true' to use
 *  capture handler or 'false' for non-capture.
 * @param {string} arg - The event type.
 * @returns {Function} - The event handler.
 */


var getEventHandler = function _getEventHandler(useCapture, arg) {
  if (useCapture) {
    if (captureEventHandlers[arg]) {
      return captureEventHandlers[arg];
    }
    /**
     * Event handler for capture events.
     *
     * @param {Event} event - The event object.
     */


    captureEventHandlers[arg] = function onCaptureEvent(event) {
      commonHandler(this, captureInstances, event, arg);
    };

    return captureEventHandlers[arg];
  }

  if (nonCaptureEventHandlers[arg]) {
    return nonCaptureEventHandlers[arg];
  }
  /**
   * Event handler for non-capture events.
   *
   * @param {Event} event - The event object.
   */


  nonCaptureEventHandlers[arg] = function onNonCaptureEvent(event) {
    commonHandler(this, nonCaptureInstances, event, arg);
  };

  return nonCaptureEventHandlers[arg];
};
/**
 * The directive definition.
 * {@link https://vuejs.org/v2/guide/custom-directive.html|Custom directive}.
 *
 * @type {VClickOutsidePlugin.directive}
 * @property {!object} $_captureInstances - Registered capture instances.
 * @property {!object} $_nonCaptureInstances - Registered non-capture instances.
 * @property {Function} $_onCaptureEvent - Event handler for capture events.
 * @property {Function} $_onNonCaptureEvent - Event handler for non-capture events.
 * @property {Function} bind - Called only once, when the directive is first
 *  bound to the element.
 * @property {Function} unbind - Called only once, when the directive is unbound
 *  from the element.
 * @property {string} version - The version number of this release.
 */


var directive = Object.defineProperties({}, {
  $_captureInstances: {
    value: captureInstances
  },
  $_nonCaptureInstances: {
    value: nonCaptureInstances
  },
  $_captureEventHandlers: {
    value: captureEventHandlers
  },
  $_nonCaptureEventHandlers: {
    value: nonCaptureEventHandlers
  },
  bind: {
    value: function bind(el, binding) {
      if (typeof binding.value !== 'function') {
        throw new TypeError('Binding value must be a function.');
      }

      var arg = binding.arg || CLICK;

      var normalisedBinding = _objectSpread({}, binding, {}, {
        arg: arg,
        modifiers: _objectSpread({}, {
          capture: false,
          prevent: false,
          stop: false
        }, {}, binding.modifiers)
      });

      var useCapture = normalisedBinding.modifiers.capture;
      var instances = useCapture ? captureInstances : nonCaptureInstances;

      if (!Array.isArray(instances[arg])) {
        instances[arg] = [];
      }

      if (instances[arg].push({
        el: el,
        binding: normalisedBinding
      }) === 1) {
        if ((typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document) {
          document.addEventListener(arg, getEventHandler(useCapture, arg), useCapture);
        }
      }
    }
  },
  unbind: {
    value: function unbind(el) {
      var compareElements = function _compareElements(item) {
        return item.el !== el;
      };

      var instancesIteratee = function _instancesIteratee(instances) {
        var instanceKeys = Object.keys(instances);

        if (instanceKeys.length) {
          var useCapture = instances === captureInstances;

          var keysIteratee = function _keysIteratee(eventName) {
            var newInstance = instances[eventName].filter(compareElements);

            if (newInstance.length) {
              instances[eventName] = newInstance;
            } else {
              if ((typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document) {
                document.removeEventListener(eventName, getEventHandler(useCapture, eventName), useCapture);
              }

              delete instances[eventName];
            }
          };

          instanceKeys.forEach(keysIteratee);
        }
      };

      instancesList.forEach(instancesIteratee);
    }
  },

  /* Note: This needs to be manually updated to match package.json. */
  version: {
    enumerable: true,
    value: '4.0.10'
  }
});
/**
 * A Vue.js plugin should expose an install method. The method will be called
 * with the Vue constructor as the first argument, along with possible options.
 * {@link https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin|Writing a plugin}.
 *
 * @type {VClickOutsidePlugin.install}
 * @param {import("vue")} Vue - The Vue constructor.
 */

function install(Vue) {
  Vue.directive('click-outside', directive);
}

//# sourceMappingURL=v-click-outside-x.esm.js.map
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/hldrawer/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(v_click_outside_x_esm_namespaceObject);
const prefixCls = 'hl-drawer';
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'vDrawer',
  props: {
    //  抽屉是否显示
    value: {
      type: Boolean,
      default: false
    },
    //  抽屉标题。如果使用的 slot 自定义了页头，则 title 无效
    title: {
      type: String,
      default: ''
    },
    // 抽屉宽度
    width: {
      type: String,
      default: "260px"
    },
    // 是否为全屏
    fullscreen: {
      type: Boolean,
      default: false
    },
    // 是否允许点击遮罩区域关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    // 是否允许点击其它区域关闭
    outClosable: {
      type: Boolean,
      default: true
    },
    // 自定义类名
    drawerClass: {
      type: String
    },
    // 是否需要遮罩层
    modal: {
      type: Boolean,
      default: false
    },
    // 遮罩层样式
    modalStyle: {
      type: [Object, String]
    },
    // 关闭之前回调
    beforeClose: {
      type: Function
    },
    // 抽屉的方向，可选值为 left 或 right
    placement: {
      validator(value) {
        return ['left', 'right'].includes(value);
      },
      default: 'right'
    },
    // 是否显示右上角的关闭按钮
    closable: {
      type: Boolean,
      default: false
    },
    // 内容的样式
    styles: {
      type: [Object, String]
    },
    // 是否对头部和底部居中
    center: {
      type: Boolean,
      default: false
    },
    // 是否允许Body滚动
    lockScroll: {
      type: Boolean,
      default: false
    },
    inner: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timer: null,
      prefixCls: prefixCls,
      visible: this.value,
      showHead: true,
    };
  },
  computed: {
    // 类名
    drawerClassTrans() {
      const innerClass = this.inner ? `${this.prefixCls} ${this.prefixCls}__inner` : `${this.prefixCls}`;
      const resultClass = this.placement ? `${innerClass} ${this.prefixCls}__${this.placement} ` : innerClass;
      return this.drawerClass ? resultClass + this.drawerClass : resultClass
    },
    // mask类名
    drawerMaskClass() {
      return this.inner ? `${this.prefixCls}__mask__inner` : `${this.prefixCls}__mask`
    },
    // 头部和底部的样式
    betweenStyle() {
      return this.center ? "text-align:center" : "";
    }
  },
  methods: {
    // 点击外部关闭
    onClickOutside (event) {
      event.stopPropagation()
      if (this.visible && this.outClosable) {
        this.close()
      }
    },
    // 点击mask关闭
    onClickMask () {
      if (this.visible && this.maskClosable) {
        this.close()
      }
    },
    // 关闭
    close () {
      if (!this.beforeClose) {
        this.handleClose()
      }
      this.beforeClose(this.handleClose)
    },
    // 关闭处理
    handleClose () {
      this.visible = false
      this.$emit('input', false)
      this.$emit('close')
    },
    // 初始化header
    privateInitHeader () {
      let showHead = true
      if (this.$slots.header === undefined && !this.title && !this.closable) {
        showHead = false
      }
      this.showHead = showHead
    },
    addScrollEffect () {
      document.body.style.overflow = 'hidden'
    },
    removeScrollEffect () {
      document.body.style.overflow = ''
    }
  },
  watch: {
    value (val) {
      this.visible = val
    },
    visible (val) {
      if (val === false) {
        this.timer = setTimeout(() => {
          this.removeScrollEffect()
        }, 300)
      } else {
        if (this.timer) clearTimeout(this.timer)
        if (this.lockScroll) {
          this.addScrollEffect()
        }
      }
      this.$emit('onVisibleChange', val)
    }
  },
  mounted () {
    this.privateInitHeader ()
  }
});

// CONCATENATED MODULE: ./packages/hldrawer/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var hldrawer_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/hldrawer/src/index.vue?vue&type=style&index=0&id=5c3c68d7&lang=less&scoped=true&
var srcvue_type_style_index_0_id_5c3c68d7_lang_less_scoped_true_ = __webpack_require__("cfc6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/hldrawer/src/index.vue






/* normalize component */

var component = normalizeComponent(
  hldrawer_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5c3c68d7",
  null
  
)

/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./packages/hldrawer/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
src.install = function (Vue) {
  Vue.component(src.name, src)
}

// 默认导出组件
/* harmony default export */ var hldrawer = (src);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (hldrawer);



/***/ })

/******/ });
//# sourceMappingURL=vDrawer.common.js.map
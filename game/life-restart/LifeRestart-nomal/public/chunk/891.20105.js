"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[891],{2891:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CyberSummary)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7327);\n/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2707);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8309);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4129);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3948);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2165);\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar _selectedTalent = /*#__PURE__*/new WeakMap();\n\nvar CyberSummary = /*#__PURE__*/function (_ui$view$CyberTheme$C) {\n  _inherits(CyberSummary, _ui$view$CyberTheme$C);\n\n  var _super = _createSuper(CyberSummary);\n\n  function CyberSummary() {\n    var _this;\n\n    _classCallCheck(this, CyberSummary);\n\n    _this = _super.call(this);\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _selectedTalent, {\n      writable: true,\n      value: void 0\n    });\n\n    _this.listSelectedTalents.renderHandler = Laya.Handler.create(_assertThisInitialized(_this), _this.renderTalent, null, false);\n\n    _this.btnAgain.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onAgain);\n\n    return _this;\n  }\n\n  _createClass(CyberSummary, [{\n    key: "onAgain",\n    value: function onAgain() {\n      core.talentExtend(_classPrivateFieldGet(this, _selectedTalent));\n      core.times++;\n      $ui.switchView(UI.pages.MAIN);\n    }\n  }, {\n    key: "init",\n    value: function init(_ref) {\n      var talents = _ref.talents;\n      var _core = core,\n          summary = _core.summary,\n          lastExtendTalent = _core.lastExtendTalent;\n      var gradeFilters = $ui.common.filter;\n      var gradeColors = $ui.common.grade;\n      var age = summary[core.PropertyTypes.HAGE];\n      this.labAge.text = \'\' + age.value;\n      this.labAgeJudge.text = age.judge;\n      this.labAgeJudge.color = gradeColors[age.grade];\n      var sum = summary[core.PropertyTypes.SUM];\n      this.labTotal.text = \'\' + sum.value;\n      this.labTotalJudge.text = sum.judge;\n      this.labTotalJudge.color = gradeColors[sum.grade];\n      var chr = summary[core.PropertyTypes.HCHR];\n      this.labCharm.text = \'\' + chr.value;\n      this.prgCharm.value = chr.progress;\n      this.labCharmJudge.text = chr.judge;\n      this.labCharmJudge.color = gradeColors[chr.grade];\n      this.boxCharmGrade.colorFilter = gradeFilters[chr.grade];\n      var int = summary[core.PropertyTypes.HINT];\n      this.labIntelligence.text = \'\' + int.value;\n      this.prgIntelligence.value = int.progress;\n      this.labIntelligenceJudge.text = int.judge;\n      this.labIntelligenceJudge.color = gradeColors[int.grade];\n      this.boxIntelligenceGrade.colorFilter = gradeFilters[int.grade];\n      var str = summary[core.PropertyTypes.HSTR];\n      this.labStrength.text = \'\' + str.value;\n      this.prgStrength.value = str.progress;\n      this.labStrengthJudge.text = str.judge;\n      this.labStrengthJudge.color = gradeColors[str.grade];\n      this.boxStrengthGrade.colorFilter = gradeFilters[str.grade];\n      var mny = summary[core.PropertyTypes.HMNY];\n      this.labMoney.text = \'\' + mny.value;\n      this.prgMoney.value = mny.progress;\n      this.labMoneyJudge.text = mny.judge;\n      this.labMoneyJudge.color = gradeColors[mny.grade];\n      this.boxMoneyGrade.colorFilter = gradeFilters[mny.grade];\n      var spr = summary[core.PropertyTypes.HSPR];\n      this.labSpirit.text = \'\' + spr.value;\n      this.prgSpirit.value = spr.progress;\n      this.labSpiritJudge.text = spr.judge;\n      this.labSpiritJudge.color = gradeColors[spr.grade];\n      this.boxSpiritGrade.colorFilter = gradeFilters[spr.grade];\n      talents.sort(function (_ref2, _ref3) {\n        var a = _ref2.id,\n            ag = _ref2.grade;\n        var b = _ref3.id,\n            bg = _ref3.grade;\n        if (a == lastExtendTalent) return -1;\n        if (b == lastExtendTalent) return 1;\n        return bg - ag;\n      });\n\n      _classPrivateFieldSet(this, _selectedTalent, talents[0].id);\n\n      this.listSelectedTalents.array = talents;\n    }\n  }, {\n    key: "renderTalent",\n    value: function renderTalent(box) {\n      var dataSource = box.dataSource;\n      var labTitle = box.getChildByName("labTitle");\n      var grade1 = box.getChildByName("grade1");\n      var grade2 = box.getChildByName("grade2");\n      var grade3 = box.getChildByName("grade3");\n      var labDescription = box.getChildByName("labDescription");\n      var selected = box.getChildByName("selected");\n      var unselected = box.getChildByName("unselected");\n      labTitle.text = dataSource.name;\n      labDescription.text = dataSource.description;\n\n      switch (dataSource.grade) {\n        case 1:\n          grade1.visible = true;\n          grade2.visible = false;\n          grade3.visible = false;\n          break;\n\n        case 2:\n          grade1.visible = false;\n          grade2.visible = true;\n          grade3.visible = false;\n          break;\n\n        case 3:\n          grade1.visible = false;\n          grade2.visible = false;\n          grade3.visible = true;\n          break;\n\n        default:\n          grade1.visible = false;\n          grade2.visible = false;\n          grade3.visible = false;\n          break;\n      }\n\n      selected.visible = dataSource.id == _classPrivateFieldGet(this, _selectedTalent);\n      unselected.visible = !selected.visible;\n      box.off(Laya.Event.CLICK, this, this.onSelectTalent);\n      box.on(Laya.Event.CLICK, this, this.onSelectTalent, [dataSource.id]);\n    }\n  }, {\n    key: "onSelectTalent",\n    value: function onSelectTalent(talentId) {\n      if (talentId == _classPrivateFieldGet(this, _selectedTalent)) {\n        _classPrivateFieldSet(this, _selectedTalent, null);\n      } else {\n        _classPrivateFieldSet(this, _selectedTalent, talentId);\n      }\n\n      this.listSelectedTalents.refresh();\n    }\n  }]);\n\n  return CyberSummary;\n}(ui.view.CyberTheme.CyberSummaryUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg5MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUNBO0FBQUE7O0FBQUE7O0FBQ0E7O0FBREE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7O0FBQ0E7O0FBSEE7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUE1SEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWZlX3Jlc3RhcnQvLi9zcmMvdWkvdGhlbWVzL2N5YmVyL3N1bW1hcnkuanM/NGQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDeWJlclN1bW1hcnkgZXh0ZW5kcyB1aS52aWV3LkN5YmVyVGhlbWUuQ3liZXJTdW1tYXJ5VUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxpc3RTZWxlY3RlZFRhbGVudHMucmVuZGVySGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5yZW5kZXJUYWxlbnQsIG51bGwsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmJ0bkFnYWluLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25BZ2Fpbik7XHJcbiAgICB9XHJcblxyXG4gICAgI3NlbGVjdGVkVGFsZW50O1xyXG5cclxuICAgIG9uQWdhaW4oKSB7XHJcbiAgICAgICAgY29yZS50YWxlbnRFeHRlbmQodGhpcy4jc2VsZWN0ZWRUYWxlbnQpO1xyXG4gICAgICAgIGNvcmUudGltZXMgKys7XHJcbiAgICAgICAgJHVpLnN3aXRjaFZpZXcoVUkucGFnZXMuTUFJTik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCh7dGFsZW50c30pIHtcclxuICAgICAgICBjb25zdCB7c3VtbWFyeSwgbGFzdEV4dGVuZFRhbGVudH0gPSBjb3JlO1xyXG4gICAgICAgIGNvbnN0IGdyYWRlRmlsdGVycyA9ICR1aS5jb21tb24uZmlsdGVyO1xyXG4gICAgICAgIGNvbnN0IGdyYWRlQ29sb3JzID0gJHVpLmNvbW1vbi5ncmFkZTtcclxuXHJcbiAgICAgICAgY29uc3QgYWdlID0gc3VtbWFyeVtjb3JlLlByb3BlcnR5VHlwZXMuSEFHRV07XHJcbiAgICAgICAgdGhpcy5sYWJBZ2UudGV4dCA9ICcnK2FnZS52YWx1ZTtcclxuICAgICAgICB0aGlzLmxhYkFnZUp1ZGdlLnRleHQgPSBhZ2UuanVkZ2U7XHJcbiAgICAgICAgdGhpcy5sYWJBZ2VKdWRnZS5jb2xvciA9IGdyYWRlQ29sb3JzW2FnZS5ncmFkZV07XHJcblxyXG4gICAgICAgIGNvbnN0IHN1bSA9IHN1bW1hcnlbY29yZS5Qcm9wZXJ0eVR5cGVzLlNVTV07XHJcbiAgICAgICAgdGhpcy5sYWJUb3RhbC50ZXh0ID0gJycrc3VtLnZhbHVlO1xyXG4gICAgICAgIHRoaXMubGFiVG90YWxKdWRnZS50ZXh0ID0gc3VtLmp1ZGdlO1xyXG4gICAgICAgIHRoaXMubGFiVG90YWxKdWRnZS5jb2xvciA9IGdyYWRlQ29sb3JzW3N1bS5ncmFkZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGNociA9IHN1bW1hcnlbY29yZS5Qcm9wZXJ0eVR5cGVzLkhDSFJdO1xyXG4gICAgICAgIHRoaXMubGFiQ2hhcm0udGV4dCA9ICcnK2Noci52YWx1ZTtcclxuICAgICAgICB0aGlzLnByZ0NoYXJtLnZhbHVlID0gY2hyLnByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMubGFiQ2hhcm1KdWRnZS50ZXh0ID0gY2hyLmp1ZGdlO1xyXG4gICAgICAgIHRoaXMubGFiQ2hhcm1KdWRnZS5jb2xvciA9IGdyYWRlQ29sb3JzW2Noci5ncmFkZV07XHJcbiAgICAgICAgdGhpcy5ib3hDaGFybUdyYWRlLmNvbG9yRmlsdGVyID0gZ3JhZGVGaWx0ZXJzW2Noci5ncmFkZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGludCA9IHN1bW1hcnlbY29yZS5Qcm9wZXJ0eVR5cGVzLkhJTlRdO1xyXG4gICAgICAgIHRoaXMubGFiSW50ZWxsaWdlbmNlLnRleHQgPSAnJytpbnQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5wcmdJbnRlbGxpZ2VuY2UudmFsdWUgPSBpbnQucHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5sYWJJbnRlbGxpZ2VuY2VKdWRnZS50ZXh0ID0gaW50Lmp1ZGdlO1xyXG4gICAgICAgIHRoaXMubGFiSW50ZWxsaWdlbmNlSnVkZ2UuY29sb3IgPSBncmFkZUNvbG9yc1tpbnQuZ3JhZGVdO1xyXG4gICAgICAgIHRoaXMuYm94SW50ZWxsaWdlbmNlR3JhZGUuY29sb3JGaWx0ZXIgPSBncmFkZUZpbHRlcnNbaW50LmdyYWRlXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RyID0gc3VtbWFyeVtjb3JlLlByb3BlcnR5VHlwZXMuSFNUUl07XHJcbiAgICAgICAgdGhpcy5sYWJTdHJlbmd0aC50ZXh0ID0gJycrc3RyLnZhbHVlO1xyXG4gICAgICAgIHRoaXMucHJnU3RyZW5ndGgudmFsdWUgPSBzdHIucHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5sYWJTdHJlbmd0aEp1ZGdlLnRleHQgPSBzdHIuanVkZ2U7XHJcbiAgICAgICAgdGhpcy5sYWJTdHJlbmd0aEp1ZGdlLmNvbG9yID0gZ3JhZGVDb2xvcnNbc3RyLmdyYWRlXTtcclxuICAgICAgICB0aGlzLmJveFN0cmVuZ3RoR3JhZGUuY29sb3JGaWx0ZXIgPSBncmFkZUZpbHRlcnNbc3RyLmdyYWRlXTtcclxuXHJcbiAgICAgICAgY29uc3QgbW55ID0gc3VtbWFyeVtjb3JlLlByb3BlcnR5VHlwZXMuSE1OWV07XHJcbiAgICAgICAgdGhpcy5sYWJNb25leS50ZXh0ID0gJycrbW55LnZhbHVlO1xyXG4gICAgICAgIHRoaXMucHJnTW9uZXkudmFsdWUgPSBtbnkucHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5sYWJNb25leUp1ZGdlLnRleHQgPSBtbnkuanVkZ2U7XHJcbiAgICAgICAgdGhpcy5sYWJNb25leUp1ZGdlLmNvbG9yID0gZ3JhZGVDb2xvcnNbbW55LmdyYWRlXTtcclxuICAgICAgICB0aGlzLmJveE1vbmV5R3JhZGUuY29sb3JGaWx0ZXIgPSBncmFkZUZpbHRlcnNbbW55LmdyYWRlXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ByID0gc3VtbWFyeVtjb3JlLlByb3BlcnR5VHlwZXMuSFNQUl07XHJcbiAgICAgICAgdGhpcy5sYWJTcGlyaXQudGV4dCA9ICcnK3Nwci52YWx1ZTtcclxuICAgICAgICB0aGlzLnByZ1NwaXJpdC52YWx1ZSA9IHNwci5wcm9ncmVzcztcclxuICAgICAgICB0aGlzLmxhYlNwaXJpdEp1ZGdlLnRleHQgPSBzcHIuanVkZ2U7XHJcbiAgICAgICAgdGhpcy5sYWJTcGlyaXRKdWRnZS5jb2xvciA9IGdyYWRlQ29sb3JzW3Nwci5ncmFkZV07XHJcbiAgICAgICAgdGhpcy5ib3hTcGlyaXRHcmFkZS5jb2xvckZpbHRlciA9IGdyYWRlRmlsdGVyc1tzcHIuZ3JhZGVdO1xyXG5cclxuICAgICAgICB0YWxlbnRzLnNvcnQoKHtpZDphLCBncmFkZTphZ30sIHtpZDpiLCBncmFkZTpiZ30sKT0+e1xyXG4gICAgICAgICAgICBpZihhID09IGxhc3RFeHRlbmRUYWxlbnQpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgaWYoYiA9PSBsYXN0RXh0ZW5kVGFsZW50KSByZXR1cm4gMTtcclxuICAgICAgICAgICAgcmV0dXJuIGJnIC0gYWc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0ZWRUYWxlbnQgPSB0YWxlbnRzWzBdLmlkO1xyXG4gICAgICAgIHRoaXMubGlzdFNlbGVjdGVkVGFsZW50cy5hcnJheSA9IHRhbGVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGFsZW50KGJveCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBib3guZGF0YVNvdXJjZTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFiVGl0bGUgPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJsYWJUaXRsZVwiKTtcclxuICAgICAgICBjb25zdCBncmFkZTEgPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJncmFkZTFcIik7XHJcbiAgICAgICAgY29uc3QgZ3JhZGUyID0gYm94LmdldENoaWxkQnlOYW1lKFwiZ3JhZGUyXCIpO1xyXG4gICAgICAgIGNvbnN0IGdyYWRlMyA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImdyYWRlM1wiKTtcclxuICAgICAgICBjb25zdCBsYWJEZXNjcmlwdGlvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImxhYkRlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gYm94LmdldENoaWxkQnlOYW1lKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgY29uc3QgdW5zZWxlY3RlZCA9IGJveC5nZXRDaGlsZEJ5TmFtZShcInVuc2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIGxhYlRpdGxlLnRleHQgPSBkYXRhU291cmNlLm5hbWU7XHJcbiAgICAgICAgbGFiRGVzY3JpcHRpb24udGV4dCA9IGRhdGFTb3VyY2UuZGVzY3JpcHRpb247XHJcbiAgICAgICAgc3dpdGNoIChkYXRhU291cmNlLmdyYWRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGdyYWRlMS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdyYWRlMi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBncmFkZTMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGdyYWRlMS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBncmFkZTIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBncmFkZTMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGdyYWRlMS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBncmFkZTIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZ3JhZGUzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBncmFkZTEudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZ3JhZGUyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGdyYWRlMy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkLnZpc2libGUgPSBkYXRhU291cmNlLmlkID09IHRoaXMuI3NlbGVjdGVkVGFsZW50O1xyXG4gICAgICAgIHVuc2VsZWN0ZWQudmlzaWJsZSA9ICFzZWxlY3RlZC52aXNpYmxlO1xyXG4gICAgICAgIGJveC5vZmYoTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblNlbGVjdFRhbGVudCk7XHJcbiAgICAgICAgYm94Lm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25TZWxlY3RUYWxlbnQsIFtkYXRhU291cmNlLmlkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RUYWxlbnQodGFsZW50SWQpIHtcclxuICAgICAgICBpZih0YWxlbnRJZCA9PSB0aGlzLiNzZWxlY3RlZFRhbGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3RlZFRhbGVudCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0ZWRUYWxlbnQgPSB0YWxlbnRJZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGlzdFNlbGVjdGVkVGFsZW50cy5yZWZyZXNoKCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2891\n')}}]);
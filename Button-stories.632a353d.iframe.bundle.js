/*! For license information please see Button-stories.632a353d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkordinary_react_library=self.webpackChunkordinary_react_library||[]).push([[463],{"./stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Button",component:__webpack_require__("./src/components/index.ts").z,tags:["autodocs"]},Primary={args:{children:"Button"}},Disabled={args:{children:"Button",disabled:!0}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button'\n  }\n}",...Primary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Disabled"]},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>components_Button_Button,R:()=>components_TextBox_TextBox});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button.Z,options);Button.Z&&Button.Z.locals&&Button.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button_Button=({children,disabled,status="system",view="primary",onClick})=>{const classNames=["button",disabled&&"button_disabled",status&&`button_status_${status}`,view&&`button_view_${view}`];return(0,jsx_runtime.jsx)("button",{className:classNames.join(" "),onClick,disabled,children})};Button_Button_Button.displayName="Button";const components_Button_Button=Button_Button_Button;try{Button_Button_Button.displayName="Button",Button_Button_Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},status:{defaultValue:{value:"system"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"system"'},{value:'"success"'},{value:'"error"'},{value:'"warning"'}]}},view:{defaultValue:{value:"primary"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var TextBox=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TextBox/TextBox.scss"),TextBox_options={};TextBox_options.styleTagTransform=styleTagTransform_default(),TextBox_options.setAttributes=setAttributesWithoutAttributes_default(),TextBox_options.insert=insertBySelector_default().bind(null,"head"),TextBox_options.domAPI=styleDomAPI_default(),TextBox_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextBox.Z,TextBox_options);TextBox.Z&&TextBox.Z.locals&&TextBox.Z.locals;const TextBox_TextBox_TextBox=({placeholder,disabled,status="system",view="primary",onChange,required,value})=>{const classNames=["textBox",disabled&&"textBox_disabled",status&&`textBox_status_${status}`,view&&`textBox_view_${view}`],handleChange=react.useCallback((e=>{onChange&&!disabled&&onChange(e.target.value)}),[disabled,onChange]);return(0,jsx_runtime.jsx)("input",{className:classNames.join(" "),value,placeholder,onChange:handleChange,disabled,required})};TextBox_TextBox_TextBox.displayName="TextBox";const components_TextBox_TextBox=TextBox_TextBox_TextBox;try{TextBox_TextBox_TextBox.displayName="TextBox",TextBox_TextBox_TextBox.__docgenInfo={description:"",displayName:"TextBox",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},status:{defaultValue:{value:"system"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"system"'},{value:'"success"'},{value:'"error"'},{value:'"warning"'}]}},view:{defaultValue:{value:"primary"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextBox/TextBox.tsx#TextBox"]={docgenInfo:TextBox_TextBox_TextBox.__docgenInfo,name:"TextBox",path:"src/components/TextBox/TextBox.tsx#TextBox"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button{--button-background-color: var(--blue);--button-text-color: var(--white);padding:10px 30px;background-color:var(--button-background-color);color:var(--button-text-color);border:none;border-radius:5px;font-size:20px;cursor:pointer;transition:background-color .2s linear}.button_view_secondary{background-color:rgba(0,0,0,0);border:2px solid;border-color:var(--button-background-color);--button-text-color: var(--button-background-color);border-radius:20px}.button_status_success{--button-background-color: var(--green)}.button_status_error{--button-background-color: var(--error)}.button_status_warning{--button-background-color: var(--yellow)}.button_disabled{--button-background-color: var(--background-grey);cursor:default}","",{version:3,sources:["webpack://./src/components/Button/Button.scss"],names:[],mappings:"AAAA,QACI,sCAAA,CACA,iCAAA,CAEA,iBAAA,CACA,+CAAA,CACA,8BAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,cAAA,CACA,sCAAA,CAGI,uBACI,8BAAA,CACA,gBAAA,CACA,2CAAA,CACA,mDAAA,CACA,kBAAA,CAKJ,uBACI,uCAAA,CAGJ,qBACI,uCAAA,CAGJ,uBACI,wCAAA,CAMR,iBACI,iDAAA,CACA,cAAA",sourcesContent:[".button {\n    --button-background-color: var(--blue);\n    --button-text-color: var(--white);\n\n    padding: 10px 30px;\n    background-color: var(--button-background-color);\n    color: var(--button-text-color);\n    border: none;\n    border-radius: 5px;\n    font-size: 20px;\n    cursor: pointer;\n    transition: background-color 0.2s linear;\n\n    &_view {\n        &_secondary {\n            background-color: transparent;\n            border: 2px solid;\n            border-color: var(--button-background-color);\n            --button-text-color: var(--button-background-color);\n            border-radius: 20px;\n        }\n    }\n\n    &_status {\n        &_success {\n            --button-background-color: var(--green);\n        }\n\n        &_error {\n            --button-background-color: var(--error);\n        }\n\n        &_warning {\n            --button-background-color: var(--yellow);\n        }\n    }\n\n\n\n    &_disabled {\n        --button-background-color: var(--background-grey);\n        cursor: default;\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TextBox/TextBox.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".textBox{--textbox-background-color: var(--blue);--textbox-text-color: var(--white);padding:10px 30px;background-color:var(--textbox-background-color);color:var(--textbox-text-color);border:none;outline:none;border-radius:5px;font-size:15px;transition:background-color .2s linear}.textBox::placeholder{color:var(--textbox-text-color)}.textBox_view_secondary{background-color:rgba(0,0,0,0);border:2px solid;border-color:var(--textbox-background-color);--textbox-text-color: var(--textbox-background-color);border-radius:10px}.textBox_status_success{--textbox-background-color: var(--green)}.textBox_status_error{--textbox-background-color: var(--error)}.textBox_status_warning{--textbox-background-color: var(--yellow) }.textBox_disabled{--textbox-background-color: var(--background-grey);cursor:default}","",{version:3,sources:["webpack://./src/components/TextBox/TextBox.scss"],names:[],mappings:"AAAA,SACI,uCAAA,CACA,kCAAA,CAEA,iBAAA,CACA,gDAAA,CACA,+BAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,cAAA,CACA,sCAAA,CAEA,sBACI,+BAAA,CAIA,wBACI,8BAAA,CACA,gBAAA,CACA,4CAAA,CACA,qDAAA,CACA,kBAAA,CAKJ,wBACI,wCAAA,CAGJ,sBACI,wCAAA,CAGJ,wBACI,0CAAA,CAMR,kBACI,kDAAA,CACA,cAAA",sourcesContent:[".textBox {\n    --textbox-background-color: var(--blue);\n    --textbox-text-color: var(--white);\n\n    padding: 10px 30px;\n    background-color: var(--textbox-background-color);\n    color: var(--textbox-text-color);\n    border: none;\n    outline: none;\n    border-radius: 5px;\n    font-size: 15px;\n    transition: background-color 0.2s linear;\n\n    &::placeholder {\n        color: var(--textbox-text-color);\n    }\n\n    &_view {\n        &_secondary {\n            background-color: transparent;\n            border: 2px solid;\n            border-color: var(--textbox-background-color);\n            --textbox-text-color: var(--textbox-background-color);\n            border-radius: 10px;\n        }\n    }\n\n    &_status {\n        &_success {\n            --textbox-background-color: var(--green);\n        }\n\n        &_error {\n            --textbox-background-color: var(--error);\n        }\n\n        &_warning {\n            --textbox-background-color: var(--yellow)\n        }\n    }\n\n\n\n    &_disabled {\n        --textbox-background-color: var(--background-grey);\n        cursor: default;\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
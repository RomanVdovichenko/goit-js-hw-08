!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function S(e){return l=e,f=setTimeout(O,t),s?p(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function O(){var e=y();if(j(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function w(e){return f=void 0,m&&r?p(e):(r=i=void 0,u)}function T(){var e=y(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(O,t),p(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=h(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(h(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(y())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},j=function(e){try{var t=localStorage.getItem(e);return null===t?"":JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},O=function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}},w=document.querySelector(".feedback-form"),T=w.querySelector("input"),x=w.querySelector("textarea"),N="feedback-form-state",E={email:"",message:""};function I(){T.value=j(N).email||"",x.value=j(N).message||"",E.email="",E.message=""}I(),w.addEventListener("input",e(t)((function(){E.email=w.elements.email.value,E.message=w.elements.message.value,S(N,E)}),500)),w.addEventListener("submit",(function(e){e.preventDefault(),console.log(E),O(N),w.reset(),I()}))}();
//# sourceMappingURL=03-feedback.1aaed852.js.map

function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var l=r("7Y9D8");const i=document.querySelector(".form"),u=i.elements.delay,s=i.elements.step,c=i.elements.amount;document.querySelector("button").addEventListener("click",(function(o){o.preventDefault();let t=Number(u.value);console.log(t);const n=Number(s.value),r=Number(c.value);for(let e=0;e<r;e+=1){t+=n,i(e,t)}function i(o,t){const n=Math.random()>.3;new Promise(((e,o)=>{setTimeout((()=>{n?e("Success! Value passed to resolve function"):o("Error! Error passed to reject function")}),t)})).then((({position:o,delay:t})=>{e(l).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(l).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.2f8db4a0.js.map

const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");let o=null;e.addEventListener("click",(function(){o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(o),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.22117157.js.map

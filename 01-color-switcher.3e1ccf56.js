!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n="";t.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.3e1ccf56.js.map

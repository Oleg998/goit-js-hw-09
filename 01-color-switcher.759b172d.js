const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let d;function o(){let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;r.style.backgroundColor=t}e.setAttribute("disabled",""),t.addEventListener("click",(function(){o(),e.removeAttribute("disabled",""),t.setAttribute("disabled",""),d=setInterval(o,1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",""),t.removeAttribute("disabled"),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.759b172d.js.map

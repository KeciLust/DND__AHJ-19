(()=>{"use strict";var e,t,d;document.addEventListener("click",(function(e){e.preventDefault();var t=e.target.closest(".add_null");if(t){var d=e.target.closest(".column");if(document.querySelector(".add_up")){var n=document.querySelector(".add_up").closest(".column");document.querySelector(".add_up").remove(),document.querySelector(".input").remove(),document.querySelector(".add_del").remove();var o=document.createElement("button");o.classList.add("add"),o.classList.add("add_null"),o.textContent="Добавить",n.append(o)}var a=document.createElement("textarea"),c=document.createElement("button"),l=document.createElement("button");c.classList.add("add"),c.classList.add("add_del"),l.classList.add("add"),l.classList.add("add_up"),c.style.width="40%",l.style.width="40%",c.textContent="Закрыть",l.textContent="Записать",a.classList.add("input"),a.placeholder="Введите заметку",d.insertBefore(a,t),t.remove(),d.append(l),d.append(c),c.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector(".add_up").closest(".column");document.querySelector(".add_up").remove(),document.querySelector(".input").remove(),document.querySelector(".add_del").remove();var d=document.createElement("button");d.classList.add("add"),d.classList.add("add_null"),d.textContent="Добавить",t.append(d)})),function(){var e=document.querySelector(".add_up"),t=document.querySelector(".input"),d=e.closest(".column");e.addEventListener("click",(function(n){if(n.preventDefault(),e&&t.value){var o=document.createElement("div"),a=document.createElement("button");a.classList.add("res"),o.classList.add("note"),o.textContent="".concat(t.value),d.append(o),o.append(a),a.addEventListener("click",(function(e){e.preventDefault(),e.target.closest(".note").remove()}));var c=document.querySelector(".add_up").closest(".column");document.querySelector(".add_up").remove(),document.querySelector(".input").remove(),document.querySelector(".add_del").remove();var l=document.createElement("button");l.classList.add("add"),l.classList.add("add_null"),l.textContent="Добавить",c.append(l)}}))}()}})),e=null,t=null,(d=document.querySelector(".container")).addEventListener("mousedown",(function(d){d.target.closest(".note")&&(e=d.target,(t=d.target.cloneNode(!0)).classList.add("drag"),document.body.appendChild(t),t.style.left="".concat(d.pageX-t.offsetWidth/2,"px"),t.style.top="".concat(d.pageY-t.offsetHeight/2,"px"))})),d.addEventListener("mousemove",(function(d){d.preventDefault(),e&&(t.style.left="".concat(d.pageX-t.offsetWidth/2,"px"),t.style.top="".concat(d.pageY-t.offsetHeight/2,"px"))})),d.addEventListener("mouseleave",(function(){e&&(document.body.removeChild(t),e=null,t=null)})),d.addEventListener("mouseup",(function(d){if(e){var n=document.elementFromPoint(d.clientX,d.clientY);if(!n.closest(".column"))return document.body.removeChild(t),e=null,void(t=null);n.insertBefore(e,n.lastChild),document.body.removeChild(t),e=null,t=null}}))})();
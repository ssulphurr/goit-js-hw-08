const e=document.querySelector(".feedback-form"),t=e.elements.email,a=e.elements.message,o={email:t.value,message:a.value};function l(e){localStorage.setItem("feedback-form-state",JSON.stringify(o))}t.addEventListener("input",l),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),a.addEventListener("input",l),console.log(localStorage.getItem("feedback-form-state")),a.value=localStorage.getItem("feedback-form-state");
//# sourceMappingURL=03-feedback.fdf660cc.js.map

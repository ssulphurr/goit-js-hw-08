const e=document.querySelector(".feedback-form"),t=e.elements.email;e.elements.message;t.addEventListener("input",(function(e){localStorage.setItem("feedback-form-state",e.currentTarget.value)})),console.log(localStorage.getItem("feedback-form-state")),t.value=localStorage.getItem("feedback-form-state");
//# sourceMappingURL=03-feedback.da9cac5f.js.map

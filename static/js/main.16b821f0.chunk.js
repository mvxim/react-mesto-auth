(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(17),s=n.n(i),o=n(6),r=n(22),l=n(3),d=n(2),u="https://auth.nomoreparties.co",j=Object(a.createContext)(),m=(n(16),n(18)),b=n(19),h=new(function(){function e(t){Object(m.a)(this,e),this._url="https://nomoreparties.co/v1/cohort-30/",this._headers={authorization:t,"Content-Type":"application/json"}}return Object(b.a)(e,[{key:"_onResponse",value:function(e){return e.ok?e.json():Promise.reject(">>> \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me/"),{method:"GET",headers:this._headers}).then(this._onResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"users/me/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._onResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._onResponse)}},{key:"getPlaces",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._onResponse)}},{key:"createNewPlace",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._onResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"".concat(t?"DELETE":"PUT"),headers:this._headers}).then(this._onResponse)}},{key:"removePlace",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._onResponse)}}]),e}())("a2e8d35a-8087-4045-b36f-fee28ac34f65"),_=n(10),f=n(7),O=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({}),s=Object(l.a)(i,2),o=s[0],r=s[1],d=Object(a.useState)(!1),u=Object(l.a)(d,2),j=u[0],m=u[1],b=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];c(e),r(t),m(n)}),[c,r,m]);return{values:n,errors:o,handleChange:function(e){var t=e.target.name,a=e.target.value;c(Object(f.a)(Object(f.a)({},n),{},Object(_.a)({},t,a))),r(Object(f.a)(Object(f.a)({},o),{},Object(_.a)({},t,e.target.validationMessage))),m(e.target.closest("form").checkValidity())},isValid:j,resetForm:b}},p=n(0),g=function(e){var t=e.name,n=e.onSubmit,a=e.title,c=e.isLoading,i=e.buttonText,s=e.children,o=e.isValid;return Object(p.jsxs)("form",{className:"modal__form",name:"".concat(t,"-form"),onSubmit:n,children:[Object(p.jsx)("h2",{className:"modal__title",children:a}),"confirm"===t?null:s,Object(p.jsx)("button",{disabled:"confirm"!==t&&(!o||c),className:"modal__button ".concat(o&&!c?"":"modal__button_disabled"),type:"submit",children:c?"\u23f3 \u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":i})]})},x=function(e){var t=e.isOpen,n=e.name,c=e.onClose,i=e.children;Object(a.useEffect)((function(){if(t){var e=document.documentElement.clientWidth,n=window.innerWidth-e;return document.body.style.overflow="hidden",document.body.style.paddingRight="".concat(n,"px"),function(){document.body.style.overflow="auto",document.body.style.paddingRight=null}}}),[t]),Object(a.useEffect)((function(){if(t){var e=function(e){"Escape"===e.key&&c()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}}),[t,c]);return Object(p.jsx)("section",{className:"modal modal_type_".concat(n," page__modal ").concat(t?"modal_active":""),onClick:function(e){e.target===e.currentTarget&&c()},children:Object(p.jsxs)("div",{className:"modal__".concat("picture"===n?"figure":"container"),children:[Object(p.jsx)("button",{className:"modal__close-btn",type:"button",onClick:c}),i]})})};var v=function(e){var t=e.name,n=e.title,a=e.buttonText,c=void 0===a?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":a,i=e.children,s=e.isOpen,o=e.onClose,r=e.onSubmit,l=e.isLoading,d=e.isFormValid;return Object(p.jsx)(x,{isOpen:s,name:t,onClose:o,children:Object(p.jsx)(g,{name:t,title:n,onSubmit:r,buttonText:c,isLoading:l,isValid:d,children:i})})};var C=function(e){var t=e.isOpen,n=e.onClose,c=e.onPlaceAdd,i=e.isLoading,s=O(),o=s.handleChange,r=s.isValid,l=s.values,d=s.errors,u=s.resetForm;return Object(a.useEffect)((function(){u()}),[u,t]),Object(p.jsxs)(v,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,isLoading:i,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:l.title,link:l.picture})},isFormValid:r,children:[Object(p.jsx)("input",{"aria-label":"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u0434\u043b\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",className:"modal__input modal__input_field_title ".concat(d["card-field-title"]?"modal__input_error":""),id:"field_title",maxLength:"30",minLength:"2",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,type:"text",value:l.title||"",onChange:o}),Object(p.jsx)("span",{className:"modal__error modal__error_field_title",children:d.title}),Object(p.jsx)("input",{"aria-label":"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u0434\u043b\u044f \u0430\u0434\u0440\u0435\u0441\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438",className:"modal__input modal__input_field_picture ".concat(d.picture?"modal__input_error":""),id:"field_picture",name:"picture",placeholder:"\u0421\u0441\u044b\u043b\u043e\u0447\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u0447\u043a\u0443",required:!0,type:"url",onChange:o,value:l.picture||""}),Object(p.jsx)("span",{className:"modal__error modal__error_field_picture",children:d.picture})]})};var N=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,i=e.isLoading,s=O(),o=s.handleChange,r=s.isValid,l=s.values,d=s.errors,u=s.resetForm;return Object(a.useEffect)((function(){u()}),[u,t]),Object(p.jsxs)(v,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,isLoading:i,onClose:n,onSubmit:function(e){e.preventDefault(),c(l.avatar)},isFormValid:r,children:[Object(p.jsx)("input",{"aria-label":"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u0434\u043b\u044f \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"modal__input modal__input_field_avatar ".concat(d.avatar?"modal__input_error":""),id:"field_avatar",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",required:!0,type:"url",value:l.avatar||"",onChange:o}),Object(p.jsx)("span",{className:"modal__error modal__error_field_avatar",children:d.avatar})]})};var y=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,i=e.isLoading,s=O(),o=s.handleChange,r=s.isValid,l=s.values,d=s.errors,u=s.resetForm,m=Object(a.useContext)(j);return Object(a.useEffect)((function(){m?u(m):u()}),[u,t,m]),Object(p.jsxs)(v,{name:"bio",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,isLoading:i,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:l.name,about:l.about})},isFormValid:r,children:[Object(p.jsx)("input",{"aria-label":"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u0434\u043b\u044f \u0438\u043c\u0435\u043d\u0438",className:"modal__input modal__input_field_name",id:"field_name",maxLength:"40",minLength:"2",name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",required:!0,type:"text",value:l.name||"",onChange:o}),Object(p.jsx)("span",{className:"modal__error modal__error_field_name",children:d.name}),Object(p.jsx)("input",{"aria-label":"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f",className:"modal__input modal__input_field_desc",id:"field_desc",maxLength:"200",minLength:"2",name:"about",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",required:!0,type:"text",value:l.about||"",onChange:o}),Object(p.jsx)("span",{className:"modal__error modal__error_field_desc",children:d.about})]})};var k=function(){return Object(p.jsx)("footer",{className:"footer page__footer",children:Object(p.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})},S=n.p+"static/media/logo_color_white.7185dafb.svg";var L=function(e){var t=e.userEmail,n=Object(d.g)();return Object(p.jsxs)("header",{className:"header page__header",children:[Object(p.jsx)(o.b,{className:"button",to:"/",children:Object(p.jsx)("img",{alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \xab\u041c\u0435\u0441\u0442\u043e\xbb.",className:"header__logo",src:S})}),Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{path:"/sign-up",children:Object(p.jsx)(o.b,{className:"header__link button link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(p.jsx)(d.b,{path:"/sign-in",children:Object(p.jsx)(o.b,{className:"header__link button link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(p.jsx)(d.b,{exact:!0,path:"/",children:Object(p.jsxs)("div",{className:"header__nav",children:[Object(p.jsx)("p",{className:"header__email",children:t||""}),Object(p.jsx)("button",{className:"header__link header__link_type_button button",type:"button",onClick:function(){localStorage.removeItem("jwt"),n.push("/sign-in")},children:"\u0412\u044b\u0439\u0442\u0438"})]})})]})]})};var E=function(e){var t=e.isOpen,n=e.card,a=e.onClose,c=n.link,i=n.name;return Object(p.jsxs)(x,{isOpen:t,onClose:a,name:"picture",children:[Object(p.jsx)("img",{alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0438\u0437 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438. \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ".concat(i),className:"modal__image",src:c||""}),Object(p.jsx)("p",{className:"modal__caption",children:i})]})},T=n.p+"static/media/success.1b6082f8.svg",w=n.p+"static/media/fail.df8eddf6.svg",P=function(e){var t=e.isOpen,n=e.onClose,a=e.isSuccess;return Object(p.jsx)(x,{isOpen:t,name:"tooltip",onClose:n,children:Object(p.jsx)("div",{className:"tooltip",children:a?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{src:T,alt:"",className:"tooltip__icon"}),Object(p.jsx)("h2",{className:"tooltip__message",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{src:w,alt:"",className:"tooltip__icon"}),Object(p.jsx)("h2",{className:"tooltip__message",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})})},F=function(e){var t=e.buttonText,n=e.onSubmit,c=e.formData,i=e.onChange,s=e.errors,o=e.resetForm,r=e.isFormValid,l=e.isLoading;return Object(a.useEffect)((function(){o()}),[o]),Object(p.jsxs)("form",{className:"auth__form",name:"signin",onSubmit:n,children:[Object(p.jsxs)("fieldset",{className:"fieldset auth__fieldset",children:[Object(p.jsx)("input",{className:"auth__input",type:"email",name:"email",placeholder:"Email",value:c.email||"",onChange:i,required:!0}),Object(p.jsx)("span",{className:"modal__error",children:s.email}),Object(p.jsx)("input",{className:"auth__input",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"4",maxLength:"32",value:c.password||"",onChange:i,required:!0}),Object(p.jsx)("span",{className:"modal__error",children:s.password})]}),Object(p.jsx)("button",{disabled:!r||l,className:"auth__button ".concat(r&&!l?"":"auth__button_disabled"),type:"submit",children:l?"\u23f3 \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430":t})]})},I=function(e){var t=e.isLoggedIn,n=e.isLoading,a=e.setIsLoading,c=O(),i=c.handleChange,s=c.isValid,o=c.values,r=c.errors,l=c.resetForm,j=Object(d.g)();return Object(p.jsx)("main",{className:"auth page__main",children:Object(p.jsxs)("section",{className:"auth__container",children:[Object(p.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsx)(F,{onChange:i,onSubmit:function(e){var n;e.preventDefault(),a(!0),(n=o,fetch("".concat(u,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject(">>> \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))).then((function(e){localStorage.setItem("jwt",e.token),t(!0),j.push("/")})).catch((function(e){console.log(e)})).finally((function(){return a(!1)}))},formData:o,buttonText:"\u0412\u043e\u0439\u0442\u0438",isFormValid:s,errors:r,resetForm:l,isLoading:n})]})})};var V=function(e){var t=e.cardData,n=e.onCardClick,c=e.onCardLike,i=e.onCardDeleteClick,s=Object(a.useContext)(j),o=t.name,r=t.link,l=t.likes,d=t.owner,u=t._id,m=d._id===s._id,b="delete gallery__delete-btn ".concat(m?"":"delete_hidden"),h=l.some((function(e){return e._id===s._id})),_="like gallery__like-btn ".concat(h?"like_active":"");return Object(p.jsxs)("li",{className:"gallery__item",children:[Object(p.jsx)("div",{className:"gallery__image-container",children:Object(p.jsx)("div",{className:"gallery__image-wrapper",children:Object(p.jsx)("img",{className:"gallery__image",src:r,alt:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0441 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439. \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ".concat(o),onClick:function(){n(t)}})})}),Object(p.jsx)("button",{className:b,type:"button",onClick:function(){i(u)}}),Object(p.jsxs)("div",{className:"gallery__caption",children:[Object(p.jsx)("p",{className:"gallery__text",children:o}),Object(p.jsxs)("div",{className:"gallery__like-btn-wrapper",children:[Object(p.jsx)("button",{className:_,type:"button",onClick:function(){c(t)}}),Object(p.jsx)("span",{className:"gallery__like-btn-counter",children:l.length})]})]})]})};var D=function(e){var t=e.cards,n=e.onEditAvatar,c=e.onEditProfile,i=e.onAddPlace,s=e.onCardClick,o=e.onCardLike,r=e.onCardDeleteClick,l=Object(a.useContext)(j);return Object(p.jsxs)("main",{className:"main page__main",children:[Object(p.jsx)("section",{"aria-label":"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile main__profile",children:Object(p.jsxs)("div",{className:"profile__bio",children:[Object(p.jsxs)("div",{className:"profile__avatar-wrapper",children:[Object(p.jsx)("img",{alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar",src:l.avatar}),Object(p.jsx)("button",{className:"button profile__avatar-btn",onClick:n})]}),Object(p.jsxs)("div",{className:"profile__details",children:[Object(p.jsxs)("div",{className:"profile__row",children:[Object(p.jsx)("h1",{className:"profile__name",children:l.name}),Object(p.jsx)("button",{className:"button profile__edit-btn",type:"button",onClick:c})]}),Object(p.jsx)("p",{className:"profile__desc",children:l.about})]}),Object(p.jsx)("button",{className:"button profile__add-btn",type:"button",onClick:i})]})}),Object(p.jsx)("section",{"aria-label":"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"gallery",children:Object(p.jsx)("ul",{className:"gallery__grid",children:t.map((function(e){return Object(p.jsx)(V,{cardData:e,onCardClick:s,onCardLike:o,onCardDeleteClick:r},e._id)}))})})]})};var U=function(e){var t=e.isOpen,n=e.isLoading,c=e.onClose,i=e.onSubmit,s=e.card,o=O(),r=o.isValid,l=o.resetForm;return Object(a.useEffect)((function(){l(null,null,!0)}),[l,t]),Object(p.jsx)(v,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:t,isLoading:n,onClose:c,onSubmit:function(e){e.preventDefault(),i(s)},isFormValid:r})},A=n(23),R=["component"],q=function(e){var t=e.component,n=Object(A.a)(e,R);return Object(p.jsx)(d.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(f.a)({},n)):Object(p.jsx)(d.a,{to:"/sign-in"})}})},J=function(e){var t=e.signUpStatus,n=e.isLoading,a=e.setIsLoading,c=e.handleInfoTooltip,i=O(),s=i.handleChange,r=i.isValid,l=i.values,j=i.errors,m=i.resetForm,b=Object(d.g)();return Object(p.jsx)("main",{className:"auth page__main",children:Object(p.jsxs)("section",{className:"auth__container",children:[Object(p.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsx)(F,{onChange:s,onSubmit:function(e){var n;e.preventDefault(),a(!0),(n=l,fetch("".concat(u,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject(">>> \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))).then((function(e){t(!0),c(!0),b.push("/sign-in"),console.log(e)})).catch((function(e){console.log(e),t(!1),c(!0)})).finally((function(){return a(!1)}))},formData:l,buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",isFormValid:r,errors:j,resetForm:m,isLoading:n}),Object(p.jsx)(o.b,{className:"auth__link button link",to:"/sign-in",children:"\u0423\u0436\u0435\xa0\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})})};var G=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(l.a)(i,2),o=s[0],m=s[1],b=Object(a.useState)({name:"",about:"",avatar:"",_id:"",cohort:""}),_=Object(l.a)(b,2),f=_[0],O=_[1],g=Object(a.useState)(""),x=Object(l.a)(g,2),v=x[0],S=x[1],T=Object(a.useState)([]),w=Object(l.a)(T,2),F=w[0],V=w[1],A=Object(a.useState)({name:"",link:""}),R=Object(l.a)(A,2),G=R[0],M=R[1],z=Object(a.useState)(""),B=Object(l.a)(z,2),H=B[0],W=B[1],K=Object(a.useState)(!1),Q=Object(l.a)(K,2),X=Q[0],Y=Q[1],Z=Object(a.useState)(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(l.a)(ne,2),ce=ae[0],ie=ae[1],se=Object(a.useState)(!1),oe=Object(l.a)(se,2),re=oe[0],le=oe[1],de=Object(a.useState)(!1),ue=Object(l.a)(de,2),je=ue[0],me=ue[1],be=Object(a.useState)(!1),he=Object(l.a)(be,2),_e=he[0],fe=he[1],Oe=Object(a.useState)(!1),pe=Object(l.a)(Oe,2),ge=pe[0],xe=pe[1],ve=Object(d.g)(),Ce=function(){Y(!1),te(!1),ie(!1),me(!1),le(!1),fe(!1),M({name:"",link:""})},Ne=function(e){xe(e)},ye=Object(a.useCallback)((function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");e&&(t=e,fetch("".concat(u,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){e&&(m(!0),S(e.data.email),ve.push("/"))})).catch((function(e){console.log(e)}))}var t}),[ve]);return Object(a.useEffect)((function(){ye()}),[o]),Object(a.useEffect)((function(){Promise.all([h.getPlaces(),h.getUserInfo()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];V(n),O(a)})).catch((function(e){console.log(e)}))}),[]),Object(p.jsx)(j.Provider,{value:f,children:Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)("div",{className:"page__container",children:[Object(p.jsx)(L,{userEmail:v}),Object(p.jsxs)(d.d,{children:[Object(p.jsx)(q,{exact:!0,path:"/",loggedIn:o,cards:F,onEditAvatar:function(){Y(!X)},onEditProfile:function(){te(!ee)},onAddPlace:function(){ie(!ce)},onCardClick:function(e){me(!je),M(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===f._id}));h.changeLikeCardStatus(e._id,t).then((function(t){V((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDeleteClick:function(e){le(!re),W(e)},component:D}),Object(p.jsx)(d.b,{path:"/sign-up",children:Object(p.jsx)(J,{signUpStatus:function(e){c(e)},isLoading:ge,setIsLoading:xe,handleInfoTooltip:fe})}),Object(p.jsx)(d.b,{path:"/sign-in",children:Object(p.jsx)(I,{isLoggedIn:function(e){m(e)},isLoading:ge,setIsLoading:xe})})]}),Object(p.jsx)(N,{isOpen:X,isLoading:ge,onClose:Ce,onUpdateAvatar:function(e){Ne(!0),h.setUserAvatar(e).then((function(e){O(e),Ce()})).catch().finally((function(){Ne(!1)}))}}),Object(p.jsx)(y,{isOpen:ee,isLoading:ge,onClose:Ce,onUpdateUser:function(e){Ne(!0),h.setUserInfo(e).then((function(e){O(e),Ce()})).catch().finally((function(){Ne(!1)}))}}),Object(p.jsx)(C,{isOpen:ce,isLoading:ge,onClose:Ce,onPlaceAdd:function(e){Ne(!0),h.createNewPlace(e).then((function(e){V([e].concat(Object(r.a)(F))),Ce()})).catch().finally((function(){Ne(!1)}))}}),Object(p.jsx)(U,{isOpen:re,isLoading:ge,onClose:Ce,onSubmit:function(e){Ne(!0),h.removePlace(e).then((function(){V((function(t){return t.filter((function(t){return t._id!==e}))})),Ce()})).catch((function(e){return console.log(e)})).finally((function(){Ne(!1)}))},card:H}),Object(p.jsx)(E,{isOpen:je,card:G,onClose:Ce}),Object(p.jsx)(P,{isOpen:_e,onClose:Ce,isSuccess:n}),Object(p.jsx)(k,{})]})})})};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(G,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.16b821f0.chunk.js.map
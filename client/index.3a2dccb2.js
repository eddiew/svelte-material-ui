import{S as t,i as s,s as e,c as o,a,e as i,d as n,f as l,g as r,h as c,U as m,j as p,k as u,m as d,o as g,t as $,p as f,R as h,q as y,r as x,n as _}from"./index.0f7eb1e1.js";import{e as b,u as w,f as v}from"./useActions.cb87c68e.js";import{s as P}from"./style-inject.es.84f5c4af.js";import{c as T,D as k}from"./Div.ff114bb9.js";import"./Label.ed0979d4.js";function E(t){var s,e,h,y;const x=t.$$slots.default,_=o(x,t,null);for(var v=[{class:"mdc-image-list "+t.className},b(t.$$props,["use","class","masonry","withTextProtection"])],P={},T=0;T<v.length;T+=1)P=a(P,v[T]);return{c(){s=i("ul"),_&&_.c(),this.h()},l(t){s=n(t,"UL",{class:!0},!1);var e=l(s);_&&_.l(e),e.forEach(r),this.h()},h(){c(s,P),m(s,"mdc-image-list--masonry",t.masonry),m(s,"mdc-image-list--with-text-protection",t.withTextProtection)},m(o,a){p(o,s,a),_&&_.m(s,null),e=w.call(null,s,t.use)||{},h=t.forwardEvents.call(null,s)||{},y=!0},p(t,o){_&&_.p&&t.$$scope&&_.p(u(x,o,t,null),d(x,o,null)),c(s,g(v,[t.className&&{class:"mdc-image-list "+o.className},(t.exclude||t.$$props)&&b(o.$$props,["use","class","masonry","withTextProtection"])])),"function"==typeof e.update&&t.use&&e.update.call(null,o.use),(t.className||t.masonry)&&m(s,"mdc-image-list--masonry",o.masonry),(t.className||t.withTextProtection)&&m(s,"mdc-image-list--with-text-protection",o.withTextProtection)},i(t){y||($(_,t),y=!0)},o(t){f(_,t),y=!1},d(t){t&&r(s),_&&_.d(t),e&&"function"==typeof e.destroy&&e.destroy(),h&&"function"==typeof h.destroy&&h.destroy()}}}function j(t,s,e){const o=v(x);let{use:i=[],class:n="",masonry:l=!1,withTextProtection:r=!1}=s;h("SMUI:label:context","image-list");let{$$slots:c={},$$scope:m}=s;return t.$set=t=>{e("$$props",s=a(a({},s),t)),"use"in t&&e("use",i=t.use),"class"in t&&e("className",n=t.class),"masonry"in t&&e("masonry",l=t.masonry),"withTextProtection"in t&&e("withTextProtection",r=t.withTextProtection),"$$scope"in t&&e("$$scope",m=t.$$scope)},{forwardEvents:o,use:i,className:n,masonry:l,withTextProtection:r,$$props:s,$$props:s=y(s),$$slots:c,$$scope:m}}P(".mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__image-aspect-container,.mdc-image-list__item{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:50%;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:100%}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-radius:0 0 0 0}.mdc-image-list__supporting{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0,0,0,.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}");class N extends t{constructor(t){super(),s(this,t,j,E,e,["use","class","masonry","withTextProtection"])}}function z(t){var s,e,m,h;const y=t.$$slots.default,x=o(y,t,null);for(var _=[b(t.$$props,["use"])],v={},P=0;P<_.length;P+=1)v=a(v,_[P]);return{c(){s=i("li"),x&&x.c(),this.h()},l(t){s=n(t,"LI",{},!1);var e=l(s);x&&x.l(e),e.forEach(r),this.h()},h(){c(s,v)},m(o,a){p(o,s,a),x&&x.m(s,null),e=w.call(null,s,t.use)||{},m=t.forwardEvents.call(null,s)||{},h=!0},p(t,o){x&&x.p&&t.$$scope&&x.p(u(y,o,t,null),d(y,o,null)),c(s,g(_,[(t.exclude||t.$$props)&&b(o.$$props,["use"])])),"function"==typeof e.update&&t.use&&e.update.call(null,o.use)},i(t){h||($(x,t),h=!0)},o(t){f(x,t),h=!1},d(t){t&&r(s),x&&x.d(t),e&&"function"==typeof e.destroy&&e.destroy(),m&&"function"==typeof m.destroy&&m.destroy()}}}function I(t,s,e){const o=v(x);let{use:i=[]}=s,{$$slots:n={},$$scope:l}=s;return t.$set=t=>{e("$$props",s=a(a({},s),t)),"use"in t&&e("use",i=t.use),"$$scope"in t&&e("$$scope",l=t.$$scope)},{forwardEvents:o,use:i,$$props:s,$$props:s=y(s),$$slots:n,$$scope:l}}var L=T({class:"mdc-image-list__item",component:class extends t{constructor(t){super(),s(this,t,I,z,e,["use"])}},contexts:{}}),S=T({class:"mdc-image-list__image-aspect-container",component:k,contexts:{}});function U(t){for(var s,e,o,m=[{alt:t.alt},b(t.$$props,["use","alt"])],u={},d=0;d<m.length;d+=1)u=a(u,m[d]);return{c(){s=i("img"),this.h()},l(t){s=n(t,"IMG",{alt:!0},!1),l(s).forEach(r),this.h()},h(){c(s,u)},m(a,i){p(a,s,i),e=w.call(null,s,t.use)||{},o=t.forwardEvents.call(null,s)||{}},p(t,o){c(s,g(m,[t.alt&&{alt:o.alt},(t.exclude||t.$$props)&&b(o.$$props,["use","alt"])])),"function"==typeof e.update&&t.use&&e.update.call(null,o.use)},i:_,o:_,d(t){t&&r(s),e&&"function"==typeof e.destroy&&e.destroy(),o&&"function"==typeof o.destroy&&o.destroy()}}}function D(t,s,e){const o=v(x);let{use:i=[],alt:n=""}=s;return t.$set=t=>{e("$$props",s=a(a({},s),t)),"use"in t&&e("use",i=t.use),"alt"in t&&e("alt",n=t.alt)},{forwardEvents:o,use:i,alt:n,$$props:s,$$props:s=y(s)}}var M=T({class:"mdc-image-list__image",component:class extends t{constructor(t){super(),s(this,t,D,U,e,["use","alt"])}},contexts:{}}),R=T({class:"mdc-image-list__supporting",component:k,contexts:{}});export{N as I,R as S,L as a,S as b,M as c};

(this.webpackJsonpfinancas=this.webpackJsonpfinancas||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),s=n.n(r),i=n(12),o=n.n(i),j=n(15),l=n(11),u=(n(26),n(17)),d=n(20),b=n(7),h=n(9),O=n(19),x=n(16),p=n(18),m=n(1);var f=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),i=s[0],f=s[1],v=Object(c.useState)(!1),y=Object(l.a)(v,2),g=y[0],B=y[1],S=Object(c.useState)(""),w=Object(l.a)(S,2),C=w[0],E=w[1],k=Object(c.useState)(!1),N=Object(l.a)(k,2),F=N[0],P=N[1];function R(){return(R=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),"a1ec296d",n="https://api.hgbrasil.com/finance?format=json-cors&array_limit=1&fields=only_results,".concat(t,"&key=").concat("a1ec296d"),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){f(e)})).catch((function(e){console.error("Erro ao obter a Moeda: ".concat(e.message))}));case 5:B(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),"a1ec296d",n="https://api.hgbrasil.com/finance?format=json-cors&array_limit=1&fields=only_results,".concat(t,"&key=").concat("a1ec296d"),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){var t=parseFloat(document.getElementById("num").value)*e.currencies.buy;document.getElementById("resultado").value=t})).catch((function(e){console.error("Erro ao obter a Moeda: ".concat(e.message))}));case 5:P(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{bg:"warning",children:Object(m.jsx)(u.a.Brand,{href:"#inicio",children:"FatecFinan\xe7as"})}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)("h1",{children:" Fatec Finan\xe7as"}),Object(m.jsx)("h3",{children:"Consulta da cota\xe7\xe3o das principais moedas ao redor do globo."}),Object(m.jsx)("h3",{children:"Conversor de moedas para real."})]}),Object(m.jsx)(b.a,{className:"justify-content-center",children:Object(m.jsx)("h2",{class:"text-light",children:"Veja a Cota\xe7\xe3o da moeda escolhida"})}),Object(m.jsx)(b.a,{className:"justify-content-center",children:Object(m.jsxs)("select",{onChange:function(e){return a(e.target.value)},children:[Object(m.jsx)("option",{value:"",children:"  Selecione uma moeda "}),Object(m.jsx)("option",{value:"BTC",children:" Bitcoin "}),Object(m.jsx)("option",{value:"EUR",children:" Euro"}),Object(m.jsx)("option",{value:"GBP",children:" Libra Esterlina "}),Object(m.jsx)("option",{value:"USD",children:" D\xf3lar"}),Object(m.jsx)("option",{value:"ARS",children:" Peso Argentino"}),Object(m.jsx)("option",{value:"JPY",children:" Iene  "})]})}),Object(m.jsx)(b.a,{className:"justify-content-center",children:i&&Object(m.jsx)(h.a,{style:{width:"18rem"},children:Object(m.jsxs)(h.a.Body,{children:[Object(m.jsx)(h.a.Title,{children:i.currencies.name}),Object(m.jsxs)(h.a.Text,{children:[Object(m.jsxs)("h5",{children:["Valor : R$",i.currencies.buy]}),Object(m.jsxs)("h5",{children:["Varia\xe7\xe3o : ",i.currencies.variation,"%"]})]})]})})}),Object(m.jsx)(b.a,{className:"justify-content-center",children:Object(m.jsxs)(O.a,{onClick:function(){return function(e){return R.apply(this,arguments)}(n)},variant:"success",children:[g?Object(m.jsx)(x.a,{size:"sm",animation:"grow"}):Object(m.jsx)(p.a,{color:"#000000",size:"20"}),"Obter Moeda"]})}),Object(m.jsxs)(b.a,{children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)(b.a,{className:"justify-content-center",children:Object(m.jsx)("h2",{class:"text-light",children:"Converta o valor que quiser para real"})}),Object(m.jsxs)(b.a,{className:"justify-content-center",children:[Object(m.jsxs)("select",{onChange:function(e){return E(e.target.value)},children:[Object(m.jsx)("option",{value:"",children:"  Selecione uma moeda "}),Object(m.jsx)("option",{value:"BTC",children:" Bitcoin "}),Object(m.jsx)("option",{value:"EUR",children:" Euro"}),Object(m.jsx)("option",{value:"GBP",children:" Libra Esterlina "}),Object(m.jsx)("option",{value:"USD",children:" D\xf3lar"}),Object(m.jsx)("option",{value:"ARS",children:" Peso Argentino"}),Object(m.jsx)("option",{value:"JPY",children:" Iene  "})]}),Object(m.jsx)(b.a,{children:Object(m.jsx)("input",{type:"number",min:"0",id:"num"})}),Object(m.jsx)(h.a,{style:{width:"18rem"},children:Object(m.jsx)(h.a.Body,{children:Object(m.jsxs)(h.a.Text,{children:["R$",Object(m.jsx)("input",{type:"number",step:"0.01",id:"resultado",readOnly:!0})]})})})]}),Object(m.jsx)(b.a,{className:"justify-content-center",children:Object(m.jsxs)(O.a,{onClick:function(){return function(e){return I.apply(this,arguments)}(C)},variant:"success",children:[F?Object(m.jsx)(x.a,{size:"sm",animation:"grow"}):Object(m.jsx)(p.a,{color:"#000000",size:"20"}),"Converter"]})})]})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.afc6f36b.chunk.js.map
(this["webpackJsonpcoding-exercise-refactor"]=this["webpackJsonpcoding-exercise-refactor"]||[]).push([[0],{21:function(n,e,t){},22:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e),t.d(e,"renderToDOM",(function(){return E}));var r,c,i,o,a=t(0),u=t(12),s=t.n(u),m=(t(21),t(22),t(2)),d=function(){var n=Object(a.useState)([]),e=Object(m.a)(n,2),t=e[0],r=e[1];return{cart:t,setCart:r,addItem:function(n){return t.push(n),t},removeItem:function(n){return t.pop(n),t}}},l=function(){var n=Object(a.useState)(0),e=Object(m.a)(n,2),t=e[0],r=e[1];return{count:t,incrementCounter:function(){r(t+1)},decrementCounter:function(){r(t-1)}}},f=t(13),j=t.n(f),p=function(n){var e=l(),t=e.incrementCounter,r=e.count,c=e.decrementCounter,i=d(),o=i.setCart,a=i.addItem,u=i.removeItem,s=i.cart;return{onClickIncrementItem:function(){o(a(n)),t()},onClickRemoveItem:function(){r>=1?(o(u(n)),c()):j()("You can not remove more items ")},count:r,setCart:o,cart:s}},x={name:"Item",descripton:"A item."},b=t(3),h=t(4),O=h.a.div(r||(r=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 100vh;\n"]))),g=h.a.span(c||(c=Object(b.a)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  letter-spacing: -0.408px;\n  color: red;\n"]))),v=h.a.button(i||(i=Object(b.a)(["\n  background: red;\n  color: white;\n  width: 10%;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 4px;\n  padding: 8px 4px;\n  border: 2px solid red;\n  border-radius: 1px;\n  @media (max-width: ",") {\n    width: 50%;\n  }\n"])),"800px"),I=h.a.div(o||(o=Object(b.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),C=function(n,e){var t=Object(a.useState)(0),r=Object(m.a)(t,2),c=r[0],i=r[1];Object(a.useEffect)((function(){var n=setInterval((function(){i((function(n){return n+30})),o(e)}),3e4);return function(){return clearInterval(n)}}),[]);var o=function(e){n(e)};return{timeOnPage:c,updateItems:o}},k=t(1),w=function(){var n=p(x),e=n.onClickIncrementItem,t=n.onClickRemoveItem,r=n.count,c=n.setCart,i=n.cart,o=C(c,i).timeOnPage;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(O,{children:[Object(k.jsx)(g,{children:"Items in Cart ".concat(r)}),Object(k.jsx)(v,{onClick:e,children:"Add Item"}),Object(k.jsx)(v,{onClick:t,children:"Remove Item"})]}),Object(k.jsxs)(I,{children:["Time on page ",o," s"]})]})},y=function(){return Object(k.jsx)(w,{})},E=function(){null!==document.getElementById("root")&&s.a.render(Object(k.jsx)(y,{}),document.getElementById("root"))};E()}},[[26,1,2]]]);
//# sourceMappingURL=main.6193eaf1.chunk.js.map
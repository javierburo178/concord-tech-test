(this["webpackJsonpcoding-exercise-refactor"]=this["webpackJsonpcoding-exercise-refactor"]||[]).push([[0],{21:function(n,e,t){},22:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var c,r,i,o,a=t(0),u=t.n(a),s=t(12),d=t.n(s),m=(t(21),t(22),t(2)),l=function(){var n=Object(a.useState)([]),e=Object(m.a)(n,2),t=e[0],c=e[1];return{cart:t,setCart:c,addItem:function(n){return t.push(n),t},removeItem:function(n){return t.pop(n),t}}},f=function(){var n=Object(a.useState)(0),e=Object(m.a)(n,2),t=e[0],c=e[1];return{count:t,incrementCounter:function(){c(t+1)},decrementCounter:function(){c(t-1)}}},j=t(13),b=t.n(j),x=function(n){var e=f(),t=e.incrementCounter,c=e.count,r=e.decrementCounter,i=l(),o=i.setCart,a=i.addItem,u=i.removeItem,s=i.cart;return{onClickIncrementItem:function(){o(a(n)),t()},onClickRemoveItem:function(){c>=1?(o(u(n)),r()):b()("You can not remove more items ")},count:c,setCart:o,cart:s}},h={name:"Item",descripton:"A item."},p=t(3),g=t(4),v=g.a.div(c||(c=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 100vh;\n"]))),O=g.a.span(r||(r=Object(p.a)(["\n  font-family: var(--main-font);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  letter-spacing: -0.408px;\n  color: red;\n"]))),C=g.a.button(i||(i=Object(p.a)(["\n  background: red;\n  color: white;\n  width: 10%;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 4px;\n  padding: 8px 4px;\n  border: 2px solid red;\n  border-radius: 1px;\n  @media (max-width: ",") {\n    width: 50%;\n  }\n"])),"800px"),I=g.a.div(o||(o=Object(p.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=t(1),w=function(){var n=x(h),e=n.onClickIncrementItem,t=n.onClickRemoveItem,c=n.count,r=n.setCart,i=n.cart,o=Object(a.useState)(0),u=Object(m.a)(o,2),s=u[0],d=u[1];Object(a.useEffect)((function(){var n=setInterval((function(){d((function(n){return n+30})),l(i)}),3e4);return function(){return clearInterval(n)}}),[]);var l=function(n){r(n)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(v,{children:[Object(k.jsx)(O,{children:"Items in Cart ".concat(c)}),Object(k.jsx)(C,{onClick:e,children:"Add Item"}),Object(k.jsx)(C,{onClick:t,children:"Remove Item"})]}),Object(k.jsxs)(I,{children:["Time on page ",s," s"]})]})},y=function(){return Object(k.jsx)(w,{})},F=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),i(n),o(n)}))};d.a.render(Object(k.jsx)(u.a.StrictMode,{children:Object(k.jsx)(y,{})}),document.getElementById("root")),F()}},[[26,1,2]]]);
//# sourceMappingURL=main.dd3e0f39.chunk.js.map
(this["webpackJsonpmine-sweeper"]=this["webpackJsonpmine-sweeper"]||[]).push([[0],{22:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var i,a,c,r=t(1),s=t.n(r),o=t(13),A=t.n(o),d=(t(22),t(3)),l=t(4),u=t(2),m=t(14),p=t.n(m),f={Beginner:{rows:9,columns:9,ceils:81,mines:10},Intermediate:{rows:16,columns:16,ceils:256,mines:40},Expert:{rows:16,columns:30,ceils:480,mines:99}},b=t(8),j=t(9),g=t.p+"static/media/flag.96cbdcf7.png",h=t.p+"static/media/mine-ceil.3260f219.png",O=t.p+"static/media/mine-death.f6c49a88.png",_=t.p+"static/media/misflagged.2cc3cc08.png",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALElEQVR42mNgGNbgPxomSzMuPu0NIGTgENFMFQOolhYGuxf27t37f2A0AwEAQr8eVaRMnxsAAAAASUVORK5CYII=",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAI0lEQVR42mNgwA3+45P4j03Ff3TJ/9gk0AX+Y7MLpwRO1wEA1lcU7C7/FKUAAAAASUVORK5CYII=",v=t(0);function E(e){var n=e.ceils,t=e.onMouseDown,i=e.onMouseEnter;function a(e,n){var t=e.state,i=e.minesAround,a=e.opening;switch(t){case"open":return Object(v.jsx)(k,{mines:i});case"flag":return Object(v.jsx)(B,{});case"misflagged":return Object(v.jsx)(y,{});case"mine":return Object(v.jsx)(R,{});case"die":return Object(v.jsx)(N,{});case"unknown":return a?Object(v.jsx)(U,{}):Object(v.jsx)(C,{});default:return a?Object(v.jsx)(I,{index:n}):Object(v.jsx)(S,{index:n})}}return n.map((function(e,n){return Object(v.jsx)("div",{onMouseEnter:function(){return i(n)},onMouseDown:function(e){return t(e,n)},className:"mine__ceil",index:n,children:a(e,n)},n)}))}var N=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I,{}),Object(v.jsx)("img",{alt:"death",src:O})]})},y=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I,{}),Object(v.jsx)("img",{alt:"misFlagged",src:_})]})},B=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S,{}),Object(v.jsx)("img",{alt:"flag",src:g})]})},k=function(e){var n,t=e.mines;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I,{}),Object(v.jsx)("img",{alt:"mines-around",src:(n=t,["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNgAAIAAAUAAen63NgAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mNgGAng/38IpkgzWQYgaybZAHTNA+OFIW4AtkAkySCKDRhKAAB8jU+x6ZwbNAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAL0lEQVR42mNgGIagmuE/XkyRZoKG4FNEtCvIMZwkb1EUmLTVSJFzaRKNZCemIQcA2OFf+6sS8JAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mNgGF7gPxARwhQbQNAQYgynjwEUO5+q/qdfGFAcjTRLA4MbAACQL3uF13XmMAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJ0lEQVR42mNgGK6g+j8CY+PT1gBsiulnALJCfJh2BpDirZFmwGAGAE2EUrFtzr/cAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJklEQVR42mNgGF6gmoHhPzGYPgZQ7AWahQFtA5Fu3hvYdMAw/AAAgjlnXUQq77YAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKklEQVR42mNgGIaguvo/XkyRZpIMoNj5NPE/VcIAryH4FNHfAJqFw/ADANeOjOlonwSHAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mNgGHbgP5GYdgYQazj9DRi1fSCjbggAADl0K9Xj0B5TAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALElEQVR42mNgGH6gurr6Pz5MkWaChuBTRB8DKA4DqgbiwIQBxdFIlUAcegAAKVC5Qc8U50QAAAAASUVORK5CYII="][n])})]})},C=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S,{}),Object(v.jsx)("img",{alt:"question",src:x})]})},U=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I,{}),Object(v.jsx)("img",{alt:"question",src:x})]})},R=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I,{}),Object(v.jsx)("img",{alt:"mine",src:h})]})},S=j.a.div(i||(i=Object(b.a)(["\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  background-color: #E8F7EE;\n  border-left: #fff solid 2px;\n  border-top: #fff solid 2px;\n  border-right: #B8C4BB solid 2px;\n  border-bottom: #B8C4BB solid 2px;\n"]))),I=j.a.div(a||(a=Object(b.a)(["\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-left: #fad13f solid 1px;\n  border-top: #fad13f solid 1px;\n  background-color: #FCE38A\n"]))),G=Object(j.a)((function(e){var n=e.ceils,t=e.className,i=e.changeCeilState,a=e.onReset,c=e.openCeil,s=e.openCeils,o=e.mines,A=(e.status,e.seconds),l=e.difficulty,u=e.openingCeil,m=e.openingCeils,p=e.sameTouchPos,f=e.lastTouch,b=Object(r.useRef)(null),j=Object(r.useRef)(null),h=Object(r.useRef)(null),O=Object(r.useState)(null),_=Object(d.a)(O,2),x=_[0],N=_[1],y=Object(r.useState)({index:-1,behavior:""}),B=Object(d.a)(y,2),k=B[0],C=B[1];function U(e){C({index:-1,behavior:""}),j.current.contains(e.target)||N("")}function R(e){j.current.contains(e.target)||h.current.contains(e.target)||N("")}return Object(r.useEffect)((function(){var e=k.index;switch(k.behavior){case"single":return u(e);case"multi":return m(e);default:u(-1)}}),[k.index,k.behavior,k,u,m]),Object(r.useEffect)((function(){return window.addEventListener("touchend",R),window.addEventListener("mouseup",U),function(){window.removeEventListener("mouseup",U),window.removeEventListener("touchend",R)}}),[]),Object(v.jsxs)("div",{className:t,onContextMenu:function(e){return e.preventDefault()},children:[Object(v.jsx)("div",{className:"mine__drop-downs",ref:j,children:Object(v.jsxs)("div",{style:{visibility:"Game"===x?"visible":"hidden"},className:"mine__drop-down",children:[Object(v.jsx)("div",{className:"mine__drop-down__title",children:"Game"}),Object(v.jsxs)("div",{className:"mine__drop-down__menu",children:[Object(v.jsxs)("div",{className:"mine__drop-down__row",onMouseUp:function(){a(),N("")},children:[Object(v.jsx)("div",{className:"mine__drop-down__check"}),Object(v.jsx)("span",{children:"New"}),Object(v.jsx)("span",{className:"mine__drop-down__hot-key"}),Object(v.jsx)("div",{className:"mine__drop-down__arrow"})]}),Object(v.jsx)("div",{className:"mine__drop-down__separator"}),Object(v.jsxs)("div",{className:"mine__drop-down__row",onMouseUp:function(){a("Beginner"),N("")},onTouchStart:function(){return a("Beginner")},children:[Object(v.jsx)("div",{className:"mine__drop-down__check",children:"Beginner"===l&&Object(v.jsx)("img",{src:w,alt:"checked"})}),Object(v.jsx)("span",{children:"Beginner"}),Object(v.jsx)("span",{className:"mine__drop-down__hot-key"}),Object(v.jsx)("div",{className:"mine__drop-down__arrow"})]}),Object(v.jsxs)("div",{className:"mine__drop-down__row",onMouseUp:function(){a("Intermediate"),N("")},onTouchStart:function(){return a("Intermediate")},children:[Object(v.jsx)("div",{className:"mine__drop-down__check",children:"Intermediate"===l&&Object(v.jsx)("img",{src:w,alt:"checked"})}),Object(v.jsx)("span",{children:"Intermediate"}),Object(v.jsx)("span",{className:"mine__drop-down__hot-key"}),Object(v.jsx)("div",{className:"mine__drop-down__arrow"})]}),Object(v.jsxs)("div",{className:"mine__drop-down__row",onMouseUp:function(){a("Expert"),N("")},onTouchStart:function(){return a("Expert")},children:[Object(v.jsx)("div",{className:"mine__drop-down__check",children:"Expert"===l&&Object(v.jsx)("img",{src:w,alt:"checked"})}),Object(v.jsx)("span",{children:"Expert"}),Object(v.jsx)("span",{className:"mine__drop-down__hot-key"}),Object(v.jsx)("div",{className:"mine__drop-down__arrow"})]}),Object(v.jsx)("div",{className:"mine__drop-down__separator"}),Object(v.jsxs)("div",{className:"mine__drop-down__row",children:[Object(v.jsx)("div",{className:"mine__drop-down__check"}),Object(v.jsx)("a",{className:"mine__drop-down__text",href:"https://github.com/LizzzYu/minesweeper/",children:"Github"}),Object(v.jsx)("span",{className:"mine__drop-down__hot-key"}),Object(v.jsx)("div",{className:"mine__drop-down__arrow"})]})]})]})}),Object(v.jsx)("div",{className:"mine__top-bar",ref:h,children:Object(v.jsx)("div",{onMouseDown:function(){return N("Game")},onTouchStart:function(){return N(x?"":"Game")},onMouseOver:function(){return e="Game",void(x&&N(e));var e},className:"mine__top-bar__text",children:"Game"})}),Object(v.jsxs)("section",{className:"mine__content",onMouseDown:function(e){0===e.button&&b.current.contains(e.target)},children:[Object(v.jsxs)("div",{className:"mine__score-bar",children:[Object(v.jsxs)("div",{className:"mine__digits__outer",children:[Object(v.jsx)("img",{alt:"flag",src:g}),o-n.filter((function(e){return"flag"===e.state||"misflagged"===e.state})).length]}),Object(v.jsxs)("div",{className:"mine__digits__outer",style:{justifySelf:"center"},children:[Object(v.jsx)("img",{width:"14px",height:"14px",alt:"clock",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMFSURBVDiNbZJNTFxlFIaf893vzp0BLg4zDFomtkREBVPR2lhTUyPRaKth48aFhmCaNPizqXFhoosm6tZFNSWyIC6sP4nRjW2saUQ0kWgFnUSrdrRJgTIwwDADDMzcv8+FhUjad3mS50nOe44UPh4cTvXYTyqHVj9ByaDenH3NfO5ZscG4LQ1aSSU00aUG7Y23HY9GLF+eMcZYAUwvXwzPSv23o2c1cqTerAirivmPFN60+I62bOF/UXjJfX6s6VBA6AIimA3e1lqkN9SCVxSmhxXxSFNLt9lLbbtZx5DAI+1tIAvzMX6uUp3VpJ7zUI0GaaBbG5EZfNqnTykcY7G4p4evW27jUH8fjl8iAlRbih/OnOfBizkaC3OsfGKTet5DLJOXWv5YZ/FT68/Vv5QudXRz+bFB2tsddrVyXUythv/OSZKlBZqfCK7YB8x9Kt418s/i7wS4LlOpDogpbkn/B4yNTzA2PrEtCCyL/J09eFaM1XNWOblneEX9MfDSHQLxaiaL+8DjZFps5Fp7FyZzXJjMbQts2+bup58iSCYB6Z05ejyl/Uh6lAjFUMjlJnAP9PDKG6P4YcjqcpFMOrljja++mWCfaDqAOmG7jsJoyQDpuEPvvQdxG0P6jzxMbbNOuVymq7Njh+Dwowcxv/x47bLhmg7cYEqt6SixUlSyXqHa2EzfQ/uvbxCIjCEsV4hVygArV27NXFX7R0Y2lHDZWSzgfPcZpfWQzfoNecIwZGb0Q+Ib6wBf9J04ESgArTnmBVF0z2qBXflJfsotEQTg+z6+7wMwN7+E9e33dC0XEMWmJdFbANvfmnv25WElZkhaWvj7pizR/Y+w7kJTAm7HZ+HLc+wuF9FePcKYgc7Rd0/vEABcPTlUXZnS8bhSytMOa24SMRHNlRKaEB03UdPh8FJr/6nuLWZbYH4dygZOMLtRtj6Yfs9O2DZ3WSI3i0ioxORBzmRf3ByI0rI33hg0S2Z0DUBvCbxEzVXGLums//re0+/P3ahE79UXxnTNP7+mE7Gt2b+pNT7954C2+AAAAABJRU5ErkJggg=="}),A]}),Object(v.jsx)("div",{className:"mine__restart__wrapper",children:Object(v.jsx)("button",{className:"mine__restart",ref:b,onClick:function(){return a()},children:Object(v.jsx)("img",{alt:"restart",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG+SURBVDiNpZC/a1NhFIaf97tR6E3iYtXFQdRBsDhFUrkgRpKWOjhJEfwH6lBwchXcxMEiuDk5dHHSTW9si8Q0inTwxyDuilZE6E0MJPcel9xLrJcI+m7nfO95zns+mRn/o8J4sV2rlXzv57IpmZVRARUw3prU7vcLt6dbrZ3dAKUJduZOB0rcA8HR/F32SYl31V/bfPwHIGqcOSdLngHuL4mHJtcohZsbacNxseI7S+6PDf9A3PKscMSZdxhxBfiYnixLHkbzwcHsD3o975rBMQBBZOhEMex8Gdu6Gs0HTRcP2yPfNPHgMnAXwBnMps4E3Sk2fxsGoPTkxVfDbmSxzS1mCYBT2YfAvbzDu/XqO9DJtDZZ0K1XDXjvMPz0wYs1lQdIpCVBNN4TRIm05Ey0MmPBzucBymGnFUsLKUQQxdJCOey0nEzPs2hmN7v12UOTIMCbdBhA20FQ9qcGW2YcH3k/g113sduIPfY5uGQkNcmt+GHn0W6wzIzeXLViCW1gT972kQbILhTDV83xpgPwn758bc4awIcJgG8Jrp+bINPizN7ud3/ZxFlMM4L9wJZka91hceXA+no0GfAP+gX6o7aIbvQgxgAAAABJRU5ErkJggg=="})})})]}),Object(v.jsx)("div",{className:"mine__content__inner",onTouchEnd:function(e){var t=Array.prototype.indexOf.call(e.currentTarget.children,e.target.closest(".mine__ceil"));-1!==t&&p&&(new Date-f<150?"open"===n[t].state?s(t):c(t):i(t))},onMouseUp:function(){var e=k.behavior,n=k.index;-1!==n&&("single"===e?c(n):"multi"===e&&s(n))},children:Object(v.jsx)(E,{ceils:n,onMouseDown:function(e,n){2===e.button&&2===e.buttons&&-1!==n?i(n):0===e.button&&1===e.buttons?C({index:n,behavior:"single"}):3===e.buttons&&C({index:n,behavior:"multi"})},onMouseEnter:function(e){C({index:e,behavior:k.behavior})}})})]})]})}))(c||(c=Object(b.a)(["\n  display: inline-block;\n  img {\n    pointer-events: none;\n  }\n  .mine__drop-downs {\n    position: absolute;\n    display: flex;\n    height: 20px;\n  }\n  .mine__drop-down {\n    position: relative;\n    z-index: 1;\n  }\n  .mine__drop-down__title {\n    padding: 0 5px;\n    height: 100%;\n    line-height: 20px;\n    font-size: 11px;\n    color: white;\n    background-color: #663f46;\n  }\n  .mine__drop-down__menu {\n    background-color: white;\n    position: absolute;\n    box-shadow: 2px 2px 5px rgb(100, 100, 100);\n    padding: 5px;\n    display: grid;\n    grid-template-columns: 18px auto auto 15px;\n    line-height: 18px;\n    font-size: 11px;\n  }\n  .mine__drop-down__row {\n    display: contents;\n    &:hover > * {\n      background: #3f665f;\n      filter: invert(100%);\n    }\n  }\n  .mine__drop-down__separator {\n    grid-column: 1 / 5;\n    height: 1px;\n    background-color: gray;\n    margin: 3px 1px;\n  }\n  .mine__drop-down__check {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .mine__drop-down__arrow {\n  }\n  .mine__drop-down__hot-key {\n    padding-left: 5px;\n  }\n  .mine__drop-down__text {\n    white-space: nowrap;\n  }\n  .mine__top-bar {\n    position: relative;\n    display: flex;\n    height: 20px;\n    background-color: #e8e5df;\n  }\n  .mine__top-bar__text {\n    padding: 0 5px;\n    height: 100%;\n    line-height: 20px;\n    font-size: 11px;\n    &:hover {\n      color: ",";\n      background-color: ",";\n    }\n  }\n  .mine__content {\n    background-color: rgb(192, 192, 192);\n  }\n  .mine__score-bar {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 1fr 1fr;\n    column-gap: 10px;\n    align-items: center;\n    justify-content: center;\n\n    height: 34px;\n    background-color: #4e505f;\n    padding: 3px 4px;\n  }\n  .mine__digits__outer {\n    font-size: 12px;\n    color: #fff;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 40px;\n    height: 24px;\n  }\n  .mine__restart__wrapper {\n    display: grid;\n    justify-content: flex-end;\n  }\n  .mine__restart {\n    background-color: transparent;\n    color: transparent;\n    outline: none;\n    border: none;\n\n    display: flex;\n    align-items: center;\n    \n    :active {\n      img {\n        transform: scale(0.8) rotate(180deg);\n      }\n    } \n  }\n  .mine__content__inner {\n    display: grid;\n    grid-template-columns: repeat(",", 16px);\n    grid-template-rows: repeat(",", 16px);\n    border: 3px solid #4e505f;\n  }\n  .mine__ceil {\n    position: relative;\n    img {\n      position: absolute;\n      width: 16px;\n      height: 16px;\n    }\n  }\n"])),(function(e){return"desktop"===e.platform?"#FFF":"#000"}),(function(e){return"desktop"===e.platform?"#663f46":"transparent"}),(function(e){return e.columns}),(function(e){return e.rows}));function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Beginner";return Object(u.a)({difficulty:e,status:"new"},V(f[e]))}function Q(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CLEAR_MAP":var t=n.payload||e.difficulty;return F(t);case"START_GAME":var i=n.payload;return Object(u.a)(Object(u.a)(Object(u.a)({},e),L(Object(u.a)(Object(u.a)({},f[e.difficulty]),{},{exclude:i}),e.ceils)),{},{status:"started"});case"OPEN_CEIL":var a=M(e,n.payload),c=Object(l.a)(e.ceils);return a.forEach((function(e){var n=c[e];c[e]=Object(u.a)(Object(u.a)({},n),{},{state:"open"})})),Object(u.a)(Object(u.a)({},e),{},{ceils:c});case"CHANGE_CEIL_STATE":var r,s=n.payload,o=Object(l.a)(e.ceils),A=e.ceils[s];switch(A.state){case"cover":r="flag";break;case"flag":r="unknown";break;case"unknown":r="cover";break;default:throw new Error("Unknown ceil state ".concat(A.state))}return o[s]=Object(u.a)(Object(u.a)({},A),{},{state:r}),Object(u.a)(Object(u.a)({},e),{},{ceils:o});case"GAME_OVER":var d=e.ceils.map((function(e){return e.minesAround<0&&"flag"!==e.state?Object(u.a)(Object(u.a)({},e),{},{state:"mine"}):"flag"===e.state&&e.minesAround>=0?Object(u.a)(Object(u.a)({},e),{},{state:"misflagged"}):Object(u.a)(Object(u.a)({},e),{},{opening:!1})}));return d[n.payload].state="die",Object(u.a)(Object(u.a)({},e),{},{status:"died",ceils:d});case"WON":var m=e.ceils.map((function(e){return e.minesAround>=0?Object(u.a)(Object(u.a)({},e),{},{state:"open"}):Object(u.a)(Object(u.a)({},e),{},{state:"flag"})}));return Object(u.a)(Object(u.a)({},e),{},{status:"won",ceils:m});case"OPENING_CEIL":var p=e.ceils[n.payload],b=e.ceils.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{opening:!1})}));return b[n.payload]=Object(u.a)(Object(u.a)({},p),{},{opening:!0}),Object(u.a)(Object(u.a)({},e),{},{ceils:b});case"OPENING_CEILS":var j=P(n.payload,e.rows,e.columns),g=e.ceils.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{opening:!1})}));return[].concat(Object(l.a)(j),[n.payload]).forEach((function(e){var n=Object(u.a)({},g[e]);n.opening=!0,g[e]=n})),Object(u.a)(Object(u.a)({},e),{},{ceils:g});default:return e}}function V(e){var n=e.rows,t=e.columns,i=e.mines;return{rows:n,columns:t,ceils:Array(n*t).fill().map((function(e){return{state:"cover",minesAround:0,opening:!1}})),mines:i}}function L(e,n){var t=e.rows,i=e.columns,a=e.mines,c=e.exclude,r=n.map((function(e){return Object(u.a)({},e)}));if(t*i!==r.length)throw new Error("rows and columns not equal to ceils");var s=Object(l.a)(Array(t*i).keys());return p()(s.filter((function(e){return e!==c})),a).forEach((function(e){r[e].minesAround=-10,P(e,t,i).forEach((function(e){r[e].minesAround+=1}))})),{rows:t,columns:i,ceils:r,mines:a}}function M(e,n){var t=e.rows,i=e.columns,a=e.ceils.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{walked:!1})}));return function e(n){var c=a[n];return c.walked||c.minesAround<0||"flag"===c.state?[]:(c.walked=!0,c.minesAround>0?[n]:[n].concat(Object(l.a)(P(n,t,i).reduce((function(n,t){return[].concat(Object(l.a)(n),Object(l.a)(e(t)))}),[]))))}(n)}function P(e,n,t){if(e<0||e>=n*t)return[];var i=Math.floor(e/t),a=e%t;return[e-t-1,e-t,e-t+1,e-1,e+1,e+t-1,e+t,e+t+1].filter((function(e,c){return!(0===i&&c<3)&&(!(i===n-1&&c>4)&&((0!==a||![0,3,5].includes(c))&&(a!==t-1||![2,4,7].includes(c))))}))}var T=function(e){var n=e.defaultDifficulty,t=e.sameTouchPos,i=e.lastTouch,a=e.platform,c=Object(r.useReducer)(Q,F(n)),s=Object(d.a)(c,2),o=s[0],A=s[1],l=function(e){var n=Object(r.useState)(0),t=Object(d.a)(n,2),i=t[0],a=t[1];function c(){a((function(e){return e+1}))}return Object(r.useEffect)((function(){var n;switch(e){case"started":n=setInterval(c,1e3);break;case"new":a(0)}return function(){return clearInterval(n)}}),[e]),i}(o.status);return Object(r.useEffect)((function(){"started"===o.status&&0===o.ceils.filter((function(e){return"open"!==e.state})).filter((function(e){return e.minesAround>=0})).length&&A({type:"WON"})})),Object(v.jsx)(G,Object(u.a)(Object(u.a)({},o),{},{changeCeilState:function(e){"open"===o.ceils[e].state||["won","died"].includes(o.status)||A({type:"CHANGE_CEIL_STATE",payload:e})},openCeil:function(e){switch(o.status){case"new":A({type:"START_GAME",payload:e}),A({type:"OPEN_CEIL",payload:e});break;case"started":var n=o.ceils[e];if(["flag","open"].includes(n.state))break;n.minesAround<0?A({type:"GAME_OVER",payload:e}):A({type:"OPEN_CEIL",payload:e});break;default:console.log(o.status)}},openCeils:function(e){var n=o.ceils[e];if(!("open"!==n.state||n.minesAround<=0||"started"!==o.status)){var t=P(e,o.rows,o.columns);if(t.map((function(e){return o.ceils[e]})).filter((function(e){return"flag"===e.state})).length===n.minesAround){var i=t.find((function(e){return o.ceils[e].minesAround<0&&"flag"!==o.ceils[e].state}));i?A({type:"GAME_OVER",payload:i}):t.forEach((function(e){return A({type:"OPEN_CEIL",payload:e})}))}}},onReset:function(e){A({type:"CLEAR_MAP",payload:e})},seconds:l,openingCeil:function(e){["died","won"].includes(o.status)||A({type:"OPENING_CEIL",payload:e})},openingCeils:function(e){["died","won"].includes(o.status)||A({type:"OPENING_CEILS",payload:e})},sameTouchPos:t,lastTouch:i,platform:a}))};var Y=function(){var e=s.a.useState(window.innerWidth<=768?"mobile":"desktop"),n=Object(d.a)(e,2),t=n[0],i=n[1],a=s.a.useState(new Date),c=Object(d.a)(a,2),r=c[0],o=c[1],A=s.a.useState(!1),l=Object(d.a)(A,2),u=l[0],m=l[1];return s.a.useEffect((function(){function e(){window.innerWidth<=768?i("mobile"):i("desktop")}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),s.a.useEffect((function(){function e(){m(!0),o(new Date)}function n(){m(!1)}return window.addEventListener("touchstart",e),window.addEventListener("touchmove",n),function(){window.removeEventListener("touchstart",e),window.removeEventListener("touchmove",n)}}),[]),Object(v.jsx)("div",{style:"desktop"===t?{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",height:"100%"},children:Object(v.jsx)("div",{style:"desktop"===t?{display:"inline-block"}:{transform:"scale(1.8)",transformOrigin:"left top",display:"inline-block"},children:Object(v.jsx)(T,{defaultDifficulty:"Beginner",sameTouchPos:u,lastTouch:r,platform:t})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));A.a.render(Object(v.jsx)(Y,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4e2cc3bb.chunk.js.map
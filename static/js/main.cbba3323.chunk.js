(this["webpackJsonpadvent-calendar"]=this["webpackJsonpadvent-calendar"]||[]).push([[0],{10:function(a,t,e){},11:function(a,t,e){},19:function(a,t,e){"use strict";e.r(t);var i=e(1),n=e.n(i),s=e(3),o=e.n(s),r=(e(10),e.p,e(11),e(5)),d=["Nu ar gra\u017eu taip?! Tave tik mokyt ir mokyt. \nKantriai lauk tos dienos kada gal\u0117si atidaryt. \nVisai jau nei\u0161aukl\u0117ta lep\u016bn\u0117l\u0117.","Ciiiiiit bliat! Dar negalima atidaryt! Palauk tos dienos!","\u0160iandien neatidarysi. Kantryb\u0117s zuiki","..Ane? Visko i\u0161kart nori?","Taigi \u017einai kad neatidarysi. Laukiam laukiam!"],c=e(0);function h(a){var t=Object(i.useState)(a.card.open),e=Object(r.a)(t,2),n=e[0],s=e[1],o=function(a){!function(a){console.log("Card before open: "+a.open);var t=new Date,e=t.getMonth()+1,i=t.getDate();return 11===e&&i>=a.day}(a)?alert(d[Math.floor(Math.random()*d.length)]):(s(!0),function(a){var t=JSON.parse(localStorage.getItem("cards")),e=t.findIndex((function(t){return t.day===a.day}));t[e].open=!0,localStorage.setItem("cards",JSON.stringify(t))}(a))};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"card"+(n?"-open":""),onClick:function(){return o(a.card)},children:[Object(c.jsx)("img",{className:"card-image",src:a.card.img,alt:"image"}),Object(c.jsx)("p",{children:a.card.day}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("span",{className:"bg"}),Object(c.jsx)("span",{className:"bg"}),Object(c.jsx)("span",{className:"bg"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("h3",{className:"title",children:["DAY ",a.card.day]}),Object(c.jsx)("p",{className:"para",children:a.card.text})]})]})]})})}var l,m=e.p+"static/media/kitty_3.cd4ea7fb.png",u=[{id:"hatch-1",day:1,img:m,text:"Tai k\u0105. Pirma advento kalendoriaus diena. A\u0161 ne\u017einau kokia ji tau bus, bet prad\u0117siu stipriai ;) I\u0161pakuok pirmu numeriu pa\u017eym\u0117t\u0105 dalyk\u0105. \n\nIt's all downhill from here.",open:!1},{id:"hatch-2",day:2,img:m,text:"Prad\u0117jome stipriai. Antras langelis yra tikras siurprizas... ;) \nLITERALY \nKAS TAI!?",open:!1},{id:"hatch-3",day:3,img:m,text:"Kad jau m\u0117gsti prast\u0105 kav\u0105, tai turiu tau kai k\u0105 kas bent kiek j\u0105 pagerins \u0161ituo \u0161altuoju laikotarpiu.",open:!1},{id:"hatch-4",day:4,img:m,text:"Kava be saldi\u016b\u0161k\u0117s? Pff.. Amateurs. Check the box silly ;)",open:!1},{id:"hatch-5",day:5,img:m,text:"Tu katyt\u0117, kalendorius ka\u010diki\u0173 pilnas, tavo gyvenime j\u0173 taip pat netr\u016bksta. O gal tr\u016bksta?",open:!1},{id:"hatch-6",day:6,img:m,text:"\u0160itas langelis kitos. \u0160itas langelis suteikia galimyb\u0119 priversti mane daryti tai kas man nelabai patinka. \u012edomu kas tai?!",open:!1},{id:"hatch-7",day:7,img:m,text:"Septinta diena. I\u0161 kur \u017emon\u0117s semiasi i\u0161radingumo? \n\n Gal i\u0161 \u010dia?..",open:!1},{id:"hatch-8",day:8,img:m,text:"Anekdotas: \nWhat is the best Christmas present in the world? A broken drum, you just can\u2019t beat it! \n Po toki\u0173 anekdot\u0173 reikia i\u0161gerti.",open:!1},{id:"hatch-9",day:9,img:m,text:"Po vien\u0105 - kiekvien\u0105 dien\u0105. Ko? Su\u017einosi kitoje serijoje.",open:!1},{id:"hatch-10",day:10,img:m,text:"O kas gi \u010dia? https://open.spotify.com/playlist/5kbiWZu7iuzrQoSnLwCFtD?si=e96fa18fa9b84e50 Copy this link to find out. NOT A SCAM. PROMISE",open:!1},{id:"hatch-11",day:11,img:m,text:"Po tokio t\u016bso reikia taisyti sveikat\u0105.",open:!1},{id:"hatch-12",day:12,img:m,text:"What did the beaver say to the Christmas Tree? Nice gnawing you!",open:!1},{id:"hatch-13",day:13,img:m,text:"What do snowmen have for breakfast? Snowflakes!",open:!1},{id:"hatch-14",day:14,img:m,text:"Who delivers presents to cats? Santa Paws!",open:!1},{id:"hatch-15",day:15,img:m,text:"What\u2019s a child\u2019s favourite king at Christmas? A stoc-king!",open:!1},{id:"hatch-16",day:16,img:m,text:"How does Darth Vader enjoy his Christmas Turkey? On the dark side!",open:!1},{id:"hatch-17",day:17,img:m,text:"What cars do elves drive? Toyotas!",open:!1},{id:"hatch-18",day:18,img:m,text:"What do you call an obnoxious reindeer? Rude-olph!",open:!1},{id:"hatch-19",day:19,img:m,text:"Why did Santa get a parking ticket on Christmas Eve? He left his sleigh in a snow parking zone!",open:!1},{id:"hatch-20",day:20,img:m,text:"What is the most competitive season? Win-ter!",open:!1},{id:"hatch-21",day:21,img:m,text:"What do you call buying a piano for the holidays? Christmas Chopin!",open:!1},{id:"hatch-22",day:22,img:m,text:"When is a boat just like snow? When it\u2019s adrift!",open:!1},{id:"hatch-23",day:23,img:m,text:"What did the stamp say to the Christmas card? Stick with me and we'll go places!",open:!1},{id:"hatch-24",day:24,img:m,text:"Why is it getting harder to buy Advent calendars? Their days are numbered!",open:!1}];function g(){if(null===localStorage.getItem("cards")){var a=u;a=function(a){for(var t=a.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),i=a[t];a[t]=a[e],a[e]=i}return a}(a),localStorage.setItem("cards",JSON.stringify(a)),console.log("Cards loaded to local storage")}}function p(){return g(),l=JSON.parse(localStorage.getItem("cards")),console.log("Cards extracted"),Object(c.jsx)("div",{className:"card-list",children:l.map((function(a){return Object(c.jsx)(h,{card:a},a.id)}))})}var k=e(4),y=e.n(k);var j=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(y.a,{flakesMax:256,followMouse:!1,flakesMaxActive:128}),Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("h2",{children:" Merry Christmas!"}),Object(c.jsx)(p,{})]})]})},b=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,20)).then((function(t){var e=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;e(a),i(a),n(a),s(a),o(a)}))};o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),b()}},[[19,1,2]]]);
//# sourceMappingURL=main.cbba3323.chunk.js.map
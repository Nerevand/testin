(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(36).concat([function(e,t,a){e.exports=a(107)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/environment.7b5cc4d0.png"},function(e,t,a){e.exports=a.p+"static/media/technology.9b8da9c2.png"},function(e,t,a){e.exports=a.p+"static/media/space.a79e882b.png"},function(e,t,a){e.exports=a.p+"static/media/physics.b0d89dbd.png"},function(e,t,a){e.exports=a.p+"static/media/chemistry.38b8b9ae.png"},function(e,t,a){e.exports=a.p+"static/media/brain.d503c9e5.png"},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/slide1.51ed81ff.png"},function(e,t,a){e.exports=a.p+"static/media/slide2.c5b4a362.png"},function(e,t,a){e.exports=a.p+"static/media/slide3.5120f293.png"},function(e,t,a){e.exports=a.p+"static/media/slide4.987e9474.png"},,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/physics.b8a167a8.png"},function(e,t,a){e.exports=a.p+"static/media/chemistry.e2ef238c.png"},function(e,t,a){e.exports=a.p+"static/media/technology.bf54b9f7.png"},function(e,t,a){e.exports=a.p+"static/media/environment.3d44de11.png"},function(e,t,a){e.exports=a.p+"static/media/space.d5c25cdf.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/block1.487eaf28.jpg"},function(e,t,a){e.exports=a.p+"static/media/block2.d6dbfbf4.jpg"},function(e,t,a){e.exports=a.p+"static/media/block3.43a23a73.jpg"},function(e,t,a){e.exports=a.p+"static/media/block4.d063ab40.jpg"},function(e,t,a){e.exports=a.p+"static/media/block5.b44dc235.jpg"},function(e,t,a){e.exports=a.p+"static/media/block6.8249b78a.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),o=a.n(s),c=(a(41),a(42),a(1)),i=a(2),l=a(4),u=a(3),m=a(5),h=a(10);var d=function(e){return r.a.createElement("li",{className:"header-nav__item"},r.a.createElement(h.b,{exact:!0,to:e.src,activeClassName:"is-active",className:"header-nav__link"},e.text))},p=(a(51),[{id:0,text:"Home",src:"/"},{id:1,text:"environment",src:"/environment"},{id:2,text:"technology",src:"/technology"},{id:3,text:"space",src:"/space"},{id:4,text:"physics",src:"/physics"},{id:5,text:"chemistry",src:"/chemistry"},{id:6,text:"the brain",src:"/brain"}]),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header",id:"header",name:"home"},r.a.createElement("nav",{className:"header-nav"},r.a.createElement("input",{className:"header-nav__checkbox",type:"checkbox",id:"burger"}),r.a.createElement("label",{className:"header-nav__menu",htmlFor:"burger"}),r.a.createElement(h.b,{to:"/",className:"header-nav__logo"},"UpsideDown"),r.a.createElement("ul",{className:"header-nav__list",id:"header-navigation"},p.map(function(e){var t=e.id,a=e.text,n=e.src;return r.a.createElement(d,{src:n,text:a,key:t})}),r.a.createElement("li",{className:"header-nav__search"}),r.a.createElement("li",{className:"header-nav__ring"}))))}}]),t}(n.Component),f=(a(52),["subscribe-rectangle__1 subscribe-rectangle","subscribe-rectangle__2 subscribe-rectangle","subscribe-rectangle__3 subscribe-rectangle","subscribe-rectangle__4 subscribe-rectangle","subscribe-rectangle__5 subscribe-rectangle","subscribe-rectangle__6 subscribe-rectangle","subscribe-rectangle__7 subscribe-rectangle","subscribe-rectangle__8 subscribe-rectangle","subscribe-rectangle__9 subscribe-rectangle"]),g=[{class:"subscribe-technology__block subscribe-technology__environment",text:"ENVIRONMENT",select:!0,src:a(53)},{class:"subscribe-technology__block subscribe-technology__technology",text:"TECHNOLOGY",select:!1,src:a(54)},{class:"subscribe-technology__block subscribe-technology__space",text:"SPACE",select:!1,src:a(55)},{class:"subscribe-technology__block subscribe-technology__physics",text:"PHYSICS",select:!0,src:a(56)},{class:"subscribe-technology__block subscribe-technology__chemistry",text:"CHEMISTRY",select:!0,src:a(57)},{class:"subscribe-technology__block subscribe-technology__brain",text:"THE BRAIN",select:!1,src:a(58)}],y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){a.setState({selected:!a.state.selected})},a.state={selected:a.props.select},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.class,style:{backgroundImage:"url(".concat(this.props.src,")")},onClick:this.handleClick},r.a.createElement("span",{className:"subscribe-technology__selected"},this.state.selected?"SELECTED":""),r.a.createElement("p",null,this.props.text))}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.class})}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault()},a.handleChange=function(e){var t=e.target.value;a.setState({inputText:t})},a.state={inputText:"",selected:g.map(function(e){return e.select})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.inputText;return r.a.createElement("section",{className:"subscribe",id:"brain"},r.a.createElement("div",{className:"subscribe-form"},r.a.createElement("h2",{className:"subscribe-form__title"},"News Tailored to Your Taste"),r.a.createElement("p",{className:"subscribe-form__text"},"Select any category, which looks interesting to you for receiving your personazlied article selection at the beginning of each week."),r.a.createElement("div",{className:"subscribe-form__mail"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"subscribe-form__block"},r.a.createElement("input",{className:"subscribe-form__input",type:"text",placeholder:"beamazing@gmail.com",pattern:"[a-zA-Z0-9.-_]{4,}@[a-zA-Z.-]{2,}[.][a-zA-Z]{2,}",value:t,onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"submit",value:"YEAH, LET\u2019S DO IT!",className:"subscribe-form__button"})))),r.a.createElement("div",{className:"subscribe-technology"},r.a.createElement("h4",{className:"subscribe-technology__title"},"PICK CATEGORIES YOU LIKE"),r.a.createElement("div",{className:"subscribe-technology__blocks"},g.map(function(t,a){return r.a.createElement(y,{class:t.class,src:t.src,key:a,text:t.text,select:e.state.selected[a]})}))),f.map(function(e,t){return r.a.createElement(E,{class:e,key:t})}))}}]),t}(n.Component),_=(a(59),[{title:"ABOUT"},{title:"ADVERTISING"},{title:"PRIVACY"},{title:"PRESS"},{title:"CONTACT"}]),k=a(11),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.Link,{className:"footer-nav__link",to:"home",spy:!0,smooth:!0,offset:0,duration:1e3},this.props.title)}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(k.Link,{to:"home",spy:!0,smooth:!0,offset:0,duration:1e3},r.a.createElement("h3",{className:"footer-title"},"UpsideDown")),r.a.createElement("nav",{className:"footer-nav",id:"footer-navigation"},_.map(function(e,t){var a=e.title;return r.a.createElement(O,{key:t,title:a})})))}}]),t}(n.Component),w=function(e){var t=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(b,null),t,r.a.createElement(v,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(14),j=(a(67),[{id:1,text:"This Hair Dye Changes Color Depending On The Temperature Around You",number:"01"},{id:2,text:"This Terrifying Video Shows One Of The Most Dangerous Threats Facing Humanity",number:"02"},{id:3,text:"Astronomers Released 3D Map Of The Milky Way's Dust",number:"03"}]),x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"text-footer__item"},this.props.number,r.a.createElement("br",null)," ",this.props.text)}}]),t}(n.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"text"},r.a.createElement("div",{className:"text-title"},r.a.createElement("h3",{className:"text-title__h3"},"top stories"),r.a.createElement("h1",{className:"text-title__h1"},"The World's Oceans Are",r.a.createElement("br",null),"Warming 13% Faster",r.a.createElement("br",null),"Than Previously Thought"),r.a.createElement("h5",{className:"text-title__h5"},"Continue reading")),r.a.createElement("ul",{className:"text-footer"},j.map(function(e){var t=e.id,a=e.text,n=e.number;return r.a.createElement(x,{key:t,number:n,text:a})})))}}]),t}(n.Component),C=(a(68),[{id:1,src:a(69),color:"#171cf0",text:"TECHNOLOGY",title:"Here's The Simple Trick To Look Your Best In Selfies From Your Smartphone"},{id:2,src:a(70),color:"#30b254",text:"ENVIRONMENT",title:"An Astronaut's View Of Mount Etna's Recent Volcanic Eruption"},{id:3,src:a(71),color:"#12c9cd",text:"PHYSICS",title:"An Underground Instrument Will Measure How Much Earth Drags Spacetime"},{id:4,src:a(72),color:"#bd16ce",text:"CHEMISTRY",title:"The First Life Forms Might Not Have Needed Phosphate"}]);var A=function(e){return r.a.createElement("div",{className:"slider-body__block"},r.a.createElement("img",{src:e.src,alt:e.text}),r.a.createElement("h4",{style:{color:e.color},className:"slider-body__title"},e.text),r.a.createElement("p",{className:"slider-body__text"},e.title))},H=a(35),R=a.n(H),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).resize=function(){a.setState({width:window.innerWidth})},a.state={width:window.innerWidth},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e={dots:!0,infinite:!0,speed:500,slidesToShow:this.state.width>320?3:1,slidesToScroll:1};return r.a.createElement("section",{className:"slider"},r.a.createElement("div",{className:"slider-body"},r.a.createElement("h4",{className:"slider-title"},"TRENDING NOW"),r.a.createElement(R.a,Object.assign({},e,{className:"slider-body__slide slide"}),C.map(function(e){var t=e.id,a=e.src,n=e.color,s=e.text,o=e.title;return r.a.createElement(A,{key:t,src:a,text:s,color:n,title:o})}))))}}]),t}(n.Component),M=(a(88),[{id:"physics",src:a(89),alt:"PHYSICS",color:"#bd16ce",title:"Time Crystals: How Scientists Created A New State Of Matter",paragraph:"Some of the most profound predictions in theoretical physics, such as Einstein\u2019s gravitational waves or Higgs\u2019 boson, have taken decades to prove\u2026",date:"MARCH 27, 2017",time:"5 min read",link:"/"},{id:"chemistry",src:a(90),alt:"CHEMISTRY",color:"#12c9cd",title:"Time Crystals: How Scientists Created A New State Of Matter",paragraph:"Some of the most profound predictions in theoretical physics, such as Einstein\u2019s gravitational waves or Higgs\u2019 boson, have taken decades to prove\u2026",date:"MARCH 27, 2017",time:"5 min read",link:"/"},{id:"technology",src:a(91),alt:"TECHNOLOGY",color:"#171cf0",title:"Solar Power Installations Grew Almost 50 Percent in 2016",paragraph:"Solar energy had a big year in 2016. A report released at the Brussels SolarPower Summit confirms that 76.1 Gigawatts of solar were installed\u2026",date:"MARCH 27, 2017",time:"4 min read",link:"/technology"},{id:"environment",src:a(92),alt:"ENVIRONMENT",color:"#30b254",title:"The Quake That'll Take Out Los Angeles May Be Around The Corner",paragraph:"The United States Geological Survey (USGS) has ominously said that Southern California is overdue for a major earthquake along the Grapevine just\u2026",date:"MARCH 27, 2017",time:"9 min read",link:"/environment"},{id:"space",src:a(93),alt:"SPACE",color:"#3274ff",title:"Missing Galaxies Might Be Found By Studying The Ultraviolet Universe",paragraph:"Global emissions of carbon dioxide stayed constant for the third year in a row, despite a growth in the economy.",date:"MARCH 27, 2017",time:"5 min read",link:"/"}]),G=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.b,{to:this.props.link,className:"content-navlink"},r.a.createElement("div",{className:"content-box",id:this.props.id},r.a.createElement("img",{src:this.props.src,alt:this.props.alt,className:"content-box__img"}),r.a.createElement("div",{className:"content-box__text"},r.a.createElement("h4",{style:{color:this.props.color},className:"content-box__science"},this.props.alt),r.a.createElement("h2",{className:"content-box__title"},this.props.title),r.a.createElement("p",{className:"content-box__paragraph"},this.props.paragraph),r.a.createElement("div",{className:"content-box__line"}),r.a.createElement("div",{className:"content-box__date"},r.a.createElement("h5",null,this.props.date),r.a.createElement("h5",null,this.props.time)))))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"content"},r.a.createElement("h4",{className:"content-title"},"RECENT ARTICLES"),M.map(function(e){var t=e.id,a=e.src,n=e.alt,s=e.color,o=e.title,c=e.paragraph,i=e.date,l=e.time,u=e.link;return r.a.createElement(G,{key:t,id:t,src:a,alt:n,color:s,title:o,paragraph:c,date:i,time:l,link:u})}),r.a.createElement("div",{className:"content-button"},"MORE ARTICLES",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{x:"0",y:"0",fill:"none"}))))}}]),t}(n.Component);a(94),a(95);var W=function(e){return r.a.createElement("section",{className:"environment"},r.a.createElement("h1",{className:"environment-title"},"The Quake That'll Take Out Los Angeles May Be Around The Corner"),r.a.createElement("h3",{className:"environment-subtitle"},"The United States Geological Survey (USGS) has ominously said that Southern California is overdue for a major earthquake along the Grapevine just next to Los Angeles...",r.a.createElement(k.Link,{className:"environment-link",to:"read",spy:!0,smooth:!0,offset:0,duration:750},"Read more")))},U=(a(96),["The United States Geological Survey (USGS) has ominously said that Southern California is overdue for a major earthquake along the Grapevine just next to Los Angeles. According to its new analysis, significant quakes there happen once a century, which means that the region is 60 years \u201coverdue\u201d.","The study, published in the Journal of Geophysical Research: Solid Earth, does have a key caveat, though. The once-a-century average comes from a careful analysis of 1,200 years\u2019 worth of earthquake data recorded in the rock around and in San Andreas, but it\u2019s important to note that it\u2019s a very rough average.","In terms of quakes on this stretch of the fault, \u201cindividual intervals range from 22 to 186\u2009years,\u201d which means that an earthquake could take place anytime today or not for another few decades.","As for the kind of earthquake they predict, the geological history suggests that it\u2019ll unfortunately be a 7.5M \u2013 something that will do a lot of damage to any city it\u2019s nearby when it strikes. When it does, it\u2019s near-certain that it will rupture the land alongside it for hundreds of kilometers, and land will be completely shifted in one direction or another by about 2.7 meters (around 9 feet).","\u201cThere\u2019s no getting out of this,\u201d USGS geologist and lead researcher, Kate Scharer, told The Los Angeles Times. \u201cThis [earthquake] would be broadly felt across the basin. It would impact our ability to be a world-class city.\u201d","The San Andreas Fault is not a single fault line, but a network of them. Every now and then, an extension of it, or a peripheral fault, is discovered and heavily scrutinized."]);var D=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"description",name:"read"},r.a.createElement("h3",{className:"description-h3"},"DOWNTOWN LA SEAN PAVONE/SHUTTERSSTOCK")),r.a.createElement("section",{className:"story"},r.a.createElement("div",{className:"story-wrapper"},r.a.createElement("h3",null,"Current situation"),U.map(function(e,t){return r.a.createElement("p",{key:t},e)}),r.a.createElement("img",{src:"http://cdn.iflscience.com/images/a80a81cf-2152-5c3b-aca1-8d81ac955133/content-1488990629-usgs-thingy.jpg",alt:"9218#2",className:"story-wrapper__image"}),r.a.createElement("p",{className:"write"},"The USGS map of the readiness of faults to rupture. The entire San Andreas Fault is about twice as likely to jolt forwards as others in the area. USGS"),r.a.createElement("p",null,"Generally speaking, the San Andreas Fault as a whole is around 1,300 kilometers (800 miles) long, and it\u2019s divided into a northern stretch and a shorter, southern segment. Both have moved separately of each other, but the entire fault can move in one sudden jolt."),r.a.createElement("p",null,"The last time the southern section ruptured was in 1857, when a 360-kilometer-long (224-mile-long) section burst forwards at a shallow depth. This is the quake that the authors of the report are referring to"),r.a.createElement("p",null,"This registered as a 7.9M event, and it lasted for three minutes, but not every fault in the area moved. One segment, near the Salton Sea, hasn\u2019t moved since the 17th century, and is well overdue."))))},Y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(W,null),r.a.createElement(D,null))}}]),t}(n.Component),P=(a(97),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"solar"},r.a.createElement("h1",{className:"solar-h1"},"Solar panel, all your energy needs"),r.a.createElement("h3",{className:"solar-h3"},"Discover the new generation solar panel"),r.a.createElement(k.Link,{to:"solar",spy:!0,smooth:!0,offset:0,duration:750},r.a.createElement("div",{className:"solar-container"},r.a.createElement("div",{className:"solar-container__chevron"}),r.a.createElement("div",{className:"solar-container__chevron"}),r.a.createElement("div",{className:"solar-container__chevron"}))),r.a.createElement("div",{className:"solar-triangle"}))}}]),t}(n.Component)),B=(a(98),[{id:"block1",src:a(99),title:"What Is Solar?",paragraph:"Australia, the sun blessed country. Our greatest natural resource is one which will provide more than 6 Billion years of power, the SUN. Australia has some of the best solar capabilities in the world. We provide Commercial And Residential Solar Systems Brisbane...."},{id:"block2",src:a(100),title:"WHY GO SOLAR?",paragraph:"Save money. Simply put, solar power can save you money. Your solar panels will generate electricity throughout the day, so you don\u2019t have to buy it from the grid. Solar works to protect you from any rise in electricity ..."},{id:"block3",src:a(101),title:"HOW DOES SOLAR WORK?",paragraph:"It starts with the solar panels. Solar panels (also called photovoltaic or PV panels) capture energy from the sun and turn it into DC power. This is essentially done by harnessing speeding photons to create..."},{id:"block4",src:a(102),title:"Commercial Solar",paragraph:"Businesses are turning to solar as a way to save big dollars by reducing their power bill, to get an immediate return on investment by generating their own power as well as providing a positive impact on the environment ."},{id:"block5",src:a(103),title:"Residential Solar Panel",paragraph:"Residential PV solar systems can range anywhere from 1.5 KW to 10 KW in size and will usually save up to 70% off one\u2019s power bill, as well as helping to reduce the carbon footprint left from standard grid power production."},{id:"block6",src:a(104),title:"Battery Backup",paragraph:"When the sun is out and shining, your home or business will use power generated from your solar panels. Any excess power generated over and above your needs goes back to your battery bank, storing the excess power."}]);a(105);var F=function(e){return r.a.createElement("div",{className:"solar-block"},r.a.createElement("img",{src:e.src,alt:e.alt,className:"solar-block__img"}),r.a.createElement("h3",{className:"solar-block__h3"},e.title),r.a.createElement("p",{className:"solar-block__p"},e.paragraph))},z=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"aboutSolar",name:"solar"},r.a.createElement("h2",{className:"aboutSolar-h2"},"All About Solar"),r.a.createElement("div",{className:"aboutSolar-blocks"},B.map(function(e){var t=e.id,a=e.src,n=e.title,s=e.paragraph;return r.a.createElement(F,{key:t,src:a,alt:t,title:n,paragraph:s})})))}}]),t}(n.Component);var q=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(P,null),r.a.createElement(z,null))},V=(a(106),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(window.location.pathname),r.a.createElement("header",{className:"spaceHeader"},r.a.createElement("h1",{className:"spaceHeader-h1"},"Here you can read some info about planets"))}}]),t}(n.Component));var K=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(V,null))};o.a.render(r.a.createElement(h.a,null,r.a.createElement(w,null,r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(T,null),r.a.createElement(I,null),r.a.createElement(L,null))}}),r.a.createElement(S.a,{path:"/environment",component:Y}),r.a.createElement(S.a,{path:"/technology",component:q}),r.a.createElement(S.a,{path:"/space",component:K})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[36,1,2]]]);
//# sourceMappingURL=main.85ed5237.chunk.js.map
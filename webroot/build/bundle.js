!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){function n(e,t,o){let s={enabled_accounts:[parseInt(t)],enabled_campaigns:JSON.parse(o)};null!==e&&(s.dry_run=e),fetch(`/api/user/${sessionStorage.userID}/settings`,{method:"PATCH",headers:{Authorization:`Bearer ${sessionStorage.getItem("longToken")}`,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)}).then(function(e){return 400===e.status&&console.log(e.status),e.json()}).then(function(e){var t;e.hasOwnProperty("recommended_plan_id")?(t=e.recommended_plan_id,fetch(`/api/user/${sessionStorage.userID}/billing/switch_plan/${t}`,{method:"POST",headers:{Authorization:`Bearer ${sessionStorage.getItem("longToken")}`,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({sourceid:"data.source.id"})}).then(function(e){return 400===e.status&&console.log(e.status),e.json()}).then(function(e){n(null,sessionStorage.firstAccount,sessionStorage.firstCampsList),console.log(e)}).catch(function(){console.log("need upgrade plan")})):(document.body.style.cursor="auto",window.location.href=sessionStorage.getItem("dashbordLink")+"?utm_source=onboarding&utm_content=payment_page")}).catch(function(){console.log("need upgrade plan")})}e.exports=(()=>{const e=Date.now(),t=new Date(e+6048e5);t.toDateString().substr(4,6);$('div[field="tn_text_1553730778125"] span').text(t.toDateString().substr(4,6));const o=sessionStorage.getItem("firstAccountSpend");let s;o>1e5&&(s=979),25e3<o<1e5&&(s=379),5e3<o<25e3&&(s=179),o<5e3&&(s=59),$('div[field="tn_text_1549485147160"] span span').text(`$${s}`);const a=sessionStorage.getItem("stripe_key"),i={cardNumber:"#stripe-card-number",cardExpiry:"#stripe-expiry",cardCvc:"#stripe-cvc"};var c=Stripe(a),r=c.elements({locale:"en",fonts:[{cssSrc:"https://fonts.googleapis.com/css?family=Lato"}]}),l={base:{color:"#4a4a4a",fontWeight:400,fontFamily:"Lato, Roboto, arial",fontSize:"16px",fontSmoothing:"antialiased"},invalid:{color:"#FE4936"}},u={focus:"focus",empty:"empty",invalid:"invalid"},d=r.create("cardNumber",{style:l,classes:u});d.mount(i.cardNumber);var m=r.create("cardExpiry",{style:l,classes:u});m.mount(i.cardExpiry);var p=r.create("cardCvc",{style:l,classes:u});let f;p.mount(i.cardCvc),[{ref:d,id:"cardNumber"},{ref:m,id:"cardExpiry"},{ref:p,id:"cardCvc"}].forEach(e=>{e.ref.on("change",t=>{"cardNumber"===e.id&&t.brand!==f&&($("#stripe-card-brand").removeClass(f).addClass(t.brand),f=t.brand),t.error?($(`${i[e.id]} + .stripe-input-error`).text(t.error.message),"cardNumber"===e.id&&($("#stripe-card-brand").removeClass(f).addClass("invalid"),f="invalid")):$(`${i[e.id]} + .stripe-input-error`).text("")})}),p.on("focus",()=>{$("#stripe-card-brand").addClass("cvc")}),p.on("blur",()=>{$("#stripe-card-brand").removeClass("cvc")}),$('[data-elem-id="1553731260954"]').on("click",async e=>{e.preventDefault(),document.body.style.cursor="wait",document.getElementsByClassName("loadfreeze")[0].style.display="block";try{const t=await c.createSource(d,{type:"card"});t.error?$("#stripe-expiry + .stripe-input-error").text(t.error.message):(await async function(e){try{const t=await fetch(`/api/user/${sessionStorage.userID}/billing/payment_source`,{method:"POST",headers:{Authorization:`Bearer ${sessionStorage.getItem("longToken")}`,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({source_id:e.id})});400===t.status||await n(!0,sessionStorage.firstAccount,sessionStorage.firstCampsList)}catch(e){console.log("user created card abort")}}(t.source),setTimeout(()=>{window.location="https://my.leadza.ai"},1500),$("#openSuccessPopup").click())}catch(e){console.log(e)}document.body.style.cursor="default",document.getElementsByClassName("loadfreeze")[0].style.display="none"})})},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o);var a=()=>{console.log("Hello world 2"),lottie.loadAnimation({container:document.getElementById("leadza_ani"),renderer:"svg",loop:!0,autoplay:!0,path:"json/leadza_phone.json"})};var i=()=>{console.log("yo"),$("#agree_box").on("change",e=>{let t=$('a[href="#continue"]')[0];t.style.backgroundImage="url('/images/tild3630-3232-4261-b532-343931636565__fb_button.png')",t.style.pointerEvents="auto",t.onclick=function(e){e.preventDefault(),document.body.style.cursor="wait",document.getElementsByClassName("loadfreeze")[0].style.display="block",FB.init({appId:sessionStorage.getItem("appId"),cookie:!0,xfbml:!0,version:"v3.2"}),FB.getLoginStatus(function(e){n(e)})}});let e=null,t={access_token:null,email:null,first_name:null,id:null,last_name:null,name:null};function n(s){console.log(s),"connected"===s.status?(function(e){console.log("Welcome!  Fetching your information.... "),FB.api(`/me?fields=name,first_name,last_name,email&access_token=${e.accessToken}`,function(e){console.log(e),e.hasOwnProperty("error")&&alert(e.error),t.name=e.name,t.first_name=e.first_name,t.last_name=e.last_name,t.id=e.id,t.email=e.email,sessionStorage.setItem("first_name",t.first_name),sessionStorage.setItem("last_name",t.last_name),sessionStorage.setItem("email",null),t.hasOwnProperty("email")&&null!==t.email&&sessionStorage.setItem("email",t.email),sessionStorage.setItem("email",t.email),sessionStorage.setItem("fbID",t.id)})}(s.authResponse),sessionStorage.setItem("userID",s.authResponse.userID),0!=sessionStorage.getItem("longToken")&&function(n){fetch(`/api/user/${n.authResponse.userID}/exchange_token/?access_token=${n.authResponse.accessToken}`,{method:"GET",headers:{Authorization:`Bearer ${n.authResponse.accessToken}`,Accept:"application/json","Content-Type":"application/json"}}).then(function(e){if(403!=e.status)return e.json();alert(403)}).catch(function(e){alert(e)}).then(function(n){e=n.access_token,t.access_token=n.access_token,sessionStorage.setItem("longToken",e),fetch(`/api/user/${t.id}`,{method:"GET",headers:{Authorization:`Bearer ${t.access_token}`,Accept:"application/json","Content-Type":"application/json"}}).then(async function(e){if(o("userId",t.id),o("apiToken",t.access_token),404!==e.status)window.location.href=sessionStorage.getItem("dashbordLink");else{const e=await(await fetch(`/api/user/${t.id}/settings`,{method:"GET",headers:{Authorization:`Bearer ${t.access_token}`,Accept:"application/json","Content-Type":"application/json"}})).json(),n=e.accounts_and_campaigns.accounts;document.body.style.cursor="auto",n.length>0?window.location.href="/contacts":window.location.href="/stay_tuned"}})})}(s)):(console.log("Please log into this app."),FB.login(function(e){FB.getLoginStatus(function(e){n(e)})}))}function o(e,t){var n=e,o=t,s=(new Date).getTime()+31536e6;document.cookie=n+"="+o+";expires="+s+";domain=leadza.ai;path=/"}};function c(){var e={};let t=!1;setInterval(()=>{t||$(".t-animate_started").length&&(document.querySelector("input[name=firstname]").value=sessionStorage.getItem("first_name"),document.querySelector("input[name=lastname]").value=sessionStorage.getItem("last_name"),document.querySelector("input[name=email]").value=sessionStorage.getItem("email"),$(".js-form-proccess").each(function(){$(this).data("success-callback","window.mySuccessFunction"),$(this).attr("data-success-callback","window.mySuccessFunction"),$(this).attr("data-success-url","")}),t=!0)},200),window.mySuccessFunction=(()=>{console.log("here"),e.id=sessionStorage.getItem("fbID"),e.access_token=sessionStorage.getItem("longToken"),e.first_name=document.querySelector("input[name=firstname]").value,e.last_name=document.querySelector("input[name=lastname]").value,e.email=document.querySelector("input[name=email]").value,document.body.style.cursor="wait",document.getElementsByClassName("loadfreeze")[0].style.display="block",fetch(`/api/user/${e.id}`,{method:"PUT",headers:{Authorization:`Bearer ${sessionStorage.getItem("longToken")}`,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){document.body.style.cursor="auto",400===e.status?window.location.href=sessionStorage.getItem("dashbordLink"):window.location.href="/accounts"}).catch(function(){console.log("user created abort")})})}function r(){let e,t=sessionStorage.getItem("longToken"),n=sessionStorage.getItem("userID"),o=0,s=!1;setInterval(()=>{s||$(".t-animate_started").length&&($("select[name=ad_list_option] option:nth-child(2)").remove(),function s(){document.body.style.cursor="wait";document.getElementsByClassName("loadfreeze")[0].style.display="block";fetch(`/api/user/${n}/settings`,{method:"GET",headers:{Authorization:`Bearer ${t}`,Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var n,a,i;document.body.style.cursor="auto",window.location="#",e=t.accounts_and_campaigns.accounts,o<3&&e.every(e=>0==e.last_month_spend)?(o++,setTimeout(function(){s()},2e3)):(n=e,i=document.querySelector("select[name=ad_list_option]"),n.forEach(function(e){(a=document.createElement("option")).textContent=` ${e.name} $${e.last_month_spend_usd}/month`,a.value=e.id,i.appendChild(a)}),document.getElementsByClassName("loadfreeze")[0].style.display="none")}).catch(function(){})}(),$(".js-form-proccess").each(function(){$(this).data("success-callback","window.mySuccessFunction"),$(this).attr("data-success-callback","window.mySuccessFunction"),$(this).attr("data-success-url","")}),s=!0)},200),window.mySuccessFunction=(()=>{const t=document.getElementsByName("ad_list_option")[0],n=t[t.selectedIndex].value;sessionStorage.setItem("firstAccount",n),sessionStorage.setItem("firstAccountSpend",function(t){return e.find(e=>e.id==t).last_month_spend_usd}(n)),sessionStorage.setItem("firstCampsList",function(t){const n=e.find(e=>`${e.id}`===t).campaigns.map(e=>e.id);return JSON.stringify(n)}(n)),window.location.href="/payment"}),$('button[type="submit"]').on("click",e=>{e.preventDefault(),submit()}),$(".js-form-proccess").each(function(){$(this).data("success-callback","window.mySuccessFunction"),$(this).attr("data-success-callback","window.mySuccessFunction"),$(this).attr("data-success-url","")})}n(1);window.dataLayer=window.dataLayer||[],window.intercomSettings={app_id:"v94otmxd"},$(document).ready(()=>{!async function(){try{const e=await fetch("/api/meta/keys",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});if(404==e.status)alert(404);else{const t=await e.json();sessionStorage.setItem("dashbordLink",t.dashbord),sessionStorage.setItem("stripe_key",t.stripe_key),sessionStorage.setItem("appId",t.appId)}}catch(e){alert(e)}}();const e={"/":a,"/signup":i,"/accounts":r,"/contacts":c,"/payment":s.a}[window.location.pathname];e&&e()})}]);
"use strict";var ipv4=!0,ipv6=!0,LC_API=LC_API||{};LC_API.on_after_load=function(){isMobile&&(LC_API.hide_chat_window(),$("a.icon-livechat").css("display","inline-block").show()),setInterval((function(){isMobile&&(LC_API.chat_window_maximized()?$("a.icon-livechat").hide():(LC_API.chat_window_hidden()||LC_API.hide_chat_window(),$("a.icon-livechat").css("display","inline-block").show()))}),450)},window.__lc=window.__lc||{},window.__lc.license=16649625,window.__lc.chat_between_groups=!1;var t=setInterval((function(){!0!==ipv4&&!0!==ipv6&&(clearInterval(t),window.__lc.visitor={name:"Khách"},window.__lc.params=[{name:"Login",value:"Khách"},{name:"Domain",value:window.location.hostname},{name:"IPV4",value:ipv4},{name:"IPV6",value:ipv6}],function(){var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src=("https:"==document.location.protocol?"https://":"http://")+"cdn.livechatinc.com/tracking.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(i,n)}())}),10);$(document).ready((function(){getIP(),$("a.icon-livechat, a#forgotpwd").on("click",(function(){LC_API.open_chat_window()}))}));var getIP=function(){$.ajax({type:"GET",url:"https://api4."+conf.logip+"/ca/res?command=getIP",dataType:"json",success:function(i){ipv4=i.data.ip},error:function(){ipv4=!1}}),$.ajax({type:"GET",url:"https://api6."+conf.logip+"/ca/res?command=getIP",dataType:"json",success:function(i){ipv6=i.data.ip},error:function(){ipv6=!1}})};
!function(a,e){var n,r=null,l=0,o=0;function i(e){return m=Math.floor(e/60),s=e-60*m,m=m<10?"0"+m:m,s=s<10?"0"+s:s,m+":"+s}function c(e,t){var n=i(Math.round(e));1<=t&&clearInterval(r),a(".cur-time").html(n),a(".top-bar").css({transform:"translateX("+100*(t-1)+"%)"})}e.process={setAllTime:function(e){l=e,a(".all-time").html(i(e))},start:function(e){o=0===e?0:o,console.log(o),clearInterval(r),n=(new Date).getTime(),r=setInterval(function(){var e=(new Date).getTime();playTime=(e-n)/1e3+o;var t=playTime/l;c(playTime,t)},16.7)},stop:function(){clearInterval(r),o=((new Date).getTime()-n)/1e3+o},update:c,setPrevTime:function(e){o=e}}}(window.Zepto,window.player||(window.player={}));
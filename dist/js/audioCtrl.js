!function(i,t){function o(){this.audio=audio=new Audio,this.status=!1}o.prototype={play:function(){this.audio.play(),this.status=!0},pause:function(){this.audio.pause(),this.status=!1},getAudio:function(i){this.audio.src=i,this.audio.load()},setCurrentTime:function(i){this.audio.currentTime=i}},t.audioCtrl=new o}(window.Zepto,window.player||(window.player={}));
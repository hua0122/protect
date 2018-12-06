// 设置网页像素rem
	var response = function() {
		var w = document.documentElement.clientWidth;
		document.documentElement.style.fontSize = w / 3.75 + 'px'
	};

	window.onresize = function() {
		response();
		clearTimeout(this.responseTimer);
		this.responseTimer = setTimeout(response, 300);
	};
	
	function inputblur(){
		$('input').on('focus',function(e){
			this.scrollIntoView();
			document.getElementsByTagName('body')[0].scrollTop = document.getElementsByTagName('body')[0].scrollHeight;
			document.getElementsByTagName('html')[0].scrollTop = document.getElementsByTagName('html')[0].scrollHeight;
		});
		$('input').on('blur',function( ){
			$('body').scrollTop(0);
		});
	}
$(function(){
	response();
})
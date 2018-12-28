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

function inputblur() {
	$('input').on('focus', function(e) {
		this.scrollIntoView();
		document.getElementsByTagName('body')[0].scrollTop = document.getElementsByTagName('body')[0].scrollHeight;
		document.getElementsByTagName('html')[0].scrollTop = document.getElementsByTagName('html')[0].scrollHeight;
	});
	$('input').on('blur', function() {
		$('body').scrollTop(0);
	});
}
$(function() {
	
	response();
	focusblurborder();
	inputblur();
})

function inputblur() {
	$('input').on('focus', function(e) {
		this.scrollIntoView();
		document.getElementsByTagName('body')[0].scrollTop = document.getElementsByTagName('body')[0].scrollHeight;
		document.getElementsByTagName('html')[0].scrollTop = document.getElementsByTagName('html')[0].scrollHeight;
	});
	$('input').on('blur', function() {
		$('body').scrollTop(0);
	});
	$('textarea').on('focus', function(e) {
		this.scrollIntoView();
		document.getElementsByTagName('body')[0].scrollTop = document.getElementsByTagName('body')[0].scrollHeight;
		document.getElementsByTagName('html')[0].scrollTop = document.getElementsByTagName('html')[0].scrollHeight;
	});
	$('textarea').on('blur', function() {
		$('body').scrollTop(0);
	});
}
function focusblurborder() {
	$('.input-row').find("input").on('focus', function(e) {
		if ($(this).parents(".input-colum").length == 1) {

			$(".input-row").removeClass("border-shadow");
			$(".input-colum").removeClass("border-shadow");
			$(this).parents(".input-colum").addClass("border-shadow");
		} else {

			$(".input-row").removeClass("border-shadow");
			$(this).parents(".input-row").addClass("border-shadow");
		}
	});
	$('.input-row').find("input").on('blur', function(e) {
		if ($(this).parents(".input-colum") == 1) {
			$(this).parents(".input-colum").removeClass("border-shadow");

		} else {

			$(this).parents(".input-row").removeClass("border-shadow");
		}
	});
	$('.input-row').find("textarea").on('focus', function(e) {
		if ($(this).parents(".input-colum").length == 1) {

			$(".input-row").removeClass("border-shadow");
			$(".input-colum").removeClass("border-shadow");
			$(this).parents(".input-colum").addClass("border-shadow");
		} else {

			$(".input-row").removeClass("border-shadow");
			$(this).parents(".input-row").addClass("border-shadow");
		}
	});
	$('.input-row').find("textarea").on('blur', function(e) {
		if ($(this).parents(".input-colum") == 1) {
			$(this).parents(".input-colum").removeClass("border-shadow");

		} else {

			$(this).parents(".input-row").removeClass("border-shadow");
		}
	});
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

//	时间戳格式化
function settiem(time) {
	var date1 = new Date(time * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date1.getFullYear();
	var M = (date1.getMonth() + 1 < 10 ? '0' + (date1.getMonth() + 1) : date1.getMonth() + 1);
	var D = date1.getDate();
	return Y + "-" + M + "-" + D + "T" + date1.getHours() + ":" + date1.getMinutes();
};
// 日期大小比较
function CompareDate(d1, d2) {
	return ((new Date(d1.replace(/-/g, "\/"))) < (new Date(d2.replace(/-/g, "\/"))));
}
//将日期格式化为两位，不足补零
function fix(num, length) {
	return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}
function toLogin(){
	let userInfo = JSON.parse(localStorage.getItem("p_userInfo"));
	if (userInfo == null || userInfo == "" || userInfo == "null" || userInfo == undefined || userInfo == "undefined") {
		location.href = "login.html";
	}
}
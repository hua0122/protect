// 域名地址
let domainName = "http://admin.yidianxueche.cn";
// 学校id
let school_id = 1;
// 获取保存的经纬度
let latlng = JSON.parse(sessionStorage.getItem("latlng"));

// 微信配置pai
let s_user_getwxpz = "s_user/tp.php?method=getwxpz";
// 个人信息详情
let user_index = "/api/user/index";
// ajax-get调用
function ajaxGet(_url, _data) {
	let openid = sessionStorage.getItem("openid");
	var dataAjax = "";
	$.ajax({
		type: "get",
		url: domainName + _url,
		dataType: "json",
		data: _data,
		success: function(data) {
			dataAjax = data;
		},
		error: function(res) {
			dataAjax = "请求出错";
		},
		async: false
	});
	return dataAjax;
}
// ajax-post调用
function ajaxPost(_url, _data) {

	let openid = sessionStorage.getItem("openid");
	var dataAjax = "";
	$.ajax({
		type: "post",
		url: domainName + _url,
		dataType: "json",
		data: _data,
		success: function(data) {
			dataAjax = data;
		},
		error: function() {
			dataAjax = "请求出错";
		},
		async: false
	});
	return dataAjax;
}

function num() {
	let n = 59
	let setter = setInterval(function() {
		$(".codebtn").html(n)
		if (n <1) {
			$(".codebtn").html("获取验证码");
			$(".codebtn").css("pointer-events", "visible");
			$(".codebtn").addClass("ztsbuttom").removeClass("ztsfontcolor");
		}
		n--;
	}, 1000)
	setTimeout(function() {
		clearInterval(setter)
	}, 61000)
};
function getopenid() {
	let params = getQueryString("params");
	let openid = getQueryString("openid");
	if (openid != null && openid != "" && openid != "null" && openid != undefined && openid != "undefined") {
		location.href = "login.html?openid=" + openid;
	} else {
		if (params=="ydxc") {
			window.location.href = domainName + "/api/user/getwxinfo_protect_ydxc";
		}
		if (params=="djjx") {
			window.location.href = domainName + "/api/user/getwxinfo_protect_djjx";
		}
		if (params=="xnjx") {
			window.location.href = domainName + "/api/user/getwxinfo_protect_xnjx";
		}
		if (params=="cnjx") {
			window.location.href = domainName + "/api/user/getwxinfo_protect_cnjx";
		}
		if (params=="jxyjx") {
			window.location.href = domainName + "/api/user/getwxinfo_protect_jxyjx";
		}
		if (params=="xxc") {
			window.location.href = domainName + "/api/user/getwxinfo_protect_xxc";
		}
	}

}
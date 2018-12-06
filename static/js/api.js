// 发送验证码
let protect_sent_msg = "/api/protect/sent_msg";
// 登录
let protect_login = "/api/protect/login";
// 查询推荐码
let protect_get_code = "/api/protect/get_code";
// 设置推荐码
let protect_set_code = "/api/protect/set_code";
// 发送验证码
function sent_msg(tel) {
	let ajaxdata = {
		tel:tel
	}
	let data = ajaxPost(protect_sent_msg, ajaxdata);
	if(data.returnstatus=="Success"){
		mui.toast("验证码已发送，请注意查收",{ duration:'short', type:'div' });
		$(".codebtn").css("pointer-events","none");
		$(".codebtn").text(60);
		num();
		$(".codebtn").addClass("ztsfontcolor").removeClass("ztsbuttom");
	}else{
		mui.toast(data.message,{ duration:'short', type:'div' });
	}
}
// 登录
function login(ajaxdata) {
	let data = ajaxPost(protect_login, ajaxdata);
	if(data.status=="200"){
		sessionStorage.setItem("userInfo",JSON.stringify(data.data))
		location.href="index.html";
	}else{
		mui.toast(data.msg,{ duration:'short', type:'div' });
	}
}
// 查询推荐码
function get_code(tel) {
		let ajaxdata = {
			tel:tel
		}
	let data = ajaxPost(protect_get_code, ajaxdata);
	return data;
}
// 设置推荐码
function set_code(ajaxdata) {
		
	let data = ajaxPost(protect_set_code, ajaxdata);
	
		mui.alert(data.msg, " ")
	if(data.status=="200"){
		$(".setCode").removeClass("ztsbuttom");
		$("#recomcode").attr("disabled", true);
		$(".updetaCode").text("修改推荐码");
		$(".updetaCode").css("width", ".65rem");
	}
}

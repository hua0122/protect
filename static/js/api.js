let protect_sent_msg = "/api/protect/sent_msg";

function sent_msg(tel) {
	let ajaxdata = {
		tel:tel
	}
	let data = ajaxPost(protect_sent_msg, ajaxdata);
	console.log(data)
}

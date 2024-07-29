setInterval(function() {

	var tarih = new Date();
	var zaman = tarih.getHours() + ":" + tarih.getMinutes() + ":" + tarih.getSeconds();
	try {
		if(document.getElementsByClassName("ArviS")[0]) {
			var sonGörülme = document.getElementsByClassName("ArviS")[0].innerText;
			console.log(zaman + ' ' + sonGörülme);
		}		
	}

	catch(err) {
		console.log(err);
	}

}, 1000);

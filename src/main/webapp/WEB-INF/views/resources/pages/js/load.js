$(document).ready(function() {
	
	//$('#progress1').attr('style',"width: 37%");
	//$('#progress1').css({
	// 'background-color': '#66FF66'
	//});
	console.log($(".btn.btn-primary.btn-lg"));
	loadD();
	updateMessages();
});

function poll() {
	setTimeout(updateMessages(), 5000);
}

function eventListensers(object) {
	object.onload(function() {
		console.log('Test!');
	}, false);
}

function loadD(){
		
	$("p").each(function( index, element ){
		$( this ).click(function(e){
			e.preventDefault();
			//	call(k.attr("ID"));
	            var partnerID =$(this).attr("id");
	            console.log(partnerID);
				var data = getPartnerDetails(partnerID);
			//	$(".btn.btn-primary.btn-lg").click()(function(){
				console.log($('#myModalLabel'));
				console.log(data);
				console.log(data.category);
				$('#myModalLabel').html(data.partnerID+": "+data.category);
				$("#RQIn").children(".message").html("Source: "+data.rqinS.sourceID+"</br>"+"Destinatoin: "+data.rqinS.destinationID
						+"</br>"+"Success: "+data.rqinS.amount+"</br>"+"Failure: "+data.rqinF.amount);
				$("#RQOut").children(".message").html("Source: "+data.rqoutS.sourceID+"</br>"+"Destinatoin: "+data.rqoutS.destinationID
						+"</br>"+"Success: "+data.rqoutS.amount+"</br>"+"Failure: "+data.rqoutF.amount);
				$("#RSIn").children(".message").html("Source: "+data.rsinS.sourceID+"</br>"+"Destinatoin: "+data.rsinS.destinationID
						+"</br>"+"Success: "+data.rsinS.amount+"</br>"+"Failure: "+data.rsinF.amount);
				$("#RSOut").children(".message").html("Source: "+data.rsoutS.sourceID+"</br>"+"Destinatoin: "+data.rsoutS.destinationID
						+"</br>"+"Success: "+data.rsoutS.amount+"</br>"+"Failure: "+data.rsoutF.amount);
		});
	});
		
		
		
	//}
	
	/*
	$(".btn.btn-primary.btn-lg").click(function(e){
//		k.click(function(e){
			e.preventDefault();
		//	call(k.attr("ID"));
            var partnerID = $(".btn.btn-primary.btn-lg").attr("id");
            console.log(partnerID);
			var data = getPartnerDetails(partnerID);
		//	$(".btn.btn-primary.btn-lg").click()(function(){
			console.log($('#myModalLabel'));
			console.log(data);
			console.log(data.category);
			$('#myModalLabel').html(data.partnerID+": "+data.category);
			$("#RQIn").children(".message").html("Source: "+data.rqinS.sourceID+"</br>"+"Destinatoin: "+data.rqinS.destinationID
					+"</br>"+"Success: "+data.rqinS.amount+"</br>"+"Failure: "+data.rqinF.amount);
			$("#RQOut").children(".message").html("Source: "+data.rqoutS.sourceID+"</br>"+"Destinatoin: "+data.rqoutS.destinationID
					+"</br>"+"Success: "+data.rqoutS.amount+"</br>"+"Failure: "+data.rqoutF.amount);
			$("#RSIn").children(".message").html("Source: "+data.rsinS.sourceID+"</br>"+"Destinatoin: "+data.rsinS.destinationID
					+"</br>"+"Success: "+data.rsinS.amount+"</br>"+"Failure: "+data.rsinF.amount);
			$("#RSOut").children(".message").html("Source: "+data.rsoutS.sourceID+"</br>"+"Destinatoin: "+data.rsoutS.destinationID
					+"</br>"+"Success: "+data.rsoutS.amount+"</br>"+"Failure: "+data.rsoutF.amount);
		//	});
		});
	//}
	*/
	
}

/**
 *
 * @param {Object} json
 */
function renderPage(json) {
	removeBars("ROOT DIV ID");
	createBars(json);
}


/**
 * eg :
 *   { Hilton : [ type :..., status:..., sourceID: ...],[]}
 * 
 * 
 * @param {Object} hotels
 */
function createBars(hotels) {
	for (var hotel in hotels) {
		console.log(hotel, result[hotel]);

		for (var message in result[hotel]) {
			console.log(message);
			createBar(message);
		}

	}
}

function removeBars(bar) {
		console.log(bar);
		$(bar.id).click(function(e) {
			e.preventDefault();
			// call updateMessage();
			$("#progress_test_1").remove();
			console.log(bar.id);
		});
}

function createBar(message) {
	
	// <p><a class="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#myModal" id="ParterID">
        	// Expedia.com ---------> Hilton ---------> Expedia.com &raquo;</a></p>
        	
    $('<p/>');
    
    $('<a/>',{'class':''});
	
	
	$('<div/>', {
		'class' : 'progress',
		'id' : 'progress_test_1'
	}).appendTo("#container2");

	$('<div/>', {
		'class' : 'progress-bar progress-bar-success',
		'style' : 'width: 35%',
		'id' : 'progress_test1'
	}).appendTo("#progress_test_1");

	$('<span/>', {
		'innerHTML' : '35% Complete (success)'
	}).appendTo("#progress_test1");
	
	
	
	$('#progress2').tooltip();
	
	
	$('#progress1').css({
	 'background-color': '#66FF66'
	});
}

function updateMessages() {
	var response = $.ajax({
		type : "GET",
		url : "/hackq2/api/partnerInfo",
		dataType : "json",
		async : false,
		cache : false,
		/*complete : poll,*/
		timeout : 5000
	}).responseText;
	//console.log(response);
	var data = jQuery.parseJSON(response);
	//console.log(data[0]);
	//for( var k in data[0] ){
	//	console.log(k);
	//}
	return data;
}

function getPartnerDetails(partnerID) {
	var response = $.ajax({
		type : "GET",
		url : "/hackq2/api/partnerInfo/"+partnerID,
		dataType : "json",
		async : false,
		cache : false
		/*complete : poll,*/
	}).responseText;
	//console.log(response);
	var partner = jQuery.parseJSON(response);
	//console.log(partner);
	//console.log(partner.partnerID);
	//for( var k in partner){
	//	console.log(k);
	//}
	return partner;
}
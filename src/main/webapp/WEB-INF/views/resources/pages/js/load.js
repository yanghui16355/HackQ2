$(document).ready(function() {
<<<<<<< HEAD
	//eventListensers($("div.container"));
=======
	
>>>>>>> 2b667872261b38d219d4acb525d7c7573f319f8b
	//$('#progress1').attr('style',"width: 37%");
	//$('#progress1').css({
	// 'background-color': '#66FF66'
	//});
<<<<<<< HEAD
=======
	console.log($(".btn.btn-primary.btn-lg"));
	loadD();
>>>>>>> 2b667872261b38d219d4acb525d7c7573f319f8b
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

<<<<<<< HEAD
function loadD(args){
	for(var k in $("a.btn btn-primary btn-lg")){
		k.click(function(e){
			e.preventDefault();
			call(k.attr("ID"));
			k.click();
		});
	}
=======
function loadD(){
	
//	for(var k in $(".btn.btn-primary.btn-lg")){
	//	console.log(k);
	console.log(".btn.btn-primary.btn-lg");
	$(".btn.btn-primary.btn-lg").click(function(e){
//		k.click(function(e){
			e.preventDefault();
		//	call(k.attr("ID"));
			var data = getPartnerDetails("Hilton");
		//	$(".btn.btn-primary.btn-lg").click()(function(){
			console.log($('#myModalLabel'));
			console.log(data);
			console.log(data.partnerID);
			$('#myModalLabel').html(data.partnerID+": "+data.rqinS.category);
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
>>>>>>> 2b667872261b38d219d4acb525d7c7573f319f8b
	
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
<<<<<<< HEAD
		url : "/HackQ2-0.0.1/api/partnerInfo",
=======
		url : "/hackq2/api/partnerInfo",
>>>>>>> 2b667872261b38d219d4acb525d7c7573f319f8b
		dataType : "json",
		async : false,
		cache : false,
		/*complete : poll,*/
		timeout : 5000
	}).responseText;
	//console.log(response);
	var data = jQuery.parseJSON(response);
	console.log(data[0]);
	for( var k in data[0] ){
		console.log(k);
	}
	return data;
}

function getPartnerDetails(partnerID) {
	var response = $.ajax({
		type : "GET",
		url : "/hackq2/api/partnerInfo/"+partnerID,
		dataType : "json",
		async : false,
		cache : false,
		/*complete : poll,*/
	}).responseText;
	//console.log(response);
	var partner = jQuery.parseJSON(response);
	console.log(partner);
	console.log(partner.partnerID);
	for( var k in partner){
		console.log(k);
	}
	return partner;
}

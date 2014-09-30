$(document).ready(function() {
	//eventListensers(eventListensers.$("div.container"));
	//$('#progress1').attr('style',"width: 37%");
	//$('#progress1').css({
	// 'background-color': '#66FF66'
	//});
	updateMessages();
});

function poll() {
	setTimeout(updateMessages(), 5000);
}

function eventListensers(object) {
	object.addEventListener('load', function() {
		console.log('Test!');
	}, false);
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
}

function updateMessages() {
	var response = $.ajax({
		type : "GET",
		url : "/HackQ2-0.0.1/api/partnerInfo",
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

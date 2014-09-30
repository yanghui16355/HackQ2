function eventListensers(object) {
	object.onload(function() {
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
function analyzeData(hotels,len_of_json) {
	for( var i = 0; i< len_of_json ;i++){
		//for (var hotel in hotels[i]) {
			createBars(hotels[i],i);			
		//}
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

/**
 * 
 * 
 * 
 */
function createBars(message,counter) {
	
	var identity = message["partnerID"] +"_"+ "Expedia.com";
	var id = 0;
	if( counter % 2 == 0 ){
		//$('<div/>',{'class':'container','id':identity+"_container_div"+counter}).insertAfter("#main_jumbotorn") ;
		id = identity+"_container_div_"+counter;
		$('<div class="container" id="'+id+'">111222</div>').insertAfter("#main_jumbotorn") ;
	}else{
		//$('<div/>',{'class':'jumbotron','id':identity+"_jumbotron_div"+counter}).insertAfter("#main_jumbotorn") ;
		//$('<div/>',{'class':'container','id':identity+"_container_div"+counter}).appendTo("#"+identity+"_jumbotron_div") ;
		
		var temp_id = identity+"_container_jum_div_"+counter;
		id = identity+"_container_div_"+counter;
		$('<div class="jumbotron" id="'+temp_id+'">567</div>').insertAfter("#main_jumbotorn") ;
		
		console.log($("#"+temp_id));
		$('<div class="container" id="'+id+'">890wwwww</div>').append("#"+temp_id) ;

	}
	var i = 0;
	for(var key in message){
		createOneBar(id, message[key] ,identity ,i);
		i++;
	}   	 	
}


function createOneBar(divId,message,_identity,counter){
	var identity = message["sourceID"] + "_" + message["destinationID"];
	
	
	//$('<p/>',{'id':identity + "_" +message['type'] +'_p'}).appendTo("#"+divId);
    $('<p><a class="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#myModal" id="ParterID"></a></p>').appendTo("#"+divId);
    
    $('<a/>',{'class':'btn btn-primary btn-lg',
    'role':'button',
    'data-toggle' : 'modal',
    'data-target' : '#myModal',
    'id':identity + "_" +message['type'] +'_a'
    }).appendTo("#"+ identity + "_" +message['type'] +'_p');
	
	
	console.log("++++++++++++++++++++++++++++++++++++++++++++");
	
	$('<div/>', {
		'class' : 'progress',
		'id' : 'progress_'+identity+"_"+message['type']
	}).after("#"+identity + "_" +message['type'] +'_p');

	$('<div/>', {
		'class' : 'progress-bar progress-bar-success',
		'style' : 'width: 35%',
		'id' : 'progress_'+counter+'_' + message['type'] +identity+ "_bar",
		'data-toggle':"tooltip",
		'data-placement':"top",
		'title':'show test title'
	}).appendTo('#progress_'+identity+"_"+message['type']);

	$('<span/>', {
		'innerHTML' : 'test data '
	}).appendTo('#progress_'+counter+'_' + message['type'] +identity+ "_bar");
	

	$('#progress_'+identity+"_"+message['type']).tooltip();
	
	$('progress_'+counter+'_' + message['type'] +identity+ "_bar").css({
	 'background-color': message["color"]
	});
}

function updateMessages() {
	var response = $.ajax({
		type : "GET",
		url : "/HackQ2-0.0.1/api/partnerInfo",
		dataType : "json",
		async : false,
		cache : false,
		timeout : 5000
	}).responseText;
	var data = jQuery.parseJSON(response);
	return data;
}


function getContainerTemplate(args){
	
	var content = 
	   '<div class="container">'+
			'<p><a class="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#myModal" id="'+args["id"]+'"></a></p>'+
			'<div class="progress">'+
				'<div id="progress1" class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>'+args[width]+'% Complete (success)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
				'<div id="progress2" class="progress-bar progress-bar-success" data-toggle="tooltip" data-placement="top" title="Tooltip on left" class="progress-bar progress-bar-danger" style="width: 45%">'+
					'<span>45% Complete (danger)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
			'</div>'+
		'</div>';
	return content;
}

function getJumContainerTemplate(args){
	var content = 
	   '<div class="container">'+
			'<p><a class="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#myModal" id="'+args["id"]+'"></a></p>'+
			'<div class="progress">'+
				'<div id="progress1" class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>'+args[width]+'% Complete (success)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
				'<div id="progress2" class="progress-bar progress-bar-success" data-toggle="tooltip" data-placement="top" title="Tooltip on left" class="progress-bar progress-bar-danger" style="width: 45%">'+
					'<span>45% Complete (danger)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
				'<div class="progress-bar progress-bar-success" style="width: '+args[width]+'%">'+
					'<span>20% Complete (warning)</span>'+
				'</div>'+
			'</div>'+
		'</div>';
	return content;
}

$(document).ready(function() {
	data = updateMessages();
	analyzeData(data,data.length);
});

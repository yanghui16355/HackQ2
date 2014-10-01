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
		createBars(hotels[i],i,hotels[i]["partnerID"]);			
	}
}

function removeBars(bar) {
	$(bar.id).click(function(e) {
		k.fadeOut( "slow" );
		k.remove();
	});
}

/**
 * 
 * 
 * 
 */
function createBars(message,counter,partnerID) {	
	args = {};
	args["parterID"] = partnerID;
	for(var k in message){
		var _identity = message[k]["sourceID"] + "_" + message[k]["destinationID"] + "_" + message[k]["type"];
		args[k+"_id"] = _identity;
		args[k+"_type"] = message[k]["type"];
		args[k+"_status"] = message[k]["status"];
		args[k+"_color"] = message[k]["color"];
		args[k+"_sourceID"] = message[k]["sourceID"];
		args[k+"_destID"] = message[k]["destinationID"];
		args[k+"_amount"] = message[k]["amount"];
	}
	if( counter % 2 == 0 ){
		$('<div class="jumbotron">'+getContainerTemplate(args)+'</div>').insertAfter("#main_jumbotorn") ;
	}else{
		$(getContainerTemplate(args)).insertAfter("#main_jumbotorn") ;	
	}  	 	
	for(var k in message){
		$("#" + message[k]["sourceID"] + "_" + message[k]["destinationID"] + "_" + message[k]["type"]).tooltip();
	}
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
			'<p><a class="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#myModal" id="'+args["partnerID"]+'"> ' + args["partnerID"] + "---->" + args["_destID"] + ' </a></p>'+
			'<div class="progress">'+
				'<div id="progress_'+args['rqinS_id']+'" class="progress-bar progress-bar-success" style="width: '+args['rqinS_width']+'%">'+
					'<span>'+args['width']+'% Complete (success)</span>'+
				'</div>'+
				'<div id="progress_'+args['rqoutS_id']+'" class="progress-bar progress-bar-success" style="width: '+args['rqoutS_width']+'%">'+
					'<span>amount </span>'+
				'</div>'+
				'<div id="progress_'+args['rsinS_id']+'" class="progress-bar progress-bar-success" data-toggle="tooltip" data-placement="top" title="Tooltip on left" class="progress-bar progress-bar-danger" style="width: 12.5%">'+
					'<span>amount (danger)</span>'+
				'</div>'+
				'<div id="progress_'+args['rsoutS_id']+'" class="progress-bar progress-bar-success" style="width: '+args['rsoutS_width']+'%">'+
					'<span>amount (warning)</span>'+
				'</div>'+
				'<div id="progress_'+args['rqinF_id']+'" class="progress-bar progress-bar-success" style="width: '+args['rqinF_width']+'%">'+
					'<span>amount (warning)</span>'+
				'</div>'+
				'<div id="progress_'+args['rqoutF_id']+'" class="progress-bar progress-bar-success" style="width: '+args['rqoutF_width']+'%">'+
					'<span>amount (warning)</span>'+
				'</div>'+
				'<div id="progress_'+args['rsinF_id']+'" class="progress-bar progress-bar-success" style="width: '+args['rsinF_width']+'%">'+
					'<span>amount (warning)</span>'+
				'</div>'+
				'<div id="progress_'+args['rsoutF_id']+'" class="progress-bar progress-bar-success" style="width: '+args['rsoutF_width']+'%">'+
					'<span>amount (warning)</span>'+
				'</div>'+
			'</div>'+
		'</div>';
	return content;
}



$(document).ready(function() {
	data = updateMessages();
	analyzeData(data,data.length);
});

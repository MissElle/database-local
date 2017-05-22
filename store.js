//-----------------------------------------------------------------------------//

// store.js - script for storing and editing JSON in a local array

//-----------------------------------------------------------------------------//
//blank array for storing JSON objects

var chArr= [];

//-----------------------------------------------------------------------------//
//These watch for button clicks to change the form

$('#add-data').on('click', getData);

//-----------------------------------------------------------------------------//
//function gets new data and pushes to the array

function getData(){
	var chName = $('#data-name').val();
	var chRace = $('#select-race option:selected').val();
	var chClass = $('#select-class option:selected').val();
	var chStr = $('#data-str').val();
	var chDex = $('#data-dex').val();
	var chCon = $('#data-con').val();
	var chInt = $('#data-int').val();
	var chWis = $('#data-wis').val();
	var chCha = $('#data-cha').val();
	var chPor = $('#data-file').val();

	var chart = $('#database-layout');
	var row = $('<div>').addClass('row');
  var col = $('<div>').addClass('col');
	
	var newArrayObj = {name: chName, race: chRace, class: chClass, str: chStr, dex: chDex, con: chCon, int: chInt, wis: chWis, cha: chCha, portrait: chPor};

  chArr.push(newArrayObj);
	$('.data').remove();  //This deletes all chart rows and regenerates them... allows for sorting abilites in the array later
	chArr.forEach(generateTable);
	
	$('input').val('');
	$('select').removeAttr('selected');
	event.preventDefault();
}

//-----------------------------------------------------------------------------//
//This function generates a the table each time an JSON object is added, edited, or removed

function generateTable (chStats){
  var chart = $('#database-layout');
	var row = $('<div>').addClass('row data ' + chArr.indexOf(chStats));
	
	var col = $('<div>').addClass('col').text(chStats.name);
	row.append(col);
	col = $('<div>').addClass('col').text(chStats.race);
	row.append(col);
	col = $('<div>').addClass('col').text(chStats.class);
	row.append(col);
	col = $('<div>').addClass('col').html('<div class="statnumbers"><p>Str:'+chStats.str+'</p>'+'<p>Dex:'+chStats.dex+'</p>'+'<p>Con:'+chStats.con+'</p></div>'+'<div class="statnumbers"><p>Int:'+chStats.int+'</p>'+'<p>Wis:'+chStats.wis+'</p>'+'<p>Cha:'+chStats.cha+'</p></div>');
	row.append(col);
	col = $('<div>').addClass('col').text(chStats.portrait);
	row.append(col);
	col=$('<div>').addClass('col').html('<button id="edit-data' + chArr.indexOf(chStats) +'">Edit</button><button id="delete-data'+chArr.indexOf(chStats)+'">Delete</button>');
	row.append(col);

	chart.append(row);
	event.preventDefault();
}

//-----------------------------------------------------------------------------//
//This function deletes the JSON and div row

function deleteData() {
	console.log("this button is working");
}

//-----------------------------------------------------------------------------//
//This function creates a slide toggle with the buttons

$(document).ready(function(){
	$('#add-cha').click(function(){
	  $('#database-layout').slideUp(170);
		$('#character-form').slideDown(170);
	});
	$('#cancel-data').click(function(){
		$('#database-layout').slideDown(170);
		$('#character-form').slideUp(170);
			event.preventDefault();
	});
	$('#add-data').click(function(){
		$('#database-layout').slideDown(170);
		$('#character-form').slideUp(170);
			event.preventDefault();
	});
});
//-----------------------------------------------------------------------------//

// store.js - script for storing and editing JSON in local storage

//-----------------------------------------------------------------------------//
//These watch for button clicks to change the form

$('#add-data').on('click', getData);

var count = localStorage.count;
generateTable();

//-----------------------------------------------------------------------------//
//function gets new data and pushes to localStorage

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
	
	localStorage.setItem('name'+count, chName);
	localStorage.setItem('race'+count, chRace);
	localStorage.setItem('class'+count, chClass);
	localStorage.setItem('str'+count, chStr);
	localStorage.setItem('dex'+count, chDex);
	localStorage.setItem('con'+count, chCon);
	localStorage.setItem('int'+count, chInt);
	localStorage.setItem('wis'+count, chWis);
	localStorage.setItem('cha'+count, chCha);
	localStorage.setItem('portrait'+count, chPor);

	++count;
	localStorage.setItem('count', count)

//	$('.data').remove();  //This deletes all chart rows and regenerates them... allows for sorting abilites in the array later
//	chArr.forEach(generateTable);
	
	$('input').val('');
	$('select').removeAttr('selected');
	event.preventDefault();
}

//-----------------------------------------------------------------------------//
//This function generates a the table each time an JSON object is added, edited, or removed.

function generateTable (){
	for(var i=0; i<count; ++i) {
		var chart = $('#database-layout');
		var row = $('<div>').addClass('row data');
		var col = $('<div>').addClass('col').text(localStorage['name'+i]);
		row.append(col);
		col = $('<div>').addClass('col').text(localStorage['race'+i]);
		row.append(col);
		col = $('<div>').addClass('col').text(localStorage['class'+i]);
		row.append(col);
		col = $('<div>').addClass('col').html('<div class="statnumbers"><p>Str:'+localStorage['str'+i]+'</p>'+'<p>Dex:'+localStorage['dex'+i]+'</p>'+'<p>Con:'+localStorage['con'+i]+'</p></div>'+'<div class="statnumbers"><p>Int:'+localStorage['int'+i]+'</p>'+'<p>Wis:'+localStorage['wis'+i]+'</p>'+'<p>Cha:'+localStorage['wis'+i]+'</p></div>');
		row.append(col);
		col = $('<div>').addClass('col').text(localStorage['portrait'+i]);
		row.append(col);
		col=$('<div>').addClass('col').html('<button class="edit-data">Edit</button><button id="delete-data">Delete</button>');
		row.append(col);
		
		chart.append(row);
	}
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
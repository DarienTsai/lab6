'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	//replace url with heroku when submitting
	var url = 'http://localhost:3000/project/' + idNumber;
	$.get(url, addProject);
}

function addProject(result) {
	console.log(result);
	var projectHTML = '<small>' +
		'<h1>' + result['title'] + '</h1>' +
		'<p class="date">' + result['date'] +
    '<img src="' + result['image'] + '" class="img">' +
		result.summary + '</small>';

	$('#project' +result.id +' .details').html(projectHTML);

}
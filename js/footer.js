$(document).ready(function( $ ) {
	$(".menu-main-container li a").addClass("top-level");
	$(".menu-main-container .sub-menu li a").addClass("second-level");
	$("<select class='main-drop' />").appendTo("#nav .container .sixteen");

	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Main Navigation"
	}).appendTo("#nav select");

	// Populate dropdown with menu items
	$("#nav .menu li a").each(function() {
	 var el = $(this);
	 $("<option />", {
	     "value"   : el.attr("href"),
	     "text"    : el.text(),
		 "class"   : el.attr("class")
	}).appendTo("#nav select");
	});
	$("#nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});
	$('<p>- </p>').prependTo('option.second-level');
});
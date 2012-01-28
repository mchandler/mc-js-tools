var blogFeed = function(url) {
	var response;
	
	$.ajax({
		url: url + "&jsonp=jsonHandler",
		dataType: "jsonp",
		type: "GET",
		error: function(j, status, error) {
			alert("An error has occurred:\n" + error);
		}
	});
};

var jsonHandler = function(data) {
	
}

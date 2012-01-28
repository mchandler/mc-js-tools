var blogFeed = function(url) {
	$.ajax({
		url: url + "&jsonp=jsonHandler",
		dataType: "jsonp",
		type: "GET",
		error: function(j, status, error) {
			// disregard errors
		}
	});
};

var jsonHandler = function(data) {
	alert("Success");
}

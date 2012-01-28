var rssGrabber = function(url) {
	var response;
	
	$.ajax({
		url: url,
		dataType: "xml",
		type: "GET",
		success: function(data, status, j) {
			// handle my success here
		},
		error: function(j, status, error) {
			// handle my failure here
		}
	});
};

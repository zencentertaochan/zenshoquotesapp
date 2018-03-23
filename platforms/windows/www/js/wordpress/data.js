/* app.factory('Favs',['$cordovaSQLite'], function($cordovaSQLite){
	var data = {};
	data.getEntries = function() {
		console.log("getentriies");
		console.log($cordovaSQLite);

		try {

			var db = $scope.initFavs();
			var query = "SELECT * from favlist";
			$cordovaSQLite.execute(db, query, [url]).then(function(res) {

				var index = -1;
				var length = res.rows.length;
				var entries = Array(res.rows.length);

				while (++index < length) {
					entries.push(res.rows[index]['data'])
				}
				return entries;
			});
			

		} catch (error) {
			console.error(error);
		}
	}
	return data;
});
 */

app.factory('WordPress',['$http', 'Config', function($http, Config) {
	var data = {};
	data.getFavs = function(db){
		alert(db);
		return  [];
	}
	
	data.getPosts = function (page) {
		return $http(
			{
				method: 'GET', url:Config.WordPress+'api/get_recent_posts/?page='+page
			}
		);
	}
	data.getPostsTaxonamy = function (type, slug, page) {
		if(type == 'tag') {
			return $http(
				{
					method: 'GET', url:Config.WordPress+'api/get_tag_posts/?page='+page+'&slug='+slug
				}
			);
		} else if(type == 'category') {
			return $http(
				{
					method: 'GET', url:Config.WordPress+'api/get_category_posts/?page='+page+'&slug='+slug
				}
			);
		}
	}
	data.getCategories = function () {
		return $http(
			{
				method: 'GET', url:Config.WordPress+'api/get_category_index/'
			}
		);
	}
	data.getTags = function () {
		return $http(
			{
				method: 'GET', url:Config.WordPress+'api/get_tag_index/'
			}
		);
	}
  	return data;
}]);
app.factory('globalFactory', function() {
	return {
		// get first image or feed
		getPostImageFeed: function( postContent ) {
			var div = document.createElement('div');
			div.innerHTML = postContent;
			var img = div.getElementsByTagName("img");
			var iframe = div.getElementsByTagName("iframe");
			if (img.length >= 1) {
				imgthumb = img[0].src;
				return imgthumb;
			} else if (iframe.length >= 1){
				iframeVideo = iframe[0].src;
				var re = /(\?v=|\/\d\/|\/embed\/)([a-zA-Z0-9\-\_]+)/;
				videokeynum = iframeVideo.match(re);
				if(videokeynum) {
					videokey = iframeVideo.match(re)[2];
					imageurl = 'http://i2.ytimg.com/vi/'+videokey+'/0.jpg';
					return imageurl;	              
			  }
			}
		}
	};
});
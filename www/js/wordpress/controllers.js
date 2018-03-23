

app.controller('WpCtrl', ['$scope', '$state', '$ionicSlideBoxDelegate','$cordovaSQLite', function($scope, $state, $ionicSlideBoxDelegate,  $cordovaSQLite) {

	

  // Toggle left function for app sidebar
  	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};
	// sharing plugin
	$scope.shareArticle = function(url){
		window.plugins.socialsharing.share(null, null, url,null)
	}
	

	$scope.initFavs = function($cordovaSQLite){
		try {
			var db = $cordovaSQLite.openDB('favorites.db');
			
			var queryCreateTable = "CREATE TABLE IF NOT EXISTS favlist (id integer primary key, url text, data text)"
			$cordovaSQLite.execute(db, queryCreateTable);
			return db;
		} catch (error) {
			console.error(error);
		}
	
	}

	$scope.favArticle = function(item){
	    try {

			var db = $scope.initFavs($cordovaSQLite);
			var query = "INSERT INTO favlist (url, data) VALUES (?,?)";

			$cordovaSQLite.execute(db, query, [item.thumbnail_images.full.url, item]).then(function(res) {
			  alert("insertId: " + res.insertId);
			}, function (error) {
				console.error(error);
			});
			

		} catch (error) {
			console.error(error);
		}
		
    	
    }
	$scope.openLinkArticle = function(url){
		window.open(url, '_system');
	}

}])
/* 
another cool app function -- so we can call it directly from view page
*/
app.run(function($rootScope, globalFactory) {
	$rootScope.globalFunction = globalFactory;
});

// wordpress controller // 
app.controller('WordpressFavCtrl', ['$scope', 'WordPress','$cordovaSQLite', function($scope, WordPress, $cordovaSQLite) {
	$scope.items = [];
	$scope.times = 1 ;
	$scope.postsCompleted = false;

	// load more content function
	$scope.getFavs = function(){
		var db = $scope.initFavs($cordovaSQLite);
		$scope.items = WordPress.getFavs(db);
		$scope.postsCompleted = true;
	}
	// pull to refresh buttons
	$scope.doRefresh = function(){
		$scope.times = 1 ;
		$scope.items = [];
		$scope.postsCompleted = false;
		$scope.getPosts();
		$scope.$broadcast('scroll.refreshComplete');
	}

}])

app.controller('WordpressBlogCtrl', ['$scope', 'WordPress', '$ionicModal', function($scope, WordPress, $ionicModal) {

	$scope.heading = "Zenshos Worte";
	$scope.items = [];
	$scope.times = 1 ;
	$scope.postsCompleted = false;
	// load more content function
	$scope.getPosts = function(){
		WordPress.getPosts($scope.times)
		.success(function (posts) {
			$scope.items = $scope.items.concat(posts.posts);
			$scope.$broadcast('scroll.infiniteScrollComplete');
			$scope.times = $scope.times+1;
			if(posts.posts.length == 0) {
				$scope.postsCompleted = true;
			}
		})
		.error(function (error) {
			$scope.items = [];
		});
	}
	// pull to refresh buttons
	$scope.doRefresh = function(){
		$scope.times = 1 ;
		$scope.items = [];
		$scope.postsCompleted = false;
		$scope.getPosts();
		$scope.$broadcast('scroll.refreshComplete');
	}

//	// modal to show image full screen
      $ionicModal.fromTemplateUrl('templates/image-modal.html', {
          scope: $scope,
          animation: 'slide-in-up'
       }).then(function (modal) {
          $scope.modal = modal;
       });
	$scope.openModal = function () {
    		$scope.showNav = true;
          $scope.modal.show();
       };

       $scope.closeModal = function () {
          $scope.modal.hide();
       };
	// show image in popup
   $scope.showImage = function (index) {
        $scope.imageIndex = index;
      $scope.imageSrc = $scope.items[index].thumbnail_images.full.url;
      $scope.openModal();
   }
    // image navigation // swiping and buttons will also work here
    $scope.imageNavigate = function(dir){
        if(dir == 'right'){
            $scope.imageIndex = $scope.imageIndex + 1;
        } else {
            $scope.imageIndex = $scope.imageIndex - 1;
        }
        //alert(dir);
        if($scope.items[$scope.imageIndex] === undefined){
            $scope.closeModal();
        } else {
            $scope.imageSrc = $scope.items[$scope.imageIndex].thumbnail_images.full.url;
        }
    }
	// cleaning modal
    $scope.$on('$stateChangeStart', function(){
      $scope.modal.remove();
    });


}])
/* post controller */
app.controller('WordpressPostCtrl', ['$scope', 'WordPress', '$stateParams', '$sce', function($scope, WordPress, $stateParams, $sce) {	
	$scope.post = WordPress.postSelected;
	$scope.allContent = $sce.trustAsHtml($scope.post.content);
}])



/* category and tags controller */
app.controller('WordpressTagCtrl', ['$scope', '$state', 'WordPress', '$stateParams', function($scope, $state, WordPress, $stateParams) {
	
	$scope.type = $stateParams.type;	
	$scope.slug = $stateParams.slug;
	
	$scope.items = [];
	$scope.times = 1 ;
	$scope.postsCompleted = false;
	// load more content function
	$scope.getPosts = function(){
		WordPress.getPostsTaxonamy($scope.type, $scope.slug, $scope.times)
		.success(function (posts) {
			if($scope.type == 'tag'){
				$scope.heading = posts.tag.title;
			} else if($scope.type == 'category') {
				$scope.heading = posts.category.title;
			}
			$scope.items = $scope.items.concat(posts.posts);
			$scope.$broadcast('scroll.infiniteScrollComplete');
			$scope.times = $scope.times + 1;
			if(posts.posts.length == 0) {
				$scope.postsCompleted = true;
			}
		})
		.error(function (error) {
			$scope.items = [];
		});
	}
	// pull to refresh buttons
	$scope.doRefresh = function(){
		$scope.times = 1 ;
		$scope.items = [];
		$scope.postsCompleted = false;
		$scope.getPosts();
		$scope.$broadcast('scroll.refreshComplete');
	}
	$scope.showFullPost = function(index){
		WordPress.postSelected = $scope.items[index];
		$state.go('wordpress.post');
	}
}])
/* category and tags controller */
app.controller('WordpressCategoriesCtrl', ['$scope', 'WordPress', '$stateParams', function($scope, WordPress, $stateParams) {
		
	$scope.items = [];
	$scope.postsCompleted = false;
	// load more content function
	$scope.getPosts = function(){
		WordPress.getCategories()
		.success(function (posts) {
			$scope.items = $scope.items.concat(posts.categories);
			$scope.$broadcast('scroll.infiniteScrollComplete');
			$scope.postsCompleted = true;
		})
		.error(function (error) {
			$scope.items = [];
		});
	}
	// pull to refresh buttons
	$scope.doRefresh = function(){
		$scope.times = 1 ;
		$scope.items = [];
		$scope.getPosts();
		$scope.$broadcast('scroll.refreshComplete');
	}
}])

/* category and tags controller */
app.controller('WordpressTagsCtrl', ['$scope', 'WordPress', '$stateParams', function($scope, WordPress, $stateParams) {
		
	$scope.items = [];
	$scope.postsCompleted = false;
	// load more content function
	$scope.getPosts = function(){
		WordPress.getTags()
		.success(function (posts) {
			$scope.items = $scope.items.concat(posts.tags);
			$scope.$broadcast('scroll.infiniteScrollComplete');
			$scope.postsCompleted = true;
		})
		.error(function (error) {
			$scope.items = [];
		});
	}
	// pull to refresh buttons
	$scope.doRefresh = function(){
		$scope.times = 1 ;
		$scope.items = [];
		$scope.getPosts();
		$scope.$broadcast('scroll.refreshComplete');
	}
}])
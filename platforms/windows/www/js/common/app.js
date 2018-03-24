app.constant("Config", {
  "ApiUrl": "data/feed.json",
  "PhotoUrl": "data/photos.json",
  "CommentUrl": "data/comments.json",
  "FriendsUrl": "data/friends.json",
  "MessagesUrl": "data/messages.json",
  "MessageUrl": "data/message.json",
  "ProductUrl": "data/products.json",
  "WordPress": "http://quotes.zensho.de/",
})
// config contact
app.constant("ConfigContact", {
  "EmailId": "anfrage@tao-chan.de",
  "ContactSubject": "Contact [App]"
})
// push notification
app.constant("PushNoti", {
  "senderID": "321948427526",
})



document.addEventListener('deviceready', function() {
  favsdb = window.sqlitePlugin.openDatabase({
    name: 'taochanfav.db',
    location: 'default',
    androidDatabaseImplementation: 2
  }, function (db) {

    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS favlist (id integer primary key, url text, data text)');
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
    });

    console.log('sssss');

  }, function (error) {
      console.log('Open database ERROR: ' + JSON.stringify(error));
  });
 

});

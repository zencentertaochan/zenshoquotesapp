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

var db = null;

document.addEventListener('deviceready', function() {
  db = window.sqlitePlugin.openDatabase({name: 'favs.db', location: 'default'});
});

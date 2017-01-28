var vector = {
  ttop : {
    title : "The Constitution",
    uris : [ 
      "https://www.washingtonpost.com/politics/what-is-the-emoluments-clause-does-it-apply-to-president-trump/2017/01/23/12aa7808-e185-11e6-a547-5fb9411d332c_story.html?utm_term=.2d4e3674204a" ]
    },
  tmid : {
    title : "Totalitarianism",
    uris : [
      "https://www.nytimes.com/2017/01/28/us/refugees-detained-at-us-airports-prompting-legal-challenges-to-trumps-immigration-order.html"
    ]
  },
  tbot : {
    title : "Human Cost",
    uris : [ "http://thehill.com/blogs/pundits-blog/the-administration/315427-how-will-president-trump-handle-violence-against-women" ]
  },
  news : {
    title : "News",
    uris : [ "https://twitter.com/hashtag/KitchensWithoutBorders", "https://twitter.com/hashtag/TheResistance" ]
  },
  laugh : {
    title : "Laugh",
    uris : [ "http://www.sadanduseless.com/2016/11/trump-cartoons/" ]
  },
  action : {
    title : "Act",
    uris : [ "https://www.womensmarch.com/100" ]
  },
  legal : {
    title : "Legal",
    uris : [ "http://www.usatoday.com/pages/interactives/trump-lawsuits/", "http://www.bbc.com/news/election-us-2016-37956018"]
  },
  organize : {
    title : "Organize",
    uris : [ "http://thesixtyfive.org/home" ]
  }
}
function omo (event) {
  console.debug (event.target.id);
  var section = vector[event.target.id];
  if (section.uris.length > 0) {
    var text = "<a href='" + section.uris[0] + "'>" + section.title + "</a>";
    document.getElementById("txt").innerHTML = text;
  }
}
function oc (event) {
  var section = vector[event.target.id];
  if (section.uris.length > 0) {
    window.open(section.uris[0], '_blank');
  }
}


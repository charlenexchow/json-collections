let contentGridElement = document.getElementById('contentGrid');

let monkeyCollection = [
  {
    "image" : "https://i.postimg.cc/7hH4xgws/monkey1.jpg",
    "name" : "tommy",
    "tagline" : "it is tommy's first day of 6th grade. he is waiting for the bus in his new backpack as he eats his lemon soda lollipop for breakfast."
  },
  {
    "image" : "https://i.postimg.cc/4yWgnm3J/monkey2.jpg",
    "name" : "jackie",
    "tagline" : "jackie has gone to germany as a solo traveler. here she is on line in hopes of getting into bergain, berlin's most exclusive club."
  },
  {
    "image" : "https://i.postimg.cc/k5WPKj5Y/monkey3.jpg",
    "name" : "arthur",
    "tagline" : "arthur watches paw patrol on his mother's phone every single morning. she is actually asleep next to him, unaware of his secret routine."
  },
  {
    "image" : "https://i.postimg.cc/C1YTNjBh/monkey4.jpg",
    "name" : "edna",
    "tagline" : "edna's mother has never given her milk. instead, she exclusively drinks mcdonald's sprite. her first bite of baby food was actually an extremely soft fry, unsalted."
  },
  {
    "image" : "https://i.postimg.cc/g2XWkcbW/monkey5.jpg",
    "name" : "bob",
    "tagline" : "bob is experiencing his first ever heartbreak. he is on summer vacation. they broke up over text. here he is seen listening to the sour album."
  },
  {
    "image" : "https://i.postimg.cc/tCmbjZfk/monkey6.jpg",
    "name" : "phillip",
    "tagline" : "phillip's family is going to a barbeque today, but first, costco. here, he is confidently holding a spot in line as his mother goes to grab a few more bunches of bananas."
  },
  {
    "image" : "https://i.postimg.cc/8z2VF8Tr/monkey7.jpg",
    "name" : "harold",
    "tagline" : "harold has just had his first day of soccer practice. here he is contemplating the epic highs and lows of high school football."
  },
  {
    "image" : "https://i.postimg.cc/7P9DKQnp/monkey8.jpg",
    "name" : "portia",
    "tagline" : "portia is waiting for her date to pick her up for their school's prom dance. anxious already, she hears the doorbell ring. he is 30 minutes early."
  },
  {
    "image" : "https://i.postimg.cc/15zS2cW4/monkey9.jpg",
    "name" : "richard",
    "tagline" : "richard has gotten his first ever laptop for his birthday. he is still familiarizing himself to the keyboard as he practices on nitrotype.com with friends."
  }
];

for (var i = 0; i < monkeyCollection.length; i++) {
  createElementProper(monkeyCollection[i]);
}

function createElementProper(incomingJSON) {

  /// create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  /// create and add image to the item
  let newContentImage = document.createElement("IMG");
  newContentImage.classList.add("contentImage");
  newContentImage.src = incomingJSON['image'];
  newContentElement.appendChild(newContentImage);

  /// create and add name to the item
  let newContentName = document.createElement("H1");
  newContentName.classList.add('contentName');
  newContentName.innerText = incomingJSON['name'];
  newContentElement.appendChild(newContentName);

  /// create and add tagline to the item
  let newContentTagline = document.createElement("H2");
  newContentTagline.classList.add('contentTagline');
  newContentTagline.innerText = incomingJSON['tagline'];
  newContentElement.appendChild(newContentTagline);

  /// add the item to the page
  contentGridElement.appendChild(newContentElement);
}
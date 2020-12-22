var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item = randomItem(item)
 getCart().push(item)
 return `${item.itemName} has been added to your cart.`
}

function viewCart() {
return getCart().length === 0 ? "Your shopping cart is empty." : cartDescription()
}

function total() {
  var sum = 0
  for (i=0; i<getCart().length; i++){
    sum = sum + getCart()[i].itemPrice
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomItem(itemName){
  return {
    itemName: itemName, itemPrice: getRandomInt(1,100)
  }
}

function cartDescription(){
  var beginning =  "In your cart, you have "
  if (getCart().length >= 1){
    beginning += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >=2){
    var moreItems = ''
    for (var i=1; i<getCart().length-1; i++){
      moreItems += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    beginning += `${moreItems}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${beginning}.`
}

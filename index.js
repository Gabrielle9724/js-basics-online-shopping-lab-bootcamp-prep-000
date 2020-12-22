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
  if getCart().length === 0 {
    return "Your shopping cart is empty."
  } else {
    return `In your cart, you have ${item.itemName} at ${itemPrice}`
  }
}

function total() {
  // write your code here
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

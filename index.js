const data = require("./data");
const Checkout = require("./checkout");

const checkout = new Checkout(data.catalogue);

// Scan An Item
console.log("Scanning Barcode 123");
const item1 = checkout.scan(123);
console.log("Found Item:", item1);

// Add an item to a basket
console.log("Adding to Basket:", item1.name);
checkout.addItem(item1);

// Scan An Item
console.log("Scanning Barcode 456");
const item2 = checkout.scan(456);
console.log("Found Item:", item2);

// Add an item to a basket
console.log("Adding to Basket:", item2.name);
checkout.addItem(item2);

// Scan An Item
console.log("Scanning Barcode 789");
const item3 = checkout.scan(789);
console.log("Found Item:", item3);

// Add an item to a basket
console.log("Adding to Basket:", item3.name);
checkout.addItem(item3);

console.log("Basket:", checkout.basket);

// Get the total price
console.log("Total Price:", checkout.getBasketTotal());

// Remove an item
console.log("Removing Item:", item2.name);
checkout.removeItem(item2);

// Check that the item is gone and the price has gone down
console.log("Basket:", checkout.basket);
console.log("Total Price:", checkout.getBasketTotal());

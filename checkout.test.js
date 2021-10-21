const data = require("./data");
const Checkout = require("./checkout");

describe("Checkout", () => {
  describe("constructor", () => {
    it("starts with an empty basket", () => {
      // Setup
      const checkout = new Checkout(data.catalogue);

      // Exercise & Assertion
      expect(checkout.basket).toEqual([]);
    });
  });

  describe("scan", () => {
    it("returns the matching item from the catalogue when a barcode is scanned", () => {
      // Setup
      const checkout = new Checkout(data.catalogue);
      const barcode = data.apple.barcode;
      const expected = data.apple;

      // Exercise
      const result = checkout.scan(barcode);

      // Assertion
      expect(result).toEqual(expected);
    });
  });

  describe("addItem", () => {
    it("adds an item to the basket", () => {
      // Setup
      const checkout = new Checkout(data.catalogue);

      // Exercise
      checkout.addItem(data.apple);

      // Assertion
      expect(checkout.basket).toContain(data.apple);
    });
  });

  describe("getBasketTotal", () => {
    it("calculates the total price of items in the basket", () => {
      // Setup
      const checkout = new Checkout(data.catalogue);
      const expected = data.apple.price + data.banana.price + data.orange.price;

      checkout.addItem(data.apple);
      checkout.addItem(data.banana);
      checkout.addItem(data.orange);

      // Exercise
      const result = checkout.getBasketTotal();

      // Assertion
      expect(result).toBe(expected);
    });
  });

  describe("removeItem", () => {
    it("removes the item from the basket", () => {
      // Setup
      const checkout = new Checkout(data.catalogue);

      checkout.addItem(data.apple);
      checkout.addItem(data.banana);
      checkout.addItem(data.orange);

      // Exercise
      checkout.removeItem(data.banana);

      // Assertion
      expect(checkout.basket).not.toContain(data.banana);
    });
  });
});

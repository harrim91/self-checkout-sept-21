class Checkout {
  constructor(catalogue) {
    this.catalogue = catalogue;
    this.basket = [];
  }

  scan(searchBarcode) {
    return this.catalogue.find((item) => {
      return item.barcode === searchBarcode;
    });
  }

  addItem(item) {
    this.basket.push(item);
  }

  getBasketTotal() {
    return this.basket.reduce((sum, item) => sum + item.price, 0);
  }

  removeItem(item) {
    this.basket = this.basket.filter((i) => i.barcode !== item.barcode);
  }
}

module.exports = Checkout;

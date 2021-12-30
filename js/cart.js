/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
    add(product) {
    const { name, price } = product;
        for (const item of this.items) {
            if (item.name === name) {
                item.quantity += 1;
                return;
        }
    }
    this.items.push({name, price, quantity: 1});
  },
    remove(productName) {
    for (const item of this.items) {
        if (item.name === productName) {
            this.items.splice(this.items.indexOf(item), 1);
            return;
        }
    }
        console.log(`Product ${productName} is absent it the cart!`);
  },
    clear() {
        this.items.length = 0;
        console.log('Your shopping cart is empty!');
  },
    countTotalPrice() {
        let total = 0;
        for (const item of this.items) {
            total += item.price * item.quantity;
        }
        return total;
  },
    increaseQuantity(productName) {
    for (const item of this.items) {
        if (item.name === productName) {
            item.quantity += 1;
            return;
        }
    } 
    console.log(`Product ${productName} is absent it the cart!`);
  },
    decreaseQuantity(productName) {
      for (const item of this.items) {
        if (item.name === productName) {
            if (item.quantity > 1) {
                item.quantity -= 1;
                return;
            }
            this.remove(productName);
        }
    } 
    console.log(`Product ${productName} is absent it the cart!`);
  },
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
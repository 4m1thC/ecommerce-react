/**
 * this function calculates total price of a new order
 * @param {Array} products cartProducts
 * @returns {number} total price
 */
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}

export class Burger {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.patty = data.patty || "beef"
    this.otherToppings = data.vegetables || ["lettuce", "tomatoes"]
    this.hasPickles = data.hasPickles || false
    this.hasMayo = data.hasMayo || true
    this.hasKetchup = data.hasKetchup || true
  }
}
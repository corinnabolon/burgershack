import { Burger } from "../models/Burger.js"


class FakeDb {
  constructor() {
    this.burgers = [
      new Burger({ id: 1, name: "Basic Burger", price: 5.00, hasPickles: true }),
      new Burger({ id: 2, name: "Super Veggie Burger", price: 6.50, patty: "Veggie Burger", otherToppings: ["lettuce", "tomatoes", "mushrooms", "sprouts", "daikon", "eggplant"], hasPickles: false, hasMayo: false, hasKetchup: false }),
      new Burger({ id: 3, name: "Chicken Burger", price: 6.00, patty: "Fried Chicken", hasPickles: false }),
      new Burger({ id: 4, name: "Fish Burger", price: 5.50, patty: "Halibut", otherToppings: ["lettuce", "tartar sauce"], hasMayo: false, hasKetchup: false })
    ]
  }
}

export const fakeDb = new FakeDb()
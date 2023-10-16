import { fakeDb } from "../db/FakeDb.js";
import { Burger } from "../models/Burger.js";
import { BadRequest } from "../utils/Errors.js";

class BurgersService {

  async getBurgers() {
    const burgers = await fakeDb.burgers

    return burgers
  }


  async createBurger(burgerData) {
    if (fakeDb.burgers.length == 0) {
      burgerData.id = 1
    }
    else {
      const burgerIds = fakeDb.burgers.map(burger => burger.id)
      const largestBurgerId = Math.max(...burgerIds)
      burgerData.id = largestBurgerId + 1
    }

    const newBurger = new Burger(burgerData)
    fakeDb.burgers.push(newBurger)
    return newBurger
  }

  async destroyBurger(burgerId) {
    const burgerIndex = fakeDb.burgers.findIndex(burger => burger.id == burgerId)

    if (burgerIndex == -1) {
      throw new BadRequest(`Invalid ID: ${burgerId}`)
    }

    fakeDb.burgers.splice(burgerIndex, 1)
  }

}


export const burgersService = new BurgersService()
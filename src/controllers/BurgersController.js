import { fakeDb } from "../db/FakeDb.js";
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers")
    this.router
      .get("", this.getBurgers)
      .post("", this.createBurger)
      .delete("/:burgerId", this.removeBurger)
      .put("/:burgerId", this.updateBurger)
  }


  async getBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getBurgers()
      return response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(request, response, next) {
    try {
      const burgerData = request.body

      const burger = await burgersService.createBurger(burgerData)

      response.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async removeBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId

      let foundBurger = fakeDb.burgers.find(burger => burger.id == burgerId)

      await burgersService.destroyBurger(burgerId)

      response.send(`The ${foundBurger.name} has been removed from the menu.`)
    } catch (error) {
      next(error)
    }
  }

  async updateBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      let foundBurger = fakeDb.burgers.find(burger => burger.id == burgerId)
      const burgerData = request.body

      await burgersService.updateBurger(burgerData, burgerId)

      response.send(`The ${foundBurger.name} has been updated.`)
    } catch (error) {
      next(error)
    }
  }


}
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers');
    this.router
      .get('', this.getBurgers)
      .post('', this.createBurger)
  }

  async getBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const burgerData = req.body
      const burger = await burgersService.createBurger(burgerData)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async removeBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      await burgersService.removeBurger(burgerId)
      res.send('burger deleted')
    } catch (error) {
      next(error)
    }
  }
}

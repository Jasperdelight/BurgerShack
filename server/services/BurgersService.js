import { FakeDb } from "../db/FakeDB.js"
import { BadRequest } from "../utils/Errors.js"
class BurgersService {
  removeBurger(burgerId) {
    const foundIndex = FakeDb.burgers.findIndex(b => b.id == burgerId)
    if (foundIndex == -1) {
      throw new BadRequest(`${burgerId} was not a valid Id`)
    }
    FakeDb.burgers.splice(foundIndex, 1)
  }
  getBurgers() {
    return FakeDb.burgers
  }
  createBurger(burgerData) {
    burgerData.id = FakeDb.burgers.length + 1
    FakeDb.burgers.push(burgerData)
    return burgerData
  }

}

export const burgersService = new BurgersService()
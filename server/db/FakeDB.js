import { Burger } from "../models/Burger.js";

export const FakeDb = {
  burgers: [
    new Burger({
      name: 'Double Double 💗 Stopper',
      hasBacon: true,
      id: 1

    }),
    new Burger({
      name: 'Big Burger',
      hasBacon: false,
      id: 2
    }),
    new Burger({
      name: 'Big Bacon',
      hasBacon: true,
      id: 3
    })
  ]
}
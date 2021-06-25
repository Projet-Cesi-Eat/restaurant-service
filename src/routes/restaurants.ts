import express from 'express';
import { Request, Response, NextFunction } from 'express'

import { RestaurantsServices } from '../controllers/restaurantsController';

const router = express.Router();
const restServices = new RestaurantsServices

/* GET users listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  restServices.getAllRestaurants()
    .then((restaurants) => res.status(200).json({restaurants}))
    .catch((error) => res.status(400).json({error}))
});

module.exports = router;

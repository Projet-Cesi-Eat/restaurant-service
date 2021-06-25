import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { RestaurantsServices } from '../controllers/restaurantsController';

const router = express.Router();
const services = new RestaurantsServices();

/**
 * GET all restaurants ✅
 */
router.get('/all/', function (req: Request, res: Response) {
  services
    .getAllRestaurants()
    .then((restaurants) => res.status(200).json({ restaurants }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * GET one restaurant ✅
 */
router.get('/one/', (req: Request, res: Response) => {
  const id = req.query.id;
  services
    .getOneRestaurant(id)
    .then((restaurant) => res.status(200).json({ restaurant: restaurant }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * Create new restaurant ✅
 */
router.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  services
    .createNewRestaurant(req.body)
    .then((restaurant) => res.status(201).json({ restaurant }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * Update one restaurant
 */
router.put('/', function (req: Request, res: Response, next: NextFunction) {
  services
    .updateOneRestaurant()
    .then((restaurant) => res.status(201).json({ restaurant }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * Delete one restaurant
 */
router.delete(
  '/:name',
  function (req: Request, res: Response, next: NextFunction) {
    services
      .deleteOneRestaurant(req.body)
      .then((restaurants) => res.status(201).json({ restaurants }))
      .catch((error) => res.status(400).json({ error }));
  }
);

module.exports = router;

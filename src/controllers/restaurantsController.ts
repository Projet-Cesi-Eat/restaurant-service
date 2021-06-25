import restaurantModel from '../schema/restaurantSchema'

export class RestaurantsServices {
  
  public getAllRestaurants<RestaurantsInterface>() {
    return new Promise<RestaurantsInterface>((resolve, reject) => {
      restaurantModel.find((err: Error, restaurants: RestaurantsInterface) => {
        if (err) {
          reject(err);
        } else {
          resolve(restaurants);
        }
      })
    })
  }

}
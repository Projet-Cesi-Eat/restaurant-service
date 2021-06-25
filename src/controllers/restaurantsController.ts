import restaurantModel, {
  RestaurantsInterface,
} from '../schema/restaurantSchema';

export class RestaurantsServices {
  /**
   * GET all restaurants ✅
   */
  public getAllRestaurants<RestaurantsInterface>() {
    return new Promise<RestaurantsInterface>((resolve, reject) => {
      restaurantModel.find((err: Error, restaurants: RestaurantsInterface) => {
        if (err) {
          reject(err);
        } else {
          resolve(restaurants);
        }
      });
    });
  }

  /**
   * GET one restaurant ✅
   */
  public getOneRestaurant<RestaurantsInterface>(id: any) {
    return new Promise<RestaurantsInterface>((resolve, reject) => {
      restaurantModel.findById(
        id,
        (err: Error, restaurants: RestaurantsInterface) => {
          if (err) {
            reject(err);
          } else {
            resolve(restaurants);
          }
        }
      );
    });
  }

  /**
   * CREATE a new restaurant ✅
   */
  public createNewRestaurant<RestaurantsInterface>(body: any) {
    const newRestaurant = new restaurantModel({
      restName: body.restName,
      restArticles: body.restArticles,
      restMenu: body.restMenu,
      restContact: body.restContact,
      restOpen: body.restOpen,
    });

    return new Promise<RestaurantsInterface>((resolve, reject) => {
      newRestaurant.save((err, restaurant: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(restaurant);
        }
      });
    });
  }

  /**
   * UPDATE restaurant ✅
   */
  public updateOneRestaurant<RestaurantsInterface>() {
    return new Promise<RestaurantsInterface>((resolve, reject) => {
      restaurantModel.find((err: Error, restaurants: RestaurantsInterface) => {
        if (err) {
          reject(err);
        } else {
          resolve(restaurants);
        }
      });
    });
  }

  /**
   * DELETE restaurant ✅
   */
  public deleteOneRestaurant<RestaurantsInterface>(name: string) {
    return new Promise<RestaurantsInterface>((resolve, reject) => {
      restaurantModel.find(
        { restName: name },
        (err: Error, restaurants: RestaurantsInterface) => {
          if (err) {
            reject(err);
          } else {
            resolve(restaurants);
          }
        }
      );
    });
  }
}

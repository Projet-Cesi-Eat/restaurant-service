import { Schema, model } from 'mongoose';

export interface RestaurantsInterface {
  _id: string;
  restName: string;
  restArticles: Array<ArticleObject>;
  restMenu: Array<MenuObject>;
  restContact: Object;
  restOpen: boolean;
}

interface ArticleObject {
  type: string;
  items: Array<ItemObject>;
}

interface ItemObject {
  name: string;
  price: number;
}

interface MenuObject {
  size: string;
  price: number;
}

const restaurantsSchema = new Schema<RestaurantsInterface>({
  restName: { type: String, required: true },
  restArticles: { type: Array, required: true },
  restMenu: { type: Array, required: true },
  restContact: { type: Object, required: true },
  restOpen: { type: Boolean, required: true },
});

export default model<RestaurantsInterface>('restaurants', restaurantsSchema);

import { Types } from '@redux/types';
import { IDispatchToProps, IProduct, ICategories} from '@interfaces/products';

export const Creators: IDispatchToProps = {
  getProductsRequest: (categoryId: number) => ({
    type: Types.PRODUCTS_GET_REQUEST,
    payload: {
      categoryId
    }
  }),
  getProductsSuccess: (products: Array<IProduct>) => ({
    type: Types.PRODUCTS_GET_SUCCESS,
    payload: {
      products
    }
  }),
  getProductsFailure: (message: string | undefined) => ({
    type: Types.PRODUCTS_GET_FAILURE,
    payload: {
      message
    }
  }),
  getCategoriesRequest: () => ({
    type: Types.CATEGORIES_GET_REQUEST
  }),
  getCategoriesSuccess: (categories: Array<ICategories>) => ({
    type: Types.CATEGORIES_GET_SUCCESS,
    payload: {
      categories
    }
  }),
  getCategoriesFailure: (message: string | undefined) => ({
    type: Types.CATEGORIES_GET_FAILURE,
    payload: {
      message
    }
  })
};

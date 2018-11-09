import { Types } from '@redux/types';
import { AnyAction } from 'redux';
import { IStateToProps, IProductsGetSuccess, ICategoriesGetSuccess} from '@interfaces/products';
import { IGenericErrorAction } from '@interfaces/action';

const initialState: IStateToProps = {
  categoriesData: [],
  productsData: [],
  errorOnGetCategories: undefined,
  errorOnGetProducts: undefined,
  loading: false
};

export default function products(state: IStateToProps = initialState, action: AnyAction) {
  switch (action.type) {
    case Types.PRODUCTS_GET_REQUEST || Types.CATEGORIES_GET_REQUEST:
      return {
        ...state,
        loading: true,
        errorOnGetCategories: undefined,
        errorOnGetProducts: undefined
      };
    case Types.PRODUCTS_GET_SUCCESS:
      return {
        ...state,
        productsData: (action as IProductsGetSuccess).payload.products,
        loading: false,
        errorOnGetProducts: undefined
      };
    case Types.PRODUCTS_GET_FAILURE:
      return {
        ...state,
        loading: false,
        errorOnGetProducts: (action as IGenericErrorAction).payload.message
      };
    case Types.CATEGORIES_GET_SUCCESS:
      return {
        ...state,
        categoriesData: (action as ICategoriesGetSuccess).payload.categories,
        loading: false,
        errorOnGetCategories: undefined
      };
    case Types.CATEGORIES_GET_FAILURE:
      return {
        ...state,
        loading: false,
        errorOnGetCategories: (action as IGenericErrorAction).payload.message
      };
    default:
      return state;
  }
}

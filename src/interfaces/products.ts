import { Action } from 'redux';
import { IGenericErrorAction } from './action';

export interface IProductVariants {
  description?: string;
  imageUrl: string;
  price: number;
  title: string;
  __typename: string;
}

export interface IProduct {
  productVariants: Array<IProductVariants>;
}

export interface ICategories {
  title: string;
  id: string;
  __typename: string;
}

export interface IStateToProps {
  productsData: Array<IProductVariants>;
  categoriesData: Array<ICategories>;
  loading: boolean;
  errorOnGetProducts: string | undefined;
  errorOnGetCategories: string | undefined;
}

export interface IDispatchToProps {
  getProductsRequest(categoryId: number): IProductsGetRequest;
  getProductsSuccess(products: Array<IProductVariants>): IProductsGetSuccess;
  getProductsFailure(message: string | undefined): IGenericErrorAction;
  getCategoriesRequest(): ICategoriesGetRequest;
  getCategoriesSuccess(categories: Array<ICategories>): ICategoriesGetSuccess;
  getCategoriesFailure(message: string | undefined): IGenericErrorAction;
}

export interface IProductsGetRequest extends Action {
  type: string;
  payload: {
    categoryId: number
  };
}

export interface IProductsGetSuccess extends Action {
  type: string;
  payload: {
    products: Array<IProductVariants>
  };
}

export interface ICategoriesGetRequest extends Action {
  type: string;
}

export interface ICategoriesGetSuccess extends Action {
  type: string;
  payload: {
    categories: Array<ICategories>
  };
}

import { Action } from 'redux';
import { IGenericErrorAction } from './action';

export interface IPoc {
  adress: IAdress;
  deliveryTypes: Array<IDeliveryType>;
  id: string;
  officialName: string;
  paymentMethods: Array<IPaymentMethods>;
  phone: IPhone;
  pockWorkDay: Array<IWorkDay>;
  status: string;
  tradingName: string;
  __typename: string;
}

export interface PocRequestParams {
  lat: string;
  long: string;
}

// redux interfaces

export interface IStateToProps {
  data: Array<IPoc>;
  loading: boolean;
  getFailure: string | undefined;
  getSuccess: boolean | undefined;
}

export interface IDispatchToProps {
  getPocRequest(params: PocRequestParams): IPocRequest;
  getPocSuccess(data: Array<IPoc>): IPocSuccess;
  getPocFailure(message: string | undefined): IGenericErrorAction;
}

export interface IPocRequest extends Action {
  type: string;
  payload: {
    params: PocRequestParams
  };
}

export interface IPocSuccess extends Action {
  type: string;
  payload: {
    data: Array<IPoc>
  };
}

// interfaces without export

interface IAdress {
  adress1: string;
  adress2: string;
  city: string;
  coordinates: string;
  number: string;
  province: string;
  __typename: string;
}

interface IDeliveryType {
  active: boolean;
  deliveryTypeId: string;
  pocDeliveryType: string;
  prince: number;
  subtitle: string;
  title: string;
  __typename: string;
}

interface IPaymentMethods {
 active: boolean;
 paymentMethodId: string;
 pocPaymentMethodId: string;
 subtitle: string;
 title: SVGAnimatedString;
 __typename: string;
}

interface IPhone {
  phoneNumber: string;
  __typename: string;
}

interface IWorkDay {
  active: boolean;
  weekday: number;
  workingInterval: Array<IWorkInterval>;
  __typename: string;
}

interface IWorkInterval {
  closingTime: string;
  openingTime: string;
  __typename: string;
}

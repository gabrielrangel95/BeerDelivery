import { Action } from 'redux';

export interface IGenericErrorAction extends Action {
  type: string | undefined;
  payload: {
    message: string | undefined;
  };
}

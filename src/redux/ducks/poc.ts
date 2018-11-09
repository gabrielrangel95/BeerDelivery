import { Types } from '@redux/types';
import { AnyAction } from 'redux';
import { IStateToProps, IPocSuccess} from '@interfaces/poc';
import { IGenericErrorAction } from '@interfaces/action';

const initialState: IStateToProps = {
  data: [],
  getFailure: undefined,
  loading: false
};

export default function poc(state: IStateToProps = initialState, action: AnyAction) {
  switch (action.type) {
    case Types.POC_GET_REQUEST:
      return {
        ...state,
        loading: true,
        getFailure: undefined
      };
    case Types.POC_GET_SUCCESS:
      return {
        ...state,
        data: (action as IPocSuccess).payload.data,
        loading: false,
        getFailure: undefined
      };
    case Types.POC_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        getFailure: (action as IGenericErrorAction).payload.message
      };
    default:
      return state;
  }
}

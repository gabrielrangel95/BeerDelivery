import { Types } from '@redux/types';
import { IDispatchToProps, IPoc, PocRequestParams} from '@interfaces/poc';

export const Creators: IDispatchToProps = {
  getPocRequest: (params: PocRequestParams) => ({
    type: Types.POC_GET_REQUEST,
    payload: {
      params
    }
  }),
  getPocSuccess: (data: Array<IPoc>) => ({
    type: Types.POC_GET_SUCCESS,
    payload: {
      data
    }
  }),
  getPocFailure: (message: string | undefined) => ({
    type: Types.POC_GET_FAILURE,
    payload: {
      message
    }
  })
};

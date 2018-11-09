import { IStateToProps as PocsState } from './poc';
import { IStateToProps as ProducstState } from './products';

export interface IReduxState {
  poc: PocsState;
  products: ProducstState;
}

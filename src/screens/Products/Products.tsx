import * as React from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '@redux/actions/products';

// interfaces
import { IDispatchToProps, IStateToProps } from '@interfaces/products';

// ui
import { colors } from '@styles';
import {
  MainContainer,
  Title
} from './ProductsStyle';

type IProps = IStateToProps & IDispatchToProps;

class Products extends React.Component<IProps, any> {
  static navigationOptions = {
    title: 'Produtos',
    headerStyle: {
      backgroundColor: colors.black
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  componentDidMount() {
    const { getCategoriesRequest, getProductsRequest } = this.props;
    getProductsRequest(0); // will get all products
    getCategoriesRequest(); // will get all categories
  }

  render() {
    console.log(this.props);
    return(
      <MainContainer>
        <Title>Products</Title>
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.products
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ ...ProductsActions }, dispatch);

const ProductsConnected = connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export { ProductsConnected as Products };

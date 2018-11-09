import * as React from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '@redux/actions/products';

// interfaces
import { IDispatchToProps, IStateToProps } from '@interfaces/products';

// components
import { FlatList } from 'react-native';
import { ProductCard } from '@components';
// ui
import { colors } from '@styles';
import {
  LoaderContainer,
  MainContainer,
  CategoriesContainer,
  Loader
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

  componentWillReceiveProps(nextProps: IProps) {
    console.log(nextProps);
  }

  renderItem = (item) => <ProductCard item={item} />;

  render() {
    const { loading, productsData } = this.props;
    if (loading) {
      return(
        <LoaderContainer>
          <Loader color={colors.black} />
        </LoaderContainer>
      );
    }
    return(
      <MainContainer>
        <FlatList
          data={productsData}
          numColumns={2}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.title}
          contentContainerStyle={{ paddingVertical: 12 }}
        />
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

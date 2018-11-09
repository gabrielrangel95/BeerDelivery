import * as React from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '@redux/actions/products';

// interfaces
import { IDispatchToProps, IStateToProps } from '@interfaces/products';

// components
import { FlatList } from 'react-native';
import { ProductCard, Button, CategoriesModal} from '@components';
// ui
import { colors } from '@styles';
import {
  LoaderContainer,
  MainContainer,
  CategoriesContainer,
  Loader
} from './ProductsStyle';

type IProps = IStateToProps & IDispatchToProps;

interface IState {
  categoriesModalVisible: boolean;
}

class Products extends React.Component<IProps, IState> {
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

  state = {
    categoriesModalVisible: false
  };

  componentDidMount() {
    const { getCategoriesRequest, getProductsRequest } = this.props;
    getProductsRequest(0); // will get all products
    getCategoriesRequest(); // will get all categories
  }

  openCategoriesModal = () => {
    this.setState({ categoriesModalVisible: true });
  }

  closeCategoriesModal = () => {
    this.setState({ categoriesModalVisible: false });
  }

  confirmChageCategory = (categotyId) => {
    console.log(categotyId);
    this.props.getProductsRequest(categotyId);
    this.closeCategoriesModal();
  }

  renderItem = (item) => <ProductCard item={item} />;

  render() {
    const { loading, productsData, categoriesData } = this.props;
    const { categoriesModalVisible } = this.state;
    if (loading) {
      return (
        <LoaderContainer>
          <Loader color={colors.black} />
        </LoaderContainer>
      );
    }
    return (
      <MainContainer>
        <FlatList
          data={productsData}
          numColumns={2}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingVertical: 12 }}
        />
        <CategoriesContainer>
          <Button
            text="CATEGORIAS"
            onPress={this.openCategoriesModal}
          />
        </CategoriesContainer>
        <CategoriesModal
          modalVisible={categoriesModalVisible}
          categories={categoriesData}
          closeModal={this.closeCategoriesModal}
          confirmChageCategory={this.confirmChageCategory}
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

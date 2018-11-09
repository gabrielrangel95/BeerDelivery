import * as React from 'react';
import { IProductVariants } from '@interfaces/products';
import {
  CardContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  Loader,
  QuantityContainer,
  ActionButton,
  QuantityText
} from './ProductCardStyle';
import { colors } from '@styles';
import { MaterialIcons } from '@expo/vector-icons';

interface IProps {
  item: {
    item: IProductVariants
  };
}

interface IState {
  quantity: number;
}

class ProductCard extends React.PureComponent<IProps, IState> {
  state = {
    quantity: 0
  };

  handleAdd = () => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  handleRemove = () => {
    const { quantity } = this.state;
    const newQuantity = quantity - 1 > 0 ? quantity - 1 : 0;
    this.setState({ quantity: newQuantity });
  }

  render() {
    const { item } = this.props;
    const { quantity } = this.state;
    if (!item.item) {
      return (
        <CardContainer>
          <Loader color={colors.black} />
        </CardContainer>
      );
    }
    return (
      <CardContainer>
        <ProductImage
          resizeMode="cover"
          source={{ uri: item.item.imageUrl }}
        />
        <ProductName numberOfLines={2}>{item.item.title}</ProductName>
        <ProductPrice>R$ {item.item.price}</ProductPrice>
        <QuantityContainer>
          <ActionButton onPress={this.handleAdd}>
            <MaterialIcons name="add" size={14} color={colors.black} />
          </ActionButton>
          <QuantityText>{quantity}</QuantityText>
          <ActionButton  onPress={this.handleRemove}>
            <MaterialIcons name="remove" size={14} color={colors.black} />
          </ActionButton>
        </QuantityContainer>
      </CardContainer>
    );
  }
};

export { ProductCard };

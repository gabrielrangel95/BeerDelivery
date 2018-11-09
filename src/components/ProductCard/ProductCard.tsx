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

const ProductCard = (props: IProps) => {
  const { item } = props;
  if (!item.item) {
    return(
      <CardContainer>
        <Loader color={colors.black}/>
      </CardContainer>
    );
  }
  return(
    <CardContainer>
      <ProductImage
        resizeMode="cover"
        source={{ uri: item.item.imageUrl }}
      />
      <ProductName numberOfLines={2}>{item.item.title}</ProductName>
      <ProductPrice>R$ {item.item.price}</ProductPrice>
      <QuantityContainer>
        <ActionButton>
          <MaterialIcons name="add" size={14} color={colors.black}/>
        </ActionButton>
        <QuantityText>0</QuantityText>
        <ActionButton>
          <MaterialIcons name="remove" size={14} color={colors.black}/>
        </ActionButton>
      </QuantityContainer>
    </CardContainer>
  );
};

export { ProductCard };

import * as React from 'react';
import { Modal, Picker } from 'react-native';
import {
  Container,
  DataContainer,
  Title,
  ButtonsContainer
} from './CategoriesModalStyle';
import { Button } from '../index';
import { ICategories } from '@interfaces/products';

interface IProps {
  categories: Array<ICategories>;
  modalVisible: boolean;
  closeModal(): void;
  confirmChageCategory(categoryId): void;
}

interface IState {
  selected: number;
}

class CategoriesModal extends React.PureComponent<IProps, IState> {

  state = {
    selected: 0
  };

  handleChangeCategory = (itemValue) => {
    this.setState({ selected: itemValue });
  }

  render() {
    const { categories, modalVisible, closeModal, confirmChageCategory } = this.props;
    const { selected } = this.state;
    const data = [...categories, { id: 0, title: 'Todas' }];
    return (
      <Modal
        visible={modalVisible}
        onRequestClose={closeModal}
        transparent
      >
        <Container>
          <DataContainer>
            <Title>Selecionar categoria</Title>
            <Picker
              selectedValue={selected}
              style={{ width: '100%' }}
              onValueChange={this.handleChangeCategory}
            >
              {
                data.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.title}
                    value={item.id}
                  />
                ))
              }
            </Picker>
          </DataContainer>
          <ButtonsContainer>
            <Button
              text="CONFIRMAR"
              onPress={() => confirmChageCategory(selected)}
            />
            <Button
              text="CANCELAR"
              onPress={closeModal}
            />
          </ButtonsContainer>
        </Container>
      </Modal>
    );
  }
}

export { CategoriesModal };

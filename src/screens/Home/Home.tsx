import * as React from 'react';
import { Keys } from '@keys';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PocActions } from '@redux/actions/poc';

// interfaces
import { IDispatchToProps, IStateToProps } from '@interfaces/poc';

// components
import { Alert } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button } from '@components';
// ui
import {
  MainContainer,
  Subtitle,
  Title,
  InputStyle
} from './HomeStyle';

// utils
const defaultPlace = { description: 'R. Américo Brasiliense, São Paulo', geometry: { location: { lat: -23.632919, lng: -46.699453 } } };

type IProps = IStateToProps & IDispatchToProps;

interface IState {
  lat: string;
  long: string;
}

class Home extends React.PureComponent<IProps, IState> {
  static navigationOptions = {
    header: null
  };

  state = {
    lat: '',
    long: ''
  };

  handleLocationPress = (data, details) => {
    const dataLocation = data.geometry ? data.geometry.location : null;
    const detailsLocation = details.geometry ? details.geometry.location : null;
    if (dataLocation || detailsLocation) {
      const lat = dataLocation ? dataLocation.lat : detailsLocation.lat;
      const long = dataLocation ? dataLocation.lng : detailsLocation.lng;
      this.setState({ lat, long });
    } else {
      Alert.alert('Falha ao obter dados do endereço!');
    }
  }

  onPressVerProdutos = () => {
    const { lat, long } = this.state;
    if (lat && long) {
      this.props.getPocRequest({ lat, long});
    } else {
      Alert.alert('Insira o endereço de entrega!');
    }
  }

  render() {
    const { loading } = this.props;
    return (
      <MainContainer>
        <Title>Beer Delivery.</Title>
        <Subtitle>Bebida gelada, rápida a preço baixo</Subtitle>

        <GooglePlacesAutocomplete
          placeholder='Endereço de entrega'
          minLength={2}
          listViewDisplayed='auto'
          autoFocus={false}
          returnKeyType={'search'}
          fetchDetails={true}
          renderDescription={row => row.description || row.vicinity}
          onPress={(data, details) => this.handleLocationPress(data, details)}
          query={{
            key: Keys.MapsApiKey,
            language: 'pt-BR'
          }}
          styles={InputStyle}
          currentLocation={true}
          currentLocationLabel="Localização Atual"
          nearbyPlacesAPI='GooglePlacesSearch'
          GooglePlacesSearchQuery={{ rankby: 'distance' }}
          predefinedPlaces={[defaultPlace]}
          debounce={200}
        />
        <Button
          text="VER PRODUTOS"
          loading={loading}
          onPress={loading ? undefined : this.onPressVerProdutos}
        />
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.poc.data,
  loading: state.poc.loading,
  getFailure: state.poc.getFailure
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ ...PocActions }, dispatch);

const HomeConnected = connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export { HomeConnected as Home };

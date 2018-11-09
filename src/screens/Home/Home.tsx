import * as React from 'react';
import { Keys } from '@keys';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PocActions } from '@redux/actions/poc';

// interfaces
import { IDispatchToProps, IStateToProps } from '@interfaces/poc';
import { IReduxState } from '@interfaces/reduxState';

// components
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// ui
import {
  MainContainer,
  Subtitle,
  Title,
  InputStyle
} from './HomeStyle';

// utils
const defaultPlace = { description: 'PoC', geometry: { location: { lat: -23.632919, lng: -46.699453 } } };

type IProps = IStateToProps & IDispatchToProps;

interface IState {
  lat: number | undefined;
  long: number | undefined;
}

class Home extends React.PureComponent<IProps, IState> {
  static navigationOptions = {
    header: null
  };

  state = {
    lat: undefined,
    long: undefined
  };

  handleLocationPress = (data) => {
    const { location } = data.geometry;
    this.setState({
      lat: location.lat,
      long: location.lng
    });
    this.props.getPocRequest({ lat: location.lat, long: location.lng});
  }

  render() {
    console.log(this.props);
    return (
      <MainContainer>
        <Title>Beer Delivery.</Title>
        <Subtitle>Bebida gelada, rápida a preço baixo</Subtitle>
        <GooglePlacesAutocomplete
          placeholder='Endereço de Entrega'
          minLength={3}
          autoFocus={false}
          returnKeyType={'search'}
          listViewDisplayed='auto'
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data) => this.handleLocationPress(data) }
          getDefaultValue={() => ''}
          query={{
            key: Keys.MapsApiKey,
            language: 'pt',
            types: '(address)'
          }}
          styles={InputStyle}
          currentLocation={true}
          currentLocationLabel="Localização Atual"
          nearbyPlacesAPI='GooglePlacesSearch'
          predefinedPlaces={[defaultPlace]}
          debounce={200}
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

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnBoardScreen from './pages/OnBoardScreen';
import HomeScreen from './pages/HomeScreen';
import AccountScreen from './pages/AccountScreen';
import HotelScreen from './pages/HotelScreen';
import EventScreen from './pages/EventScreen';
import RestaurantScreen from './pages/RestaurantScreen';
import TripScreen from './pages/TripsScreen';
import DetailScreen from './pages/DetailScreen';
import Registration from './pages/Registration';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="OnBoard"
          component={OnBoardScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="Hotel"
          component={HotelScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="Event"
          component={EventScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="Restaurant"
          component={RestaurantScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="Trips"
          component={TripScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="Account"
          component={AccountScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="Detail"
          component={DetailScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}

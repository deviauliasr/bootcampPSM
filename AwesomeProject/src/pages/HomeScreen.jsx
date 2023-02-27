import {
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../../data';
import MenuContainer from './MenuContainer';
import TopTripsContainer from './TopTripsContainer';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-white relative pt-6">
      <ScrollView>
        <View className="flex-row items-center justify-between px-4">
          <View>
            <Text className="text-[26px] text-[#0b656bcf] font-bold">
              Discover
            </Text>
            <Text className="text-[20px] text-[#527283]">the Beauty today</Text>
          </View>
        </View>
        <View className="flex-row items-center  mx-4 rounded-xl py-1 px-4 shadow-xl mt-3">
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: 'YOUR API KEY',
              language: 'en',
            }}
          />
        </View>
        <View className="flex-row items-center justify-between px-5 mt-4">
          <TouchableOpacity
            className="items-center justify-center space-y-2"
            onPress={() => navigation.navigate('Hotel')}>
            <MenuContainer
              key={'Hotel'}
              title="Hotel"
              imageSrc={{
                uri: 'https://www.pngmart.com/files/4/Hotel-PNG-Image.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="items-center justify-center space-y-2"
            onPress={() => navigation.navigate('Event')}>
            <MenuContainer
              key={'Event'}
              title="Event"
              imageSrc={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3113/3113021.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="items-center justify-center space-y-2"
            onPress={() => navigation.navigate('Restaurant')}>
            <MenuContainer
              key={'Restaurant'}
              title="Restaurant"
              imageSrc={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1996/1996055.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="items-center justify-center space-y-2"
            onPress={() => navigation.navigate('Trips')}>
            <MenuContainer
              key={'Trips'}
              title="Trips"
              imageSrc={{
                uri: 'https://cdn-icons-png.flaticon.com/512/201/201623.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[18px] font-bold">
              Top Trips
            </Text>
            <TouchableOpacity
              className="flex-row items-center justify-center space-x-2"
              onPress={() => navigation.navigate('Trips')}>
              <Text className="text-[#A0C4C7] text-[14px] font-sans">
                Explore &nbsp;{' '}
                <Icon name="arrow-right" size={14} color="#A0C4C7" />
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap items-center justify-evenly px-2 mt-4">
            {data.trip.map(trip => (
              <TouchableOpacity
                className="border border-gray-200 rounded-xl space-y-2 py-2 px-3 shadow-md bg-white w-[130px] my-2"
                onPress={() =>
                  navigation.navigate('Detail', {
                    title: trip.title,
                    imageSrc: trip.imageSrc,
                    loc: trip.location,
                    desc: trip.description,
                  })
                }
                key={trip.id}>
                <TopTripsContainer
                  title={trip.title}
                  imageSrc={{
                    uri: trip.imageSrc,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[18px] font-bold">
              Top Hotel
            </Text>
            <TouchableOpacity
              className="flex-row items-center justify-center space-x-2"
              onPress={() => navigation.navigate('Hotel')}>
              <Text className="text-[#A0C4C7] text-[14px] font-sans">
                Explore &nbsp;{' '}
                <Icon name="arrow-right" size={14} color="#A0C4C7" />
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap items-center justify-evenly px-2 mt-4">
            {data.hotel.map(hotel => (
              <TouchableOpacity
                className="border border-gray-200 rounded-xl space-y-2 py-2 px-3 shadow-md bg-white w-[130px] my-2"
                onPress={() =>
                  navigation.navigate('Detail', {
                    title: hotel.title,
                    imageSrc: hotel.imageSrc,
                    loc: hotel.location,
                    desc: hotel.description,
                  })
                }
                key={hotel.id}>
                <TopTripsContainer
                  title={hotel.title}
                  imageSrc={{
                    uri: hotel.imageSrc,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[18px] font-bold">
              Top Restaurant
            </Text>
            <TouchableOpacity
              className="flex-row items-center justify-center space-x-2"
              onPress={() => navigation.navigate('Restaurant')}>
              <Text className="text-[#A0C4C7] text-[14px] font-sans">
                Explore &nbsp;{' '}
                <Icon name="arrow-right" size={14} color="#A0C4C7" />
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap items-center justify-evenly px-2 mt-4">
            {data.restaurant.map(rest => (
              <TouchableOpacity
                className="border border-gray-200 rounded-xl space-y-2 py-2 px-3 shadow-md bg-white w-[130px] my-2"
                onPress={() =>
                  navigation.navigate('Detail', {
                    title: rest.title,
                    imageSrc: rest.imageSrc,
                    loc: rest.location,
                    desc: rest.description,
                  })
                }
                key={rest.id}>
                <TopTripsContainer
                  title={rest.title}
                  imageSrc={{
                    uri: rest.imageSrc,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[18px] font-bold">
              Top Event
            </Text>
            <TouchableOpacity
              className="flex-row items-center justify-center space-x-2"
              onPress={() => navigation.navigate('Event')}>
              <Text className="text-[#A0C4C7] text-[14px] font-sans">
                Explore &nbsp;{' '}
                <Icon name="arrow-right" size={14} color="#A0C4C7" />
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap items-center justify-evenly px-2 mt-4">
            {data.event.map(event => (
              <TouchableOpacity
                className="border border-gray-200 rounded-xl space-y-2 py-2 px-3 shadow-md bg-white w-[130px] my-2"
                onPress={() =>
                  navigation.navigate('Detail', {
                    title: event.title,
                    imageSrc: event.imageSrc,
                    loc: event.location,
                    desc: event.description,
                  })
                }
                key={event.id}>
                <TopTripsContainer
                  title={event.title}
                  imageSrc={{
                    uri: event.imageSrc,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View className=" relative items-center justify-center">
        <View className="flex-row absolute bottom-5 w-[295px] h-[55px] bg-[#00BCC9] rounded-lg items-center justify-around shadow-lg">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View className="w-[35px] h-[35px] items-center justify-center rounded-lg shadow-lg">
              <Icon name="home" size={24} color="#ffffff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View className="w-[35px] h-[35px] items-center justify-center rounded-lg shadow-lg">
              <Icon name="search" size={20} color="#ffffff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View className="w-[35px] h-[35px] items-center justify-center rounded-lg shadow-lg">
              <Icon name="heart-o" size={22} color="#ffffff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <View className="w-[35px] h-[35px] items-center justify-center rounded-lg shadow-lg">
              <Icon name="user" size={24} color="#ffffff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

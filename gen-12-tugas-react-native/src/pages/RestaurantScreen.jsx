import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../../data';
import TopTripsContainer from './TopTripsContainer';

export default function RestaurantScreen({navigation}) {
  return (
    <>
      <SafeAreaView className="flex-1 bg-white relative">
        <ScrollView className="flex-1 px-2 py-4">
          <View className="relative bg-white shadow-lg">
            <View>
              <View className="flex-row flex-wrap items-center justify-evenly px-2 mt-20 object-cover">
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

            <View className="absolute flex-row inset-x-0 top-4 px-4">
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                className="w-6 h-6 rounded-md items-center justify-center bg-[#06B2BE] mt-2">
                <Icon name="arrow-left" size={14} color="#ffffff" />
              </TouchableOpacity>
              <View className="justify-center items-center mx-[60px]">
                <Text className="font-bold text-[22px] text-[#06B2BE] mt-1">
                  Restaurant
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

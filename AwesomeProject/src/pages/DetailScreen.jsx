import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DetailScreen({navigation, route}) {
  const [like, setLike] = useState('heart-o');
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-2 py-4">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: route.params.imageSrc,
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />

          <View className="absolute flex-row inset-x-0 top-4 justify-between px-4">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-8 h-8 rounded-md items-center justify-center bg-white">
              <Icon name="arrow-left" size={14} color="#A0C4C7" />
            </TouchableOpacity>

            <TouchableOpacity
              className="w-8 h-8 rounded-md items-center justify-center bg-[#06B2BE]"
              onPress={() => setLike('heart')}>
              <Icon name={like} size={14} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 bottom-3 justify-between px-4">
            <View className="flex-row space-x-2 items-center shadow-xl">
              <Text className="text-[32px] font-bold text-gray-100">$ 99/</Text>
              <Text className="text-[12px] font-bold text-gray-100">
                person
              </Text>
            </View>
          </View>
        </View>
        <View className="mt-4 px-2">
          <Text className="text-[25px] text-[#2C7379] font-bold">
            {route.params.title}
          </Text>
          <View>
            <Text className="text-[13px] text-[#2C7379] ">
              <Icon name="map-marker" size={14} color="#2C7379" />
              &nbsp;{route.params.loc}
            </Text>
          </View>
        </View>

        <View className="mt-3 flex-row items-center justify-around">
          <View className=" flex-row items-center space-x-2">
            <View className="w-8 h-8 rounded-md bg-[#ffbf8b] items-center justify-center shadow-md">
              <Icon name="star" size={14} color="#ff7f00" />
            </View>
            <View>
              <Text className="text-[#515151] font-bold">4.8</Text>
              <Text className="text-[#515151] text-[11px]">2k Ratings</Text>
            </View>
          </View>
          <View className=" flex-row items-center space-x-2">
            <View className="w-8 h-8 rounded-md bg-blue-300 items-center justify-center shadow-md">
              <Icon name="cloud" size={14} color="#ffffff" />
            </View>
            <View>
              <Text className="text-[#515151] font-bold">23°C</Text>
              <Text className="text-[#515151] text-[11px]">Temperature</Text>
            </View>
          </View>
          <View className=" flex-row items-center space-x-2">
            <View className="w-8 h-8 rounded-md bg-green-300 items-center justify-center shadow-md">
              <Icon name="map-pin" size={14} color="#ffffff" />
            </View>
            <View>
              <Text className="text-[#515151] capitalize font-bold">7,2Km</Text>
              <Text className="text-[#515151] text-[11px]">Direction</Text>
            </View>
          </View>
        </View>

        <View className=" space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
          <View className="items-center space-x-6">
            <Text className="text-lg bg-white px-4 rounded-xl text-[#2C7379]">
              Know Detail
            </Text>
          </View>
          <Text>{route.params.desc}</Text>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </ScrollView>
      <View className=" relative items-center justify-center">
        <View className="flex-row absolute bottom-5 w-[295px] h-[55px] bg-[#00BCC9] rounded-lg items-center justify-around shadow-lg">
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text className="font-bold text-white text-[18px]">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

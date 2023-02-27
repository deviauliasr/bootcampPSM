import {Text, View, TouchableOpacity, Image, SafeAreaView} from 'react-native';

export default function OnBoardScreen({navigation}) {
  return (
    <SafeAreaView className=" bg-white flex-1 relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-11 h-11 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-medium">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-medium">Travel</Text>
      </View>
      <View className="px-6 mt-6 space-y-1">
        <Text className="text-[#3C6072] text-[29px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[26px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-[14px] text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus?
        </Text>
      </View>
      <View className="w-[280px] h-[280px] bg-[#00BCC9] rounded-full absolute bottom-20 -right-32"></View>
      <View className="w-[280px] h-[280px] bg-[#fd6f28] rounded-full absolute -bottom-20 -left-32"></View>
      <View className="flex-1 relative items-center justify-center">
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/010/871/296/non_2x/3d-character-traveler-running-free-png.png',
          }}
          className="w-full h-full object-cover mt-14"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="absolute bottom-16 w-[70px] h-[70px] border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <View className="w-[55px] h-[55px] items-center justify-center rounded-full bg-[#00BCC9] shadow-lg">
            <Text className="text-gray-50 text-[20px] font-semibold">GO</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

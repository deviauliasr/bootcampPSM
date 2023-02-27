import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';

export default function Registration({navigation}) {
  return (
    <SafeAreaView className=" bg-white flex-1 relative">
      <View className="flex-row px-6 mt-12 items-center space-x-2">
        <View className="w-11 h-11 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-medium">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-medium">Travel</Text>
      </View>
      <View className="px-6 mt-6 space-y-1">
        <TextInput placeholder="username" keyboardType="text" />
        <TextInput placeholder="username" keyboardType="password" />
        <Button title="Sign In" />
        <Text className="text-[#3C6072] text-[14px] px-32 py-1">or</Text>
        <Button title="Log In" />
      </View>
      <View className="flex-1 relative items-center justify-center">
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="fixed bottom-16 w-[70px] h-[70px] border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <View className="w-[55px] h-[55px] items-center justify-center rounded-full bg-[#00BCC9] shadow-lg">
            <Text className="text-gray-50 text-[20px] font-semibold">Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

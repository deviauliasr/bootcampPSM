import {Text, View, Button} from 'react-native';

export default function AccountScreen({navigation}) {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Text onPress={() => navigation.navigate('Registration')}>Sign In</Text>

        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
}

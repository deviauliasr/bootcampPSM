import {View, Text, Image} from 'react-native';
import React from 'react';

export default function MenuContainer({title, imageSrc}) {
  return (
    <>
      <View
        className={`w-16 h-16 p-2 shadow-sm rounded-full items-center justify-center bg-gray-200`}>
        <Image source={imageSrc} className="w-[40px] h-[40px] object-contain" />
      </View>
      <Text className="text-[#00BCC9] text-[12px] font-semibold">{title}</Text>
    </>
  );
}

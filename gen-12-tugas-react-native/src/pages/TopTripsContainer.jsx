import {View, Text, Image} from 'react-native';
import React from 'react';

export default function TopTripsContainer({title, imageSrc}) {
  return (
    <>
      <Image
        source={imageSrc}
        className="w-full h-[128px] rounded-xl object-cover"
      />
      <Text className="text-[#428288] text-md font-bold py-2">{title}</Text>
    </>
  );
}

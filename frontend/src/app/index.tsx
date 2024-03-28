import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import { useState } from "react";

export default function index() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 justify-center items-center bg-gray-200">
      <View className="shadow-sm bg-white p-10 rounded-xl min-w-[300px] flex justify-center items-center">
        <Text className="text-8xl font-bold text-gray-600 p-5">{count}</Text>
        <TouchableOpacity className="py-2 px-4 bg-gray-600 rounded-md">
          <Text className="text-white font-bold text-lg">Click</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

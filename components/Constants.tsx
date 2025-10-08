import React from "react";
import { FlatList, Text, View } from "react-native";

const constantsVar = [
  { name: "mp", value: 4.67 },
  { name: "me", value: 1.67 },
  { name: "mn", value: 0.88 },
  { name: "G", value: 6.67 },
  { name: "g", value: 9.81 },
  { name: "gd", value: 9.81 },
  { name: "gfd", value: 9.81 },
  { name: "gffd", value: 9.81 },
  { name: "gfffd", value: 9.81 },
  { name: "gdg", value: 9.81 },
  { name: "gdgg", value: 9.81 },
  { name: "gdggg", value: 9.81 },
  { name: "gdff", value: 9.81 },
  { name: "gdf", value: 9.81 },
  { name: "gdfff", value: 9.81 },
  { name: "gdjj1", value: 9.81 },
  { name: "gdjj2", value: 9.81 },
  { name: "gdjj3", value: 9.81 },
  { name: "gdjj4", value: 9.81 },
  { name: "gdjj5", value: 9.81 },
  { name: "gdjj6", value: 9.81 },
  { name: "gdjj7", value: 9.81 },
  { name: "gdjj8", value: 9.81 },
  { name: "gdjj9", value: 9.81 },
  { name: "k", value: 9.81 },
  { name: "k1", value: 9.81 },
  { name: "k2", value: 9.81 },
  { name: "k3", value: 9.81 },
  { name: "k4", value: 9.81 },
  { name: "k5", value: 9.81 },
  { name: "k6", value: 9.81 },
  { name: "k7", value: 9.81 },
  { name: "k8", value: 9.81 },
  { name: "k9", value: 9.81 },
  { name: "k0", value: 9.81 },
  { name: "k11", value: 9.81 },
  { name: "k12", value: 9.81 },
  { name: "k13", value: 9.81 },
  { name: "k14", value: 9.81 },
  { name: "k15", value: 9.81 },
  { name: "k16", value: 9.81 },
  { name: "k17", value: 9.81 },
  { name: "k18", value: 9.81 },
  { name: "k19", value: 9.81 },
  { name: "k20", value: 9.81 },
  { name: "k21", value: 9.81 },
  { name: "k22", value: 9.81 },
];

const Constants = () => {
  return (
    <View className="absolute   bg-red-500 bottom-0 w-full z-20 ">
      <FlatList
        data={constantsVar}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.name}:{item.value}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
        initialNumToRender={20}
      />
    </View>
  );
};

export default Constants;

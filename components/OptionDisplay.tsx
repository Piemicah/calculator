import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

type mode = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};
const OptionDisplay = ({ modalVisible, setModalVisible }: mode) => {
  const itemColor = "#fff";
  const iconSize = 25;

  const handlePress = (kind: string) => {
    setModalVisible(false);
    switch (kind) {
      case "maths":
        router.push("/formulas/maths/geometry");
        break;
      case "physics":
        router.push("/formulas/physics/mechanics");
        break;
      case "unit":
        // router.push("/formulas/index");
        break;
      case "themes":
        router.push("/themes");
        break;
      default:
        break;
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View className="w-[200px] bg-black pb-2">
        <View className="h-[50px] bg-[#101010]"></View>
        {/* maths */}
        <TouchableOpacity
          className="flex-row items-center py-[2] my-[2] pl-[4] border-b border-b-[#404040]"
          onPress={() => {
            handlePress("maths");
          }}
        >
          <MaterialCommunityIcons
            name="sigma"
            size={iconSize}
            color={itemColor}
          />
          <Text className="text-white text-[16px]">Math Formula</Text>
        </TouchableOpacity>

        {/* Physics */}
        <TouchableOpacity
          className="flex-row items-center py-[2] my-[2] pl-[4] border-b border-b-[#404040]"
          onPress={() => {
            handlePress("physics");
          }}
        >
          <Ionicons name="logo-electron" size={iconSize} color={itemColor} />
          <Text className="text-white text-[16px]">Physics Formula</Text>
        </TouchableOpacity>

        {/* Unit Conversion */}
        <TouchableOpacity
          className="flex-row items-center py-[2] my-[2] pl-[4] border-b border-b-[#404040]"
          onPress={() => {
            handlePress("unit");
          }}
        >
          <FontAwesome name="balance-scale" size={iconSize} color={itemColor} />
          <Text className="text-white text-[16px]">Unit Conversion</Text>
        </TouchableOpacity>

        {/* Themes */}
        <TouchableOpacity
          className="flex-row items-center py-[2] my-[2] pl-[4] border-b border-b-[#404040]"
          onPress={() => {
            handlePress("themes");
          }}
        >
          <Ionicons
            name="color-palette-outline"
            size={iconSize}
            color={itemColor}
          />
          <Text className="text-white text-[16px]">Themes</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default OptionDisplay;

import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const Menu = (props: any) => {
  const itemColor = "#fff";
  const iconSize = 25;

  return (
    <DrawerContentScrollView {...props} nestedScrollEnabled={true}>
      <TouchableOpacity
        className="flex-row items-center py-[4px] my-[2] pl-[4] border-b border-b-[#404040] gap-2 "
        onPress={() => {
          router.push("/formulas/maths/geometry");
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
        className="flex-row items-center py-[4] my-[2] pl-[4] border-b border-b-[#404040] gap-2"
        onPress={() => {
          router.push("/formulas/physics/mechanics");
        }}
      >
        <Ionicons name="logo-electron" size={iconSize} color={itemColor} />
        <Text className="text-white text-[16px]">Physics Formula</Text>
      </TouchableOpacity>

      {/* Unit Conversion */}
      <TouchableOpacity
        className="flex-row items-center py-[4] my-[2] pl-[4] border-b border-b-[#404040] gap-2 "
        onPress={() => {
          router.push("/converter/converterList");
        }}
      >
        <FontAwesome name="balance-scale" size={iconSize} color={itemColor} />
        <Text className="text-white text-[16px]">Unit Converter</Text>
      </TouchableOpacity>

      {/* Themes */}
      <TouchableOpacity
        className="flex-row items-center py-[4] my-[2] pl-[4] border-b border-b-[#404040] gap-2"
        onPress={() => {
          router.push("/themes");
        }}
      >
        <Ionicons
          name="color-palette-outline"
          size={iconSize}
          color={itemColor}
        />
        <Text className="text-white text-[16px]">Themes</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default Menu;

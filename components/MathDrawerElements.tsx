import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const MathDrawerElements = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} nestedScrollEnabled>
      <TouchableOpacity
        className="flex-row items-center py-[2] my-[2] pl-[4] border-b border-b-[#404040]"
        onPress={() => {
          router.push("/formulas/maths/geometry");
        }}
      >
        <Text className="text-white text-[16px]">Geometry</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center py-[2] my-[2] pl-[4] border-b border-b-[#404040]"
        onPress={() => {
          router.push("/formulas/maths/calculus");
        }}
      >
        <Text className="text-white text-[16px]">Calculus</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center py-[2] my-[2] pl-[4] border-b border-b-[#404040]"
        onPress={() => {
          router.push("/formulas/maths/trig");
        }}
      >
        <Text className="text-white text-[16px]">Trigonometry</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default MathDrawerElements;

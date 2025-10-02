import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const PhysicsDrawerElements = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} nestedScrollEnabled>
      <TouchableOpacity
        className="flex-row items-center py-[2] my-[2] pl-[4] border-b border-b-[#404040]"
        onPress={() => {
          router.push("/formulas/physics/mechanics");
        }}
      >
        <Text className="text-white text-[16px]">Mechanics</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center py-[2] my-[2] pl-[4] border-b border-b-[#404040]"
        onPress={() => {
          //   router.push("/formulas/maths/calculus");
        }}
      >
        <Text className="text-white text-[16px]">Electricity</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center py-[2] my-[2] pl-[4] border-b border-b-[#404040]"
        onPress={() => {
          //   router.push("/formulas/maths/trig");
        }}
      >
        <Text className="text-white text-[16px]">Optics</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default PhysicsDrawerElements;

import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key: string, value: string) => {
  try {
    const jvalue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jvalue);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getItem = async (key: string) => {
  try {
    const jvalue = await AsyncStorage.getItem(key);
    return jvalue ? JSON.parse(jvalue) : "default";
  } catch (error: any) {
    console.log(error);
  }
};

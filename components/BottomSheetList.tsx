import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export type BottomSheetListRef = {
  open: () => void;
  close: () => void;
};

type ListType = {
  data: {
    name?: string;
    label: string;
    value: string;
    symbol?: string;
  }[];
  title: string;
  onPress: (item: any) => void;
  isConstants: boolean;
};

const SNAP_POINTS = {
  CLOSED: SCREEN_HEIGHT,
  HALF: SCREEN_HEIGHT / 2,
  FULL: 0,
};

const BottomSheetList = forwardRef<BottomSheetListRef, ListType>(
  ({ data, title, onPress, isConstants }, ref) => {
    const [visible, setVisible] = useState(false);

    const translateY = useSharedValue(SNAP_POINTS.CLOSED);
    const opacity = useSharedValue(0);
    const startY = useSharedValue(0);

    const insets = useSafeAreaInsets();

    // --- Expose methods to parent ---
    useImperativeHandle(ref, () => ({
      open: () => {
        setVisible(true);
        opacity.value = withTiming(1, { duration: 200 });
        translateY.value = withSpring(SNAP_POINTS.HALF, { damping: 100 });
      },
      close: () => {
        opacity.value = withTiming(0, { duration: 150 });
        translateY.value = withTiming(
          SNAP_POINTS.CLOSED,
          { duration: 250 },
          (finished) => {
            if (finished) runOnJS(setVisible)(false);
          }
        );
      },
    }));

    // --- Gesture logic ---
    const pan = Gesture.Pan()
      .onStart(() => {
        startY.value = translateY.value;
      })
      .onUpdate((event) => {
        translateY.value = Math.max(
          SNAP_POINTS.FULL,
          startY.value + event.translationY
        );
      })
      .onEnd(() => {
        if (translateY.value > SCREEN_HEIGHT * 0.6) {
          opacity.value = withTiming(0, { duration: 150 });
          translateY.value = withTiming(
            SNAP_POINTS.CLOSED,
            { duration: 250 },
            (finished) => {
              if (finished) runOnJS(setVisible)(false);
            }
          );
        } else if (translateY.value < SCREEN_HEIGHT * 0.25) {
          translateY.value = withSpring(SNAP_POINTS.FULL);
        } else {
          translateY.value = withSpring(SNAP_POINTS.HALF);
        }
      });

    // --- Animation style ---
    const animatedSheet = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }],
    }));

    const animatedBackdrop = useAnimatedStyle(() => ({
      opacity: opacity.value,
    }));

    if (!visible) return null;

    return (
      <Animated.View style={[StyleSheet.absoluteFill, animatedBackdrop]}>
        {/* Transparent backdrop */}
        <TouchableWithoutFeedback
          onPress={() => {
            // Close when clicking outside
            opacity.value = withTiming(0, { duration: 150 });
            translateY.value = withTiming(
              SNAP_POINTS.CLOSED,
              { duration: 250 },
              (finished) => {
                if (finished) runOnJS(setVisible)(false);
              }
            );
          }}
        >
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>

        {/* Bottom Sheet */}
        <Animated.View
          style={[styles.sheet, animatedSheet, { bottom: insets.bottom }]}
        >
          {/* Header */}
          <View className="w-12 h-1.5 bg-gray-400/60 rounded-full self-center my-2" />
          <GestureDetector gesture={pan}>
            <View className="flex-row items-center justify-between px-2 pb-3 border-b border-b-[#707070ad]">
              <Text className="text-lg font-bold text-white">{title}</Text>

              {isConstants ? (
                <TouchableOpacity
                  onPress={() => ref && (ref as any).current?.close()}
                >
                  <Ionicons
                    name="close-circle-outline"
                    size={30}
                    color="#fff"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    router.push("/converter/converterList");
                  }}
                >
                  <Text className="text-[#d465f0]">MORE</Text>
                </TouchableOpacity>
              )}
            </View>
          </GestureDetector>

          {/* FlatList */}
          <FlatList
            data={data}
            keyExtractor={(item) => item.label}
            numColumns={isConstants ? 1 : 2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  onPress(item);
                  ref && (ref as any).current?.close();
                }}
                className={`${
                  isConstants
                    ? "flex-row items-center justify-between px-3 py-2 border-b border-b-[#707070ad]"
                    : "flex-row"
                }`}
              >
                {isConstants ? (
                  <>
                    <View className="flex-col">
                      <Text className="text-white">{item.name}</Text>
                      <Text className="text-[#e1e1e1]">{item.label}</Text>
                    </View>
                    <Text className="text-white">{item.symbol}</Text>
                  </>
                ) : (
                  <View className="flex-row">
                    <Text className="text-[#e1e1e1]">{index + 1}: </Text>
                    <Text className="text-white">{item.label}</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => (
              <View className="w-full h-[1px] bg-[#707070ad]" />
            )}
            columnWrapperStyle={
              !isConstants
                ? {
                    justifyContent: "space-between",
                    marginVertical: 10,
                    paddingHorizontal: 20,
                  }
                : undefined
            }
          />
        </Animated.View>
      </Animated.View>
    );
  }
);

export default BottomSheetList;

const styles = StyleSheet.create({
  sheet: {
    position: "absolute",
    top: 26,
    // bottom: 0,
    width: "100%",
    backgroundColor: "#202020",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

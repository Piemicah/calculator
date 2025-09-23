import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState<boolean | undefined>();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setIsLandscape(width > height ? true : false);
  }, [width, height]);
  return { isLandscape };
};

export default useOrientation;

import { View, Text } from "react-native";

type ScreenContainerProps = Record<string, never>;

export default function ScreenContainer(_props: ScreenContainerProps) {
  return (
    <View>
      <Text>Screen Container</Text>
    </View>
  );
}

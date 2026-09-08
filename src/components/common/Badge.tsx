import { View, Text } from "react-native";

type BadgeProps = Record<string, never>;

export default function Badge(_props: BadgeProps) {
  return (
    <View>
      <Text>Badge</Text>
    </View>
  );
}

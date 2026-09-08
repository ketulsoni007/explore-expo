import { View, Text } from "react-native";

type DrawerContentProps = Record<string, never>;

export default function DrawerContent(_props: DrawerContentProps) {
  return (
    <View>
      <Text>Drawer Content</Text>
    </View>
  );
}

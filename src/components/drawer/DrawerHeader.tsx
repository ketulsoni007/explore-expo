import { View, Text } from "react-native";

type DrawerHeaderProps = Record<string, never>;

export default function DrawerHeader(_props: DrawerHeaderProps) {
  return (
    <View>
      <Text>Drawer Header</Text>
    </View>
  );
}

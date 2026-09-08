import { View, Text } from "react-native";

type HeaderProps = Record<string, never>;

export default function Header(_props: HeaderProps) {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
}

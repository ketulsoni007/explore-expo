import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DetailHeaderCard from "./DetailHeaderCard";
import DetailInformation from "./DetailInformation";
import ImageGallery from "./ImageGallery";

const SearchDetailPage = () => {
  const params = useLocalSearchParams();
  const isHotel = useMemo(() => params?.category === "hotel", [params?.category]);

  return (
    <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
      <ImageGallery isHotel={isHotel} />
      <View style={styles.container}>
        <DetailHeaderCard isHotel={isHotel} />
        <DetailInformation isHotel={isHotel} />
      </View>
      <View style={{paddingBottom:80}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    paddingHorizontal: 15,
  },
});

export default SearchDetailPage;
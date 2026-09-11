import { ScrollView, StyleSheet, View } from 'react-native';
import ActivitiesCards from './ActivitiesCards';
import ActivitiesFooter from './ActivitiesFooter';
import ActivitiesHeader from './ActivitiesHeader';
import ActivitiesHistory from './ActivitiesHistory';

const ActivitiesView = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ActivitiesHeader />
      <ActivitiesCards />
      <ActivitiesHistory />
      <ActivitiesFooter />
      <View style={{paddingBottom:130}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal:16
  },
});

export default ActivitiesView;

import AnnouncementPanel from '../components/AnnouncementPanel';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Campus Connect</Text>

        <Text>One campus. Connected students.</Text>
        <Text>Welcome to the Week 2 project!</Text>

        <AnnouncementPanel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  content: {
    width: '100%',
    maxWidth: 520,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
});


import { StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../../types/announcement';
import { getUnreadAnnouncements } from '../../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
  {
    id: 'a1',
    title: 'Enrollment reminders',
    category: 'Academic',
    read: false,
  },
  {
    id: 'a2',
    title: 'Campus orientation',
    category: 'Events',
    read: true,
  },
  {
    id: 'a3',
    title: 'Library schedule',
    category: 'Notice',
    read: false,
  },
];

export default function HomeScreen() {
  const unread = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Campus Connect</Text>

        <Text>One campus. Connected students.</Text>
        <Text>Welcome to the Week 2 project!</Text>

        <Text style={styles.heading}>Announcements</Text>

        <Text style={styles.count}>
          Unread announcements: {unread.length}
        </Text>

        <View style={styles.announcementList}>
          {sampleAnnouncements.map(item => (
            <View key={item.id} style={styles.announcement}>
              <Text style={styles.announcementTitle}>
                {item.title}
              </Text>

              <Text style={styles.announcementDetail}>
                Category: {item.category}
              </Text>

              <Text style={styles.announcementDetail}>
                Status: {item.read ? 'Read' : 'Unread'}
              </Text>
            </View>
          ))}
        </View>
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
  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 10,
  },
  announcementList: {
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  announcement: {
    width: '100%',
    padding: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  announcementDetail: {
    textAlign: 'center',
  },
});

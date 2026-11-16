
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import AnnouncementCard from './AnnouncementCard';

type AnnouncementItem = {
  id: string;
  title: string;
  category: string;
  read: boolean;
};

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>([
    {
      id: 'ANN-001',
      title: 'Enrollment reminders',
      category: 'Academic',
      read: false,
    },
    {
      id: 'ANN-002',
      title: 'Campus orientation',
      category: 'Events',
      read: true,
    },
    {
      id: 'ANN-003',
      title: 'Library schedule',
      category: 'Notice',
      read: false,
    },
  ]);

  const unreadCount = announcements.filter(
    announcement => !announcement.read
  ).length;

  const handleMarkRead = (id: string) => {
    setAnnouncements(currentAnnouncements =>
      currentAnnouncements.map(announcement =>
        announcement.id === id
          ? { ...announcement, read: !announcement.read }
          : announcement
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Announcements
      </Text>

      <Text style={styles.counter}>
        Unread announcements: {unreadCount}
      </Text>

      <ScrollView>
        {announcements.map(announcement => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            category={announcement.category}
            read={announcement.read}
            onMarkRead={() => handleMarkRead(announcement.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
    alignItems: 'center',
  },
  heading: {
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  counter: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
    color: '#2563EB',
    textAlign: 'center',
  },
});

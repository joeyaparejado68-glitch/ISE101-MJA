
import { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

export default function UnreadCounter() {
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Unread announcements: {unreadCount}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => setUnreadCount(count => count + 1)}
      >
        <Text style={styles.buttonText}>
          Simulate new announcement
        </Text>
      </Pressable>

      <Pressable
        style={styles.clearButton}
        onPress={() => setUnreadCount(0)}
      >
        <Text style={styles.buttonText}>
          Clear counter
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  clearButton: {
    backgroundColor: '#DC2626',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

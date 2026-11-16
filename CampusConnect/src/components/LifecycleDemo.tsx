
import { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // Mount and Update
  useEffect(() => {
    console.log('Component mounted or count updated:', count);

    return () => {
      console.log('Cleanup: previous effect is being removed');
    };
  }, [count]);

  // Unmount
  useEffect(() => {
    console.log('LifecycleDemo mounted');

    return () => {
      console.log('LifecycleDemo unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Component Lifecycle</Text>

      <Text>Count: {count}</Text>

      <Pressable
        style={styles.button}
        onPress={() => setCount(previous => previous + 1)}
      >
        <Text style={styles.buttonText}>Update Count</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

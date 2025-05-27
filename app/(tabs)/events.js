import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import EventCard from '../../components/EventCard';

// Mock event data
const mockEvents = [
  {
    id: '1',
    title: 'Tech Meetup 2024',
    startTime: new Date('2024-03-15T18:00:00'),
    rsvpStatus: 'Going'
  },
  {
    id: '2',
    title: 'Design Workshop',
    startTime: new Date('2024-03-20T14:00:00'),
    rsvpStatus: 'Maybe'
  },
  {
    id: '3',
    title: 'Networking Mixer',
    startTime: new Date('2024-03-25T19:00:00'),
    rsvpStatus: null
  },
  {
    id: '4',
    title: 'Startup Pitch Night',
    startTime: new Date('2024-04-01T17:00:00'),
    rsvpStatus: null
  },
  {
    id: '5',
    title: 'AI Conference',
    startTime: new Date('2024-04-10T09:00:00'),
    rsvpStatus: null
  }
];

export default function EventsScreen() {
  const [events, setEvents] = useState(mockEvents);

  const handleRSVP = (eventId) => {
    setEvents(prevEvents => 
      prevEvents.map(event => {
        if (event.id === eventId) {
          // Cycle through RSVP states: null -> Going -> Maybe -> Not Going -> null
          const newStatus = !event.rsvpStatus ? 'Going' :
                           event.rsvpStatus === 'Going' ? 'Maybe' :
                           event.rsvpStatus === 'Maybe' ? 'Not Going' : null;
          
          // Show confirmation alert
          Alert.alert(
            'RSVP Updated',
            `You are now ${newStatus || 'not RSVP\'d'} for ${event.title}`,
            [{ text: 'OK' }]
          );
          
          return { ...event, rsvpStatus: newStatus };
        }
        return event;
      })
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onRSVP={handleRSVP}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121417',
  },
  list: {
    padding: 16,
  },
}); 
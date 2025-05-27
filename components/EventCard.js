import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function EventCard({ event, onRSVP }) {
  const formatDate = (timestamp) => {
    if (!timestamp) return 'Date TBD';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{event.title}</Text>
        {event.rsvpStatus && (
          <View style={[styles.statusBadge, styles[event.rsvpStatus.toLowerCase()]]}>
            <Text style={styles.statusText}>{event.rsvpStatus}</Text>
          </View>
        )}
      </View>

      <View style={styles.dateContainer}>
        <FontAwesome name="calendar" size={16} color="#8E8E93" />
        <Text style={styles.date}>{formatDate(event.startTime)}</Text>
      </View>

      <TouchableOpacity 
        style={[styles.rsvpButton, event.rsvpStatus === 'Going' && styles.rsvpButtonActive]}
        onPress={() => onRSVP && onRSVP(event.id)}
      >
        <Text style={[styles.rsvpButtonText, event.rsvpStatus === 'Going' && styles.rsvpButtonTextActive]}>
          {event.rsvpStatus === 'Going' ? 'Going' : 'RSVP'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  going: {
    backgroundColor: '#34C759',
  },
  maybe: {
    backgroundColor: '#FF9500',
  },
  notgoing: {
    backgroundColor: '#FF3B30',
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  date: {
    color: '#8E8E93',
    marginLeft: 8,
    fontSize: 14,
  },
  rsvpButton: {
    backgroundColor: '#2C2C2E',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  rsvpButtonActive: {
    backgroundColor: '#34C759',
  },
  rsvpButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  rsvpButtonTextActive: {
    color: '#FFFFFF',
  },
}); 
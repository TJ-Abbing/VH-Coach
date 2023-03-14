import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Image 
      style={styles.logo}
      source={require('./assets/VHCoach-logopng.png')}
      />
      </View>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://www.virtuelehelden.nl/wp-content/uploads/2022/09/roel-willemse-linkedin-training.png' }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Hey, Roel!</Text>
          <Text style={styles.pronouns}>Hij / hem</Text>
          <Text style={styles.description}>
            LinkedIn Tijger & Influencer
          </Text>

          <Text style={styles.pillars}>Jouw schrijf plannen</Text>
          <Text style={styles.pillarPrompts}>Meeting met Reële mensen uitschrijven</Text>
          <Text style={styles.pillarPrompts}>Hoeveel haargel is te veel haargel?</Text>
          <Text style={styles.pillarPrompts}>Waarom Moffel en Piertje het beste jeugdprogramma was</Text>


          <TouchableOpacity style={styles.alarmButton}>
            <Text>Zet Alarm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E6C662',
    height: 200,
    zIndex: 100,
  },
  avatar: {
    width: 164,
    height: 164,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 115,
    zIndex: 101,
  },
  logo: {
    width: 112,
    height: 112,
    resizeMode: "contain",
    position: 'absolute',
    top: 25,
    left: 20,
  },
  body: {
    backgroundColor: '#FEFEFE',
  },
  bodyContent: {
    flex: 0,
    alignItems: 'center',
    padding: 30,
    marginTop: 50,
  },
  name: {
    fontSize: 18,
    color: '#010101',
    fontWeight: '600',
  },
  pronouns: {
    fontSize: 14,
    color: '#010101',
  },
  description: {
    fontSize: 14,
    color: '#010101',
    textAlign: 'center',
  },
  pillars: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginLeft: 25,
    marginTop: 40,
    fontSize: 16,
    fontWeight: 'bold',
  },
  pillarPrompts: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 15,
    fontSize: 14,
    width: 330,
  },
  alarmButton: {
    marginTop: 80,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#E6C662',
  },
})

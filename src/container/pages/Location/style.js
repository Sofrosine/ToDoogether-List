import React from 'react';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAD0D9',
    justifyContent: 'center',
  },
  backgroundContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '80%',
  },
  imageProfile: {height: 120, width: 120, borderRadius: 150},
  notesText1: {
    color: '#F7F7F7',
    fontSize: 24,
  },
  notesText2: {
    color: '#F7F7F7',
    fontSize: 24,
    width:'70%'
  },
  notesUpdateContainer: {
    // borderWidth: 1,
    // borderColor: '#F7F7F7',
    backgroundColor: '#AAD0D9',
    padding: '8%',
    borderRadius: 20,
  },
  notesUpdateText: {
    fontSize: 18,
    color: '#F7F7F7',
  },
});

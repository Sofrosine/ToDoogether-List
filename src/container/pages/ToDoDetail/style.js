import React from 'react';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 5,
    paddingHorizontal: 15,
    paddingBottom:20
  },
  titleView: {
    height: '20%',
    justifyContent: 'center',
  },
  title: {
    color: '#0090B2',
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    color: 'gray',
  },
  bodyView: {
    flex:3
  },
  body: {
    fontSize: 18,
  },
  backButton: {
    backgroundColor: '#AAD0D9',
    height: '10%',
    width: '40%',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:20
  },
  backText: {
    fontSize:24,
    color:'#F7F7F7'
  }
});

import React from 'react';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 15,
  },
  topBar: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  addTrigger: {
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: '#0090B2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    marginBottom:20
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0090B2',
  },
  contentContainer: {
    flex: 5,
  },
  news: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#0090B2',
    marginBottom: 20,
  },
  newsImage: {height: 80, width: 80, marginRight: 10, borderRadius: 10},
  newsTextContainer: {
    justifyContent: 'space-around',
    height: 70,
  },
  titleNewsText: {
    color: '#0090B2',
    fontWeight: 'bold',
    fontSize: 16,
    width: 210,
  },
  bodyNewsText: {
    color: 'gray',
    fontSize: 12,
    width: 200,
  },
  inputContainer: {
    backgroundColor: '#F7F7F7',
    height: '80%',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    alignSelf: 'center',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTitleContainer: {
    width: '80%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleTextInput: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginBottom: 8,
    color: '#0090B2',
  },
  titleInput: {
    borderWidth: 1,
    padding: 5,
    width: '100%',
    borderColor: '#AAD0D9',
    borderRadius: 8,
    fontSize: 18,
  },
  inputBodyContainer: {
    width: '80%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  inputButtonAddContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addButtonInput: {
    width: '30%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#AAD0D9',
  },
  addButtonText: {
    fontSize: 18,
    color: '#F7F7F7',
  },
  cancelButtonInput: {
    width: '30%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    borderColor: '#AAD0D9',
    borderWidth:1
  },
  cancelButtonText: {
    fontSize: 18,
    color: '#AAD0D9',
  },
});

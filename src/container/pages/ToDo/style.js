import React from 'react';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAD0D9',
  },
  todoTitle: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F7F7F7',
  },
  todoSubtitle: {
    height: '15%',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitleText: {
    fontSize: 20,
    color: '#F7F7F7',
    fontWeight: 'bold',
  },
  totalTaskText: {
    color: '#F7F7F7',
  },
  addTaskText: {
    color: '#AAD0D9',
    fontSize: 16,
  },
  addTaskText2: {
    color: '#F7F7F7',
    fontSize: 16,
  },
  dateNow: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '10%',
  },
  addButton: {
    width: '40%',
    height: '50%',
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton2: {
    width: '40%',
    height: '50%',
    backgroundColor: '#AAD0D9',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'white'
  },
  todoContainer: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    borderTopLeftRadius: 50,
  },
  dateNowText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#AAD0D9',
  },
  todoListView: {height: 70, alignItems: 'center'},
  todoListView2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '70%',
    alignItems: 'center',
    height: 60,
    borderRadius: 15,
    paddingLeft: '5%',
    elevation: 1,
  },
  todoListView3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '70%',
    alignItems: 'center',
    height: 60,
    borderRadius: 15,
    paddingLeft: '5%',
    elevation: 1,
    backgroundColor: '#AAD0D9'
  },
  todoList: {
    elevation: 1,
    height: '20%',
    width: '80%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
    marginBottom: 10,
  },
  checkBox: {
    borderWidth: 1,
    borderRadius: 8,
    width: 25,
    height: 25,
    marginRight: '10%',
    borderColor: '#b0aba4',
  },
  checkBox2: {
    borderRadius: 8,
    width: 25,
    height: 25,
    marginRight: '10%',
    borderColor: '#b0aba4',


    backgroundColor: '#AAD0D9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  todoListTitle: {
    color: 'gray',
  },
  todoListTitle2: {
    color: 'white'
  },
  todoListDate: {
    color: '#b0aba4',
    fontSize: 10,
  },
  todoListDate2: {
    fontSize: 10,
    color: 'white'
  },
  //Form Input

  addTodoList: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#F7F7F7',
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  inputTitleContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    flex: 1,
  },
  inputTitle: {
    borderWidth: 2,
    borderColor: '#AAD0D9',
    padding: 4,
    width: '100%',
    borderRadius: 15,
    fontSize: 14,
  },
  inputNotesContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputNotes: {
    borderWidth: 2,
    borderColor: '#AAD0D9',
    padding: 4,
    width: '100%',
    borderRadius: 15,
    justifyContent: 'flex-start',
    fontSize: 14,
    marginBottom: 10,
    fontSize: 16,
  },
  labelInputTodo: {alignSelf: 'flex-start', marginBottom: 5, color: '#b0aba4'},
  inputTodoButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '10%',
    alignItems: 'center',
  },
  inputTodoButtonAdd: {
    width: '35%',
    height: '35%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AAD0D9',
  },
  inputTodoTextAdd: {
    fontSize: 18,
    color: '#F7F7F7',
  },
  inputTodoButtonCancel: {
    width: '35%',
    height: '35%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#AAD0D9',
    borderWidth: 2,
  },
  inputTodoTextCancel: {
    fontSize: 18,
    color: '#AAD0D9',
  },
  emptyView: {alignItems: 'center', justifyContent: 'center', height: 250},
  emptyText: {fontSize: 24, color: 'pink'},
  emptyText2: {fontSize: 14, color: 'pink'},
});

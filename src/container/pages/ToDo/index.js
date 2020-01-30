import React, {useState, useEffect, useReducer, Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';
import  Icon  from 'react-native-vector-icons/FontAwesome';

class ToDo extends Component {
  constructor(){
    super();
    this.state = {
      listNull: false,
      inputForm: false,
      isChecked: false,
      title: '',
      text: '',
      todoList: [],
      todoListChecked: []
    };
    this.getTodo()
    // AsyncStorage.clear()
  }

  setTodo = async () => {
    const {title, text} = this.state
    const data = [
      {
        title,
        text,
        time: new Date(new Date().getTime()),
        uid: new Date().getTime(),
        isChecked: false
      },
    ];
    if(await AsyncStorage.getItem('@toDoList') == null) {
      if(this.state.title == '' && this.state.text == '') {
        return ToastAndroid.showWithGravity(
          'All fields must been filled!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
      this.setState({listNull: false,title:'',text:''})
      ToastAndroid.showWithGravity(
        'Your data has been inserted!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      const store = AsyncStorage.setItem('@toDoList', JSON.stringify(data));
      this.getTodo()
    } else {
      if (this.state.title == '' && this.state.text == '') {
        return ToastAndroid.showWithGravity(
          'All fields must be filled!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
      this.setState({listNull: false,title:'',text:''});
      ToastAndroid.showWithGravity(
        'Your data has been inserted!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      const list = await AsyncStorage.getItem('@toDoList')
      this.state.todoList = list
      // console.log('yyy',this.state.todoList)
      // await this.setState({})
      const y = JSON.parse(this.state.todoList);
      const x = await y.push(data[0]);
      const store = AsyncStorage.setItem('@toDoList', JSON.stringify(y))
      this.getTodo()
    }
  }

  getTodo = async () => {
    if (await AsyncStorage.getItem('@toDoList') == null) {
      return this.setState({listNull: true})
    }
    const list = await AsyncStorage.getItem('@toDoList');
    const z = JSON.parse(list);
    this.state.todoList = z;
    await this.setState({});
    // console.log(this.state.todoList);
  }

  handleChecked = async (data, uid) => {
    data["isChecked"] = !data["isChecked"] 
    await this.forceUpdate()
    await this.filterChecked(data)
    let checked = Array.from(new Set(this.state.todoListChecked)) 
    let checked2 = []
    checked.filter(data => {
      if(data["isChecked"] == false) {
        return checked2.push(data)
        // console.log('checkeeede2',checked2)
      }      
    })
    if(checked2.length != checked.length) {
      this.setState({ isChecked: true })
    } else {
      this.setState({isChecked: false})
    }
  }

  filterChecked = async (data) => {
    if(data.isChecked) {
      this.state.todoListChecked.push(data) 
       this.state.todoListChecked.filter(data2 => {
         if ((data.uid == data2.uid) ) {
           return -1, console.log(Array.from(new Set(this.state.todoListChecked)))
        } else {
          if(!data.isChecked) {
            return 1
          }
        }
       })
    }
  }

  handleDone = async (data) => {
    const x = []
    const y = []
    let arr = [...this.state.todoListChecked]
    let arr2 = [...this.state.todoList]

    await arr.map(item => {
      if(item.isChecked) {
        x.push(item)
      }
    })

    await arr2.map(item => {
        x.map(item2 => {
        if(item.isChecked != item2.isChecked) {
          y.push(item)
        }
      })
    })
    console.log('result map', Array.from(new Set(y)))
    await AsyncStorage.setItem('@toDoList', JSON.stringify(Array.from(new Set(y))))
    this.getTodo()  
    this.forceUpdate() 
    this.setState({ isChecked: false })
    ToastAndroid.showWithGravity(
          'Good Job!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
    )
  }


  render() {
    const dateNow = new Date(new Date().getTime());
    return (
      <View style={styles.container}>
        <View style={styles.todoTitle}>
          <Text style={styles.titleText}>ToDo-ogether</Text>
        </View>
        <View style={styles.todoSubtitle}>
          <View>
            <Text style={styles.subtitleText}>Welcome, Mate</Text>
            <Text style={styles.totalTaskText}>{this.state.todoList.length} Tasks</Text>
          </View>
          <TouchableOpacity
            style={this.state.isChecked ? styles.addButton2 : styles.addButton}
            activeOpacity={0.5}
            onPress={this.state.isChecked ? () =>
              this.handleDone() : () =>
                this.setState({
                  inputForm: true,
                })
            }>
            {this.state.isChecked ? 
            <Text style={styles.addTaskText2}>I'm Finished!</Text> :
              <Text style={styles.addTaskText}>Add Activity</Text>}
          </TouchableOpacity>
        </View>
        <View style={styles.todoContainer}>
          <View style={styles.dateNow}>
            <Text style={styles.dateNowText}>Today, {String(dateNow).slice(4,15)}</Text>
          </View>
          <View style={{flex: 1}}>
            <ScrollView>
              {this.state.listNull ? 
              <View style={styles.emptyView}>
                <Text style={styles.emptyText}>Your List is Empty</Text>
                <Text style={styles.emptyText2}>Insert your todo list by pressing 'Add New' button</Text>
              </View>
              : 
              this.state.todoList.map(data => {
                return (
                  <View style={styles.todoListView} key={data.time}>
                    <TouchableOpacity activeOpacity={0.5} style={data.isChecked ? styles.todoListView3 : styles.todoListView2}
                     onPress={() => this.props.navigation.push('ToDoDetail', {
                       data: data
                     })}>
                      <TouchableOpacity
                        onPress={() => this.handleChecked(data)}
                        style={data.isChecked ? styles.checkBox2 : styles.checkBox}>
                        {data.isChecked ? <Icon color="white" name="check" size={20} /> : null}
                        </TouchableOpacity>
                      <View>
                        <Text style={data.isChecked ? styles.todoListTitle2 : styles.todoListTitle}>{data.title}</Text>
                        <Text style={data.isChecked ? styles.todoListDate2 : styles.todoListDate}>
                          Added in {data.time.slice(0,10)}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          {this.state.inputForm ? (
            <View style={styles.addTodoList}>
              <View style={styles.inputTitleContainer}>
                <Text style={styles.labelInputTodo}>Title</Text>
                <TextInput
                value={this.state.title}
                  onChangeText={value =>
                    this.setState({
                      title: value,
                    })
                  }
                  style={styles.inputTitle}
                />
              </View>
              <View style={styles.inputNotesContainer}>
                <Text style={styles.labelInputTodo}>Notes</Text>
                <TextInput
                value={this.state.text}
                  onChangeText={value =>
                    this.setState({
                      text: value,
                    })
                  }
                  style={styles.inputNotes}
                  multiline={true}
                  numberOfLines={8}
                />
              </View>
              <View style={styles.inputTodoButtonContainer}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.inputTodoButtonAdd}
                  onPress={this.setTodo}>
                  <Text style={styles.inputTodoTextAdd}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.inputTodoButtonCancel}
                  onPress={() =>
                    this.setState({
                      inputForm: false,
                    })
                  }>
                  <Text style={styles.inputTodoTextCancel}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

export default ToDo;

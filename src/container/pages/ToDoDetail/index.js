import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './style'

class ToDoDetail extends Component{
  state = {
    data: {},
    time: ''
  }
  
  async componentDidMount() {
    const param = this.props.navigation.getParam('data')
    console.log('paramm',param)
    this.setState({
      data: param,
      time: param.time.slice(0,10)
    })
  }

  render() {
    const {title, text} = this.state.data
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>Added in {this.state.time}</Text>
        </View>

        <View style={styles.bodyView}>
          <Text style={styles.body}>
            {text}
          </Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')} style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ToDoDetail
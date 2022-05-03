import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Entypo,
    Fontisto,
  } from '@expo/vector-icons';


export const InputMessage = () => {
    
  const [message, setMessage] = useState('');

  const onPress = () => {
    console.log(message);
  }
  return (
    <KeyboardAvoidingView
      behavior={"height"}
      keyboardVerticalOffset={100}
      style={{width: '100%'}}
    >
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
            </View>

            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {( !message ) ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
                    : <MaterialIcons name="send" size={28} color="white" />}
                </View>
            </TouchableOpacity>
        </View>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 10,
      alignItems: 'flex-end',
    },
    mainContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 25,
      marginRight: 10,
      flex: 1,
      alignItems: 'flex-end',
    },
    textInput: {
      flex: 1,
      marginHorizontal: 10
    },
    icon: {
      marginHorizontal: 5,
    },
    buttonContainer: {
      backgroundColor: '#911175',
      borderRadius: 25,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
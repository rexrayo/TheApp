import React from 'react'
import { View } from 'react-native'

export const Card: React.FC = ({ children }) => {
  return (
    <View style={{
        backgroundColor: '#fff',
        maxWidth: '90%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
        alignItems: 'center',
    }}>
        {children}
    </View>
    
  )
}

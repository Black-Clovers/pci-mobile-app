import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TextInput ,TouchableOpacity, Button  } from 'react-native';
const  AboutScreen=()=> {
  return (
    <View>
        <Text>
            hellooo about us 
        </Text>

        <Image
                  style={styles.card_image}
                  source={{uri: 'https://rtrs.co/wp-content/uploads/2021/02/builders-helmets-working-construction-site-machine-building-worker-flat-vector-illustration-engineering-development_74855-8259.jpg'}}
               />
    </View>
  )
}

const styles=StyleSheet.create({


    card_image:{
        
    }
})

export default AboutScreen;

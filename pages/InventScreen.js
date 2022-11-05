import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TextInput ,TouchableOpacity, Button  } from 'react-native';

const InventScreen=()=> {
  return (
    <View>
        
        <View style={styles.formcard}>

        <Image
                  style={styles.image5}
                  source={{uri: 'https://us.123rf.com/450wm/onyxprj/onyxprj1912/onyxprj191200265/134950240-construction-material-collection-equipment-for-builders-cement-sand-stones-pile-gypsum-block-bricks-.jpg?ver=6'}}
               />


           <Text style={styles.text1}>ID001</Text>
           <View>
           <Text style={styles.text2}
           > Sand </Text>
           
          
        <Text style={styles.text3}
           > Quantity:</Text>
    <Text style={
     styles.text4
           }>2 cubes</Text>
</View>
            </View>


    </View>


  )
}

const styles = StyleSheet.create({

    formcard:{
        position: 'absolute',
        width: 358,
        height: 500,
        left: 16,
        top: 21,
        backgroundColor: '#FFFFFF',
        boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
        borderRadius: 15,
    },

    image5:{
    width:350,
    height:100,
    marginLeft:10

    },

    text1:{
        fontSize:23,
        paddingLeft:30,
        paddingTop:50
    },
    text2:{
        fontSize:26,
        fontWeight:'300',
        paddingLeft:30,
        paddingTop:-180




    },
    text3:{
        fontSize:22,
        marginTop:20

    },
    text4:{
        fontSize:20,
        paddingBottom:12,
        alignItems:"center"
    
    }

})

export default InventScreen;

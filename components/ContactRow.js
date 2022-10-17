import React from "react";
import { Text,View,TouchableOpacity,StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import colors from "../config/constans";
const ContactRow=({name,subtitle,onPress,style})=>{
    return(
        <TouchableOpacity style={[styles.row,style]} onPress={onPress}>
        <View style={styles.avatar}>
        <Text style={styles.avatarLabel}>
        {name.split(' ').reduce((prev,current)=>`${prev}${current[0]}`,``)}
        </Text>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.username} >{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    <Ionicons name="chevron-forward-outline" size={20}/>
    </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        paddingVertical:20
    },
    avatar:{
        width:56,
        height:56,
        backgroundColor:colors.primary,
        borderRadius:28,
        alignItems:"center",
        justifyContent:"center"
    },
    avatarLabel:{
        fontSize:20,
        color:'white'
    },
    textContainer:{
        flex:1
    },  
    username:{
        fontSize:16
    },

    subtitle:{
        marginTop:2,
        color:'#565656'
    },


})
export default ContactRow
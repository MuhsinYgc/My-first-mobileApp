import React from "react";
import { View,StyleSheet } from "react-native";
import colors from "../config/constans";
const Separator=()=>{
    return(
        <View style={styles.serprator}/>
    )
}
const styles=StyleSheet.create({
    serprator:{
        height: StyleSheet.hairlineWidth,
        backgroundColor:colors.border,
        marginStart: 88
    }

})
export default Separator
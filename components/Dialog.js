import React, { useEffect, useState } from "react";
import Dialog from "react-native-dialog";
import { StyleSheet, View } from "react-native";
import DialogButton from "react-native-dialog/lib/Button";
import firebase from "firebase/compat";
// const Dialogist = ({ navigation }) => {
//   const [a, setA] = useState(true);
//   const [email, setEmail] = useState(null);
//   //   const onChange = (event) => {
//   //     setEmail(event.target.value);
//   //   };
//   const send = () => {
//     firebase
//       .firestore()
//       .collection("Chat")
//       .add({
//         users: [email, "salih@gmail.com"],
//         messages: [],
//       })
//       .then((doc) => {
//         navigation.navigate("Chat", { id: doc.id });
//       });
//   };
//   return (
//     <View>
//       <Dialog.Container visible={a}>
//         <Dialog.Title>Account delete</Dialog.Title>
//         <Dialog.Description>
//           Do you want to delete this account? You cannot undo this action.
//         </Dialog.Description>
//         <Dialog.Input onChangeText={(text) => setEmail(text)} />
//         <Dialog.Button
//           label="Cancel"
//           onPress={() => {
//             setA(!a);
//           }}
//         />
//         <Dialog.Button label="Ok" onPress={send} />
//       </Dialog.Container>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//   },
// });
// export default Dialogist;

import React, { useEffect, useState } from "react";
import Dialog from "react-native-dialog";
// import Dialogist from "../components/Dialog";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ContactRow from "../components/ContactRow";
import Separator from "../components/Separtor";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
import colors from "../config/constans";

const firebaseConfig = {
  apiKey: "AIzaSyCEmA87tC6gGlk_N12nhf4FUsBB13JJp6U",
  authDomain: "my-app-92518.firebaseapp.com",
  projectId: "my-app-92518",
  storageBucket: "my-app-92518.appspot.com",
  messagingSenderId: "553937535807",
  appId: "1:553937535807:web:a1519d60bd3bfefc25c98a",
  measurementId: "G-PZ4TLBEZTN",
};

firebase.initializeApp(firebaseConfig);

const Chats = ({ navigation }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigation.navigate("SignUp");
      }
    });
  }, []);

  const [chats, setChats] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .firestore()
        .collection("Chat")
        .where("users", "array-contains", user.email)
        .onSnapshot((snapshot) => {
          setChats(snapshot.docs);
        });
    });
  }, []);

  const handleFabPress = () => {
    setVisible(!visible);
  };
  //   var unscribe = firebase.auth().onAuthStateChanged(function (user) {});
  const Dialogist = () => {
    const [a, setA] = useState(true);
    const [email, setEmail] = useState(null);
    //   const onChange = (event) => {
    //     setEmail(event.target.value);
    //   };
    const send = () => {
      firebase
        .firestore()
        .collection("Chat")
        .add({
          users: [email, "salih@gmail.com"],
          messages: [],
        })
        .then((doc) => {
          navigation.navigate("Cha", { id: doc.id });
        });
    };
    return (
      <View>
        <Dialog.Container visible={a}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Input onChangeText={(text) => setEmail(text)} />
          <Dialog.Button
            label="Cancel"
            onPress={() => {
              setA(!a);
            }}
          />
          <Dialog.Button label="Ok" onPress={send} />
        </Dialog.Container>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {visible ? <Dialogist /> : null}
      {chats.map((chat) => (
        <React.Fragment key={chat.id}>
          <ContactRow
            name={chat
              .data()
              .users.find((x) => x !== firebase.auth()?.currentUser?.email)}
            subtitle={
              chat.data().messages.length === 0
                ? "No messages yet"
                : chat.data().messages[0].text
            }
            onPress={() => {
              navigation.navigate("Cha", { id: chat.id });
            }}
          />
          <Separator />
        </React.Fragment>
      ))}
      <TouchableOpacity style={styles.fab} onPress={handleFabPress}>
        <View style={styles.fabContainer}>
          <Ionicons name="add" size={24} color={"white"} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  fabContainer: {
    width: 56,
    height: 56,
    backgroundColor: "pink",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chats;

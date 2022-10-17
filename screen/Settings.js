import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import ContactRow from "../components/ContactRow";
import colors from "../config/constans";
import Separator from "../components/Separtor";
import Cell from "../components/Cell";
const Settings = () => {
  return (
    <View>
      <ContactRow
        name="Muhsin Yağcı"
        subtitle="muhsin@gmail.com"
        style={styles.contactRow}
      />
      <Separator />

      <Cell
        title="Logout"
        icon="log-out-outline"
        onPress={() => alert("dont touch me again")}
      />
      <Cell
        title="Help"
        icon="information-outline"
        onPress={() => alert("dont touch me again")}
        style={{ marginTop: 20, marginBottom: 20 }}
      />
      <Cell
        title="Tell a friendd"
        icon="heart-outline"
        onPress={() => alert("dont touch me again")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactRow: {
    backgroundColor: "white",
    marginTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
});
export default Settings;

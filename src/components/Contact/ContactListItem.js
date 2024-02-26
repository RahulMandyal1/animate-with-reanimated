import { Text, View, StyleSheet } from "react-native";

const ContactListItem = ({ contact }) => {
  return (
    <View style={styles.container}>
      {contact && (
        <View style={styles.circleContainer}>
          <Text style={{ fontSize: 25, color: "white" }}>
            {contact.name?.[0]}
          </Text>
        </View>
      )}
      <View style={{ marginLeft: 15 }}>
        {contact && <Text style={{ fontSize: 25 }}>{contact.name}</Text>}
        <View style={{ height: 5 }} />
        {contact && <Text style={{ fontSize: 20 }}>{contact.email}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  circleContainer: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: "#005CB7",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ContactListItem;

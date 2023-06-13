import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({itemData}) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5a0acc",
      },
      goalText: {
        color: "#fff",
      },
})

export default GoalItem;

import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ onDeleteItem, itemData }) => {
  const removeItemHandler = () => {
    onDeleteItem(itemData.item.id);
  };
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#330770" }}
        onPress={removeItemHandler}
        // pressed is a porperty provided by data of pressable element, used on both Android, iOS
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5a0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
});

export default GoalItem;

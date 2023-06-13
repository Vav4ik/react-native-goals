import { useState } from "react";
import {
  Button,
  FlatList,
  //ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((prevCourseGoals) => [
      ...prevCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const handleEmpty = () => {
    return <Text style={styles.title}>No Goals added yet!</Text>;
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course Goal..."
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          //https://blog.logrocket.com/deep-dive-react-native-flatlist/
          data={courseGoals}
          renderItem={(itemData) => <GoalItem itemData={itemData} />}
          refreshing={false}
          onRefresh={() => console.log("refreshing")}
          ListEmptyComponent={handleEmpty}
          //keyExtractor is used if in our array of objects there's no property "key" or "id"
          //keyExtractor={(item, index) => item.unique_identificator}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccccd7",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccccccd7",
    borderRadius: 8,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;

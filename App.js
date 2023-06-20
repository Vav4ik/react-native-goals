import { useState } from "react";
import {
  Button,
  FlatList,
  //ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevCourseGoals) => [
      ...prevCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deletGoalHandler = (goalId) => {
    setCourseGoals((prevCourseGoals) =>
      prevCourseGoals.filter((goal) => goal.id !== goalId)
    );
  };

  const handleEmpty = () => {
    return <Text style={styles.title}>No Goals added yet!</Text>;
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visble={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancelGoal={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            //https://blog.logrocket.com/deep-dive-react-native-flatlist/
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem itemData={itemData} onDeleteItem={deletGoalHandler} />
            )}
            refreshing={false}
            onRefresh={() => console.log("refreshing")}
            ListEmptyComponent={handleEmpty}
            //keyExtractor is used if in our array of objects there's no property "key" or "id"
            //keyExtractor={(item, index) => item.unique_identificator}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;

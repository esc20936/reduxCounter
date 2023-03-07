import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch, Provider } from "react-redux";
import { store } from "./src/store/store";

// import actions from CounterSlice
import { increment, decrement } from "./src/store/Counter/CounterSlice";

const ViewComponent = () => {
  const counter = useSelector((state: any) => state.counter); // get state from store
  const dispatch = useDispatch(); // get dispatch function to dispatch actions

  // handle add and subtract
  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSubtract = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <Text>{counter.value}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={handleSubtract}
          activeOpacity={0.6}
        >
          <Text style={styles.buttonText}>-</Text> 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={handleAdd}
          activeOpacity={0.6}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <ViewComponent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 40,
  },
  buttonStyle: {
    backgroundColor: "#0095ff",
    width: 100,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

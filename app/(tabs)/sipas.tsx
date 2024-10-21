import { StyleSheet } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import Websites from "../web_page/websites";

export default function App({ url }: any) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Websites url="https://sipas.pt-denpasar.go.id/login" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

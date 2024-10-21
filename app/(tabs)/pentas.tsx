import { StyleSheet } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import Websites from "../web_page/websites";

export default function App({ url }: any) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Websites url="https://eptsp.pt-denpasar.info/siloren/form_siloren" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

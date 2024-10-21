import Constants from "expo-constants";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, View, Image, Text } from "react-native";
import { useSegments } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function App({ navigation }: any) {
  const segments = useSegments();
  console.log(segments);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EEEDEB" }}>
      <View style={styles.heroWrapper}>
        <LinearGradient colors={["#071952", "#088395"]} style={styles.hero}>
          <Image
            style={styles.heroImage}
            source={require("../../assets/images/bali_agung_text.png")}
          ></Image>
        </LinearGradient>
      </View>

      <ScrollView style={styles.mainWrapper}>
        <View style={styles.upperCol}>
          <View style={styles.upperColTop}>
            <View style={styles.upperColTopLeft}>
              <Text style={styles.upperColTopText}>
                Aplikasi Mobile Bali Agung 1.0
              </Text>
              <Text style={styles.upperColBottomText}>
                Aplikasi Mobile Bali Agung merupakan Apps Center yang dimiliki
                oleh Pengadilan Tinggi Denpasar. Aplikasi ini dapat memudahkan
                masyarakat dalam mengakses setiap aplikasi yang dimiliki oleh
                Pengadilan Tinggi Denpasar
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  heroWrapper: {
    top: 0,
    height: "25%",
    width: "100%",
    position: "absolute",
    zIndex: -1,
  },

  hero: {
    height: "100%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  heroImage: {
    height: 120,
    width: 150,
    resizeMode: "contain",
    position: "absolute",

    top: 30,
    right: 25,
  },
  heroText: {
    color: "white",

    position: "absolute",
    top: 100,
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "bold",
  },
  mainWrapper: {
    flex: 1,
  },
  upperCol: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: "40%",
    borderRadius: 20,
  },
  upperColTop: {
    display: "flex",
    flexDirection: "row",

    paddingBottom: 10,
  },
  upperColTopLeft: {
    width: "100%",
  },

  upperColTopText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  upperColBottomText: {
    fontSize: 15,
    color: "grey",
    marginTop: 10,
  },
});

import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, View, Image, Text, FlatList } from "react-native";
import { useSegments } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import Clock from "../partial/clock";

const buttons = [
  {
    title: "Si Alay",
    image: require("../../assets/images/si-alay2.png"),
    link: "/si-alay",
  },
  {
    title: "E Riset",
    image: require("../../assets/images/Research.png"),
    link: "/e-riset",
  },
  {
    title: "E Mediator",
    image: require("../../assets/images/Handshake.png"),
    link: "/e-mediator",
  },
  {
    title: "Pentas",
    image: require("../../assets/images/Wheelchair.png"),
    link: "/pentas",
  },
  {
    title: "Ekaplus Satpam",
    image: require("../../assets/images/Review Security.png"),
    link: "/reviu-satpam",
  },
  {
    title: "Ekaplus PTSP",
    image: require("../../assets/images/Review CS.png"),
    link: "/reviu-cs",
  },
  {
    title: "E-Pelita",
    image: require("../../assets/images/Form.png"),
    link: "/epelita",
  },
  {
    title: "E-Simpatik",
    image: require("../../assets/images/Mail2.png"),
    link: "/esimpatik",
  },
  {
    title: "",
    image: "",
    link: "",
  },
];

const buttonInternal = [
  {
    title: "SIPAS",
    image: require("../../assets/images/Money.png"),
    link: "/sipas",
  },

  {
    title: "SIMASKA",
    image: require("../../assets/images/Building.png"),
    link: "/simaska",
  },
  {
    title: "",
    image: "",
    link: "",
  },
];

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
            resizeMode="contain"
          ></Image>
        </LinearGradient>
      </View>

      <ScrollView style={styles.mainWrapper}>
        <View style={styles.upperCol}>
          <View style={styles.upperColTop}>
            <View style={styles.upperColTopLeft}>
              <Text style={styles.upperColTopLeftTopText}>Office</Text>
              <Text style={styles.upperColTopLeftBottomText}>PT Denpasar</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.upperColTopRightTopText}>Waktu</Text>

              <Clock />
            </View>
          </View>
          <View style={styles.bottomColWrapper}>
            <Link href="/web_pt">
              <View style={styles.bottomColLinkWrapper}>
                <Image
                  source={require("../../assets/images/web_icon1.png")}
                  style={styles.bottomColLinkImage}
                  resizeMode="contain"
                />
                <Text style={styles.bottomColLinkText}>PT Dps</Text>
              </View>
            </Link>
            <Link href="/web_badilum">
              <View style={styles.bottomColLinkWrapper}>
                <Image
                  source={require("../../assets/images/web_icon2.png")}
                  style={styles.bottomColLinkImage}
                  resizeMode="contain"
                />
                <Text style={styles.bottomColLinkText}>Badilum</Text>
              </View>
            </Link>

            <Link href="/web_mari">
              <View style={styles.bottomColLinkWrapper}>
                <Image
                  source={require("../../assets/images/web_icon3.png")}
                  style={styles.bottomColLinkImage}
                  resizeMode="contain"
                />
                <Text style={styles.bottomColLinkText}>M.A.R.I.</Text>
              </View>
            </Link>
          </View>
        </View>
        <View style={styles.lowerCol}>
          <View style={styles.lowerColTitleWrapper}>
            <Text style={styles.lowerColTitleText}>Layanan Eksternal</Text>
          </View>
          <View style={styles.mainMenuWrapper}>
            {buttons.map((item) => (
              <View key={item.title} style={styles.mainMenuButtonLink}>
                <Link href={item.link} style={styles.mainMenuButton}>
                  <View style={styles.mainMenuButtonImageWrapper}>
                    <Image
                      style={styles.mainMenuButtonImage}
                      source={item.image}
                      resizeMode="contain"
                    ></Image>
                  </View>
                </Link>
                <Text style={styles.mainMenuButtonText}>{item.title}</Text>
              </View>
            ))}
          </View>

          <View style={styles.lowerColTitleWrapper}>
            <Text style={[styles.lowerColTitleText, { marginTop: 20 }]}>
              Layanan Internal
            </Text>
          </View>
          <View style={styles.mainMenuWrapper}>
            {buttonInternal.map((item) => (
              <View key={item.title} style={styles.mainMenuButtonLink}>
                <Link href={item.link} style={styles.mainMenuButton}>
                  <View style={styles.mainMenuButtonImageWrapper}>
                    <Image
                      style={styles.mainMenuButtonImage}
                      source={item.image}
                      resizeMode="contain"
                    ></Image>
                  </View>
                </Link>
                <Text style={styles.mainMenuButtonText}>{item.title}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",

    paddingBottom: 10,
  },
  upperColTopLeft: {
    width: "50%",
    borderEndWidth: 1,
    borderEndColor: "#EEEEEE",
  },
  upperColTopLeftTopText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "grey",

    borderColor: "grey",
    marginBottom: 5,
  },
  upperColTopLeftBottomText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",

    borderColor: "grey",
  },
  upperColTopRightTopText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "grey",

    textAlign: "right",
    marginBottom: 5,
  },

  bottomColWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  bottomColLinkWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  bottomColLinkImage: {
    width: 40,
    height: 40,
  },
  bottomColLinkText: {
    fontSize: 13,
    fontWeight: "bold",
  },

  lowerCol: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  lowerColTitleWrapper: {
    marginBottom: 8,
    marginStart: 5,
  },
  lowerColTitleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
  mainMenuWrapper: {
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  mainMenuButtonLink: {
    height: 80,
    width: "33%",

    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
  mainMenuButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainMenuButtonImageWrapper: {
    alignItems: "center",
  },
  mainMenuButtonImage: {
    height: 50,
    width: 50,
  },
  mainMenuButtonText: {
    color: "black",

    fontSize: 12,
    fontWeight: "bold",
  },
  flatListContentStyle: {
    gap: 10,

    width: "100%",
    alignItems: "center",

    marginVertical: "auto",
  },
});

import { WebView } from "react-native-webview";

import {
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  View,
  Platform,
  SafeAreaView as SafeAreaIos,
} from "react-native";
import { useRef, useState, useCallback } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Websites({ url }: any) {
  const [refreshing, setRefreshing] = useState(false);
  const webviewRef = useRef<WebView>(null);
  const [loading, setLoading] = useState(true);

  const handleLoad = (event: any) => {
    setLoading(false);
    console.log("load");
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    webviewRef.current?.reload(); // Memuat ulang halaman di WebView
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {loading && (
        <ActivityIndicator style={styles.loadingIndicator} size="large" />
      )}

      <View style={styles.container}>
        {Platform.OS === "ios" ? (
          <SafeAreaIos style={{ flex: 1 }}>
            <WebView
              ref={webviewRef}
              source={{ uri: url }}
              style={styles.webView}
              onLoadStart={handleLoad}
            />
          </SafeAreaIos>
        ) : (
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <WebView
                ref={webviewRef}
                source={{ uri: url }}
                style={styles.webView}
                onLoadStart={handleLoad}
              />
            </SafeAreaView>
          </SafeAreaProvider>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webViewContainer: {
    height: "100%",
  },
  webView: {
    flex: 1,
  },
  loadingIndicator: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

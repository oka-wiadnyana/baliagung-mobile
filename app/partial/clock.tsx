import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const formatTime = (time: any) => (time < 10 ? `0${time}` : time);
  const hour = formatTime(time.getHours());
  const minute = formatTime(time.getMinutes());
  const second = formatTime(time.getSeconds());
  const day = time.toDateString().split(" ")[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text
        style={style.clockStyle}
      >{`${day}, ${hour}:${minute}:${second}`}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  clockStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    textAlign: "right",
  },
});

import React from "react";
import { View, FlatList, Alert } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const Rewards = () => {
  const students = [
    {
      studName: "Anand Rajaram",
      studClass: "12 C",
      key: "1",
    },
    {
      studName: "Anand Rajaram",
      studClass: "12 C",
      key: "9",
    },
    {
      studName: "Anand Rajaram",
      studClass: "12 C",
      key: "8",
    },
    {
      studName: "Anand Rajaram",
      studClass: "12 C",
      key: "7",
    },
    {
      studName: "Anand Rajaram",
      studClass: "12 C",
      key: "16",
    },
    {
      studName: "Anand Rajaram",
      studClass: "12 C",
      key: "5",
    },
    {
      studName: "Anand Rajaram",
      studClass: "12 C",
      key: "10",
    },
    {
      studName: "Anand Rajaram",
      studClass: "12 C",
      key: "567",
    },
    {
      studName: "Anirudh Lakhotia",
      studClass: "12 C",
      key: "2",
    },
    {
      studName: "Sumuk Shashidhar",
      studClass: "12 C",
      key: "3",
    },
    {
      studName: "Arunachala Amuda Murugan",
      studClass: "12 C",
      key: "4",
    },
  ];

  const pressHandler = (item) => {
    Alert.alert("Success", "You have added 2 points to " + item.studName, [
      {
        text: "Okay",
      },
    ]);
    console.log(item.key);
  };

  return (
    <View style={{ margin: 15 }}>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <ListItem
            key={item.key}
            linearGradientProps={{
              colors: ["#6DD5FA", "#2980B9"],
              start: { x: 1, y: 0 },
              end: { x: 0.2, y: 0 },
            }}
            containerStyle={{ margin: 5, borderRadius: 35 }}
          >
            <ListItem.Content>
              <ListItem.Title style={{ color: "white", fontWeight: "bold" }}>
                {item.studName}
              </ListItem.Title>
              <ListItem.Subtitle style={{ color: "white" }}>
                {item.studClass}
              </ListItem.Subtitle>
            </ListItem.Content>
            <Icon
              raised
              name="exposure-plus-2"
              color="black"
              onPress={() => pressHandler(item)}
            />
          </ListItem>
        )}
      />
    </View>
  );
};

export default Rewards;

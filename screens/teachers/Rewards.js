import React, { useState, useEffect } from "react";
import { View, FlatList, Alert, ActivityIndicator, Text } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { get, post_id } from "../../api/fetch";

const Rewards = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await get("/api/interaction/getStudents");
      console.log(res.data);
      setStudents(res.data);
    }
    getData();
  }, []);

  const pressHandler = async (item) => {
    let res = await post_id("/api/interaction/addPoints", {
      student_id: item._id,
    });
    console.log(res);
  };

  return (
    <View style={{ margin: 15 }}>
      <FlatList
        data={students.object}
        renderItem={({ item }) => (
          <ListItem
            key={item.key}
            linearGradientProps={{
              colors: ["#6DD5FA", "#2980B9"],
              start: { x: 1, y: 0 },
              end: { x: 0.2, y: 0 },
            }}
            ViewComponent={LinearGradient}
            containerStyle={{ margin: 5, borderRadius: 35 }}
          >
            <ListItem.Content>
              <ListItem.Title style={{ color: "white", fontWeight: "bold" }}>
                {item.student_name}
              </ListItem.Title>
              <ListItem.Subtitle style={{ color: "white" }}>
                {`${item.student_class} ${item.student_section}`}
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

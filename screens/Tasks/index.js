import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Dropdown from "../../components/Dropdown";
import TaskPreview from "../../components/Tasks/TaskPreview";
import { appData, folderList } from "../../constants";

function TaskScreen() {
  const categories = Object.entries(appData).map(([category, data]) => ({
    category,
    tasks: data.tasks,
  }));
  const renderItem = ({ item }) => (
    <View style={{}}>
      <Text style={{ fontSize: 16, margin: 10, textTransform: "capitalize" }}>
        {item.category}
      </Text>
      <FlatList
        data={item.tasks}
        renderItem={({ item }) => <TaskPreview />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 10 }}>
      <View>
        <TextInput
          style={{
            backgroundColor: "#F2F4F8",
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 40,
          }}
          placeholder="search folder"
        />
        <View style={{ marginVertical: 10 }}>
          <Text style={{ padding: 10, fontWeight: 600 }}>Select Folder</Text>
          <Dropdown
            items={folderList}
            customStyle={{ backgroundColor: "#F2F4F8", borderRadius: 10 }}
          />
        </View>
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.category}
      />
    </SafeAreaView>
  );
}

export default TaskScreen;
import { Button, StyleSheet } from "react-native";

import { Text, View } from "react-native";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

export default function TabTwoScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [title, setTile] = useState("So cool much sheet");
  const handlerClosePress = () => bottomSheetRef.current?.close();
  const handlerOpenPress = () => bottomSheetRef.current?.expand();

  return (
    <View style={styles.container}>
      <Button title="Open" onPress={handlerOpenPress} />
      <Button title="Close" onPress={handlerClosePress} />

      <Text style={styles.title}>Tab Two</Text>
      <CustomBottomSheet ref={bottomSheetRef} title={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

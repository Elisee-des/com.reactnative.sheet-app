import { View, Text, StyleSheet, Button } from "react-native";
import React, { useRef } from "react";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomSheetModal from "../../components/CustomBottomSheetModal";

const Page = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { dismiss } = useBottomSheetModal();

  const handlPresentModalPress = () => bottomSheetRef.current?.present();

  return (
    <View style={styles.container}>
      <CustomBottomSheetModal ref={bottomSheetRef} />
      <Button title="Present Modal" onPress={handlPresentModalPress} />
      <Button title="Dismiss Modal" onPress={() => dismiss} />
    </View>
  );
};

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

export default Page;

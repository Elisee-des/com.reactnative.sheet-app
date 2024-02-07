import { Button, StyleSheet } from "react-native";

import { Text, View } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef } from "react";

export default function TabOneScreen() {
  const snapPoint = useMemo(() => ["25%", "50%", "75%", "100%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handlerClosePress = () => bottomSheetRef.current?.close();
  const handlerOpenPress = () => bottomSheetRef.current?.expand();
  const snapeToIndex = (index: number) =>
    bottomSheetRef.current?.snapToIndex(index);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={2}
        disappearsOnIndex={0}
        {...props}
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <Button title="Open" onPress={handlerOpenPress} />
      <Button title="Close" onPress={handlerClosePress} />

      <Button title="Snap To 0" onPress={() => snapeToIndex(0)} />
      <Button title="Snap To 1" onPress={() => snapeToIndex(1)} />
      <Button title="Snap To 2" onPress={() => snapeToIndex(2)} />
      <Button title="Snap To 3" onPress={() => snapeToIndex(3)} />

      <BottomSheet
        index={1} //Pour designer on commence par ou?
        snapPoints={snapPoint} //les different niveau d'ouverture de la modal
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop} //Pour mettre l'arriere plan en sombre quand la modal est ouvert
        enablePanDownToClose={true} //Pour fermer totalement la modal
        backgroundStyle={{ backgroundColor: "#1d0f4e" }}
        handleIndicatorStyle={{ backgroundColor: "#fff" }}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.containerHeadline}>This is awsome</Text>
        </View>
        <BottomSheetTextInput style={styles.input} />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  contentContainer: {
    // flex: 1,
    alignItems: "center",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
    color: "#fff",
  },
  input: {
    marginTop: 8,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: "rgba(151, 151, 151, 0.25)",
    color: "#fff",
  },
});

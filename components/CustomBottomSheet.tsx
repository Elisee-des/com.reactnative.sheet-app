import { Button, StyleSheet } from "react-native";

import { Text, View } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useMemo, useRef } from "react";

interface Props {
  title: string;
}
type Ref = BottomSheet;

// const CustomBottomSheet = forwardRef((props:any, ref:any) => {
const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoint = useMemo(() => ["25%", "50%", "75%", "100%"], []);

  return (
    <BottomSheet
      index={1} //Pour designer on commence par ou?
      ref={ref}
      snapPoints={snapPoint} //les different niveau d'ouverture de la modal
      enablePanDownToClose={true} //Pour fermer totalement la modal
      backgroundStyle={{ backgroundColor: "#1d0f4e" }}
      handleIndicatorStyle={{ backgroundColor: "#fff" }}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.containerHeadline}>{props.title}</Text>
      </View>
      <BottomSheetTextInput style={styles.input} />
    </BottomSheet>
  );
});

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

export default CustomBottomSheet;

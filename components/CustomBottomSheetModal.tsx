import { View, Text, StyleSheet } from "react-native";
import React, { forwardRef, useMemo } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
export type Ref = BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref>((props, ref) => {
  const snapPoint = useMemo(() => ["50%", "75%"], []);

  return (
    <BottomSheetModal ref={ref} index={0} snapPoints={snapPoint}>
      <View style={styles.contentContainer}>
        <Text style={styles.containerHeadline}>Bottom Modal Okkk</Text>
      </View>
    </BottomSheetModal>
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
    color: "grey",
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

export default CustomBottomSheetModal;

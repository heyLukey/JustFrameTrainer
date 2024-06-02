import { StyleSheet } from "react-native"

export const useStyles = () => {
  return StyleSheet.create({
    hitBox: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      height: "80%",
      width: "100%",
      padding: 5,
    },
    frameBar: {
      height: "100%",
      width: "100%",
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.5,
      shadowRadius: 3,
      elevation: 5,
    },
    frameBar__container: {
      height: "20%",
      width: "100%",
      overflow: "hidden",
      paddingBottom: 5,
    },
    hitButton: {
      borderColor: "#000000",
      borderStyle: 'solid',
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    hitButton__inner: {
      borderColor: "#000000",
      borderStyle: 'solid',
      borderWidth: 1,
    },
    movementButtons: {
      height: "100%",
      width: "60%",
      alignItems: "center",
      justifyContent: "center",
    },
    movementButtons__left: {
      backgroundColor: "#FFF",
      top: "15%",
      left: "5%",
    },
    movementButtons__down: {
      backgroundColor: "#FFF",
      top: "15%",
      left: "40%",
    },
    movementButtons__right: {
      backgroundColor: "#FFF",
      top: "35%",
      left: "70%",
    },
    movementButtons__up: {
      backgroundColor: "#FFF"
    },
    attackButtons: {
      height: "100%",
      width: "40%",
      alignItems: "center",
      justifyContent: "center",
    },
    attackButtons__1: {
      backgroundColor: "#E50000",
      top: "12.5%",
      left: 0,
    },
    attackButtons__2: {
      backgroundColor: "#E50000",
      top: "0%",
      left: "50%",
    },
    attackButtons__3: {
      backgroundColor: "#E50000",
      bottom: 0,
      left: 0,
    },
    attackButtons__4: {
      backgroundColor: "#E50000",
      bottom: "12.5%",
      left: "50%",
    },
  })
}
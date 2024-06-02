import { StyleSheet } from "react-native"

export const useStyles = () => {
  return StyleSheet.create({
    hitBox: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      height: "100%",
      width: "100%",
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
      top: "17.5%",
      left: 0,
    },
    attackButtons__2: {
      backgroundColor: "#E50000",
      top: "2.5%",
      left: "50%",
    },
    attackButtons__3: {
      backgroundColor: "#E50000",
      top: "60%",
      left: 0,
    },
    attackButtons__4: {
      backgroundColor: "#E50000",
      top: "45%",
      left: "50%",
    },
  })
}
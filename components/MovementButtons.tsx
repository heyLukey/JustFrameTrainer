import * as React from "react"

import { GestureResponderEvent, View } from "react-native"
import HitButton from "./HitButton"
import { InputLiterals } from "./types"
import { useStyles } from "../hooks/useStyles"


const MovementButtons: React.FunctionComponent = () => {
    const styles = useStyles()
    const handleOnPressIn = React.useCallback((input: InputLiterals)=> (e: GestureResponderEvent) => {
        console.log(`Input: ${input}, Event: ${e}`)
      }, [])
    
    return(
        <View id="MovementButtons" style={styles.movementButtons}>
            <HitButton 
                key={"l"} 
                handleOnPressIn={handleOnPressIn("l")}
                style={styles.movementButtons__left} 
            />
            <HitButton 
                key={"d"} 
                handleOnPressIn={handleOnPressIn("d")} 
                style={styles.movementButtons__down} 
            />
            <HitButton 
                key={"r"} 
                handleOnPressIn={handleOnPressIn("r")} 
                style={styles.movementButtons__right}
            />
            {/* <HitButton 
                key={"u"} 
                handleOnPressIn={handleOnPressIn("u")} 
                style={styles.movementButtons__up}
                size="large"
            /> */}
        </View>
    )
}

export default MovementButtons
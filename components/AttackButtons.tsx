import * as React from "react"

import { GestureResponderEvent, View } from "react-native"
import HitButton from "./HitButton"
import { InputLiterals } from "./types"
import { useStyles } from "../hooks/useStyles"


const AttackButtons: React.FunctionComponent = () => {
    const styles = useStyles()
    const handleOnPressIn = React.useCallback((input: InputLiterals)=> (e: GestureResponderEvent) => {
        console.log(`Input: ${input}, Event: ${e}`)
      }, [])
    
    return(
        <View id="AttackButtons" style={styles.attackButtons}>
            <HitButton 
                key={"1"} 
                handleOnPressIn={handleOnPressIn("1")}
                style={styles.attackButtons__1} 
            />
            <HitButton 
                key={"2"} 
                handleOnPressIn={handleOnPressIn("2")} 
                style={styles.attackButtons__2} 
            />
            <HitButton 
                key={"3"} 
                handleOnPressIn={handleOnPressIn("3")} 
                style={styles.attackButtons__3}
            />
            <HitButton 
                key={"4"} 
                handleOnPressIn={handleOnPressIn("4")} 
                style={styles.attackButtons__4}
            />
        </View>
    )
}

export default AttackButtons
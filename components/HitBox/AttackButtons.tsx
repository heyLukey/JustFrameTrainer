import * as React from "react"

import { View } from "react-native"
import HitButton from "./HitButton"
import { InputLiterals } from "../types"
import { useStyles } from "../../hooks/useStyles"

interface AttackButtonsProps {
    onPressIn: (input: InputLiterals) => () => void
    onPressEnd: (input: InputLiterals) => () => void
}

const AttackButtons: React.FunctionComponent<AttackButtonsProps> = ({
    onPressIn,
    onPressEnd,
}) => {
    const styles = useStyles()
    
    return(
        <View id="AttackButtons" style={styles.attackButtons}>
            <HitButton 
                key={"1"} 
                onPressIn={onPressIn("1")}
                onPressEnd={onPressEnd("1")}
                style={styles.attackButtons__1} 
            />
            <HitButton 
                key={"2"} 
                onPressIn={onPressIn("2")} 
                onPressEnd={onPressEnd("2")}
                style={styles.attackButtons__2} 
            />
            <HitButton 
                key={"3"} 
                onPressIn={onPressIn("3")} 
                onPressEnd={onPressEnd("3")}
                style={styles.attackButtons__3}
            />
            <HitButton 
                key={"4"} 
                onPressIn={onPressIn("4")} 
                onPressEnd={onPressEnd("4")}
                style={styles.attackButtons__4}
            />
        </View>
    )
}

export default AttackButtons
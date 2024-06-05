import * as React from "react"

import { View } from "react-native"
import HitButton from "./HitButton"
import { InputLiterals, PlayerSide } from "../types"
import { useStyles } from "../../hooks/useStyles"

interface MovementButtonsProps {
    onPressIn: (input: InputLiterals) => () => void
    onPressEnd: (input: InputLiterals) => () => void
}

const MovementButtons: React.FunctionComponent<MovementButtonsProps> = ({
    onPressIn,
    onPressEnd,
}) => {
    const styles = useStyles()
    
    // Make this toggle-able
    const playerSide: PlayerSide = "p1"

    return(
        <View id="MovementButtons" style={styles.movementButtons}>
            <HitButton 
                key={playerSide === "p1" ? "b" : "f"} 
                onPressIn={onPressIn(playerSide === "p1" ? "b" : "f")}
                onPressEnd={onPressEnd(playerSide === "p1" ? "b" : "f")} 
                style={styles.movementButtons__left} 
            />
            <HitButton 
                key={"d"} 
                onPressIn={onPressIn("d")} 
                onPressEnd={onPressEnd("d")} 
                style={styles.movementButtons__down} 
            />
            <HitButton 
                key={playerSide === "p1" ? "f" : "b"} 
                onPressIn={onPressIn(playerSide === "p1" ? "f" : "b")} 
                onPressEnd={onPressEnd(playerSide === "p1" ? "f" : "b")} 
                style={styles.movementButtons__right}
            />
        </View>
    )
}

export default MovementButtons
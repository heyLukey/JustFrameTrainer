import * as React from "react"

import { View } from "react-native"
// import { InputSeries } from "./types"
import MovementButtons from "./MovementButtons"
import AttackButtons from "./AttackButtons"
import { useStyles } from "../hooks/useStyles"


const HitBox: React.FunctionComponent = () => { 
    const styles = useStyles()  
    // const inputSequence = React.useState<InputSeries>([])

    return(
        <View id="HitBox" style={styles.hitBox}>
            <MovementButtons />
            <AttackButtons />
        </View>
    )
}

export default HitBox
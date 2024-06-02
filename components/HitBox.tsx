import * as React from "react"

import { View } from "react-native"
// import { InputSeries } from "./types"
import MovementButtons from "./MovementButtons"
import AttackButtons from "./AttackButtons"
import { useStyles } from "../hooks/useStyles"
import FrameBar from "./FrameBar"


const HitBox: React.FunctionComponent = () => { 
    const styles = useStyles()  
    // const inputSequence = React.useState<InputSeries>([])

    return(
        <View>
            <FrameBar/>
            <View id="HitBox" style={styles.hitBox}>
                <MovementButtons />
                <AttackButtons />
            </View>
        </View>
    )
}

export default HitBox
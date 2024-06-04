import * as React from "react"

import { View } from "react-native"
// import { InputSeries } from "./types"
import MovementButtons from "./MovementButtons"
import AttackButtons from "./AttackButtons"
import { useStyles } from "../hooks/useStyles"
import FrameBar from "./FrameBar"
import { InputFrames } from "./types"


const HitBox: React.FunctionComponent = () => { 
    const styles = useStyles()  
    const acidRain: InputFrames = [
        {
            input: "1",
            startFrame: 0,
            endFrame: 0
        },
        {
            input: "3",
            startFrame: 1,
            endFrame: 14
        },
        {
            input: "3",
            startFrame: 24,
            endFrame: 26
        },
        {
            input: "3",
            startFrame: 34,
            endFrame: 35
        },

    ]

    return(
        <View style={{height: "100%", width:"100%"}}>
            <FrameBar inputFrames={acidRain}/>
            <View id="HitBox" style={styles.hitBox}>
                <MovementButtons />
                <AttackButtons />
            </View>
        </View>
    )
}

export default HitBox
import * as React from "react"

import { View } from "react-native"
// import { InputSeries } from "./types"
import MovementButtons from "./MovementButtons"
import AttackButtons from "./AttackButtons"
import { useStyles } from "../../hooks/useStyles"
import FrameBar from "../FrameBar/FrameBar"
import { InputFrames, InputLiterals } from "../types"

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

const HitBox: React.FunctionComponent = () => { 
    const styles = useStyles()  

    const [currentInputs, setCurrentInputs] = React.useState<Array<InputLiterals>>([])
    console.log(currentInputs, 'currentInputs')

    const handleOnPressIn = React.useCallback((input: InputLiterals) => () => {
        setCurrentInputs((oldArr) => [...oldArr, input])
      }, [])

    const handleOnPressEnd = React.useCallback((input: InputLiterals) => () => {
        setCurrentInputs((oldArr) => oldArr.filter(el => el !== input))
    }, [])


    return(
        <View style={{height: "100%", width:"100%"}}>
            <FrameBar 
                inputFrames={acidRain}
                currentInputs={currentInputs}
            />
            <View id="HitBox" style={styles.hitBox}>
                <MovementButtons  
                    onPressIn={handleOnPressIn}
                    onPressEnd={handleOnPressEnd}
                />
                <AttackButtons
                    onPressIn={handleOnPressIn}
                    onPressEnd={handleOnPressEnd}
                />
            </View>
        </View>
    )
}

export default HitBox
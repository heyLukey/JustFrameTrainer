import * as React from "react"

import { View } from "react-native"
import { useStyles } from "../../hooks/useStyles"
import { InputFrames, InputLiterals } from "../types"
import TargetFrameSequence from "./TargetFrameSequence"
import InputFrameSequence from "./InputFrameSequence"

interface FrameBarProps {
    inputFrames: InputFrames
    currentInputs: InputLiterals[]
}

const FrameBar: React.FunctionComponent<FrameBarProps> = ({
    inputFrames,
    currentInputs,
}) => { 
    const styles = useStyles() 

    return(
        <View style={styles.frameBar}>
            <TargetFrameSequence 
                inputFrames={inputFrames}
            />
            <InputFrameSequence 
                currentInputs={currentInputs} 
            />
        </View>
    )
}

export default FrameBar
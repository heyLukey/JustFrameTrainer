import * as React from "react"

import { View } from "react-native"
import { InputFrames } from "../types"
import { useStyles } from "../../hooks/useStyles"
import { useFrameSequence } from "../../hooks/getFrameSequence"
import Frame from "./Frame"

interface TargetFrameSequenceProps {
  inputFrames: InputFrames
}

const TargetFrameSequence: React.FunctionComponent<TargetFrameSequenceProps> = ({
  inputFrames
}) => {
    const styles = useStyles()
    const {lastInputFrame, frameIndexSequence, deadFrameBuffer} = useFrameSequence(inputFrames)

    return(
      <View style={styles.targetFrameSequence}>
        {
            frameIndexSequence.map((frameIndex, i) => {
                const frameValue = frameIndex !==null ? inputFrames[frameIndex]: frameIndex

                return (
                    <Frame 
                        key={`frame-${i}`}
                        frameValue={frameValue}
                        index={i}
                    />
                )
            })
        }
        {
            deadFrameBuffer.map((deadFrame, i) => {
                const index = (i+1) + lastInputFrame

                return (
                    <Frame 
                        key={`frame-${index}`}
                        frameValue={deadFrame}
                        index={index}
                    />
                )
            })
        }
      </View>
    )
}

export default TargetFrameSequence
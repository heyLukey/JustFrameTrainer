import * as React from "react"

import { View } from "react-native"
import { useStyles } from "../hooks/useStyles"
import { InputFrames } from "./types"
import Frame from "./Frame"
import { useFrameSequence } from "../hooks/getFrameSequence"

interface FrameBarProps {
    inputFrames: InputFrames
}

const FrameBar: React.FunctionComponent<FrameBarProps> = ({
    inputFrames
}) => { 
    const styles = useStyles() 
    const {lastInputFrame, frameIndexSequence, deadFrameBuffer} = useFrameSequence(inputFrames)

    return(
        <View style={styles.frameBar__container}>
            <View style={styles.frameBar}>
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
        </View>
    )
}

export default FrameBar
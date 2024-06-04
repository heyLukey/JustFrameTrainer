import * as React from "react"

import { View } from "react-native"
import { useStyles } from "../hooks/useStyles"
import { InputFrames } from "./types"
import Frame from "./Frame"

interface FrameBarProps {
    inputFrames: InputFrames
}

const FrameBar: React.FunctionComponent<FrameBarProps> = ({
    inputFrames
}) => { 
    const styles = useStyles()  

    // maybe 2d array? (one array for each input frame)
    const frameSequence = React.useMemo(() => {
      const sequence: Array<string | null> = new Array(inputFrames[inputFrames.length-1].endFrame).fill(null);
      inputFrames.forEach((inputFrame) => {
        const {startFrame, endFrame, input} = inputFrame
        const midPoint = Math.round((startFrame+endFrame)/2)
        for(let i=startFrame; i<endFrame+1; i++) {
            sequence[i] = i === midPoint ? `!${input}` : input
        }
      })

      return sequence
    }, [inputFrames])
    console.log(frameSequence, 'frameSequence')

    return(
        <View style={styles.frameBar__container}>
            <View style={styles.frameBar}>
                {
                    frameSequence.map((frame, i) => 
                        <Frame 
                            key={`frame-${i}`}
                            frameValue={frame}
                            index={i}
                        />
                    )
                }
            </View>
        </View>
    )
}

export default FrameBar
import * as React from "react"

import { View, Text} from "react-native"
import { useStyles } from "../../hooks/useStyles"
import { InputPoint } from "../types"

interface FrameProps {
  frameValue : InputPoint | null
  index: number
}

const Frame: React.FunctionComponent<FrameProps> = ({
  frameValue,
  index
}) => { 
    const styles = useStyles()  

    const midPoint = React.useMemo(() => {
        if(!frameValue) {
            return false
        }
        const {startFrame, endFrame} = frameValue

        return index === Math.round((startFrame+endFrame)/2)
    }, [frameValue, index])

    return (
        <View 
            style={[
                styles.frame,
                frameValue ? styles.frame__alive : styles.frame__dead,
                index === 0 ? {
                    "borderLeftWidth":1,
                    "backgroundColor": "#353935",
                } : {}
            ]}
            key={`frame-${index}`}
        >
            {
                frameValue && midPoint ?
                <Text 
                    style={[
                        styles.text,
                        index === 0 ? {
                            "color":"#FFF",
                        } : {}
                    ]}
                >
                    {
                        frameValue.input
                    }
                </Text>
                : null
            }
        </View>
  )
}

export default Frame
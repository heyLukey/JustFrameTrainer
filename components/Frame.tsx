import * as React from "react"

import { View, Text} from "react-native"
import { useStyles } from "../hooks/useStyles"

interface FrameProps {
  frameValue : string | null
  index: number
}

const Frame: React.FunctionComponent<FrameProps> = ({
  frameValue,
  index
}) => { 
    const styles = useStyles()  
    const frameInput = frameValue ? frameValue.replace('!','') : frameValue

    return (
        <View 
            style={[
                styles.frame,
                frameValue ? styles.frame__alive : styles.frame__dead,
                index === 0 ? {"borderLeftWidth":1} : {}
            ]}
            key={`frame-${index}`}
        >
            {
                frameValue ?
                <Text style={styles.text}>
                    {
                        frameValue.indexOf('!') ? undefined : frameInput
                    }
                </Text>
                : null
            }
        </View>
  )
}

export default Frame
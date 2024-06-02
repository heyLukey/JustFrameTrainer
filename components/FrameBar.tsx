import * as React from "react"

import { View } from "react-native"
import { useStyles } from "../hooks/useStyles"


const FrameBar: React.FunctionComponent = () => { 
    const styles = useStyles()  
    return(
        <View style={styles.frameBar__container}>
            <View style={styles.frameBar}/>
        </View>
    )
}

export default FrameBar
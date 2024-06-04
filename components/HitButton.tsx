import * as React from "react"
import { Dimensions, GestureResponderEvent, View, ViewStyle } from "react-native"
import { useStyles } from "../hooks/useStyles"
import { Gesture, GestureDetector } from "react-native-gesture-handler"

interface HitButtonProps {
    handleOnPressIn: (e: GestureResponderEvent) => void
    style?: ViewStyle
}

const HitButton: React.FunctionComponent<HitButtonProps> = ({
    handleOnPressIn,
    style,
}) => {
    const styles = useStyles()
    const [isPressed, setIsPressed] = React.useState(false);

    const tapGesture = Gesture.Tap()
        .maxDuration(1000000) 
        .onBegin(() => {
            setIsPressed(true)
            handleOnPressIn
        })
        .onEnd(() => {
            setIsPressed(false)
        })
        .onTouchesCancelled(() => {
            setIsPressed(false)
        })

    const [width, height, radius] = React.useMemo(() => {
        const window = Dimensions.get('window')
        
        const w = window.width * 0.15
        const h = window.width * 0.15
        const r = Math.round(window.width + window.height) / 2

        return [w, h, r]
    },[])

    const innerButtonScale = 0.8

    return (
        <GestureDetector gesture={tapGesture}>
            <View 
                style={[
                    {
                        borderRadius: radius,
                        width,
                        height,
                        position: "absolute"
                    },
                    styles.hitButton,
                    style, 
                ]} 
            >
                <View
                    style={[
                        {
                            width: width * innerButtonScale,
                            height: height * innerButtonScale,
                            borderRadius: radius,
                            backgroundColor: "rgba(0,0,0,0.2)",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                    ]}
                >
                    <View
                        style={[
                            {
                                width: width * (innerButtonScale * (isPressed ? 0.925 : 1)),
                                height: height * (innerButtonScale * (isPressed ? 0.925 : 1)),
                                borderRadius: radius,
                                backgroundColor: style?.backgroundColor
                            },
                            styles.hitButton__inner,
                        ]}
                    />
                </View>
            </View>
        </GestureDetector>
    )
}

export default HitButton
import * as React from "react"

import { View } from "react-native"
import { InputLiterals } from "../types"
import { useStyles } from "../../hooks/useStyles"
import Frame from "./Frame"

interface InputFrameSequenceProps {
  currentInputs: InputLiterals[]
}

const InputFrameSequence: React.FunctionComponent<InputFrameSequenceProps> = ({
  currentInputs
}) => {
    const styles = useStyles()
    const [inputHistory, setInputHistory] = React.useState<Array<InputLiterals[]>>([])

    React.useEffect(() => {
      setInputHistory((oldArr)=>[...oldArr, currentInputs])
    },[currentInputs])

    return(
      <View>
      </View>
    )
}

export default InputFrameSequence
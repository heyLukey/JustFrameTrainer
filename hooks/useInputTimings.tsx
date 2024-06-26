import * as React from "react"
import { InputLiterals } from "../components/types";

export const useInputTimings = () => {
    const [currentInputs, setCurrentInputs] = React.useState<Array<InputLiterals>>([])
    const [currentFrame, setCurrentFrame] = React.useState<number>(0)
    const [inputSeries, setInputSeries] = React.useState<Array<Array<InputLiterals>>>(new Array(61).fill([]))


    const handleOnPressIn = React.useCallback((input: InputLiterals) => () => {
      // Handle first input
      if (inputSeries[0].length === 0) {
        setInputSeries((oldSeries)=> {
          const newSeries = [...oldSeries]
          newSeries[0] = [input]
          
          return newSeries
        })
      }

      setCurrentInputs((oldArr) => [...oldArr, input])
    }, [inputSeries])

    const handleOnPressEnd = React.useCallback((input: InputLiterals) => () => {
        setCurrentInputs((oldArr) => oldArr.filter(el => el !== input))
    }, [])
    
    React.useEffect(() => {
      // After a second clear the series
      if(currentFrame > 61) {
        setCurrentFrame(0)
        setInputSeries(new Array(61).fill([]))
      }

      // Every frame set the corresponding array index to the current inputs
      let intervalId: ReturnType<typeof setInterval>
      if (inputSeries[0].length !== 0) {
        intervalId = setInterval(() => {
          const newCurrentFrame = currentFrame+1
          setCurrentFrame(newCurrentFrame)
          setInputSeries((oldSeries)=> {
            const newSeries = [...oldSeries]
            newSeries[newCurrentFrame] = currentInputs
            
            return newSeries
          })
        }, 16.67);
      }
      return () => clearInterval(intervalId)
    }, [currentFrame, inputSeries, currentInputs])


    return {
      handleOnPressIn,
      handleOnPressEnd,
      currentInputs,
      inputSeries,
      currentFrame
    }
}
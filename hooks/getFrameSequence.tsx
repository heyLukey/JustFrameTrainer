import * as React from "react"
import { InputFrames } from "../components/types";

export const useFrameSequence = (
  inputFrames: InputFrames
) => {
    const lastInputFrame = React.useMemo(()=>inputFrames[inputFrames.length-1].endFrame,[inputFrames])

    const frameIndexSequence = React.useMemo(() => {
      const sequence: Array<number | null> = new Array(lastInputFrame).fill(null);
      inputFrames.forEach((inputFrame, frameIndex) => {
        const {startFrame, endFrame} = inputFrame
        for(let i=startFrame; i<endFrame+1; i++) {
            sequence[i] = frameIndex
        }
      })

      return sequence
    }, [inputFrames, lastInputFrame])

    const deadFrameBuffer: Array<null> = React.useMemo(() => {
      const buffer = 60 - lastInputFrame
      return new Array(buffer > 0 ? buffer : 0).fill(null)
    },[lastInputFrame])

    return {
      lastInputFrame,
      frameIndexSequence,
      deadFrameBuffer
    }
}
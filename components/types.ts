import { attackLiterals, movementLiterals } from "./constants";

export type AttackLiterals = typeof attackLiterals[number];
export type MovementLiterals = typeof movementLiterals[number];
export type InputLiterals = AttackLiterals | MovementLiterals

export interface InputPoint {
 input: InputLiterals
 startFrame: number
 endFrame: number
}
export type InputSeries = InputPoint[]

export type InputFrames = Array<InputPoint>

export type PlayerSide = "p1" | "p2"
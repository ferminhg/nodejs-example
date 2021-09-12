import { ParamsError } from "./customErrors.mjs"

export const  urlExtractor = (params) => {
  if (params.length !== 1) {
    throw new ParamsError(params)
  }
  const url = params.pop()
  return new URL({ toString: () => url })
}

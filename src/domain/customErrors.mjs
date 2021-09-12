
export class myError extends Error{
  constructor(message) {
    console.log(" 🔥 Error  -> ", message)
    super(message)
  }
}

export class ParamsError extends myError {}

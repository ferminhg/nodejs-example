import { extractUrl } from "../domain/extractUrl.mjs";

export const commandHandler= (params) => {
    const url = extractUrl(params)
    console.info(url)
}

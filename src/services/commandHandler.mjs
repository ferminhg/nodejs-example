
export const commandHandler= (params, urlExtractor, downloader, imgExtractor) => {
    const url = urlExtractor(params)
    console.info(url)
    const dom = downloader(url)
    console.log(dom)
    const imagePaths = imgExtractor(dom)
    console.info(imagePaths)
}

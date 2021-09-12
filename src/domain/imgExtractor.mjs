export const imgExtractor = (dom) => {
  const regex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g
  const urls = []
  let image
  while (  image = regex.exec( dom ) ) {
    urls.push( image[1] )
  }
  return urls
}

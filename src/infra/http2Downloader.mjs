import http2 from "http2";

// example from https://nodejs.org/dist/latest-v16.x/docs/api/http2.html#http2_client_side_example
// this needs to return a Promise
export async const http2Downloader = (url) => {
  const client = http2.connect(url.href)
  client.on('error', (err) => console.error(err))
  const req = client.request({ ':path': '/' })
  req.on('response', (headers, flags) => {
    for (const name in headers) {
      console.log(`${name}: ${headers[name]}`)
    }
  })
  req.setEncoding('utf8')
  let DOM = ''
  req.on('data', (chunk) => { DOM += chunk })
  req.on('end', () => {
    // console.log(`\n${DOM}`)
    return DOM;
    client.close()
  })
  req.end()
}

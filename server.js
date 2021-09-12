import { commandHandler } from './src/services/commandHandler.mjs'
import { urlExtractor } from "./src/domain/urlExtractor.mjs";
import { http2Downloader } from "./src/infra/http2Downloader.mjs";
import { imgExtractor } from "./src/domain/imgExtractor.mjs";

commandHandler(process.argv.slice(2), urlExtractor, http2Downloader, imgExtractor);

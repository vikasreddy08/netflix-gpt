import OpenAI from "openai";
import { OPEN_API_KEY } from "./constants";

const client = new OpenAI({
  apiKey: OPEN_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true, // to allow openai work from browser like environment
});

export default client;

import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "mystack",
  apiKey: process.env.API_KEY,
});

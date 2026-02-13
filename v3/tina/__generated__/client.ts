import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '9ad050e9e8cde08d2bd7ed9e3a1022dd1d644dd9', queries,  });
export default client;
  
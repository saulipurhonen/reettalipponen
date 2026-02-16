import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'c1193c7e6e944da1ce868fd0c798bdcd07ad97f4', queries,  });
export default client;
  
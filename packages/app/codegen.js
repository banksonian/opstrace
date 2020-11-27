/**
 * Copyright 2020 Opstrace, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
  documents: "./src/**/*.gql",
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {
          "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET
        }
      }
    }
  ],
  overwrite: true,
  generates: {
    "./src/state/graphql-api-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request"
      ],
      config: {
        rawRequest: true,
        skipTypename: true
      }
    }
  }
};
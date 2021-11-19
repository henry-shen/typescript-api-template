# Typescript API

## What's required to run this API

-NodeJS (preferably the latest version but should work for Node 12 and onwards)

-PostgreSQL (not required, see below)


## Getting started

Without database:

1. Install dependencies: ``yarn install``
2. Start the server: ``yarn start``

With database:

1. Install dependencies: ``yarn install``
2. Default PostgreSQL config already defined with host=127.0.0.1 and port=5432.
   If you are using different config to this, please update this in src/config.ts
   and src/database/create
3. Update useMockDatabase to 'false' in src/config.ts
4. Create the database: ``yarn db:create``
5. Start the server: ``yarn start-with-db``

## Endpoints

The GET endpoint is public and has no auth.

``GET -> /users/:username`` fetch links by username

The POST endpoint requires Basic authorization in the Authorization header.
After the server authenticates the user, it will save the new link and the userId to the database.

``POST -> /links`` create link

## Tests

Tests can be run by using: ``yarn test``

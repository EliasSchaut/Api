# Web-Api
Personal Web Api Interface not recommended to use for your own.

## Set Up
1. You need node installed (current LTS version or newer)
2. Download the newest version of the code
3. Rename the ```.env.tmp``` file to ```.env```
4. Open the configuration file (now ```config.json```) and set values. 
5. Optional: Configure [`package.json`](https://github.com/EliasSchaut/Web-Api/blob/main/package.json)
6. Run `npm install`.

## Run
Run `app.js` with `node src/app.js` or `npm start`. \
Alternative you can use `npm run pm`, `npm run pm-restart` and `npm run pm-stop`.
This will use [pm2](https://www.npmjs.com/package/pm2) for executing

## Routes

### Public
*None*

### Private
Private routes are only accessible if you pass the correct api-bearer-token in the request header.
The programm hashes the passed token via sha256 and compares it to the one set in the env file.
Only if the hashes are equal the request will be accepted.

* `POST /bimi/floorcon` \
Add the floorcon to every floor member!

* `POST /bimi/credit` \
Give credit to a specific floor member!
  Body as `x-www-form-urlencoded`:
```js
{
    account: <string> // E401 | E402 | ...
    value: <string> // e.g. "1.50"
    text: <string> // e.g. "Credit for buying a bread!"
}
```
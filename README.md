# Web-Api
Personal Web Api Interface not recommended to use for your own.

## Set Up
1. You need node installed (current LTS version or newer)
2. Download the newest version of the code
3. Rename the [configuration file](https://github.com/EliasSchaut/Web-Api/blob/main/config/config.json.tmp) from ```config.json.tmp``` to ```config.json```
4. Open the configuration file (now ```config.json```) and set values. 
5. Optional: Configure [`package.json`](https://github.com/EliasSchaut/Web-Api/blob/main/package.json)
6. Run `npm install`.

## Run
Run `app.js` with `node src/app.js` or `npm start`. \
Alternative you can use `npm run pm`, `npm run pm-restart` and `npm run pm-stop`.
This will use [pm2](https://www.npmjs.com/package/pm2) for executing

## Routes

### Public
* `POST /bday/member` \
Post a bday_member into the DB! \
Body as `x-www-form-urlencoded`:
```js
{
    forname: <string>
    surname: <string>
    need_bed: <on> or <off>
    nerd: <on> or <off>
    anonym: <on> or <off>
}
```

* `GET /bday/members/public` \
Get all public (not anonym) bday_members from the DB as json!
```js
[
    {
        forname: <string>
        surname: <string>
    },
    ...
]
```

* `GET /bday/members/count` \
Get the number of all bday members from the DB as on single text! 

### Private
Private routes are only accessible if you pass the correct api-token in the header `APITOKEN: <token>`.
The programm hashes the passed token via sha256 and compares it to the one set in the configuration file.
Only if the hashes are equal the request will be accepted.

* `GET /bday/member` \
  Get a bday_member from the DB!

* `DELETE /bday/member` \
Delete a bday_member from the DB! \
Body as `x-www-form-urlencoded`:
```js
{
    forname: <string>
    surname: <string>
}
```

* `GET /bday/members` \
Get all bday_members (also the anonym members) from the DB as json!

* `GET /bday/members/html` \
Get all bday_members (also the anonym members) from the DB as html!

* `GET /bday/members/sums` \
Get sums of all kind of data!

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
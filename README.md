# Is Mutant App

## Minimum requirements

Before starting, check the following points.

- for packaged solution:
  - docker v 19.03.2
  - docker compose v 1.24.1
- to run unit tests and local server:
  - npm v 6.9.0
  - node v 10.16.0
- necessary environment variables:
  - `db_host`: host address of database.
  - `db_name`: user of database.
  - `db_password`: user password
  - `db_database`: `mutant_log`
- puerto a usar `1337` (Node APP) y `3006` (Mysql)

**If you have MySQL installed locally please stop the service so that the
MySQL container port has no problems**

## Run unit tests

to run the unit tests, the following steps must be followed:

Step 1

```bash
cd [...]/is-mutant
npm install
```

Step 2

```bash
npm run test
```

## Run local server

to run the local server, the following steps must be followed:

Step 1

```bash
cd [...]/is-mutant
npm install
```

Step 2

```bash
npm run server
```

the service is available in `localhost: 1337`.

**Importante debe haberse cargado el script de base de datos `init.sql` que se encuentra en `./db`**
**Important the env vars for the database must be adjusted**

You can also run the local environment with the following command.

```bach
docker-compose up -d
```

if you do it this way the service is available in `localhost: 1337` and you don't need to configure anything, this includes the database.

## Endpoints

|path|/mutant|
|--|--|
|method|post|
|params| {dna : []} |

request

```JSON
{
  "dna": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}
```

response OK - mutant

```JSON
{
  "code": 200,
  "values": {
    "dna": [
      "ATGCGA",
      "CAGTGC",
      "TTATGT",
      "AGAAGG",
      "CCCCTA",
      "TCACTG"
    ]
  },
  "message": "db: mutant"
}
```

response OK - no mutant

```JSON
{
  "code": 403,
  "values": {
    "dna": [
      "ATCCGA",
      "CAGTGC",
      "TCATGT",
      "AGAACG",
      "GTCCTA",
      "TCACTG"
    ]
  },
  "message": "done: not mutant"
}
```

response NOK - DB Issue

```JSON
{
  "code": 400,
  "values": "error db",
  "message": {
    "errno": "ECONNREFUSED",
    "code": "ECONNREFUSED",
    "syscall": "connect",
    "address": "127.0.0.1",
    "port": 3306,
    "fatal": true
  }
}
```

|path|/stats|
|--|--|
|method|get|
|params| N/A|

Response OK

```JSON
{
  "code": 200,
  "values": {
    "ADN": {
      "count_mutant_dna": 2,
      "count_human_dna": 1,
      "ratio": "0.67"
    }
  },
  "message": "Done"
}
```

response NOK - DB Issue

```JSON
{
  "code": 400,
  "values": "error db",
  "message": {
    "errno": "ECONNREFUSED",
    "code": "ECONNREFUSED",
    "syscall": "connect",
    "address": "127.0.0.1",
    "port": 3306,
    "fatal": true
  }
}
```

## Flowchart /mutant

![](https://github.com/worker-8/is-mutant/blob/master/fig1.jpg?raw=true)

## Architecture

![](https://github.com/worker-8/is-mutant/blob/master/fig2.jpg?raw=true)

## Coverage

File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
All files             |      100 |      100 |      100 |      100 |                   |
 col_validator.js     |      100 |      100 |      100 |      100 |                   |
 is_mutant.js         |      100 |      100 |      100 |      100 |                   |
 oblique_validator.js |      100 |      100 |      100 |      100 |                   |
 process_data.js      |      100 |      100 |      100 |      100 |                   |
 row_validator.js     |      100 |      100 |      100 |      100 |                   |

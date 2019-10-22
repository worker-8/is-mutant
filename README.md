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

### mutant

### stats

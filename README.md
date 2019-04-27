# fourteenth-set
Website for the convocation of Covenant University's 14th set.

## Folder structure
This project contains two main folders: `backend` and `frontend`

The `backend` is built with `django` while the `frontend` is built with `React.js`.

## Setup
For the backend, you need to have following setup on your local machine:

Postgres 9.6

Python 3

For the frontend, you need to have following setup on your local machine:

Node.js

## Running the application
##### Backend: 
Create an `.env` file in `fourteenth-set/backend`.
If you are using docker, you need to create this directory `fourteenth-set/backend/.envs/.local/` and have the following files `.django`, `.postgres`. An example of the variables that should be included in `.django` and `.postgres` are shown in `.django.example` and `.postgres.example` respectively.
For the backend to work properly, you need to do the folowing you need to run `npm run build` on the frontend.

## Code quality and check
`Black` is used for formatting python code. `Black` runs when you commit. To make this work you need to run `pre-commit install`.

## Deployment 
This project is hosted on [http://the14thset.covenantuniversity.edu.ng](http://the14thset.covenantuniversity.edu.ng) on Digital Ocean.

There is a python file: `fabfile.py` that helps in deployment, backups and logs.

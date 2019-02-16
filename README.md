# fourteenth-set
Website for the convocation of Covenant University's 14th set.

# Folder structure
This project contains two main folders: `backend` and `frontend`

The `backend` is built with `django` while the `frontend` is built with `React.js`.

# Setup
For the backend, you need to have following setup on your local machine

Postgres 9.6
Python 3

For the fronted, you need to have following setup on your local machine

Node.js
npm

# Running the application
For backend, you need to create an `.env` file
If you are using docker, you need to create this directory `.envs/.local/` and have the following files `.django`, `.postgres`. An example of the variables
that should be included in `.django.example` and `.postgres.example` respectively.
For the backend to work properly, you need to do the folowing you need to run `npm run build` on the frontend.
To format the backend code, you need to run `pre-commit install`

For the frontend

# Code quality and check
`Black` is used for formatting python code. `Black` runs when you commit

# Deployment 

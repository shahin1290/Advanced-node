# Advanced Node starter app

## Getting started

 1. Clone the repo using 

    `git clone https://github.com/shashankkatte/Advanced-node-starter.git` 

    or if using ssh

    `git clone git@github.com:shashankkatte/Advanced-node-starter.git`

 2. Navigate into the root folder 
 
    `cd Advanced-node-starter` and run `npm install` 
    
    this installs all the npm dependencies for our servir side of the project.

 3. Next navigate into the client directory 
 `cd Advanced-node-starter/client` 
 
    and run  `npm install`
  to install dependencies for React App

  ## Google API redirects

  Make sure you provide the proper URIs in google dashboards

  Authorised JavaScript origins
  `http://localhost:5000`

  Authorised redirect URIs
  `http://localhost:5000/auth/google/callback`
  `http://localhost:3000/auth/google/callback`
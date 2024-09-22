# javascript/node for backend
## day1 
Server: is a s/w which serve data or things
Backent Development : two major components
1. A programming language e.g: Java, php, JS, golang, C++(crow framework)
2. A database e.g: MongoDB, MySQL, Postgre SQL, sqlite
   we are using ORM or ODM to interact with database

   Architecture:-
   Browser/Mobile(Frontend) <=> | API | <=> Backend <=> Database 

-> A Javascript based Backend deals with :-
   1.Data        2.File        3.Third Party(APIs)

-> A JS Runtime: Node Js / Deno / Bun
   Package.json,      .env    (Readme, git, lint, prettier etc)

-> src
   index file->DB connects,     APP file-> config,cookies,    constants file-> enums, DB-name

   #Directories Structures
    -> DB
    -> Models
    -> Controllers 
    -> Routes
    -> Middlewares
    -> Utils
    -> More (depends)

## day 2 : deploy backend code in production
   <!-- There are around 1K to 1.5K request handled concurrently by express/node through get, port, set etc.. -->
   [computer/mobile] <---->get(Express)<----> [Server] listen

   npm init (this utility tells us a process of creating  package.json)
   node 'file-name' (to run this file by using this command)

   #### How to run by package.json
   npm run start(start is script in package.json replace of node 'file-name') run file from package (scripts are mainly used for server)

   #### express install
   npm install express

   ### Express : Fast, unopinionated, minimalist web framework for Node.js
   Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
   Express is a lightweight and flexible routing framework with minimal core features meant to be augmented through the use of Express middleware modules.
   With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
   Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
   It is used for building RESTful APIs with Node.js[RESTfull API is an interface that two computer systems use to exchange information securely over the internet.]

   #### PORT
   65,535 possible port numbers in out system some ports are free and some are paid.
   example: 3000, 5000 for localhost(our system) 
   Some ports works with their associated network protocol: Ports 20 and 21: FTP(FILE TRANSFER PROTOCOL)

   ##### Note: If any change in code you must restart the server for showing changes on display

   ### dotenv package
   Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

   ### deply for production:
   using aws, azure, digitalOcean, Heruko
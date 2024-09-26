# model link
  https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj

# nodemon 
  nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
     > npm i nodemon [when using in development as well as production]
     > npm i -D nodemon [ development dependency]
  or > npm install --save-dev nodemon [ dev dependency]

  to execute nodemon using command:
     > nodemon src/index.js


# middleware
  Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

  Middleware functions can perform the following tasks:
  1. Execute any code.
  2. Make changes to the request and the response objects.
  3. End the request-response cycle.
  4. Call the next middleware function in the stack.
  
  If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
  
  An Express application can use the following types of middleware:

  1. Application-level middleware
  2. Router-level middleware
  3. Error-handling middleware
  4. Built-in middleware
  5. Third-party middleware


# Prettier
  Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
  > npm i prettier
  > npm i -D prettier
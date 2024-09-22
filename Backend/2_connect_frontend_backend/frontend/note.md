# vite bundler used
   npm create vite@latest [for new project with new folder]
   npm create vite@latest . [for new project in existing folder]

## axios
   axios is a library for web request to handle every situation of data request, data loading etc.. 
   npm i axios
   we can also use fetch

### Note: 
    useEffect is a React Hook that lets you synchronize a component with an external system.

### Note:
    Access to XMLHttpRequest at 'http://localhost:port_number/jokes' from origin 'http://localhost:port_number' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    <strong>Cross Origin(CORS)</strong> means both application run on different port, url ...
    If both application has same port number and url.. then It is called same origin. After That allow us
    There are multiple solution to allow cors:
    1. cors package install then use it to allow 
       > npm install cors
    2. Whitelisting

### proxy concept
    
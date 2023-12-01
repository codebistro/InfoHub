
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app')


//console.log(app.get('env'));// which is the environment we are currentlly in 

console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`App running on port ${port}...`)
})


//everything related to server in this file.
//environment variable
//error handling
//database configurations
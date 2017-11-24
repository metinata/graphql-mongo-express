import express from 'express'
import mongoose from 'mongoose'
import graphExpress from 'express-graphql'
import config from './config'
import { User } from './models'
import populateData from './data'
import schema from './graphql'

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost/${config.dbName}`, { useMongoClient: true });

const app = express();

app.use('/', graphExpress({
    schema: schema,
    graphiql: true
}));

app.listen(config.port, () => {
    console.log(`Express is running on ${config.port} port`);
    populateData();
});
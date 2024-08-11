import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas/index.js';
import resolvers from './resolvers/index.js';
import sequelize from './config/database.js';

const startServer = async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    // Sincronizar la base de datos
    //await sequelize.sync();

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`)
    });
    
};
startServer();
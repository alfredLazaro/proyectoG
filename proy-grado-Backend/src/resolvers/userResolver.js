import User from '../models/user.js';

const userResolver = {
    Query: {
        getUser: async (_, { id }) => {
            return await User.findByPk(id);
        },
        getUsers: async () => {
            return await User.findAll();
        }
    },
    Mutation: {
        createUser: async (_, { name, email }) => {
            return await User.create({ name, email });
        }
    }
};

export default userResolver;
import { GraphQLSchema, GraphQLNonNull, GraphQLList, GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql'
import types from './types'
import { User } from '../models'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        description: 'Query Root',
        fields: {
            Users: {
                name: 'All users',
                description: 'returns all users',
                type: new GraphQLList(types.UserType),
                resolve: () => User.find()
            },
            User: {
                name: 'Single user',
                description: 'returns specific user that matches given id',
                type: types.UserType,
                args: {
                    _id: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (parent, { _id }) => User.findOne({ _id: _id })
            }
        }
    })
});

export default schema
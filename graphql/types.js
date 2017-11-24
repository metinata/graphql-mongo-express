import { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLString } from 'graphql'
import { User } from '../models'

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Sysem user',
    fields: () => ({
        _id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        surname: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        friends: {
            type: new GraphQLList(UserType),
            resolve: (user) => User.find({ _id: user.friends })
        }
    })
});

export default {
    UserType
}
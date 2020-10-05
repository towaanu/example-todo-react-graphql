import { GraphQLScalarType } from "graphql"
import { Kind } from 'graphql/language';

const DateType = new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue: value => new Date(value),
    serialize: value => value.getTime(),
    parseLiteral: ast => {
        if (ast.kind === Kind.INT) {
            return parseInt(ast.value, 10)
        }
        return null
    }
})

const scalarTypesResolver = {
    Date: DateType
}

export { scalarTypesResolver }
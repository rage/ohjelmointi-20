const GraphQLString = require("gatsby/graphql").GraphQLString
const GraphQLList = require("gatsby/graphql").GraphQLList
const GraphQLObjectType = require("gatsby/graphql").GraphQLObjectType

const vocabularyWordRegex = /<\s*vocabulary-word\s*id\s*=\s*['"]\s*([\w-]+)\s*['"]\s*\/>/gm

function getMatches(string, regex, index) {
  index || (index = 1) // default to the first capturing group
  var matches = []
  var match
  while ((match = regex.exec(string))) {
    const location = match.index
    matches.push({ match: match[index], location })
  }
  return matches
}

const VocabularyWordType = new GraphQLObjectType({
  name: `VocabularyWord`,
  fields: {
    id: {
      type: GraphQLString,
      resolve(details) {
        return details.id
      },
    },
    type: {
      type: GraphQLString,
      resolve(details) {
        return details.type
      },
    },
    parentPagePath: {
      type: GraphQLString,
      resolve(details) {
        return details.parentPagePath
      },
    },
  },
})

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `MarkdownRemark`) {
    return {
      vocabularyWords: {
        type: GraphQLList(VocabularyWordType),
        resolve: (node, _fieldArgs) => {
          const source = node.rawMarkdownBody || ""
          const words = getMatches(source, vocabularyWordRegex, 1).map(res => {
            return {
              id: res.match,
              location: res.location,
              type: "vocabularyWord",
              parentPagePath: node.frontmatter.path,
            }
          })

          return words.sort(function(a, b) {
            return a.location - b.location
          })
        },
      },
    }
  }

  // by default return empty object
  return {}
}

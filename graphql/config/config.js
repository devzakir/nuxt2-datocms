import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import dataTypes from './fragmentTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: dataTypes
})

export default function () {
  return {
    httpEndpoint: 'https://graphql.datocms.com',
    httpLinkOptions: {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 15d3cc0fea624e62e8ada6c385a5cd`,
        // 'X-Environment': 'dev-2022-12-20'
      }
    },
    cache: new InMemoryCache({ fragmentMatcher })
  }
}

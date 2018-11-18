"use strict"
import { GraphQLObjectType } from 'graphql/type';
import cuisineQuery from './cuisine/query';
import restaurantQuery from './restaurant/query';
import restaurantTypeQuery from './restaurant_type/query';

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...cuisineQuery,
    ...restaurantQuery,
    ...restaurantTypeQuery
  }
});
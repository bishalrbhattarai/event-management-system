import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { Request, Response } from 'express';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLError } from 'graphql';

export interface GqlContext {
  req: Request;
  res: Response;
}

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      context: ({ req, res }): GqlContext => ({ req, res }) as GqlContext,
      formatError: (error: GraphQLError) => {
        return {
          message: error.message,
          locations: error.locations,
          path: error.path,
          code: error.extensions?.code,
          details: error.extensions?.originalError || [],
        };
      },
    }),
  ],
})
export class GraphqlModule {}

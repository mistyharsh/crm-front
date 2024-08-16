import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print, type ExecutionResult } from 'graphql';
import ky from 'ky';

import { Operations } from './Operation.js';

export type ApiOperations = typeof Operations;

export async function execute<
  Operation extends keyof ApiOperations,
  TResult extends ApiOperations[Operation] extends TypedDocumentNode<
    infer X,
    any
  >
    ? X
    : never,
  TVariables extends ApiOperations[Operation] extends TypedDocumentNode<
    TResult,
    infer V
  >
    ? V
    : never,
>(operation: Operation, variables?: TVariables): Promise<TResult> {
  const query = print(Operations[operation]);

  const result = await ky.post('/api/graphql', {
    json: { query, variables },
  });

  const json = await result.json<ExecutionResult<TResult>>();

  if (json.data) {
    return json.data;
  }

  // TODO: More polishing here
  throw new Error(json.errors?.[0].message);
}

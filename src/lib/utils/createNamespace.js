// @flow
import { curryN } from '../fp';

export const createNamespace = curryN(2, (namespace: string, action: string) => `${namespace}/${action}`);

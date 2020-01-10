// @flow

export const logAndThrowError = (e: Error) => {
  console.warn('Ошибка поиска артиста:', e);
  throw e;
};

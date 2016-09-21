// @flow

export const mean = (values: number[]): number =>
    values.length > 0 ? values.reduce((sum, next) => sum + next) / values.length : 0;

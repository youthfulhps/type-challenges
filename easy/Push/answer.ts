type Push<T extends any[], U> = [...T, U];

type Result = Push<[1, 2], "3">; // [1, 2, '3']
type Result1 = Push<[1, 2], 3>; // [1, 2, 3];

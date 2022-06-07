type Equal<T extends any, U extends any> = T extends U ? true : false;

type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">; // expected to be `false`
type hasThree = Includes<[1, 2, 3, 4], 3>; //expected to be 'true'
type hasFalse = Includes<[true, true, true, true], false>; //expected to be 'false'

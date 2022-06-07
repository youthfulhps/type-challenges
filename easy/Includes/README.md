# Includes

### Challenge

JavaScript의 Array.includes 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, true 또는 false를 반환해야 합니다.

### Example

```ts
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
type hasThree = Includes<[1, 2, 3, 4], 3>;
type hasFalse = Includes<[true, true, true, true], false>;
```

### Answer

```ts
type Equal<T extends any, U extends any> = T extends U ? true : false;

type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
```

### Result

도저히 안풀려서 컨셉만 카피하여 문제를 풀었다. 런타임에 타입 추론을 가능하도록 infer 사용,
배열을 순회해서 동일한 타입이 존재하는 지 판단하여 결과값을 반환한다.

| Solve | Stuck |
| ----- | ----- |
|       | x     |

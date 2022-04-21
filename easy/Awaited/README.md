# Awaited

### Challenge

Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?
예를 들어 Promise<ExampleType>이 있을 때, ExampleType을 어떻게 얻을 수 있을까요?

### Example

```ts
type MyAwaited = any;

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type AwaitedX = MyAwaited<X>; //expected to be 'string'
type AwaitedY = MyAwaited<Y>; //expected to be '{ field: number }'
type AwaitedZ = MyAwaited<Z>; //expected to be 'string | number'
```

### Answer

```ts
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;
```

infer 키워드는 타입 스크립트가 엔진이 런타임 상황에서 타입을 추론할 수 있도록 하고 그 형태가 참이면 U에 할당을,
거짓이면 never을 할당하여 무시한다.

T가 Promise<infer U>에 extends 여부에 따라 삼항 연산자로 그 결과를 반환한다. 재밌는 점은 중첩된 Promise 구조를
파해치기 위해 MyAwaited<U>를 재귀적으로 반환한다.

# Exclude

### Challenge

T에서 U에 할당할 수 있는 타입을 제외하는 내장 제네릭 Exclude<T, U>를 이를 사용하지 않고 구현한다.

### Example

```ts
type OnlyString = MyExclude<string | number, number>; // expected to be 'string'
type OnlyOne = MyExclude<1 | 2, 2>; //expected to be '1'
```

### Answer

```ts
type MyExclude<T, U> = T extends U ? never : T;
```

조건부 타입으로서 제약조건(<> 내부)에서 사용하는 extends키워드와 다르게 타입구현 영역에서 사용하는 extends는 삼항 연산자를 사용할 수 있다.

# Parameters

### Challenge

내장 제네릭 `Parameters<T>`를 이를 사용하지 않고 구현하세요.

### Example

```ts
type T0 = MyParameters<() => string>; //type is []
type T1 = MyParameters<(s: string) => void>; //type is [s: string]
type T4 = MyParameters<any>; //type is any
```

### Answer

```ts
type MyParameters<T extends (...arg: any[]) => any> = T extends (
  ...arg: infer U
) => any
  ? [...U]
  : any;
```

### Result

| Solve | Stuck |
| ----- | ----- |
| [x]   |       |

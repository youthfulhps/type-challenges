# Push

### Challenge

`Array.push`의 제네릭 버전을 구현하세요.

### Example

```ts
type Result = Push<[1, 2], "3">; // [1, 2, '3']
```

### Answer

```ts
type Push<T extends any[], U> = [...T, U];
```

### Result

| Solve | Stuck |
| ----- | ----- |
| x     |       |

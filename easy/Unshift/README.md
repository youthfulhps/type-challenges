# Unshift

### Challenge

`Array.unshift`의 타입 버전을 구현하세요.

### Example

```ts
type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
```

### Answer

```ts
type Unshift<T extends any[], U> = [U, ...T];
```

### Result

| Solve | Stuck |
| ----- | ----- |
| [x]   |       |

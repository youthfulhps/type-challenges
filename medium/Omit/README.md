# Omit

### Challenge

`T`에서 `K` 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Omit<T, K>`를 이를 사용하지 않고 구현하세요.

### Example

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
```

type MyOmit<T, K> = {
[k in MyExclude<keyof T, K>]: T[k];
};

### Answer

```ts
type MyExclude<T, U> = T extends U ? U : never;

type MyOmit<T, K> = {
  [T in MyExclude<keyof T, K>] = T[k]
}
```

### Result

| Solve | Stuck |
| ----- | ----- |
|       | [x]   |

# Pick

### Challenge

T에서 K 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 제너릭을 구현한다.
타입스크립트 내장 유틸 타입 `Pick`을 구현한다.

### Example

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

### Answer

```ts
type MyPick<T, K extends keyof T> = {
  [k in K]: T[k];
};
```

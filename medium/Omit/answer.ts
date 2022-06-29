type MyExclude<T, U> = T extends U ? never : T;

type MyOmit<T, K> = {
  [k in MyExclude<keyof T, K>]: T[k];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

# Readonly

### Challenge

타입스크립트 내장 유틸 타입 `Readonly`를 사용하지 않고 제너릭을 구현한다.

T의 모든 속성이 읽기 전용으로 설정된 타입을 생성한다. 즉, 생성된 타입의 속성을 다시 할당할 수 없다.

### Example

```ts
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
```

### Answer

```ts
type MyReadonly<T> = {
  readonly [k in keyof T]: T[k];
};
```

함수가 매개변수를 변경하지 않는다면 `readonly`로 선언해야 한다. 더 넓은 타입으로 호출할 수도 있고, 의도치 않은 변경이 방지될 수 있다.

가령 `readonly number[]`는 타입이고 `number[]`와 구분되는 몇 가지 특징이 있다.

1. 배열의 요소를 읽을 수 있지만, 쓸 수는 없다.
2. 배열의 length를 읽을 수 있지만, 변경할 수 없다.
3. 배열을 변경하는 pop과 같은 메서드들을 사용할 수 없다.

`readonly` 와 사촌격되는 `Readonly` 제너릭을 사용하여 의도치 않은 변경으로 인한 오류를 방지할 수 있다.

### Reference

[아이템17. 변경 관련된 오류 방지를 위해 readonly 사용하기](https://github.com/youthfulhps/TIL/tree/main/typescript/%EC%95%84%EC%9D%B4%ED%85%9C17.%20%EB%B3%80%EA%B2%BD%20%EA%B4%80%EB%A0%A8%EB%90%9C%20%EC%98%A4%EB%A5%98%20%EB%B0%A9%EC%A7%80%EB%A5%BC%20%EC%9C%84%ED%95%B4%20readonly%20%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

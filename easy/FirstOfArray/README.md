# Pick

### Challenge

배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현한다.

### Example

```ts
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```

### Answer

```ts
type First<T extends any[]> = T extends [] ? never : T[0];
```

만약, `arr3 = []` 일 경우, `undefined`가 되기 때문에 이 때 `never` 타입으로 부여해야 한다.

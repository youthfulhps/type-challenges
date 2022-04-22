# If

### Challenge

조건 C, 참일 때 반환하는 타입 T, 거짓일 때 반환하는 타입 F를 받는 타입 If를 구현하세요. C는 true 또는 false이고, T와 F는 아무 타입입니다.

### Example

```ts
type If<C, T, F> = any;
type TrueCaseType = If<true, "a", "b">; // expected to be 'a'
type FalseCaseType = If<false, "a", "b">; // expected to be 'b'
```

### Answer

```ts
type If<C, T, F> = C extends true ? T : F;
```

### Result

| Solve | Stuck |
| ----- | ----- |
| [x]   |       |

타입 영역에서 true, false와 같은 런타임 불리언 값에 접근할 수 없기 때문에 true로 타입을 좁힐 수 있는지를 판단하여 결과를 얻어내는 방식으로 풀었다.

정답 코드는 `type If<C extends, T, F> = C extends true ? T : F` !

# LengthOfTuple

### Challenge

배열(튜플)을 받아 길이를 반환하는 제네릭 Length<T>를 구현한다.

### Example

```ts
type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
```

### Answer

```ts
type Length<T extends readonly any[]> = T["length"];
```

배열의 네임스페이스로서 접근할 때는 `T.length`가 가능하지만, 타입의 경우 `T["length"]`로 접근할 수 있다.

type MyReturnType<T> = T extends (...args: any) => infer U ? U : never;

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type FnReturnType = MyReturnType<typeof fn>;


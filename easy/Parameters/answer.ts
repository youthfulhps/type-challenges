type MyParameters<T extends (...arg: any[]) => any> = T extends (
  ...arg: infer U
) => any
  ? [...U]
  : any;

type T0 = MyParameters<() => string>; //type is []
type T1 = MyParameters<(s: string) => void>; //type is [s: string]
type T4 = MyParameters<any>; //type is any

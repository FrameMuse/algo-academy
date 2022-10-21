import { ReducersType } from "./store.types"

declare module "redux" {
  interface Store { }
}
declare module "react-redux" {
  interface DefaultRootState extends ReducersType { }
}

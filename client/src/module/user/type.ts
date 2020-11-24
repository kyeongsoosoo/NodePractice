import { ActionType } from "typesafe-actions";
import { actions } from "./action";

export type UserAction = ActionType<typeof actions>;

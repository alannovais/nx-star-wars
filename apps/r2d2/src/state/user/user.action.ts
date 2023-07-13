import { createAction, props } from "@ngrx/store";
import { User } from "../../interfaces/user.interface.ts/user.interface";

export const createUser = createAction('Create user for system', props<User>());

export const loginUser = createAction('User will be accessing for the system', props<User>());

export const logoffUser = createAction('User will be turn off your access for the system', props<User>());


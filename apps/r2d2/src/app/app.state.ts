import { Persons } from "../interfaces/persons/persons.interface";

export interface AppState {
    readonly persons: Persons[];
}
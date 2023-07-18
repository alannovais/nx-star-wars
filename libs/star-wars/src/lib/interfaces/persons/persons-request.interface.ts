import { Persons } from './persons.interface';

export interface PersonsRequestInterface {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<Persons>;
}
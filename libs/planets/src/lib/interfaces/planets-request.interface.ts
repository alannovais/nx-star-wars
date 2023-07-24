import { Planets } from "./planets.interface";

export interface PlanetsRequest {
    count: number,
    next: string | null,
    previous: string | null,
    results: Planets[]
}
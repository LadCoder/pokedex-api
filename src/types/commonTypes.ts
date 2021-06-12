export type Relation = { name: string; url: string }

export type Pagination = {
    count: number
    next: string
    previous: string
    results: Relation[]
}

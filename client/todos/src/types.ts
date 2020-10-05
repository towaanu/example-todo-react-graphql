export interface Todo {
    id: number
    label: string
    isDone: boolean
}

export interface TodoInput {
    label: string
    isDone?: boolean
}

export interface TodoUpdateInput {
    label?: string
    isDone?: boolean
}
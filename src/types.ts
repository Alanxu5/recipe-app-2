export interface Filter {
  id: number,
  name: string,
  checked: boolean
}

export interface Filters {
  methods: Filter[]
}
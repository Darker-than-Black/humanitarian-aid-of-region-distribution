/* ------ BASE ------ */

export interface ServerResponse<T> {
  success: boolean
  error?: string
  data: T
}

/* ------ API ------ */

export interface Item extends Record<string, any> {
  name?: string
  status: Status
  id: string
  item_id: string
  updated?: string
  delivered?: string
}

export interface SupplyDistribution extends Record<string, any> {
  name?: string
  dosage?: string
  quantity?: string
  delivery_balance?: string
}

export interface Status {
  code: string
  name: string
  is_final: boolean
}

export interface ZozDistribution {
  divisions: ZozDivision[]
  supply: ZozSupply
}

export interface ZozDivision {
  division_id: string
  division?: string
  need?: string
  comment?: string
  recommended_quantity?: string
  zoz_id?: string
  distribution_quantity?: string
}

export interface ZozSupply {
  delivery_balance: string
  quantity: string
}

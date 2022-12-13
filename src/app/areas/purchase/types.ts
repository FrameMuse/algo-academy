export interface Plan {
  id: string
  title: string
  description: string
  cost: number
  durationMonths: number
  benefits: string[]
  mostPopular?: boolean
}

export interface Purchase {
  title: string
  receiptId: string
  purchaseDate: Date
  totalCost: number
}

export interface Product {
  src: string
  text: string
  currentPrice: number
  oldPrice: number
  europeSize: number
  usSize: number
}

export const products: Product[] = [
  {
    src: '/57_40_men.png',
    text: "New Balance 57/40 Men's Sneakers - Mindful Grey",
    currentPrice: 129.0,
    oldPrice: 189.0,
    europeSize: 42,
    usSize: 8.5,
  },
  {
    src: '/997h_men.png',
    text: "New Balance 997H Men's Sneakers - Grey",
    currentPrice: 119.0,
    oldPrice: 179.0,
    europeSize: 42.5,
    usSize: 9,
  },
  {
    src: '/57_40_women.png',
    text: "New Balance 57/40 Women's Sneakers - Oyster Pink",
    currentPrice: 149.0,
    oldPrice: 259.0,
    europeSize: 41.5,
    usSize: 8,
  },
]

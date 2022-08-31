export interface ShippingInfo {
  src: string
  company: string
  deliveryTime: string
  price: string
}

export const shippingInfo: ShippingInfo[] = [
  {
    src: '/fedex.png',
    company: 'Fedex Delivery',
    deliveryTime: '2-3days work',
    price: 'Free',
  },
  {
    src: '/dhl.png',
    company: 'DHL Delivery',
    deliveryTime: '1-3days work',
    price: '$ 12.00',
  },
]

class Order {
	constructor(
		public logradouro: string,
		public numero: number,
		public complemento: string,
		public payment: string,
		public orderItems: OrderItem[] = [],
		public id?: number
		){}
}

class OrderItem {
	
	constructor(
		public quantity: number, public menuId: number
		) {}
}

export { Order, OrderItem }
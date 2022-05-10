const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (pedido) => {
    const infoArray = Object.values(pedido);
    // console.log(infoArray);
    console.log(`Olá ${infoArray[0]}, Telefone ${infoArray[1]}, R. ${infoArray[2]['street']}, N: ${infoArray[2]['number']}, AP: ${infoArray[2]['apartment']}`);

}

customerInfo(order);
order.name = "Luiz Silva";
order.payment.total = 50;

const orderModifier = (pedido) => {
    const infoArray = Object.values(pedido);
    const pizzas = Object.keys(pedido.order.pizza);
    console.log(`Olá ${infoArray[0]}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${infoArray[3]['drinks']['coke']['type']} é de ${infoArray[4]['total']} reais.`);
}

orderModifier(order);
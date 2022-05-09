const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);

  const addKey = (object, key, value) => {
      let chave = key;
      const valor = value;
      object[chave] = valor;
      console.log(object);
  }

  addKey({name: 'Julio', age:22}, 'lastName', 'Marques');
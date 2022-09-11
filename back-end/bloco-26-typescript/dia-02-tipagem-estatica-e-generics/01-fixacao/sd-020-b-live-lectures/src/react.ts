


type User = {
  name: string;
}

type Address = {
  endereco: string;
}

function useState<T>(state): [T, Function] {

  const func = (newState) => Object.assign(state, newState);

  return [state, func]
}

const [user, setUser] = useState<User>({ name: 'Andre' });
const [address, setAddress] = useState<Address>({ endereco: 'Rua #01' });

console.log(user);
setUser({ name: 'Zambelli'})
console.log(user);

console.log(address);
setAddress({ endereco: 'Rua #02'})
console.log(address.endereco);
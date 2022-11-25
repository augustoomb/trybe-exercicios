import {useSelector} from 'react-redux';
export default function Header(){
  const user = useSelector(({user}) => (user))
  const total = 0;
  return (
    <div>
      <div>Usuário logado: {`${user.name} <${user.email}>`}</div>
      <div>Total: BRL {total}</div>
    </div>
  )
}
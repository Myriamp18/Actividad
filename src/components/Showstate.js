import { useContext } from 'react';
import { useMyContext} from '../app/MyStateProvider';

const Showstate = () => {
  const [state, setState] = useMyContext();
  return ( <p>{state.name}</p> );
}

export default Showstate;
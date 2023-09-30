import MyProvider from './app/MyStateProvider';
import ShowState from './components/Showstate';
import LogIn from './components/Login';

const App = () => (

   <div> 
    <h2>LOGIN</h2>
    <MyProvider>
      <LogIn />
      <ShowState />
    </MyProvider>
    </div>
  );

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Layout from './hoc/Layout';


function App() {
  return (
    <div>
      <Layout>
        <Navbar></Navbar>
        <Home></Home>
      </Layout>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.jpg';

const color = 'yellow';

function App() {
  return (
    <>
      <Header
        title="This is title"
        descr="This is description"
      />
      <Layout
        id='001'
        urlBg={bg1}
        title="This is title"
        descr="This is description"
      />
      <Layout
        id='002'
        title="This is title"
        descr="This is description"
        colorBg={{ color }} />
      
      <Layout
        id='003'
        urlBg={bg2}
        title="This is title"
        descr="This is description"/>
      
      <Footer/>
     
    </>
  );
}

export default App;

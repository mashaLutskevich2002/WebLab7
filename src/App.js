import Car from './components/ContentComponent.jsx'
import Header from './components/HeaderComponent.jsx'
import Image from './components/ImageComponent.jsx'
import GoodsCard from './components/CardComponent.jsx'


function App() {
  return (
    <div >
      <Header />
      <Car />
      <Image />
      <GoodsCard first='Apple' second='Peach' third="Grape" forth="Orange" fifth="Pineapple" six='Pear' />
    </div>
  );
}

export default App;

import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}



// function LoadDisplayCountries(){
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])
//   console.log(setCountries)
//   return (
//     <div>

//     </div>
//   )
// }

// function Countryes(props){
//   return (
//     <div>
//       {/* <img src="{props.flags}" alt="" /> */}
//       <h2>Country: {props.country}</h2>

//     </div>
//   )
// }
export default App;

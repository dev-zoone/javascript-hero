import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['hfao', 'uhfalk', 'uahflk', 'hafik', 'dfjalk','dhfei', "hfiaiouyh"]
  return (
    <div className="App App-header">
      {
        nayoks.map(nayok => <Person name="nayok"></Person>)
      }
      <Person name="Shakil Ahmad" profesion="Profesion : Student"></Person>
      <Person name="Imran Hossen Bappy" profesion="Profesion : Full Stack Developer"></Person>
      <Person name="My Fevourite Person" idol="Imran Hossen My Idol"></Person>
      <Friend name={nayoks[0]}></Friend>
      <Friend name={nayoks[3]}></Friend>
      <Friend name={nayoks[4]}></Friend>

      {/* <div className="App App-header">
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
    </div> */}
      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend> */}
    </div>
  );
}

function Person(props){
  console.log(props)
  return (
    <div className="component">
      <h2>{props.name}</h2>
      <p>{props.profesion}</p>
      <p>{props.idol}</p>
    </div>
  )
}

function Friend(props){
  return (
    <div className="component">
      <h2>{props.name}</h2>
      <p>Profesion : Software Enginner</p>
    </div>
  )
}
export default App;

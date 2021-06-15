// import logo from './logo.svg';
import "./App.css";
import Row from "../components/row/Row";
import requests from "../components/request/requests";
import Banner from "../components/banner/Banner";
import Nav from "../components/navbar/Nav";
// import Counter from './Counter';

function App() {
  return (
    <div className="App">
      {/* <h1>Shebl Movies Database</h1> */}
      <Nav/>
      <Banner />
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title=" ORIGINALS " fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchNeActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      {/* <Counter/> */}
      {/* <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} isLargeRow /> */}
      {/* <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      /> */}
    </div>
  );
}

export default App;

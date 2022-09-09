import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import AppStyles from './appStyles';

export default function App() {
  return (
    <AppStyles>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<MainPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AppStyles>
  );
}


// Pour le CSS j'ai décidé d'utiliser le styled-components
// Je l'ai également imbriqué de manière à le structurer
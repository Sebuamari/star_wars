import './App.css';
import ListingPage from './pages/ListingPage';
import { SearchProvider } from './Context/SearchContext';
import { ModalProvider } from './Context/ModalContext';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <SearchProvider>
          <ListingPage />
        </SearchProvider>
      </ModalProvider>
    </div>
  );
}

export default App;

import './App.css';
import Header from '../components/Header/Header';
import EmptyPost from '../components/EmptyPost/EmptyPost';

const App = () => {
  return (
    <main className="app">
      <Header/>

      <section className="app__content">
        <EmptyPost/>
      </section>

      <footer className="app__footer">
            <p>© 2023 Hakeem Clarke</p>
      </footer>
    </main>
  );
}

export default App;

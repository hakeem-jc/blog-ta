import './App.css';
import Header from '../components/Header/Header';
import EmptyPost from '../components/EmptyPost/EmptyPost';
import PostContainer from '../components/PostContainer/PostContainer';

const App = () => {

  const temp_post = ['temp'];

  return (
    <main className="app">
      <Header/>

      <section className="app__content">
        {temp_post.length === 0 && <EmptyPost/>}
        {temp_post.length > 0 && <PostContainer/>}
      </section>

      <footer className="app__footer">
            <p>© 2023 Hakeem Clarke</p>
      </footer>
    </main>
  );
}

export default App;

import { FC  } from "react";
import './App.css';
import Header from '../components/Header/Header';
import EmptyPost from '../components/EmptyPost/EmptyPost';
import PostContainer from '../components/PostContainer/PostContainer';
import Modal from '../components/Modal/Modal';
import PostForm from "../components/PostForm/PostForm";

const App:FC = () => {

  const temp_post = ['temp'];

  return (
    <main className="app">
      <Modal>
        <PostForm/>
      </Modal>

      <Header/>

      <section className="app__content">
        {temp_post.length === 0 ? <EmptyPost/>: <PostContainer/>}
      </section>

      <footer className="app__footer">
            <p>© 2023 Hakeem Clarke</p>
      </footer>
    </main>
  );
}

export default App;

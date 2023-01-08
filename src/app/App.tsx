import { FC  } from "react";
import './App.css';
import { useAppSelector } from "../common/hooks";
import Header from '../components/Header/Header';
import EmptyPost from '../components/EmptyPost/EmptyPost';
import PostContainer from '../components/PostContainer/PostContainer';
import Modal from '../components/Modal/Modal';
import PostForm from "../components/PostForm/PostForm";
import Post from "../components/Post/Post";

const App:FC = () => {

  const temp_post = ['temp'];
  const modal_type = useAppSelector(state => state.modal_type);


  return (
    <main className="app">
      <Modal>
        {modal_type === 'new_post' && <PostForm/>}
        {modal_type === 'view_post' && <Post/>}
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

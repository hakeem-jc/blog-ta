import { FC, useEffect  } from "react";
import './App.css';
import { useAppSelector, useAppDispatch } from "../common/hooks";
import Header from '../components/Header/Header';
import EmptyPost from '../components/EmptyPost/EmptyPost';
import PostContainer from '../components/PostContainer/PostContainer';
import Modal from '../components/Modal/Modal';
import PostForm from "../components/PostForm/PostForm";
import Post from "../components/Post/Post";
import { setIsLoading, setPosts } from "../features/post/postSlice";
import { list } from "../api/list";

const App:FC = () => {
  const dispatch = useAppDispatch();
  const { posts, modal_type, is_loading, refresh_posts} = useAppSelector(state => state);

  useEffect(() => {
    dispatch(setIsLoading(true));
    list().then((response) => {
        dispatch(setIsLoading(false));
        dispatch(setPosts(response));
    });
  }, [dispatch,refresh_posts]);

  if (is_loading) return <div className="app__loading-screen"></div>;

  return (
    <main className="app">

      <Modal>
        {modal_type === 'new_post' && <PostForm/>}
        {modal_type === 'view_post' && <Post/>}
      </Modal>

      <Header/>

      <section className="app__content">
        {posts.length === 0 ? <EmptyPost/>: <PostContainer/>}
      </section>

      <footer className="app__footer">
            <p>© 2023 Hakeem Clarke</p>
      </footer>
    </main>
  );
}

export default App;

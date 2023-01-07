import { FC } from "react";
import './PostContainer.css';
import PostCarousel from "../PostCarousel/PostCarousel";

const PostContainer:FC = () => {
    return (
        <section className="post-container">
           <PostCarousel/>
        </section>
    );
}

export default PostContainer;
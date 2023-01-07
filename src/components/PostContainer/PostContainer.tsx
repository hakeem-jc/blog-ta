import { FC } from "react";
import './PostContainer.css';
import PostCarousel from "../PostCarousel/PostCarousel";
import PostSummary from "../PostSummary/PostSummary";

const PostContainer:FC = () => {
    return (
        <section className="post-container">
           <PostCarousel/>

           <div className="post-container__list">
                <PostSummary />
                <PostSummary />
           </div>
        </section>
    );
}

export default PostContainer;
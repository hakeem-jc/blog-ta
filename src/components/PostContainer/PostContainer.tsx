import { FC } from "react";
import './PostContainer.css';
import PostCarousel from "../PostCarousel/PostCarousel";
import PostSummary from "../PostSummary/PostSummary";
import Button from "../Button/Button";

const PostContainer:FC = () => {
    return (
        <section className="post-container">
           <PostCarousel/>

           <div className="post-container__header">
             <h2 className="post-container__title">Recent Posts</h2>

             <Button
                    text={"Sort ASC"}
                    type={"button"}
                    shape="square"
             />
            </div>

           <div className="post-container__list">
              

                <PostSummary />
                <PostSummary />
           </div>
        </section>
    );
}

export default PostContainer;
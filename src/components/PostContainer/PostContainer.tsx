import { FC } from "react";
import './PostContainer.css';
import PostCarousel from "../PostCarousel/PostCarousel";
import PostSummary from "../PostSummary/PostSummary";
import Button from "../Button/Button";
import { useAppSelector } from "../../common/hooks";
import { PostProps } from "../../interfaces/post";

const PostContainer:FC = () => {
    const { posts } = useAppSelector((state) => state);

    const Posts = (posts !== null && posts !== undefined && posts.length !== 0) ? (
      posts.map((post:PostProps, index: number) => {
        return <PostSummary {...post} key={index} />;
      })
    ) : (
      <h1>No Posts, Add Some to Get Started</h1>
    );
    
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
               {Posts}
           </div>
        </section>
    );
}

export default PostContainer;
import { FC, useState } from "react";
import './PostContainer.css';
import PostCarousel from "../PostCarousel/PostCarousel";
import PostSummary from "../PostSummary/PostSummary";
import Button from "../Button/Button";
import { useAppSelector } from "../../common/hooks";
import { PostProps } from "../../interfaces/post";
import { SortOptions } from "../../interfaces/form_values";

const PostContainer:FC = () => {
    const { posts } = useAppSelector((state) => state);
    const [sort, setSort] = useState(SortOptions.ASC);
   
    const Posts = (posts !== null && posts !== undefined && posts.length !== 0) ? (
      posts.map((post:PostProps, index: number) => {
        return <PostSummary {...post} key={index} />;
      })
    ) : (
      <h1>No Posts, Add Some to Get Started</h1>
    );

    const toggleSort = () => {
      if (sort === SortOptions.ASC) {
        setSort(SortOptions.DESC);
      } else {
        setSort(SortOptions.ASC);
      }
    }
    
    return (
        <section className="post-container">
           <PostCarousel/>

           <div className="post-container__header">
             <h2 className="post-container__title">Recent Posts</h2>

             <Button
                    text={sort === SortOptions.ASC  ? "Sort ASC":"Sort DESC"}
                    type={"button"}
                    shape="square"
                    onClick={()=>toggleSort()}
             />
            </div>

           <div className={sort === SortOptions.ASC ?"post-container__list post-container__list_asc":"post-container__list post-container__list_desc"}>
               {Posts}
           </div>
        </section>
    );
}

export default PostContainer;
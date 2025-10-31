import React, { useEffect } from "react";
import AddPost from "./posts/AddPost";
import GetPosts from "../facebook_main_posts_page/GetPosts";
import Stories from "./stories/Stories";
import { useDispatch, useSelector } from "react-redux";
import { getPostData, postReset } from "../../../features/posts/postSlice";

const MainContent = () => {
  const dispatch = useDispatch();
  const { postLoading, postError, postSuccess, posts, postMessage } =
    useSelector((state) => state.album);
  useEffect(() => {
    dispatch(getPostData());
    dispatch(postReset());
  }, []);
  return (
    <>
      <div className="h-[93vh] overflow-y-scroll">
        <AddPost />
        <Stories />
        {posts?.map((item, index) => {
          return <GetPosts key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default MainContent;

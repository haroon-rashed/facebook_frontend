import React, { useEffect, useState } from "react";
import { FaGlobe, FaRegComment, FaThumbsUp, FaUser } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
import { FiThumbsUp } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import moment from "moment";
import EmojiReactions from "../Feeds/EmojiReactions";
import { useDispatch, useSelector } from "react-redux";
import { getReactionsData } from "../../../features/posts/postSlice";
import axios from "axios";
import { emojiMap } from "./emojis";
import CommentModal from "../Feeds/CommentModal";
import { getMyData } from "../../../features/users/userSlice";
import { RxDotsHorizontal } from "react-icons/rx";
import OptionMenu from "./OptionMenu.jsx";

const GetPosts = ({
  background = {
    startColor: "#ffffff",
    endColor: "#ffffff",
    image: "",
  },
  caption,
  _id,
  createdAt,
  postImage,
  postVideo, 
  comments,
  user_id
}) => {
  const [likes, setLikes] = useState([]);
  const [optionMenu, setOptionMenu] = useState(false);

  const { posts } = useSelector((state) => state.album)

  const getLikes = async () => {
    let response = await axios.get(`http://localhost:5174/api/posts/get-reactions/${_id}`);
    setLikes(response.data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getLikes();
  }, [posts]);

  const isWhite = (color) => {
    const whiteVariants = ["#fff", "#ffffff", "white"];
    return whiteVariants.includes(color?.toLowerCase());
  };

  
  const showCaptionAbove = postImage || postVideo || (isWhite(background.startColor) && !background.image);
  const showCaptionCentered = !postImage && !postVideo && (background.image || !isWhite(background.startColor));

  return (
    <div className="shadow-lg xl:w-[70%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] bg-white rounded-md my-2">
      <div className="flex p-3 justify-between items-center relative">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="w-[45px] h-[45px] bg-gray-200 border-gray-300 rounded-full border flex justify-center items-center">
              <FaUser size={25} className="text-gray-600" />
            </div>
          </div>
          <div className="">
            <h6 className="font-semibold text-sm">
              {user_id?.f_name} {user_id?.l_name}
            </h6>
            <div className="flex items-center gap-1">
              <div className="text-sm font-semibold text-gray-500">
                {moment().diff(moment(createdAt), "hours") < 24
                  ? moment(createdAt).fromNow()
                  : moment(createdAt).format("MMM D, YYYY")}
              </div>
              <div className="text-sm h-[2px] w-[2px] rounded-full font-semibold bg-gray-500"></div>
              <div className="text-sm font-semibold text-gray-500">
                <FaGlobe />
              </div>
            </div>
          </div>
        </div>
        <div>
          <RxDotsHorizontal 
            onClick={() => setOptionMenu(!optionMenu)} 
            className="cursor-pointer relative" 
          /> 
          {optionMenu && <OptionMenu />} 
        </div>
      </div>

      
      {showCaptionAbove && (
        <p className="text-gray-900 p-3 my-2 capitalize">{caption}</p>
      )}

      
      {(postVideo || background.image || postImage || !isWhite(background.startColor)) && (
        <div className="relative">
          {postVideo ? (
            
            <div className="w-full">
              <video 
                src={postVideo} 
                controls 
                className="w-full h-auto max-h-[500px] object-contain"
                style={{
                  backgroundColor: "#000", 
                }}
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
        
            <div
              className="h-[400px] relative"
              style={{
                background: postImage
                  ? `url(${postImage})`
                  : background.image
                    ? `url(${background.image})`
                    : `linear-gradient(${background.startColor},${background.endColor})`,
                backgroundSize: "contain",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {showCaptionCentered && (
                <p className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 my-2 text-white capitalize text-2xl">
                  {caption}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      <div className="flex gap-2 p-3">
        <div className="flex justify-between w-full">
          <p className="text-gray-600 flex gap-1 m-0">
            <div className="flex items-center">
              {(() => {
                const seen = new Set();
                const reactions = [];

                likes?.forEach((item) => {
                  if (!seen.has(item?.type)) {
                    seen.add(item?.type);
                    reactions.push(item?.type);
                  }
                });

                return reactions.map((type, index) => {
                  const emoji = emojiMap[type];
                  if (!emoji) return null;

                  return (
                    <span
                      key={type}
                      className={`relative z-${50 - index} -ml-2 animate-shake`}
                      style={{ animationDuration: "0.5s" }}
                    >
                      <picture>
                        <source srcSet={emoji.webp} type="image/webp" />
                        <img
                          src={emoji.gif}
                          alt={emoji.alt}
                          width="22"
                          height="22"
                          className="rounded-full"
                        />
                      </picture>
                    </span>
                  );
                });
              })()}
            </div>
            <div className="flex justify-between items-center">
              {likes?.length}
            </div>
          </p>
          {comments?.length} comments
        </div>
      </div>
      <hr className="bg-gray-300 h-[1px] border border-0" />
      <div className="flex justify-between items-center p-3">
        <div className="flex gap-2 justify-center items-center w-full">
          <EmojiReactions post_id={_id} likes={likes} />
        </div>
        <div className="flex gap-2 justify-center items-center w-full"> 
          <CommentModal
            comments={comments}
            caption={caption}
            postImage={postImage}
            postVideo={postVideo}
            background={background}
            post_id={_id}
            user_info={user_id}
          />
        </div>

        <div className="flex gap-2 justify-center items-center w-full">
          <PiShareFat className="text-gray-600" />
          <h6 className="font-semibold text-sm text-gray-600">Share</h6>
        </div>
      </div>
    </div>
  );
};

export default GetPosts;
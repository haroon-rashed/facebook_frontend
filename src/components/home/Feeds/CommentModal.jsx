import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaRegComment } from 'react-icons/fa';
import EmojiReactions from './EmojiReactions';
import { PiShareFat } from 'react-icons/pi';
import { RxAvatar } from 'react-icons/rx';
import { BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import { BiCamera, BiSolidSend } from 'react-icons/bi';
import { HiOutlineGif } from "react-icons/hi2";
import { PiSticker } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { addCommentData } from '../../../features/posts/postSlice';
import { deepPurple } from '@mui/material/colors';

export default function CommentModal({ post_id, background, postImage, caption, comments, user_info }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useSelector((state) => state.auth);
  const [comment, setComment] = React.useState('');
  const dispatch = useDispatch();

  const handleComment = () => {
    if (!comment.trim()) return;
    const postData = { comment, post_id };
    dispatch(addCommentData(postData));
    setComment('');
  };

  const isWhite = (color) => {
    const whiteVariants = ["#fff", "#ffffff", "white"];
    return whiteVariants.includes(color?.toLowerCase());
  };

  const showCaptionAbove = postImage || (isWhite(background.startColor) && !background.image);
  const showCaptionCentered = !postImage && (background.image || !isWhite(background.startColor));

  return (
    <div>
      <div onClick={handleOpen} className="flex gap-2 cursor-pointer justify-center items-center w-full">
        <FaRegComment className="text-gray-600" />
        <h6 className="font-semibold text-sm text-gray-600">Comment</h6>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 border-0 -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto">

          {/* Header */}
          <div className='flex items-center justify-center h-[70px] border-b border-gray-300'>
            <h1 className='font-semibold text-2xl'>{user_info?.f_name}'s Post</h1>
          </div>

          {/* Post Details */}
          <div className="p-4">
            <div className="flex items-center">
              <img
                src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-6/498948044_698083949390945_3426704093410471690_n.jpg"
                alt="profile"
                className="rounded-full w-10 h-10 mr-3"
              />
              <div>
                <p className="font-semibold text-sm">
                  {user_info?.f_name} {user_info?.l_name}
                </p>
                <p className="text-xs text-gray-500">5h · 🌐</p>
              </div>
            </div>
          </div>

          {/* Caption and Image */}
          <div className="w-full">
            {showCaptionAbove && (
              <p className="text-gray-900 p-3 my-2 capitalize">{caption}</p>
            )}

            {(background.image || postImage || !isWhite(background.startColor)) && (
              <div
                className={`relative ${isWhite(background.startColor) && !background.image && !postImage ? 'h-[100px]' : 'h-[400px]'}`}
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
                  <p className={`text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 my-2 capitalize ${isWhite(background.startColor) ? 'text-black' : 'text-white'} ${postImage ? 'text-xl' : 'text-2xl'}`}>
                    {caption}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Reactions */}
          <div className="flex justify-between items-center p-3">
            <div className="flex gap-2 cursor-pointer justify-center items-center w-full">
              <EmojiReactions />
            </div>
            <div className="flex gap-2 cursor-pointer justify-center items-center w-full">
              <FaRegComment className="text-gray-600" />
              <h6 className="font-semibold text-sm text-gray-600">Comment</h6>
            </div>

            <div className="flex gap-2 cursor-pointer justify-center items-center w-full">
              <PiShareFat className="text-gray-600" />
              <h6 className="font-semibold text-sm text-gray-600">Share</h6>
            </div>
          </div>

          {/* Existing Comments */}
          <div className="p-4 text-sm w-full">
            {comments?.map((item, index) => {
              return <div className='flex gap-2 my-2'>
                <Avatar sx={{ width: 40, height: 40 }}
                  src="/static/images/avatar/1.jpg" >
                  {item?.user?.f_name[0]}  {item?.user?.l_name[0]}
                </Avatar>
                <div className='flex flex-col gap-1 p-1 bg-gray-100 rounded'>
                  <h1 className='font-normal capitalize'>
                    {item?.user?.f_name} {item?.user?.l_name}
                  </h1>
                  <p>{item?.comment}</p>
                </div>
                <span className='w-[30px] h-[30px] mt-2 rounded-full cursor-pointer hover:bg-gray-100 flex items-center justify-center'>
                  <BsThreeDots className='text-xl text-gray-500' />
                </span>
              </div>
            })}
          </div>

          {/* Comment Input */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex w-full p-3 gap-2 sticky border-t-2 border-gray-200 bottom-0 left-0 bg-white"
          >
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt={user?.f_name}
              src="/static/images/avatar/1.jpg"
            />

            <div className="bg-gray-100 rounded-xl w-full text-sm text-gray-800">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={`Comment as ${user?.f_name}`}
                className="outline-none resize-none w-full border-0 p-3 rounded-xl"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleComment();
                    setComment('');
                  }
                }}
              ></textarea>

              <div className="flex gap-2 justify-between items-center px-3 pb-2">
                <div className="flex gap-3 text-lg text-gray-500">
                  <Tooltip title="Avatar">
                    <span className="cursor-pointer"><RxAvatar /></span>
                  </Tooltip>
                  <Tooltip title="Emoji">
                    <span className="cursor-pointer"><BsEmojiSmile /></span>
                  </Tooltip>
                  <Tooltip title="Camera">
                    <span className="cursor-pointer"><BiCamera /></span>
                  </Tooltip>
                  <Tooltip title="GIF">
                    <span className="cursor-pointer"><HiOutlineGif /></span>
                  </Tooltip>
                  <Tooltip title="Sticker">
                    <span className="cursor-pointer"><PiSticker /></span>
                  </Tooltip>
                </div>

                <BiSolidSend onClick={handleComment} className="cursor-pointer text-gray-500" />
              </div>
            </div>
          </motion.div>
        </Box>
      </Modal>
    </div>
  );
}
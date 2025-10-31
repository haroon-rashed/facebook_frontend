import React from 'react';

export const emojis = [
  {
    name: "like",
    code: "1f44d",
    bgColor: "bg-blue-100",
    color: 'text-blue-400',
    image: (
      <picture>
        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.webp" type="image/webp" />
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.gif" alt="👍" width="24" height="24" />
      </picture>
    )
  },
  {
    name: "love",
    code: "2764-fe0f",
    bgColor: "bg-red-100",
    color: 'text-red-400',
    image: (
      <picture>
        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.webp" type="image/webp" />
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif" alt="❤" width="24" height="24" />
      </picture>
    )
  },
  {
    name: "haha",
    code: "1f602",
    bgColor: "bg-yellow-100",
    color: 'text-yellow-400',
    image: (
      <picture>
        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.webp" type="image/webp" />
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.gif" alt="😆" width="24" height="24" />
      </picture>
    )
  },
  {
    name: "wow",
    code: "1f62e",
    bgColor: "bg-yellow-100",
    color: 'text-yellow-400',
    image: (
      <picture>
        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62f/512.webp" type="image/webp" />
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62f/512.gif" alt="😯" width="24" height="24" />
      </picture>
    )
  },
  {
    name: "sad",
    code: "1f622",
    bgColor: "bg-yellow-100",
    color: 'text-yellow-400',
    image: (
      <picture>
        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f61f/512.webp" type="image/webp" />
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f61f/512.gif" alt="😟" width="24" height="24" />
      </picture>
    )
  },
  {
    name: "angry",
    code: "1f621",
    bgColor: "bg-orange-100",
    color: 'text-orange-400',
    image: (
      <picture>
        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.webp" type="image/webp" />
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.gif" alt="😡" width="24" height="24" />
      </picture>
    )
  }
];
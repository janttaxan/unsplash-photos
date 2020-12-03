import React from 'react';
import styles from './photositem.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface IPhotosItemProps {
  id: string;
  image: string;
  color: string;
  hasLike: boolean;
  userName: string;
  userAvatar: string;
  onclick: () => void;
}

export function PhotosItem(props: IPhotosItemProps) {
  const {id, image, color, hasLike, userName, userAvatar, onclick} = props;

  const svgClasses = classNames(
    styles.svg,
    {[styles.active]: hasLike},
  );
  const buttonClasses = classNames(
    styles.likeBtn,
    {[styles.active]: hasLike},
  );
  return (
    <li className={styles.photoItem} style={{background: color}} id={id}>
      <div className={styles.meta}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img src={userAvatar} alt={userName}/>
          </div>
          <span className={styles.name}>{userName}</span>
        </div>
        <button className={buttonClasses} onClick={onclick}>
          <svg
            width="32"
            height="32"
            className={svgClasses}
            version="1.1"
            viewBox="0 0 32 32"
            aria-hidden="false"
          >
            <path
              d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"
            />
          </svg>
        </button>
      </div>
      <Link to={`/photo/${id}`} className={styles.link}>
        <img src={image} alt="" className={styles.image}/>
      </Link>
    </li>
  );
}

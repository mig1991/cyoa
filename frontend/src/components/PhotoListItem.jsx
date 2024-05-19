import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, onClick }) => {
  const { user, urls, location } = photo;
  return (
    <div className="photo-list__item" onClick={onClick}>
      <img
        className="photo-list__image"
        src={urls.regular}
        alt={`Photo ${photo.id}`}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={`${user.username}'s profile`}
        />
        <div className="photo-list__user-info">
          <p>{user.username}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
      <PhotoFavButton photo={photo} />
    </div>
  );
};

export default PhotoListItem;

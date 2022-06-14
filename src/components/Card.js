/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import locationIcon from '../images/location.png';

export default function Card(props) {
  return (
    <div className="card row" props={props}>
      <div className="container__card__image">
        <img src={`${props.imageUrl}`} alt="Mount Fuji" className="card__image" />
      </div>
      <div className="container__card__details">
        <div className="container__location row">
          <img src={locationIcon} alt="Location icon" className="card__location__icon" />
          <p className="card__location">{props.location}</p>
          <a className="card__link" href={`${props.googleMapsUrl}`}>View on Google Maps</a>
        </div>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__date">
          <span>{props.startDate}</span>
          {' '}
          -
          {' '}
          <span>{props.endDate}</span>
        </p>
        <p className="card__details">{props.description}</p>
      </div>
    </div>
  );
}

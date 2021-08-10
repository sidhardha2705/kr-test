import React from "react";
import { DateConverter } from "../../untils/utilities";
import FOOTBALL_ICON from "../../images/icons/football.png";
import BASKETBALL_ICON from "../../images/icons/basketball.png";
import TENNIS_ICON from "../../images/icons/tennis.png";
import DEFAULT_ICON from "../../images/icons/default.png";

const EventIcon = (eventType) => {
  switch (eventType) {
    case "FOOTBALL":
      return FOOTBALL_ICON;
    case "TENNIS":
      return TENNIS_ICON;
    case "BASKETBALL":
      return BASKETBALL_ICON;
    default:
      return DEFAULT_ICON;
  }
};

const CarouselContent = ({ event }) => {
  return (
    <div className="carousel__container">
      <div className="carousel__score">
        {event.liveData.score.home} - {event.liveData.score.away}
      </div>

      <div className="carousel__teamnames">
        <img
          className="carousel__image"
          alt={event.event.sport}
          src={EventIcon(event.event.sport)}
        />
        {event.event.homeName} - {event.event.awayName}
      </div>
      <div className="carousel__date">{DateConverter(event.event.start)}</div>
      <a
        className="carousel__link"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.unibet.com/betting#/event/live/${event.event.id}`}
      >
        Place bet
      </a>
    </div>
  );
};

export default CarouselContent;

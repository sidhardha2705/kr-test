import React from "react";
import { connect } from "react-redux";
import { FetchLiveEvents } from "../../redux/actions/fetchLiveEvents";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselContent from "../viewComponents/carouselContent";
import LoadingAnimation from "../../images/icons/loading.gif";

class TickerComponent extends React.Component {
  componentDidMount() {
    this.props.FetchLiveEvents();
  }

  LiveEventsMapper() {
    const { liveEvents } = this.props;

    return liveEvents.map((event) => {
      return <CarouselContent event={event} key={event.event.id} />;
    });
  }

  render() {
    const { liveEvents, error } = this.props;

    //If there's no network error
    if (error === null) {
      return (
        <div className="ticker__container">
          {/* If there's data that can be rendered */}
          {liveEvents.length > 0 ? (
            <Carousel
              autoPlay
              interval={3000}
              infiniteLoop
              showThumbs={false}
              showIndicators={false}
              stopOnHover
              swipeable
              transitionTime={500}
            >
              {this.LiveEventsMapper()}
            </Carousel>
          ) : (
            //If there's no data yet to render, it will show a loading animation
            <div className="ticker__loading">
              <img
                className="ticker__loading-img"
                src={LoadingAnimation}
                alt="Loading"
              />
            </div>
          )}
        </div>
      );
      //If there's a network error
    } else
      return (
        <div className="error">
          We are experiencing some trouble showing the live matches right now!
          Please try again later.
        </div>
      );
  }
}

//mapDispatchToProps supplies dispatch to this component
const mapDispatchToProps = (dispatch) => {
  return { FetchLiveEvents: () => dispatch(FetchLiveEvents()) };
};

//mapDispatchToProps makes sure this component is subscribed to the redux store
const mapStateToProps = (state) => {
  return {
    liveEvents: state.liveEvents,
    error: state.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerComponent);

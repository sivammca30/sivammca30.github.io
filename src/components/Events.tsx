import { useState, type FC } from "react";
//import { UPCOMINGEVENTS } from "../data";
// import { MOMENTS } from "../data";
// import type { EventItem } from "../data";
import UPCOMINGEVENTS from '../assets/json/upcomingevents.json';
import recentphotos from '../assets/json/recentphotos.json';
//import Masonry from './Masonry';
import Lightbox from "yet-another-react-lightbox";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

const upcoming = [...UPCOMINGEVENTS]
  .filter(off => off.status === 'A')
  .sort((a, b) => a.order - b.order);

const recentimg = [...recentphotos]
  .filter(off => off.status === 'A')
  .sort((a, b) => a.order - b.order);

  //const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;


const Events: FC = () => {
      const [open1, setOpen1] = useState(false);
    const [index1, setIndex1] = useState(0);
  return (
    <>
    <section className="page-header">
      <div className="page-header-content">
        {/* <p className="tagline">Calendar</p> */}
        <h1>Upcoming Events</h1>
        <p>Tournaments, Training camps, Grading and Workshops happening across the federation.</p>
      </div>
    </section>

    <section className="section-small">
      <div className="container">
        <div className="event-grid">
          {upcoming.map((ev) => {
            const formatted: string = new Date(ev.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return (
              <div key={ev.id} className="event-card">
                <div className="event-card-placeholder">
                  <span>WTSF - {ev.title}</span>

                </div>
                <div className="event-card-body">
                  {/* <div className="blog-card-date">{formatted}</div>
                  <span className="blog-card-cat">{ev.category}</span>
                  <div className="blog-card-title">{ev.title}</div>
                  <p className="blog-card-desc">{ev.desc}</p> */}
                  <img className="event-card-image"
                    src={ev.img}
                    alt={ev.title}
                  />
                </div>
                <div className="event-card-footer">
                  <div className="blog-card-date">{formatted}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>



    <div className="event-section-small event-section-dark">
      <div className="event-container"> {/* Changed from 'container' to match your global max-width style */}

        <div className="event-section-title">
          <h2>RECENT EVENTS</h2>
          <span>WTSF District Competition - Tenkasi - 2026</span>
          <p>
            WTSF Organised 4th District level Silambam Open Championship in Sri Durga Vani Sports Academy, Melapuliyur, Tenkasi on 26 August 2026.
            Over 300 Students participated in this event. Single Stick, Double Stick, Chedikuchi, Surrul Vaal, Vel Kambu, Maan Kombu and Thodumurai Events were conducted by our WTSF Refrees/Judges.
          </p>
        </div>

        {/* Masonry image layout wrapper */}

       

        {/* <div className="masonry-wrapper">
          {isMobile ? (
            
            <div className="mobile-gallery-grid">
              {recentimg.map((item, idx) => (
                <img key={idx} src={item.img} alt="WTSF Event" />
              ))}
            </div>
          ) : (
            
            <Masonry
              items={recentimg}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.95}
              blurToFocus
              colorShiftOnHover={false}
            />
          )}
        </div> */}

        <div className="container">

                    <div className="gallery">

                        {recentimg.map((slide, i) => (

                            <img
                                key={i}
                                src={slide.src}
                                alt=""
                                className="gallery-image"
                                onClick={() => {
                                    setIndex1(i);
                                    setOpen1(true);
                                }}
                            />

                        ))}

                    </div>

                    <Lightbox
                        open={open1}
                        close={() => setOpen1(false)}
                        index={index1}
                        slides={recentimg}
                        plugins={[
                            Zoom,
                            Fullscreen,
                            Counter,
                            Thumbnails
                        ]}
                    />
                    

                </div>



      </div>
    </div>



    {/* <section className="section section-dark">
      <div className="container">
        <div className="section-title"><h2>RECENT EVENTS</h2></div>
        <div className="blog-grid">
          {MOMENTS.map((ev: EventItem) => {
            const formatted: string = new Date(ev.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return (
              <div key={ev.id} className="blog-card">
                <div className="event-card-placeholder">
                  <span>{ev.title}</span>
                </div>
                <div className="blog-card-body">
                   <div className="blog-card-date">{formatted}</div>
                  <span className="blog-card-cat">{ev.category}</span>
                  <div className="blog-card-title">{ev.title}</div>
                  <p className="blog-card-desc">{ev.desc}</p>
                 
                </div>
              </div>
              
            );
          })}
        </div>
       
      </div>
    </section> */}
    </>
  );
  
    
    };


export default Events;

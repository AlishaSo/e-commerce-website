import React from "react";

export const Events = () => {
  return (
    <>
      <section className="content-section container">
        <h2 className="section-header">TOURS</h2>
        <div>
          {toursData && (
            <>
              {toursData.map(event => (
                <EventRow
                  date={event.date}
                  place={event.place}
                  venue={event.venue}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

const EventRow = ({ date, place, venue }) => {
  return (
    <div className="tour-row">
      <span className="tour-item tour-date">{date}</span>
      <span className="tour-item tour-city">{place}</span>
      <span className="tour-item tour-arena">{venue}</span>
      <button
        className="btn tour-item tour-btn btn-primary"
        type="button"
        onClick={() => alert("You clicked Buy Ticket")}
      >
        Buy Tickets
      </button>
    </div>
  );
};

const toursData = [
  {
    date: "4 DEC",
    place: "London, UK",
    venue: "Union Chapel"
  },
  {
    date: "10 FEB",
    place: "Borgerhout, Belgium",
    venue: "De Roma"
  },
  {
    date: "11 FEB",
    place: "Paris, France",
    venue: "Le Trabendo"
  },
  {
    date: "13 FEB",
    place: "Amsterdam, Netherlands",
    venue: "Melkweg Max"
  },
  {
    date: "14 FEB",
    place: "Cologne, Germany",
    venue: "Die Kantine"
  },
  {
    date: "15 FEB",
    place: "Hamburg, Germany",
    venue: "Grunspan"
  },
  {
    date: "17 FEB",
    place: "Stockholm, Sweden",
    venue: "Klubben Fryshuset"
  },
  {
    date: "18 FEB",
    place: "Oslo, Norway",
    venue: "Parkteatret"
  },
  {
    date: "19 FEB",
    place: "Copenhagen, Denmark",
    venue: "Vega Musikkens Hus - Lille Vega"
  },
  {
    date: "21 FEB",
    place: "Berlin, Germany",
    venue: "Columbia Theater"
  }
];

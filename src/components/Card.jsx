function Card(card) {
  return (
    <div className="card mb-3" data-aos="zoom-in-up" data-aos-duration="1000">
      <h3 className="card-header text-center bg-success"> {card.title} </h3>
      <div className="card-body">
        <p> {card.body} </p>
      </div>
      <div className="card-footer text-muted text-center">
        <p>
          {/* Visit my{" "}
          <a
            className="text-decoration-none"
            target="_blank"
            href="https://www.linkedin.com/in/danyeis-bravo-ramirez-204238243/"
            rel="noreferrer"
          >
            LinkedIn{" "}
          </a>
          profile  or just{" "} */}
          For more details just {" "}
          <a href="#contact" className="text-decoration-none">
            contact{" "}
          </a>
          me.
        </p>
      </div>
    </div>
  );
}
export default Card;

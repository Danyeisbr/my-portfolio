function Card(card) {
  return (
    <div className="card mb-3" data-aos="zoom-in-up" data-aos-duration="1000">
      <h3 className="card-header text-center"> {card.title} </h3>
      <div className="card-body">
        <p> {card.body} </p>
      </div>
      <div className="card-footer text-muted text-center">
        <p>
          For more details just{" "}
          <a href="#contact" className="text-decoration-none">
            contact{" "}
          </a>{" "}
          me.
        </p>
      </div>
    </div>
  );
}
export default Card;
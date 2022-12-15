function Card(card) {
  return (
    <div className="card mb-3 rounded border border-white border-bottom-0" data-aos="zoom-in-up" data-aos-duration="1000">
     
      <h3 className="text-center">
        <p className="mt-3">{card.icon}
        </p> 
        {card.title} 
      </h3>
      <div className="card-body">
        <p> {card.body} </p>
      </div>
      <div className="card-footer text-center bg-info">
        <p>
          For more details just{" "}
          <a href="#contact" className="fw-bold text-decoration-none" style={{"color": "#fff"}}>
            contact{" "}
          </a>{" "}
          me.
        </p>
      </div>
    </div>
  );
}
export default Card;
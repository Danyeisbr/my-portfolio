import Card from "./Card.jsx";

function Services() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            id="services"
            className="row min-vh-100 d-flex align-content-center"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-md-5">
                <Card
                  title="Web Development"
                  body="Design and development from scratch of well-structured web pages, responsive design, attractive color palette with friendly interactions to the client."
                />
                <Card
                  title="Web Maintenance"
                  body="Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, new features, functions, etc."
                />
              </div>
              <div className="col-md-5">
                <Card
                  title="Website Optimization"
                  body="Web positioning through Search Engine Optimization, so that your website be found in the main search results according to your business or brand, both in Google, Bing, or other internet search engines."
                />
                <Card
                  title="Social Marketing"
                  body="Design of attractive content for social networks, getting the most out of the social media to boost your brand, product or business."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

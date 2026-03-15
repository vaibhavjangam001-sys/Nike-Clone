const Main = () => {
  return (
    <main className="mainContainer container">
      <div className="main-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="main-buttons">
          <button className="btn shop-btn">Shop Now</button>
          <button className="second-btn btn category-btn">Category</button>
        </div>
        <div className="Available">
          <p>Also Available On</p>

          <div className="brands-icon">
            <img src="/Nike-Clone/images/flipkart.png" alt="Flipkart-Logo" />
            <img src="/Nike-Clone/images/amazon.png" alt="amazon-Logo" />
          </div>
        </div>
      </div>
      <div className="main-image">
        <img src="/Nike-Clone/images/shoe_image.png" alt="Shoe-Image" />
      </div>
    </main>
  );
};

export default Main;

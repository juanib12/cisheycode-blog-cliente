import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const AllArticulos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://blog-server-82an.onrender.com/articulos",
    };
    setLoading(true);

    axios
      .request(options)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <Header />
      <section className="home bd-grid">
        {loading ? (
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div>
            <h2>Artículos</h2>
            <div className="all-articulos">
              <div className="all-articulos-list">
                {data.map((arts) => (
                  <Link to={`/articulo/${arts._id}`} className="post_link">
                    <div className="list-art" key={arts._id}>
                      <img src={arts.image} width="100" />
                      <div className="list-art-data">
                        <h3>{arts.title}</h3>
                        <p>{arts.createtime}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default AllArticulos;

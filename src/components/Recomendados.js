import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Recomendados = () => {
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
        setData(response.data.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section className="home bd-grid">
      {loading ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="posts-header">
            <h2>Destacados</h2>
            <button className="btn-menu">Ver todos</button>
          </div>
          <div className="posts">
            {data.map((art) => (
              <Link to={`/articulo/${art._id}`} className="post_link">
                <div className="post" key={art._id}>
                  <div className="post-img">
                    <img src={art.image} />
                  </div>
                  <div className="post-info">
                    <div className="post-data">
                      <p>{art.createtime}</p>
                    </div>
                    <div className="post-title">
                      <h3>{art.title}</h3>
                    </div>
                    <div className="post-description">
                      <p>{art.resume}</p>
                    </div>
                    <div className="post-footer">
                      <img
                        src={art.avatar}
                        width="50"
                        style={{ borderRadius: "50%" }}
                      />
                      <p>{art.user}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Recomendados;

import Categorias from "./Categorias";
import Recomendados from "./Recomendados";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://ffffffffff.onrender.com/articulos",
    };
    setLoading(true);
    axios
      .request(options)
      .then((response) => {
        setData(response.data[response.data.length - 1]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(loading);
  return (
    <section className="home bd-grid">
      {loading ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <h2>Último artículo</h2>

          <Link to={`/articulo/${data._id}`}>
            <div className="last_post" key={data._id}>
              <div className="last_post_img">
                <img src={data.image} width="650" />
              </div>
              <div className="last_post_info">
                <div className="last_post_date">
                  <p>{data.createtime}</p>
                </div>
                <div className="last_post_title">
                  <h3>{data.title}</h3>
                </div>
                <div className="last_post_description">
                  <p>{data.resume}</p>
                </div>
                <div className="last_post_footer">
                  <img
                    src={data.avatar}
                    width="50"
                    style={{ borderRadius: "50%" }}
                  />
                  <p>{data.user}</p>
                </div>
              </div>
            </div>
          </Link>
        </>
      )}

      <Recomendados />
      <Categorias />
    </section>
  );
};

export default Home;

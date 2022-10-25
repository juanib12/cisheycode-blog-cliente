import Categorias from "./Categorias";
import Recomendados from "./Recomendados";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://cisheycode-server.vercel.app:3001/articulos",
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data[response.data.length - 1]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section className="home bd-grid">
      <h2>Último artículo</h2>
      {data ? (
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
      ) : (
        <h3>Ningún articulo para mostrar.</h3>
      )}

      <Recomendados />
      <Categorias />
    </section>
  );
};

export default Home;

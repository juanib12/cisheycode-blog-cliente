import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Articulo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [articulo, setArticulo] = useState({
    id: "",
    user: "",
    avatar: "",
    image: "",
    title: "",
    description: "",
    resume: "",
    createtime: "",
  });

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://blog-server-82an.onrender.com/articulo/${id}`,
    };
    setLoading(true);

    axios
      .request(options)
      .then((response) => {
        setArticulo(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <section className="home bd-grid">
          <div className="articulo">
            <div className="articulo_info">
              <div className="articulo_info_date">
                <div className="articulo_info_date_user">
                  <img
                    src={articulo.avatar}
                    width="50"
                    style={{ borderRadius: "50%" }}
                  />
                  <p>{articulo.user}</p>
                </div>

                <p className="createtime">{articulo.createtime}</p>
              </div>
              <div className="articulo_info_all">
                <div className="articulo_info_title">
                  <h3>{articulo.title}</h3>
                </div>
                <div className="articulo_img">
                  <img src={articulo.image} width="650" />
                </div>
                <div className="articulo_data">
                  <div className="articulo_data_resume">
                    <p>{articulo.resume}</p>
                  </div>
                  <div className="articulo_data_description">
                    <p>{articulo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/" className="post_link">
            <button className="btn-menu">Volver al men??</button>
          </Link>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Articulo;

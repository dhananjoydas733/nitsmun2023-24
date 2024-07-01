import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Blogs.module.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "NITSMUN | BLOGS";
    async function fetchData() {
      try {
        const data = await axios.get(`${import.meta.env.VITE_API}/blog/read`);
        if (data) {
          setLoading(false);
          setBlogs(data.data);
        }
      } catch (err) {
        toast.error("Error in fetching blogs");
      }
    }
    fetchData();
  }, []);
  return (
    <div className={styles.wrapper}>
      <Navbar page="BLOGS" />
      <div className={styles.innerCont}>
        <h1 className={styles.h1}>BLOGS</h1>
        {loading ? (
          <h4>Loading</h4>
        ) : (
          <div className={styles.blogCont}>
            {blogs.map((item) => (
              <a className={styles.blogCard} target="_blank" href={item.url}>
                <img className={styles.thumbnail} src={item.thumbnail} alt={item.name} />
                <a className={styles.name} href={item.url}>
                  {item.name}
                </a>
              </a>
            ))}
          </div>
        )}
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Blogs;

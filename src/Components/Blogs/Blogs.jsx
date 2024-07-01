import axios from "axios";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import styles from "./Blogs.module.scss";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMore, setViewMore] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(`${import.meta.env.VITE_API}/blog/read`);
        if (data) {
          if (data.data.length > 5) {
            setBlogs(data.data.slice(0, 5));
            setViewMore(true);
          } else {
            setBlogs(data.data);
          }
          setLoading(false);
        }
      } catch (err) {
        toast.error("Failed to fetch the blogs");
      }
    }
    fetchData();
  }, []);
  return (
    <div className={styles.blogs}>
      <h1 className={styles.heading}>Blogs</h1>
      {loading ? (
        <h4>Loading</h4>
      ) : (
        <div className={styles.innerCont}>
          {blogs.map((item) => (
            <a className={styles.blogCard} target="_blank" href={item.url}>
              <img className={styles.thumbnail} alt={item.name} src={item.thumbnail} />
              <a className={styles.name} href={item.url}>
                {item.name}
              </a>
            </a>
          ))}
        </div>
      )}
      {viewMore ? (
        <div className={styles.centerView}>
          <Link to="/blogs" className={styles.viewMore}>
            View More
          </Link>{" "}
        </div>
      ) : null}
      <Toaster />
    </div>
  );
};
export default Blogs;

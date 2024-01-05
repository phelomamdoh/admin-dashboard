import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchProduct } from "@/app/lib/data";

const singleProduct = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={`/noavatar.png`} fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label htmlFor="">Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label htmlFor="">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label htmlFor="">Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label htmlFor="">Size</label>
          <textarea type="text" name="size" placeholder={product.size} />
          <label htmlFor="">Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id=""
            rows="10"
            placeholder="Description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default singleProduct;

import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";

const singleUser = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || `/noavatar.png`} fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label htmlFor="">Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label htmlFor="">Password</label>
          <input type="password" name="password" />
          <label htmlFor="">Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} />
          <label htmlFor="">Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label htmlFor="">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default singleUser;

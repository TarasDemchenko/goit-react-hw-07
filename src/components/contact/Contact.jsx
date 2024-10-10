import { RiContactsFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import css from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={css.contact}>
      <div className={css.con_form}>
        <p>
          <RiContactsFill className={css.icon} />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <div className={css.con_btn}>
        <MdDelete />
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default Contact;

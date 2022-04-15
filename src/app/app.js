import style from "../styles/app.module.css";
import CustomLogo from '../assets/img/logo.svg';

export default function () {
  return (
    <div className={style.appContainer}>
      <CustomLogo/>
      <h1>This Works!</h1>
    </div>
  );
}

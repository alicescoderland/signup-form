import bgcDog from "../../assets/image/background-dog.jpg";
import imageStyle from "./Image.module.css";

function Image() {
  return (
    <section className={imageStyle.container}>
      <img src={bgcDog} alt="Bgc of dog" />
    </section>
  );
}

export default Image;

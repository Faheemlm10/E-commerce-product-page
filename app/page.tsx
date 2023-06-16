import ImageInfo from "./components/ImageInfo";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-[3.7rem] mb-[100rem] sm:flex-row md:justify-evenly ">
      <ImageSlider />
      <ImageInfo />
    </div>
  );
}

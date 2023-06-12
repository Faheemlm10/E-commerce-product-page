import ImageInfo from "./components/ImageInfo";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <div className="flex  gap-[8rem] mx-[10rem] mt-[3.7rem]">
      <ImageSlider />
      <ImageInfo />
    </div>
  );
}

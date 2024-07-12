import fig from '../assets/spreadsheet.png'
import { Image } from '../tools/basicTools'

export default function Slide() {
  const filter = "drop-shadow(-4px 4px 6px rgba(0,0,0,0.3)"
  return (
    <div className="slide">
      <h2>Insert Your Images</h2>
      Use the Image component to insert images.
      <div>
        <Image src={fig} alt="spread sheet" style={{ width: "10%", filter }} />
        <Image src={fig} alt="spread sheet" style={{ width: "20%", filter }} />
        <Image src={fig} alt="spread sheet" style={{ width: "30%", filter }} />
      </div>
    </div>
  );
}
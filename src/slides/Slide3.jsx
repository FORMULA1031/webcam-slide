import fig from '../assets/spreadsheet.png'
import { Image } from '../tools/basicTools'

export default function Slide() {
  return (
    <div className="slide">
      <h2>Insert Your Images</h2>
      Use the Image component to insert images.
      <div>
        <Image src={fig} alt="spread sheet" style={{ width: "10%" }} />
        <Image src={fig} alt="spread sheet" style={{ width: "20%" }} />
        <Image src={fig} alt="spread sheet" style={{ width: "30%" }} />
      </div>
    </div>
  );
}
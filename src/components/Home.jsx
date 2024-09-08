import React from 'react';
import m1 from '../assests/m1.jpg';
import m2 from '../assests/m2.webp';
import m3 from '../assests/m3.webp';
import l1 from '../assests/logos/l1.png';
import l2 from '../assests/logos/l2.png';
import l3 from '../assests/logos/l3.png';
import l4 from '../assests/logos/l4.png';
import l5 from '../assests/logos/l5.png';
import l6 from '../assests/logos/l6.png';
import l7 from '../assests/logos/l7.png';
import l8 from '../assests/logos/l8.png';


const Home = () => {
  return (
    <>
     <div className='home'>
        <main>
            <h1>BinThree</h1>
            <p>Revolutionizing Mobility and Strength with Cutting-Edge Exoskeletons</p>
        </main>
     </div> 
     <h1 id='mh'>Innovative solutions for enhanced physical performance and rehabilitation.</h1>
     <div className="home2">
      <img src={m1} alt="example" />
      <div>
        <p>Our mission is to enhance human capabilities through advanced exoskeleton technology.
          Designed for labor-intensive environments to reduce fatigue and injury.
          Technology that drives movement and responsiveness.
        </p>
      </div>
      </div>
      <div className="home3">
        <div class="logos">
          <div class="logos-slide">
          <img src={l1} alt="Logo 1" />
          <img src={l2} alt="Logo 2" />
          <img src={l3} alt="Logo 3" />
          <img src={l4} alt="Logo 4" />
          <img src={l5} alt="Logo 5" />
          <img src={l6} alt="Logo 6" />
          <img src={l7} alt="Logo 7" />
          <img src={l8} alt="Logo 8" />
      </div>

      <div class="logos-slide">
      <img src={l1} alt="Logo 1" />
          <img src={l2} alt="Logo 2" />
          <img src={l3} alt="Logo 3" />
          <img src={l4} alt="Logo 4" />
          <img src={l5} alt="Logo 5" />
          <img src={l6} alt="Logo 6" />
          <img src={l7} alt="Logo 7" />
          <img src={l8} alt="Logo 8" />
      </div>
      </div>
     </div>
     <div className="home4">
      <p className='title'>Regain Mobility</p>
      <h1>Help your patients regain mobility with BinThree</h1>
      <p className='para'>Every year, 55.9 million people sustain an acquired brain injury, 15 million experience stroke, up to 500,000 people sustain a spinal cord injury (SCI), and 2.8 million people live with MS. Many of these people are left with limited mobility or some form of paralysis. This can be a devastating diagnosis that is completely life-changing for both patients and their families.</p>
      <p className='para'>Now, patients post stroke, brain injury or spinal cord injury and those affected by MS are able to utilize BinThree’s exoskeletons in therapy to regain basic movements or even the ability to walk again. The wearer may experience an increase in range of motion and activation of muscles they had difficulty with before. PTs can improve their patients’ gait or get them back up to work on balance with the help of our robotic exoskeletons, BinThreeNR and BinThree Indego Therapy. For individuals living with spinal cord injuries, BinThree Indego Personal can help get them up and walking at home and in their communities again. This technology can have incredible benefits for many individuals and give them a sense of independence back.</p>
      <img src={m2} alt="patient" />
      <button className='kbtn'>Know More</button>
     </div>
     <div className="home5">
     <img src={m3} alt="patient" />
      <p className='title'>Rehabilitation</p>
      <h1>BinThree combines strength with safety, reducing fatigue and injury</h1>
      <p className='para'>Every year, 55.9 million people sustain an acquired brain injury, 15 million experience stroke, up to 500,000 people sustain a spinal cord injury (SCI), and 2.8 million people live with MS. Many of these people are left with limited mobility or some form of paralysis. This can be a devastating diagnosis that is completely life-changing for both patients and their families.</p>
      <p className='para'>Now, patients post stroke, brain injury or spinal cord injury and those affected by MS are able to utilize BinThree’s exoskeletons in therapy to regain basic movements or even the ability to walk again. The wearer may experience an increase in range of motion and activation of muscles they had difficulty with before. PTs can improve their patients’ gait or get them back up to work on balance with the help of our robotic exoskeletons, BinThreeNR and BinThree Indego Therapy.</p>
      <button className='kbtn'>Learn About BinTree</button>
     </div>
     
    </>
  )
}

export default Home

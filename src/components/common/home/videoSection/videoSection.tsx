"use client"
import { Fade } from "react-awesome-reveal";
import Cookies from 'js-cookie'

export const VideoSection = () => {
  const translate = Cookies.get('NEXT_LOCALE')
  const videoBackground = `bg-[url('/images/logistics-banner.png')]`
  return (
    <div className="mb-20 -mt-[5.7rem] relative overflow-hidden">
      <Fade>
        <div className={`mx-auto flex justify-center  bg-no-repeat relative bg-cover ${videoBackground} rounded-bl-md rounded-br-md`}>
          <div className={`max-w-[980px] md:mx-auto py-4 `}>
            <video className="h-full w-full !rounded-2xl px-6" controls>
              <source src={`${translate === 'en' ? 'https://res.cloudinary.com/mobinet/video/upload/v1711544369/english_version_zk2fex.mp4' : 'https://res.cloudinary.com/mobinet/video/upload/v1711598651/TrainingVideo_Japanesse_wdvc6j.mp4'}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Fade>
    </div>
  );
};

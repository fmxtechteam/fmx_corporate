import Image from "next/image";

import { videoPlayback, videoScreen, youtube } from "@/constant/imgs";

export const VideoSection = () => {
  return (
    <div className="mb-20 -mt-[5.7rem] relative overflow-hidden">
      <Image
        src={videoPlayback}
        className="h-[15rem] md:h-[30.6rem]"
        alt={"video playback"}
      />
      <div className="mx-auto flex justify-center bg-red-500">
        <div className="absolute top-0 max-w-[980px] md:mx-auto max-h-[95%] md:mt-[3.6rem] mt-[2rem] mx-2 ">
          <Image
            src={videoScreen}
            className="h-[350px] md:h-[660px]"
            alt={"video playback"}
          />
        </div>
        <Image
          src={youtube}
          className="absolute w-[8rem] top-24 md:top-[14.5rem] md:w-[12.7rem]"
          alt={"video playback"}
        />
      </div>
    </div>
  );
};

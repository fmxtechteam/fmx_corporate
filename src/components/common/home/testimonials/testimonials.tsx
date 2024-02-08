"use client";
import Image from "next/image";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import { testimonials } from "@/data";
import { Quote } from "@/assets/icons";

export const Testimonials = ({ className }: { className?: string }) => {
  const [, setPrevBtnDisabled] = useState(true);
  const [, setNextBtnDisabled] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <div
      className={`bg-[url('/images/testimonialBanner.png')] bg-no-repeat bg-cover  mb-0 pb-[3.2rem] pt-[3.8rem]  w-full flex text-center  items-center overflow-x-hidden ${className}`}
    >
      <div className="w-full md:ml-7">
        <div className="justify-center mx-auto flex flex-col items-center">
          <big className="uppercase text-lg md:text-[15.6px] font-medium">
            {"Testimonials"}
          </big>
          <h2 className="text-2xl md:text-[26.4px] -tracking-[0.010em] font-medium my-4 max-w-sm md:max-w-none">
            {"How seller like you transformed their tradings"}
          </h2>
        </div>
        <div ref={emblaRef}>
          <div className="flex items-center space-x-3 md:space-x-[1.9rem]">
            {testimonials.map(({ id, name, profession, country, image }) => (
              <div
                className="rounded-2xl shadow-[0px_4px_4px_0px_#00000040] bg-white min-w-[90%] mx-4 md:mx-0 sm:min-w-[31.1rem] p-6 text-left md:h-[16.7rem] leading-[32px] h-[25rem] mt-[1.8rem] mb-[41px] pt-10 text-lg md:text-[16.1px]  md:leading-[28.5px] font-medium text-gray-primary/50 relative"
                key={id}
              >
                <div className="md:-mt-4 -mt-1">
                  {`I like being able to find information quickly, if anyone comesIn the office, remote, or a mix of the two, with junto, your team can connect, collaborate, and co -create in one space no`}
                </div>
                <div className="absolute md:bottom-[14px] bottom-10 flex space-x-7 md:space-x-[14px]">
                  <Image
                    src={image}
                    alt={"testimonial 1"}
                    className="md:w-[3.8rem] w-[5rem] h-[5rem] md:h-[3.8rem] -mb-1"
                  />
                  <div className="md:-mt-1">
                    <h2 className="text-gray-primary font-medium tracking-wide">
                      {name}
                    </h2>
                    <p className="text-xs mt-[2px] text-gray-primary/80 px-px tracking-wide">
                      {profession}
                    </p>
                    <p className="leading-[31px] -mt-[2px] font-semibold text-gray-primary/50">
                      {country}
                    </p>
                  </div>
                </div>
                <Quote className="absolute right-[4.8rem] scale-[.92]" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex xl:justify-end justify-center items-center max-w-[70.6rem] mx-auto gap-5 px-[3%] sm:px-4">
          <GoArrowRight
            onClick={scrollPrev}
            className=" cursor-pointer border  text-primary/80 transition-all duration-700 hover:fill-current  border-primary hover:bg-primary hover:text-white rounded-md xl:h-[64px] h-[56px] xl:w-[64px] w-[56px] p-3"
          />
          <GoArrowLeft
            onClick={scrollNext}
            className="cursor-pointer text-primary/80 transition-all duration-700 hover:fill-current border border-primary hover:bg-primary hover:text-white rounded-md xl:h-[64px] h-[56px] xl:w-[64px] w-[56px] p-3"
          />
        </div>
      </div>
    </div>
  );
};

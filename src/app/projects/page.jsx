"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import Link from "next/link";

const projects = [
  {
    title: "Food Delivery App",
    desc: "Seamless ordering, cart management, and intuitive filters for a delightful experience.",
    category: "frontend",
    image: "/pro1.png",
    stack: ["React", "ContexApi", "Css"],
    gitHub:"https://github.com/usama24khan/tomato",
    preview:"https://usama24khan.github.io/tomato/"
  },
  {
    title: "Budget App",
    desc: "Track your income and expenses with ease and precision.",
    category: "frontend",
    image: "/pro2.png",
    stack: ["HTML", "CSS","JavaScript"],
    gitHub:"https://github.com/usama24khan/portfolio",
    preview:"https://usama24khan.github.io/portfolio/budgetapp/index.html"
  },
  {
    title: "Quiz App",
    desc: "Interactive quizzes with multiple formats and real-time score tracking.",
    category: "frontend",
    image: "/pro3.png",
    stack: ["Html", "CSS","JavaScript"],
    gitHub:"https://usama24khan.github.io/portfolio/Quiz%20App/index.html",
    preview:"https://usama24khan.github.io/portfolio/Quiz%20App/index.html"
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [swiper, setSwiper] = useState(null);

  const onSlideChange = (item) => {
    setCurrentProject(projects[item?.activeIndex]);
  };
  const index =
    projects.findIndex((item) => item.title === currentProject?.title) + 1;

  const nexto = () => {
    swiper.slideNext();
  };
  const prev = () => {
    swiper.slidePrev();
  };
  return (
    <div className="grid place-items-center lg:pt-0 sm:pt-32 pt-20 min-h-screen container">
      <div className="mt-12">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center mb-10 "
        >
          <h3 className="mt-2">
            {" "}
            My <span>Projects</span>
          </h3>
        </MotionDiv>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveDown}
          transition={transition.moveDown}
          className="flex lg:flex-row  flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center  w-full"
        >
          <div className="flex-1 space-y-3">
            <h2 className="text-6xl font-semibold text-primary">
              {index < 10 ? `0${index}` : index}
            </h2>
            <h3>{currentProject?.title}</h3>
            <p className="w-10/12 text-accent-foreground">
              {currentProject.desc}
            </p>
            <div className="mt-2 text-primary font-semibold tracking-wider space-x-2">
              {currentProject?.stack?.map((item) => {
                return (
                  <Badge
                    key={item}
                    variant={"outline"}
                    className="text-primary text-base"
                  >
                    {item}
                  </Badge>
                );
              })}
            </div>
            <br />
            <div className="flex gap-x-3">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={currentProject.gitHub}>
                    <button className="bg-accent p-2.5 rounded-full">
                      <Image
                        src="/Github.svg"
                        alt="github"
                        width={40}
                        height={40}
                      />
                    </button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                  <Link href={currentProject.preview}>
                    <button className="bg-accent p-2.5 rounded-full">
                      
                      <Image
                        src="/open.svg"
                        alt="github"
                        width={40}
                        height={40}
                      />
                      
                    </button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Preview</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="flex-1 flex items-center flex-col">
            <Swiper
              // slidesPerView={1.4}
              breakpoints={{
                // when window width is <= 499px
                499: {
                  slidesPerView: 1,
                },
                // when window width is <= 999px
                999: {
                  slidesPerView: 1.4,
                },
              }}
              spaceBetween={20}
              className="w-full md:max-w-lg max-w-[250px]"
              onSlideChange={onSlideChange}
              onSwiper={(s) => {
                setSwiper(s);
              }}
            >
              {projects.map((project, i) => {
                return (
                  <SwiperSlide
                    key={project.title}
                    className={cn(index - 1 !== i && "opacity-45", "")}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={350}
                      height={350}
                      className="object-contain rounded shadow-sm"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex ml-6 mt-4 gap-x-4">
              <button onClick={prev} disabled={index === 1}>
                <Image
                  src={"/prev.png"}
                  alt={"prev"}
                  width={55}
                  height={55}
                  className={cn("cursor-pointer")}
                />
              </button>
              <button onClick={nexto} disabled={index === projects.length}>
                <Image
                  src={"/next.png"}
                  alt={"next"}
                  width={55}
                  height={55}
                  className={cn("cursor-pointer")}
                />
              </button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}

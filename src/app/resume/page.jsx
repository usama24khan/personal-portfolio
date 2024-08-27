import { MotionButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { transition, variants } from "@/utils/framer_variants";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  MotionTabs,
} from "@/components/ui/tabs";
import { MotionDiv, MotionImage } from "@/utils/motionTags";

export default function Resume() {
  return (
    <>
      <div
        className={cn(
          "max-w-4xl mx-auto 2xl:pt-60 pt-32 px-3 pb-4 min-h-screen"
        )}
      >
        <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-center justify-between w-full">
          <div className="flex sm:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center">
            <MotionImage
              initial="initial"
              animate="animate"
              variants={variants.scale}
              transition={transition.scale}
              src="/profile.png"
              width={155}
              height={155}
              className="md:w-36 w-28 rounded-full"
              alt="avatar"
            ></MotionImage>
            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveDown}
              transition={transition.moveDown}
              className="sm:text-left text-center"
            >
              <h3 className="mb-2">
                Usama <span>Khan.</span>
              </h3>
              <h5>Lahore, Pakistan</h5>
            </MotionDiv>
          </div>
          <MotionButton
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={transition.moveDown}
            variant="outline"
            size="lg"
          >
            MERN DEVELOPER
          </MotionButton>
        </div>
        <MotionTabs
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          defaultValue="about"
          className="leading-7 mt-10"
        >
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <h6>Who I&apos;m </h6>
            <p className="text-accent-foreground mt-2">
            Usama Khan, a passionate web developer with a Bachelor's degree in Computer Science(BSCS). I specialize in creating dynamic and responsive single-page applications using modern web technologies.Web Developer specializing in React, Next.js, Node.js, Express and MongoDB. Strong foundation in HTML, CSS, JavaScript, Tailwind CSS and Bootstrap
            </p>
            <p className="text-accent-foreground mt-2">
            Dedicated to writing clean, maintainable code and continuously learning new technologies to deliver cutting-edge web solutions
            </p>
          </TabsContent>
          <TabsContent value="skills">
            <h6>What I can do</h6>
            <p className="text-accent-foreground mt-2">
            Proficient in front-end development using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS to craft responsive, visually appealing interfaces. Skilled in building dynamic web applications with React.js and Next.js. Experienced in full-stack development, utilizing Node.js, Express.js, and MongoDB to create scalable, secure server-side solutions. Strong Git and GitHub collaboration skills.
            </p>
          </TabsContent>
          <TabsContent value="experience">
            <h6>My Work</h6>
            <p className="text-accent-foreground mt-2">
            In my work, I focus on creating attractive, responsive applications that are optimized for speed and performance. With experience across various projects, I've developed applications that not only look great but also load quickly, ensuring an excellent user experience. My attention to detail and commitment to quality drive my ability to deliver top-notch solutions.
            </p>
          </TabsContent>
        </MotionTabs>
      </div>
    </>
  );
}

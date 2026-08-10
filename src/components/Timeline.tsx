import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { CalendarDays, GraduationCap, Briefcase, LaptopMinimal, type LucideIcon } from "lucide-react";

const educationData = [
  {
    title: "Degree in Computer Science (with Minor in Business Managment)",
    location: "Georgia - Kutaisi International University",
    date: "2022 - 2026",
    logo: "/images/kiu-logo.png",
    logoAlt: "Kutaisi International University logo",
  },
  {
    title: "High School",
    location: "Georgia - Komarovi (199th public school)",
    date: "2016 - 2022",
    logo: "/images/komarovi-logo.png",
    logoAlt: "Komarovi School logo",
  },
  {
    title: "Private School",
    location: "Georgia - Georgian-American High School",
    date: "2010 - 2016",
    logo: "/images/gahs-logo.png",
    logoAlt: "Georgian-American High School logo",
  },
];

const workData = [
  {
    title: "QA Automation Engineer",
    location: "Full time - Nugios Systems",
    date: "2025 Aug - Present",
    logo: "/images/nugios-logo.png",
    logoAlt: "Nugios Systems logo",
  },
  {
    title: "Frontend Developer",
    location: "Part time - Kutaisi International University",
    date: "2025 Dec - 2026 Jun",
    logo: "/images/kiu-logo.png",
    logoAlt: "Kutaisi International University logo",
  },
  {
    title: "Freelance Frontend Developer",
    location: "Freelance - EvCarChager",
    date: "2024 Dec - 2025 Jul",
    icon: LaptopMinimal,
  },
  {
    title: "Lecturer/Mentor (Frontend Basics)",
    location: "Part time - Lopus Electronics",
    date: "2023 - 2023",
    logo: "/images/lopus-logo.png",
    logoAlt: "Lopus Electronics logo",
  },
];

const TimelineItem = ({
  title,
  location,
  date,
  logo,
  logoAlt,
  icon: Icon,
}: {
  title: string;
  location: string;
  date: string;
  logo?: string;
  logoAlt?: string;
  icon?: LucideIcon;
}) => (
  <div className="flex items-start relative">
    <div className="flex flex-col items-center mr-6 mt-5">
      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1" />
      <div className="h-full w-px bg-blue-300" />
    </div>
    <div className="pb-12 max-w-lg flex gap-4">
      <div className="w-14 h-14 shrink-0">
        {logo && (
          <div className="w-full h-full rounded-full p-2 flex items-center justify-center bg-background ring-1 ring-border shadow-sm dark:bg-slate-950">
            <img
              src={logo}
              alt={logoAlt ?? `${title} logo`}
              className="w-full h-full rounded-full object-contain"
            />
          </div>
        )}
        {Icon && (
          <div className="w-full h-full rounded-full flex items-center justify-center bg-blue-100 text-blue-600 ring-1 ring-blue-200 shadow-sm dark:bg-blue-950/60 dark:text-blue-300 dark:ring-blue-900">
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{location}</p>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <CalendarDays className="w-4 h-4 mr-1" />
          {date}
        </div>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-7 pt-0">
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="flex justify-center mb-6 gap-4">
            <TabsTrigger
              value="education"
              className="w-[165px] flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:!text-white data-[state=active]:rounded-lg data-[state=active]:hover:from-blue-700 data-[state=active]:hover:to-purple-700 data-[state=active]:transition-all data-[state=active]:duration-300 data-[state=active]:hover:scale-105"
            >
              <GraduationCap className="w-5 h-5" />
              Education
            </TabsTrigger>

            <TabsTrigger
              value="work"
              className="w-[165px] flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:!text-white data-[state=active]:rounded-lg data-[state=active]:hover:from-blue-700 data-[state=active]:hover:to-purple-700 data-[state=active]:transition-all data-[state=active]:duration-300 data-[state=active]:hover:scale-105"
            >
              <Briefcase className="w-5 h-5" />
              Work
            </TabsTrigger>

        </TabsList>


        <TabsContent value="education">
          {educationData.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </TabsContent>

        <TabsContent value="work">
          {workData.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Timeline;

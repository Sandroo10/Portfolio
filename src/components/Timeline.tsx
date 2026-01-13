import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { CalendarDays, GraduationCap, Briefcase } from "lucide-react";

const educationData = [
  {
    title: "Private School",
    location: "Georgia - Georgian-American High School",
    date: "2010 - 2016",
  },
  {
    title: "High School",
    location: "Georgia - Komarovi (199th public school)",
    date: "2016 - 2022",
  },
  {
    title: "Degree in Computer Science (with Minor in Business Managment)",
    location: "Georgia - Kutaisi International University",
    date: "2022 - 2026",
  },
];

const workData = [
  {
    title: "Lecturer/Mentor (Frontend Basics)",
    location: "Georgia - Lopus Electronics",
    date: "2023 - 2024",
  },
  {
    title: "Student Assitant in Scripting Languages",
    location: "Remote - Kutaisi International University",
    date: "2024 - 2025",
  },
  {
    title: "FrontEnd Developer",
    location: "Part time - Kutaisi International University",
    date: "2024 - Present",
  },
  {
    title: "QA Automation Tester",
    location: "Remote - Nugios Technologies",
    date: "2025 - Present",
  },
];

const TimelineItem = ({
  title,
  location,
  date,
}: {
  title: string;
  location: string;
  date: string;
}) => (
  <div className="flex items-start relative">
    <div className="flex flex-col items-center mr-6 mt-5">
      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1" />
      <div className="h-full w-px bg-blue-300" />
    </div>
    <div className="pb-10 max-w-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{location}</p>
      <div className="flex items-center text-sm text-muted-foreground mt-1">
        <CalendarDays className="w-4 h-4 mr-1" />
        {date}
      </div>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 pt-0">
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="flex justify-center mb-6 gap-4">
            <TabsTrigger
              value="education"
              className="w-[150px] flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:!text-white data-[state=active]:rounded-lg data-[state=active]:hover:from-blue-700 data-[state=active]:hover:to-purple-700 data-[state=active]:transition-all data-[state=active]:duration-300 data-[state=active]:hover:scale-105"
            >
              <GraduationCap className="w-5 h-5" />
              Education
            </TabsTrigger>

            <TabsTrigger
              value="work"
              className="w-[150px] flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:!text-white data-[state=active]:rounded-lg data-[state=active]:hover:from-blue-700 data-[state=active]:hover:to-purple-700 data-[state=active]:transition-all data-[state=active]:duration-300 data-[state=active]:hover:scale-105"
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

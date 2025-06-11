import IEEESBNSBM from "@/assets/images/ieeesbnsbm_logo.jpeg";
import IEEESBIIT from "@/assets/images/ieee_computer_society_student_chapter_of_iit_logo.jpeg";
import IEEESLIIT from "@/assets/images/ieee_student_branch_of_sliit_logo.jpeg";
import AIDSL from "@/assets/images/ai_driven_sri_lanka_logo.jpeg";
import plymoutLogo from "@/assets/images/plymouth_university_logo.jpeg";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { text } from "stream/consumers";

const testimonials = [
  {
    name: "IEEE Student Branch",
    position: "SLIIT University",
    text: "2025/2026 - Ambassador for Path to Internship",
    text2: "Skills - Event Promotion, Community Engagement, Communication",
    avatar: IEEESLIIT,
  },
  {
    name: "IEEE Computer Society Student Branch Chapter",
    position: "IIT University",
    text: "2025/2026 - Ambassador for CodeRally 6.0",
    text2: "Skills - Event Promotion, Community Engagement, Communication",
    avatar: IEEESBIIT,
  },
  {
    name: "AI Driven Sri Lanka",
    position: "IEEE YP Sri Lanka",
    text: "2025/2026 - Industry Outreach Coordinator",
    text2: "Skills - Networking, Industry Collaboration, Communication",
    avatar: AIDSL,
  },
  {
    name: "IEEE Student Branch",
    position: "NSBM Green University",
    text: "2025/2026 - Media Coordinator",
    text2: "Skills - Event Promotion, Social Media Management, Communication",
    avatar: IEEESBNSBM,
  },
  {
    name: "Plymouth University",
    position: "Affiliated with NSBM Green University",
    text: "2024/2026 Representative of Batch 12 (Computer Science)",
    text2: "Skills - Leadership, Communication, Teamwork, Problem Solving",
    avatar: plymoutLogo,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Extracurricular Activities"
          title="Volunteering and Leadership"
          description="Following experiences showcase my leadership, teamwork, and communication skills, which are essential for success in any professional environment."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                      <br />
                      {testimonial.text2}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

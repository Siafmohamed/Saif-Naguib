import voyageImg from '../assets/Voyage.png';
import omarGaberImg from '../assets/Omar Gaber protoflio.png';
import resalaImg from '../assets/resala-charity.png';

export const projects = [
  {
    id: 1,
    title: "Voyage – Travel Booking Platform",
    description: "Full-stack MERN travel booking app similar to Booking.com. Built for DEPI Graduation Project.",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    demo: "https://depi-final-project-tan.vercel.app/",
    type: "Team Project",
    image: voyageImg
  },
  {
    id: 2,
    title: "Omar Gaber Portfolio",
    description: "Professional personal branding website for a non-technical skills instructor.",
    tags: ["React.js", "Responsive Design"],
    demo: "https://omargaber.netlify.app/",
    type: "Freelance",
    image: omarGaberImg
  },
  {
    id: 3,
    title: "Resala Charity Dashboard",
    description: "Full-stack donation & sponsorship management system with role-based access control.",
    tags: ["React", "TypeScript", ".NET", "REST API"],
    demo: "https://resala-charity-system.vercel.app/",
    type: "Full-Stack",
    image: resalaImg
  }
];

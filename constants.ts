import { GraduationCap, BookOpen, Globe, FileCheck, Plane, Building2, BadgeCheck } from 'lucide-react';
import { CountryData, ServiceData, TestimonialData, FAQItem } from './types';

export const CONTACT_INFO = {
  phone: "0335-8710682",
  phoneDisplay: "0335-8710682",
  whatsapp: "923358710682", // Format for API
  email: "info@beaconoverseas.com",
  address: "Opposite Wapda House, Near Shaheen Chowk, Sargodha Road, Gujrat",
  timings: "10:00 AM – 6:00 PM",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.835384668475!2d74.0754!3d32.5762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1b0b0b0b0b0b%3A0x0!2sWapda%20House%20Gujrat!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
};

export const COUNTRIES: CountryData[] = [
  {
    id: "uk",
    name: "United Kingdom",
    image: "https://picsum.photos/id/10/800/600", 
    overview: "Home to some of the world's oldest and most prestigious universities. The UK offers a multicultural environment and shorter degree duration.",
    programs: ["Business Management", "Engineering", "Law", "Health Sciences", "Computer Science"],
    requirements: ["IELTS/TOEFL score", "Academic Transcripts", "Statement of Purpose", "Letters of Recommendation"],
    whyChoose: ["2-year Post Study Work Visa", "1-year Masters Programs", "World-recognized degrees"]
  },
  {
    id: "usa",
    name: "USA",
    image: "https://picsum.photos/id/16/800/600",
    overview: "The top destination for international students, offering vast choices of specializations and cutting-edge research opportunities.",
    programs: ["STEM Courses", "MBA", "Psychology", "Liberal Arts", "Data Science"],
    requirements: ["SAT/GRE/GMAT (optional for some)", "IELTS/TOEFL", "Bank Statement", "Valid Passport"],
    whyChoose: ["OPT (Optional Practical Training)", "Top-ranked universities", "Flexible curriculum"]
  },
  {
    id: "germany",
    name: "Germany",
    image: "https://picsum.photos/id/20/800/600",
    overview: "Known for engineering excellence and tuition-free education at public universities for international students.",
    programs: ["Mechanical Engineering", "Automotive", "Business", "IT"],
    requirements: ["German language (A1-C1) or English proficiency", "13 years of education (Studienkolleg)", "Blocked Account"],
    whyChoose: ["Low or No Tuition Fees", "Strong economy", "18-month Job Seeker Visa"]
  },
  {
    id: "finland",
    name: "Finland",
    image: "https://picsum.photos/id/28/800/600",
    overview: "World-class education system with a focus on innovation and student well-being.",
    programs: ["Information Technology", "Nursing", "Business Administration"],
    requirements: ["Entrance Exam", "IELTS", "High School Diploma"],
    whyChoose: ["High quality of life", "Generous scholarships", "Pathway to permanent residency"]
  },
  {
    id: "italy",
    name: "Italy",
    image: "https://picsum.photos/id/43/800/600",
    overview: "Study in the cradle of history and art. Italy offers affordable education and historical universities.",
    programs: ["Architecture", "Fashion Design", "Medicine", "Economics"],
    requirements: ["DOV (Declaration of Value)", "IMAT (for Medicine)", "IELTS"],
    whyChoose: ["Need-based scholarships (DSU)", "Rich culture", "Travel opportunities in Europe"]
  },
  {
    id: "turkey",
    name: "Turkey",
    image: "https://picsum.photos/id/58/800/600",
    overview: "A bridge between East and West, offering modern education facilities at very affordable costs.",
    programs: ["Medicine", "Engineering", "Tourism", "International Relations"],
    requirements: ["High School Diploma", "Passport", "Language proficiency (if applicable)"],
    whyChoose: ["No Visa interviews for many", "Cultural similarity", "Affordable living"]
  }
];

export const SERVICES: ServiceData[] = [
  {
    id: "admission",
    title: "Admission Guidance",
    description: "End-to-end support in selecting the right university and course based on your profile and career goals.",
    icon: GraduationCap
  },
  {
    id: "visa",
    title: "Visa Assistance",
    description: "Expert guidance on file preparation, financial documentation, and interview preparation to ensure high visa success rates.",
    icon: FileCheck
  },
  {
    id: "scholarship",
    title: "Scholarship Guidance",
    description: "Helping you identify and apply for merit-based and need-based scholarships to reduce your financial burden.",
    icon: BadgeCheck
  },
  {
    id: "selection",
    title: "University Selection",
    description: "We analyze your academic background to suggest the best-fit universities with high acceptance probabilities.",
    icon: Building2
  },
  {
    id: "travel",
    title: "Pre-Departure Briefing",
    description: "Preparing you for life abroad, accommodation assistance, and travel arrangements.",
    icon: Plane
  }
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: 1,
    name: "Ali Hassan",
    destination: "UK",
    university: "University of Hertfordshire",
    quote: "Beacon Overseas made my dream reality. Their visa team is extremely knowledgeable about the latest UK regulations.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Fatima Zahra",
    destination: "USA",
    university: "Arizona State University",
    quote: "I was confused about the US process, but the counseling session clarified everything. Highly recommended for students in Gujrat.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Usman Ahmed",
    destination: "Germany",
    university: "TU Munich",
    quote: "They helped me with my blocked account and uni application perfectly. Professional and honest consultants.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer a free initial consultation to assess your profile and suggest suitable study destinations."
  },
  {
    question: "What are your office timings?",
    answer: "We are open Monday to Saturday, from 10:00 AM to 4:00 PM."
  },
  {
    question: "Do you help with scholarships?",
    answer: "Absolutely. We help students apply for university-specific and government-funded scholarships."
  },
  {
    question: "Where is your office located?",
    answer: "We are located Opposite Wapda House, Near Shaheen Chowk, Sargodha Road, Gujrat."
  }
];

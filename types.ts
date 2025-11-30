import { LucideIcon } from "lucide-react";

export interface CountryData {
  id: string;
  name: string;
  image: string;
  overview: string;
  programs: string[];
  requirements: string[];
  whyChoose: string[];
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialData {
  id: number;
  name: string;
  destination: string;
  university: string;
  quote: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
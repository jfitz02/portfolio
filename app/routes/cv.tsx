import type { Route } from "./+types/cv.tsx";
import { CV } from "../cv/cv";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Joshua Fitzmaurice CV" },
    { name: "description", content: "My current CV!" },
  ];
}

export default function Home() {
  return <CV />;
}

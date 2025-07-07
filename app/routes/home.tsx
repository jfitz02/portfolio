import type { Route } from "./+types/home.tsx";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Joshua Fitzmaurice" },
    { name: "description", content: "A portfolio page to display projects I have completed, as well as to put to the world what I am learning!" },
  ];
}

export default function Home() {
  return <Welcome />;
}

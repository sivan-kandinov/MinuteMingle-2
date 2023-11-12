"use client";

import {
  BookCopy,
  BookMarked,
  BookOpenText,
  GraduationCap,
  Pen,
  PenSquare,
  Pencil,
  PencilLine,
  PencilRuler,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AcademicInformation({ paths }: { paths: string[] }) {
  const [shuffled, setShuffled] = useState<JSX.Element[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const classStyle = "font-bold mb-4";

  const classIcons = [
    <BookCopy className={classStyle} />,
    <Pencil className={classStyle} />,
    <PencilLine className={classStyle} />,
    <Pen className={classStyle} />,
    <PencilRuler className={classStyle} />,
    <PenSquare className={classStyle} />,
    <BookOpenText className={classStyle} />,
    <BookMarked className={classStyle} />,
  ];

  useEffect(() => {
    if (loading) {
      const x = [...classIcons].sort(() => 0.5 - Math.random());
      setShuffled(x.slice(0, 5));
      setLoading(false);
    }
  }, [loading]);

  const numClassIcons = classIcons.length;

  return (
    <div className="flex flex-col mr-4">
      <div className="flex inline-flex mb-4">
        <GraduationCap className="mr-2" />
        <h2 className="text-2xl">Academic Majors:</h2>
      </div>
      <div className="flex flex-col">
        {paths.map((path, i) => (
          <div className="flex flex-row inline-flex">
            {shuffled[i % numClassIcons]}
            <h2 className="ml-2 text-2xl">{path}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

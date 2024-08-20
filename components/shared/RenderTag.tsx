import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface props {
  id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

function RenderTag({ id, name, totalQuestions, showCount }: props) {
  return (
    <Link
      href={`/somewhere/${id}`}
      className="flex items-center justify-between"
    >
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="text-dark500_light700 small-medium">
          {totalQuestions}
        </p>
      )}
    </Link>
  );
}

export default RenderTag;

"use client";

import Link from "next/link";

import { useAtomValue } from "jotai";
import { solutionSvgAtom } from "@/lib/atoms";
import { GrDocumentMissing } from "react-icons/gr";

const ArrangementPage = () => {
  const solutionSvg = useAtomValue(solutionSvgAtom);

  return (
    <div className="solutionContainer">
      {solutionSvg ? (
        <div
          dangerouslySetInnerHTML={{ __html: solutionSvg }}
          className="solution"
        />
      ) : (
        <div className="whenEmpty">
          <GrDocumentMissing size={100} />
          <span>
            You will see your arranged design here once it has been processed.
            To begin, go to the <Link href={"/home"}>Home page</Link>, upload
            your file, and click on Arrange Design Button. After that, return to this
            page to view the result.
          </span>
        </div>
      )}
    </div>
  );
};
export default ArrangementPage;

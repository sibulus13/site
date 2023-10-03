"use client";

import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.back()}>
        <BiArrowBack size="42"></BiArrowBack>
      </button>
    </div>
  );
}
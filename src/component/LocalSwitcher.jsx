"use client";

import { useRouter } from "next/navigation";
import vn from "../../public/vietnam.png";
import hoaky from "../../public/hoaky.png";
import duc from "../../public/duc.png";
import phap from "../../public/phap.png";
import taybannha from "../../public/taybannha.png";
import y from "../../public/y.webp";
import nhat from "../../public/nhat.webp";


import Image from "next/image";
import { useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSelectChange = (e) => {
    console.log("e: ", e);
    startTransition(() => {
      router.replace(`/${e}`);
    });
  };
  return (
    <>
      <div>
        <Image
          src={hoaky}
          alt="hoa ky"
          style={{ width: 45, height: 30, cursor: "pointer" }}
          onClick={() => onSelectChange("en")}
        />
      </div>
      <div>
        <Image
          src={vn}
          alt="viet nam"
          style={{ width: 45, height: 30, cursor: "pointer" }}
          onClick={() => onSelectChange("vi")}
        />
      </div>
      <div>
        <Image
          src={duc}
          alt="duc"
          style={{ width: 45, height: 30, cursor: "pointer" }}
          onClick={() => onSelectChange("de")}
        />
      </div>
      <div>
        <Image
          src={phap}
          alt="phap"
          style={{ width: 45, height: 30, cursor: "pointer" }}
          onClick={() => onSelectChange("fr")}
        />
      </div>
      <div>
        <Image
          src={taybannha}
          alt="taybannha"
          style={{ width: 45, height: 30, cursor: "pointer" }}
          onClick={() => onSelectChange("es")}
        />
      </div>
      <div>
        <Image
          src={y}
          alt="y"
          style={{ width: 45, height: 30, cursor: "pointer" }}
          onClick={() => onSelectChange("it")}
        />
      </div>
      <div>
        <Image
          src={nhat}
          alt="nhat"
          style={{ width: 45, height: 30, cursor: "pointer" }}
          onClick={() => onSelectChange("jp")}
        />
      </div>
    </>
  );
}

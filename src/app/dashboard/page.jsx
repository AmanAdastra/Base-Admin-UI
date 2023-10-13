"use client";

import React from "react";
import UsersGraph from "@/components/Graphs/UsersGraph";
import PageHeader from "@/components/core/PageHeader";
import GraphCards from "@/components/Graphs/GraphCards";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingComponent from "@/components/core/LoadingComponent";

const Page = () => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status != "authenticated") {
      router.push("/login");
      return () => {};
    }
  }, [status]);
  if (status == "loading") return <LoadingComponent />;


  return (
    <>
      <div>
        <PageHeader title={"Dashboard"} />
        <div className="flex flex-wrap">
          <GraphCards />
        </div>
        <UsersGraph />
      </div>
    </>
  );
};

export default Page;

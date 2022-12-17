import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import prisma from "../../../lib/prisma";

export const getServerSideProps: GetServerSideProps<any> = async ({
  params,
}) => {
  if (!params) throw new Error("No path parameters found");

  const { site } = params;

  const organization = await prisma.organization.findUnique({
    where: {
      subdomain: site as string,
    },
  });

  return {
    props: {
      organization: JSON.stringify(organization),
    },
  };
};

export default function Site({ organization }: { organization: string }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  const { name } = JSON.parse(organization);

  return (
    <main className="h-screen w-screen bg-[#fefbf3] flex flex-col items-center justify-center gap-12">
      <div>
        <h1 className="text-8xl font-bold text-[#272b2e] text-center">
          Insurance from <span className="text-[#fa4028]">{name}</span>
        </h1>
        <h1 className="text-8xl font-bold text-[#272b2e] text-center mt-8">
          is coming soon
        </h1>
      </div>
      <p className="text-stone-700 font-light">
        Powered by{" "}
        <span className="text-[#fa4028] font-semibold">Authentic</span>
      </p>
    </main>
  );
}

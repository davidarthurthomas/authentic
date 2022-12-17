import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";
import prisma from "../../../lib/prisma";

export default function Site({ stringifiedData }: { stringifiedData: string }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  let organization;
  try {
    JSON.parse(stringifiedData);
  } catch (err) {
    console.log(err);
    organization = { name: "Acme" };
  }

  const { name } = organization;

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

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const organizations = await prisma.organization.findMany({});

  const allPaths = [...organizations.map(({ subdomain }) => subdomain)].filter(
    (path) => path
  ) as Array<string>;

  return {
    paths: allPaths.map((path) => ({
      params: {
        site: path,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
  if (!params) throw new Error("No path parameters found");

  const { site } = params;

  const data = await prisma.organization.findUnique({
    where: {
      subdomain: site as string,
    },
  });

  if (!data) return { notFound: true, revalidate: 10 };

  return {
    props: {
      stringifiedData: JSON.stringify(data),
    },
    revalidate: 3600,
  };
};

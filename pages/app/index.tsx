import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { GetServerSideProps } from "next";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { userId } = await getAuth(req);

  let memberships, organization;
  if (userId) {
    memberships = await clerkClient.users.getOrganizationMembershipList({
      userId: userId,
      limit: 1,
    });
  } else {
    memberships = null;
  }

  if (memberships && memberships[0]) {
    organization = await prisma.organization.upsert({
      where: {
        clerkId: memberships[0].organization.id,
      },
      update: {},
      create: {
        name: memberships[0].organization.name,
        clerkId: memberships[0].organization.id,
        subdomain: memberships[0].organization.name.toLowerCase(),
      },
    });
  } else {
    organization = null;
  }

  return {
    props: {
      stringifiedMemberships: JSON.stringify(memberships),
      stringifiedOrganization: JSON.stringify(organization),
    },
  };
};

export default function App({
  stringifiedOrganization,
}: {
  stringifiedOrganization: string;
}) {
  const organization = JSON.parse(stringifiedOrganization);

  return (
    <>
      <SignedIn>
        <Dashboard organization={organization} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

const Dashboard = ({ organization }: { organization: any }) => {
  console.log(organization);

  return (
    <main className="h-screen w-screen bg-[#fefbf3] flex flex-col items-center justify-center gap-12">
      <h1 className="text-8xl max-w-4xl font-bold text-[#272b2e] text-center">
        Hello, welcome to <span className="text-[#fa4028]">Authentic</span>
      </h1>
      {organization ? (
        <a
          className="px-8 py-4 bg-[#fa4028] text-white rounded-md font-semibold hover:bg-[#FB6A57]"
          href={`http://${organization.subdomain}.localhost:3000`}
        >
          View organization
        </a>
      ) : (
        <a
          className="px-8 py-4 bg-[#fa4028] text-white rounded-md font-semibold hover:bg-[#FB6A57]"
          href="/create-organization"
        >
          Create an organization
        </a>
      )}
    </main>
  );
};

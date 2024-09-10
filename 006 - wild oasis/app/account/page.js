import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

const AccountPage = async () => {
  const session = await auth();

  return <div>Hello {session?.user?.name}</div>;
};

export default AccountPage;

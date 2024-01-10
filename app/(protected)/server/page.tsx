import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  const user = await currentUser();

  return <div>Server Page</div>;
};

export default ServerPage;

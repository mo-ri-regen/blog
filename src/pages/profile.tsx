import type { NextPage } from "next";
import { Footer } from "../component/layout/container/footer";
import { Header } from "../component/layout/container/header";
const Profile: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>Profile</h1>
      <main className="relative top-8 left-8">
      </main>
      <Footer />
    </div>
  );
};

export default Profile;

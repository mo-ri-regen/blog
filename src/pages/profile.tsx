import type { NextPage } from "next";
import React from "react";
import { Footer } from "../component/layout/container/footer";
import { Navigation } from "../component/layout/container/navigation";
const Profile: NextPage = () => {
  return (
    <div>
      <Navigation />
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;

import type { NextPage } from "next";
import React from "react";
import { Navigation } from "../component/navigation";
import { Footer } from "../component/layout/container/footer";
const Profile: NextPage = () => {
  return (
    <div>
      <Navigation />
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;

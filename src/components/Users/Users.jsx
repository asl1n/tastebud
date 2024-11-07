import React, { useState } from "react";
import Layout from "../Layout";
import UserTable from './UserTable';

function User() {
  return (
    <Layout>
      <div className="pt-2 pr-2 pl-6 bg-white flex flex-col min-h-screen rounded-lg shadow-lg">
        <UserTable />
      </div>
    </Layout>
  );
}

export default User;
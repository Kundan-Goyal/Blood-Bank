import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          The Blood Bank App administrator plays a pivotal role in ensuring the life-saving services of a blood bank seamlessly.  As an administrator, you will wield a comprehensive suite of tools to manage all aspects of blood donation and distribution through the app.
          Your responsibilities encompasses:
          </p>
          <ul>
            <li>Schedule and coordinate blood donation drives and events.</li>
            <li>Monitor and update the inventory of available blood units.</li>
            <li>Manage user accounts, including donor and recipient profiles.</li>
            <li>Generate reports on blood donations, usage, and inventory status.</li>
            <li>Ensure compliance with health regulations and safety standards.</li>
            <li>Communicate with donors and recipients to provide necessary support and information.</li>
          </ul>
          <p>
            Your role is crucial in maintaining the reliability and efficiency of the blood bank services. Thank you for your dedication and hard work in helping save lives.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;

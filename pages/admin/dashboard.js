import React from "react";
import Dashboard from "../../components/dashboard/admin/dashboard/Dashboard";
import DashboardLayout from "../../components/dashboard/Layout/DashboardLayout";

const dashboard = () => {
	return (
		<DashboardLayout>
			<Dashboard />
		</DashboardLayout>
	);
};

export default dashboard;

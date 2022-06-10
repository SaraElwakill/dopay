import React, { useState } from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import { getLayout as getRedLayout } from "./red";
const Blue = ({ children }) => {
	return (
		<Layout>
			<Sider
				style={{
					backgroundColor: "blue",
					color: "white",
					display: "var(--mobile)",
				}}
			>
				side bar
			</Sider>
			<Layout>
				<Header
					style={{
						backgroundColor: "blue",
						color: "white",
						boxShadow: "box-shadow: -2px 4px 6px -2px rgba(0,0,0,0.82)",
						padding: "0px 10px",
					}}
				>
					header
				</Header>
				<Content style={{ overflow: "scroll" }}>{children}</Content>
				<Footer style={{ backgroundColor: "blue", color: "white" }}>
					footer
				</Footer>
			</Layout>
		</Layout>
	);
};
export const getLayout = (page) => <Blue>{page}</Blue>;
export default Blue;

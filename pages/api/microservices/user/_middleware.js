import * as jose from "jose";
import { NextResponse, NextApiRequest } from "next/server";

export default async function verifyToken(req) {
	const authorization = req.headers.get("authorization");
	const userID = req.headers.get("userID");

	if (authorization) {
		const token = authorization.split(" ")[1];
		try {
			const { payload: jwtData } = await jose.jwtVerify(
				token,
				new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
			);
			console.log("id in token ", jwtData.UserInfo.id);
			console.log("id in cookies ", userID);
			console.log(jwtData);
			if (userID !== jwtData?.UserInfo?.id) {
				throw new Error("you are not allowed!");
			}
			NextResponse.next();
		} catch (error) {
			return new Response(JSON.stringify({ error: error.message }), {
				status: 401,
			});
		}
	} else {
		return new Response(
			JSON.stringify({ error: "you have to login first !" }),
			{
				status: 401,
			}
		);
	}
}

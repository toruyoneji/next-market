import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    //console.log("ミドルウェア");
    //const token = await request.headers.get("Authorization")?.split(" ")[1];
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InlvbmVAZXhhbXBsZS5jb20iLCJleHAiOjE3NDUxNDI4ODl9.GaLRd1o7Y0-hU_7tL3aqenWHZEQQ1UCrKa-2fgN21sM";

    if(!token) {
        return NextResponse.json({message: "トークンがありません"});
    }

    try {

        const secretKey = new TextEncoder().encode("next-market-app-book");
        const decodedJwt = await jwtVerify(token, secretKey);
        //console.log("decodedJwt:", decodedJwt);

        return NextResponse.next();

    } catch {

        return NextResponse.json({message: "トークンが正しくないので、ログインしてください"});

    }
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";



export async function POST(request) {
    const reqBody = await request.json();
   // console.log(reqBody);
    try {
        await connectDB();
        const saveUserData = await UserModel.findOne({email: reqBody.email});
        //console.log(saveUserDate);

        if(saveUserData) {

            if(reqBody.password === saveUserData.password) {

                const secretKey = new TextEncoder().encode("next-market-app-book");

                const payload = {
                    email: reqBody.email,
                }

                const token = await new SignJWT(payload).setProtectedHeader({alg: "HS256"}).setExpirationTime("1d").sign(secretKey);

                //console.log(token);

                return NextResponse.json({message: "ログイン成功", token: token});

            } else {

                return NextResponse.json({message: "ログイン失敗: パスワードが間違っています"});

            }

        } else {

        return NextResponse.json({message: "ログイン失敗: ユーザー登録をしてください"});

        }

    } catch {

        return NextResponse.json({message: "ログイン失敗"});

    }
}
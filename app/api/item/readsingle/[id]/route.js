import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET(request, context) {
    //console.log(context.params.id);
    try {

        await connectDB();
        const singleItem = await ItemModel.findById(context.params.id);
        //console.log(singleItem);
        return NextResponse.json({message: "アイテム読み取り成功(single)", singleItem: singleItem});
    } catch {

        return NextResponse.json({message: "アイテム読み取り失敗(single)"});

    }
}
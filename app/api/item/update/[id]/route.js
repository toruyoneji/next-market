import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function PUT(request, context) {

    const reqBody = await request.json();

    try {

        await connectDB();
        const singleItem = await ItemModel.findById(context.params.id);

        if(singleItem.email === reqBody.email) {
            await ItemModel.updateOne({_id: context.params.id}, reqBody);
            return NextResponse.json({message: "アイテム編集成功"});
        } else {
            return NextResponse.json({message: "ほかの人が作成したアイテムです"});

        }

    } catch {

        return NextResponse.json({message: "アイテム編集失敗"});

    }
}
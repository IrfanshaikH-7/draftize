"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./type";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth();
    if (!userId || !orgId) {
        return {
            error: "Unauthorize"
        }
    }

    const { title, image } = data;
    const [
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHtml,
        imageUserName
    ] = image.split('|')

    console.log(
        {
            imageId,
            imageThumbUrl,
            imageFullUrl,
            imageLinkHtml,
            imageUserName
        }
    );

    if (!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHtml || !imageUserName) {
        return {
            error: "Missing fields, Failed to create board."
        }
    }

    let board;
    try {
        board = await db.board.create({
            data: {
                title: title,
                orgId: orgId,
                imageId,
                imageThumbUrl,
                imageFullUrl,
                imageUserName,
                imageLinkHtml
            }
        })
    } catch (error) {
        return {
            error: "Failed to create."
        }
    }

    revalidatePath(`/board/${board.id}`);
    return { data: board };
}

export const createBoard = createSafeAction(CreateBoard, handler)
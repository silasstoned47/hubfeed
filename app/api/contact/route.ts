import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Validate basic fields
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Mock success response
        return NextResponse.json({
            success: true,
            message: "Message sent successfully!",
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

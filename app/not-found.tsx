import { Metadata } from "next/types";

export const metadata :Metadata = {
    title : "Not Found",
}

export default function NotFound() {
    return (
        <div>
            <h1>Not found!</h1>
        </div>
    );
}
'use client'
import { useState } from "react";
import Dropzone from "@/components/Dropzone";
import { Button } from "./ui/button";
import { db } from "@/firebase"; // Import the Firestore instance
import { collection, addDoc } from "firebase/firestore";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handlePost = async () => {
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                title: title,
                message: message,
                createdAt: new Date(),
                // Add other fields as needed
            });
            console.log("Document written with ID: ", docRef.id);
            window.location.reload();
        } catch (e) {
            console.error("Error adding document: ", e);
            window.location.reload();
            window.alert("Error adding post")
        }
    };

    return (
        <div className="lg:w-1/3 p-6 flex flex-col items-center">
            <h1 className="w-full text-center mb-6 text-3xl font-bold">Create Post</h1>
            <div className="w-full flex flex-col items-center">
                <h1 className="w-2/3 text-left text-2xl mt-5 font-semibold">Title:</h1>
                <input
                    type="text"
                    placeholder="Title"
                    className="w-2/3 h-10 rounded-2xl bg-black bg-opacity-10 dark:bg-gray-200 dark:bg-opacity-10 px-4 mt-1"
                    maxLength={40}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="w-full flex flex-col items-center">
                <h1 className="w-2/3 text-left text-2xl mt-10 font-semibold">Message:</h1>
                <textarea
                    cols={30}
                    rows={9}
                    className="p-4 w-2/3 h-64 rounded-2xl mt-1 bg-black bg-opacity-10 dark:bg-gray-200 dark:bg-opacity-10 resize-none"
                    maxLength={370}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            
            <Button className="mt-3 text-xl font-semibold" onClick={handlePost}>Post</Button>
        </div>
    )
}

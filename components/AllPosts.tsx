import React, { useEffect, useState } from 'react';
import { db } from '@/firebase'; // Adjust the import path as necessary
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';

interface Post {
  id: string;
  title: string;
  message: string;
  createdAt: Timestamp;
  [key: string]: any; // For any additional fields
}

const AllPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const postsData = querySnapshot.docs.map((doc): Post => {
          const data = doc.data() as Omit<Post, 'id'>;
          return { id: doc.id, ...data };
        });

        // Sort posts by createdAt field in descending order
        const sortedPosts = postsData.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="w-2/3 mb-4 p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="mt-2">{post.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;

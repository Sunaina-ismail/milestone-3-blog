"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface CommentsSectionProps {
  comments: string[];
  setComments: Dispatch<SetStateAction<string[]>>;
}

export default function CommentsSection({
  comments,
  setComments,
}: CommentsSectionProps) {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl md:text-2xl text-gray-600 font-serif font-semibold mb-4">
        Comments
      </h2>

      {comments.length === 0 && (
        <p className="text-gray-500 text-base font-serif mb-4">
          No comments yet.
        </p>
      )}

      <ul className="space-y-2">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="bg-white text-gray-900 border border-gray-300 p-2 rounded"
          >
            {comment}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border shadow-md rounded p-2"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

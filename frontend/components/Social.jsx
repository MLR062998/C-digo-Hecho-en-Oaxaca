import { useCanister, useConnect } from "@connect2ic/react";
import { resizeImage, fileToCanisterBinaryStoreFormat } from "../utils/image";
import { useDropzone } from "react-dropzone";
import React, { useEffect, useState } from "react";
import { SocialItem } from "./SocialItem";

const ImageMaxWidth = 2048;

const IcpSocial = () => {
  const [social] = useCanister("social");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState("");
  const [file, setFile] = useState(null);
  const { principal } = useConnect();

  useEffect(() => {
    refreshPosts();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"]
    },
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        try {
          const firstFile = acceptedFiles[0];
          const newFile = await resizeImage(firstFile, ImageMaxWidth);
          setFile(newFile);
        } catch (error) {
          console.error(error);
        }
      }
    }
  });

  const refreshPosts = async () => {
    setLoading("Loading...");
    try {
      const result = await social.getPosts();
      setPosts(result.sort((a, b) => parseInt(a[0]) - parseInt(b[0])));
      setLoading("Done");
    } catch (e) {
      console.log(e);
      setLoading("Error");
    }
  };

  const uploadPost = async () => {
    setLoading("Uploading...");
    try {
      const fileArray = await fileToCanisterBinaryStoreFormat(file);
      await social.uploadPost(principal, fileArray);
      setLoading("Done");
    } catch (e) {
      console.log(e);
      setLoading("Error");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col p-4 w-full">
      <div className="flex items-center justify-center flex-col border border-gray-500 p-5 space-x-2 w-96">
        <button {...getRootProps({ className: "dropzone" })}>
          <p className="bg-gray-950 hover:bg-gray-900 text-white p-2">Select an image</p>
          <input {...getInputProps()} />
        </button>
        <p>{file ? file.name : "No file selected"}</p>
        <button
          className="w-full p-2 rounded-sm bg-gray-950 hover:bg-gray-900 text-white text-lg font-bold"
          onClick={uploadPost}
        >
          Upload Post
        </button>
        <p>{loading}</p>
      </div>
      <div className="flex items-center justify-center flex-col p-4 w-full">
        {posts.map((post) => (
          <SocialItem key={post[0]} post={post} />
        ))}
      </div>
    </div>
  );
};

export default IcpSocial;

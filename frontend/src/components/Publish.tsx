import axios from "axios";
import AppBar from "./AppBar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
export const Publish = () => {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const navigate = useNavigate()
    return (
        <div>
      <AppBar />
      <div className=" pt-8 flex justify-center w-full">
        <div className="max-w-screen-lg w-full ">
          <input
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            type="text"
            placeholder="Title "
          />
          <TextEditor onChange={(e)=>{
            setDescription(e.target.value)
          }} />
          <button
            onClick={ async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content:description
              },{
                headers:{
                    Authorization:  localStorage.getItem("token")
                }
              });
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 "
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({onChange} : {onChange :( e:ChangeEvent<HTMLTextAreaElement>) =>void}) {
  return (
    <div className="mt-2">
      <div className="w-full mb-4 border">
        <div className="flex items-center justify-between">
          <div className="my-2 bg-white rounded-b-lg w-full">
            <label className="sr-only"> Publish Post</label>
            <textarea
                onChange={onChange}
              className="block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2"
              placeholder="Write an article..."
              rows={8}
              id="editor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import Heading from "./Heading";
import { postType } from "@/types";
import { FC } from "react";

type postTypeProps = {
  post: postType;
};

const PostInfo: FC<postTypeProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return (
      <Heading
        tag="h3"
        text="Empty post"
      />
    );
  }

  return (
    <>
      <Heading
        tag="h3"
        text={title}
      />
      <div>{body}</div>
    </>
  );
};

export default PostInfo;

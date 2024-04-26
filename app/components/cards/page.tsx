import Reac, { Fragment } from "react";

function CardComponents(){
 return (
  <Fragment>
   <h1>Cards Components</h1>

   <SocialCard  
    username="fikrialifata"
    postImage="https://picsum.photos/150/50"
    likes={99}
    comments={10}
    timestamp="29 des"
   />
  </Fragment>
 )
}

interface SocialCardProps {
  username: string;
  postImage: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export const SocialCard: React.FC<SocialCardProps> = ({
  username,
  postImage,
  likes,
  comments,
  timestamp
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={postImage} alt="Post" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{username}</div>
        <p className="text-gray-700 text-base">
          Liked by {likes} people
        </p>
        <p className="text-gray-700 text-base">
          {comments} Comments
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #{username}
        </span>
      </div>
      <div className="px-6 py-4">
        <span className="text-xs text-gray-600">
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default CardComponents;
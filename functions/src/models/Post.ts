import { ObjectId } from "mongodb";
import PlayList from "./PlayList";
import Track from "./Track";

export default interface Post {
  _id?: ObjectId;
  from: string;
  content: string;
  playlist?: PlayList;
  track?: Track;
  profileImage?: string;
}

import { ObjectId } from "mongodb";
import PlayList from "./PlayList";
import Track from "./Track";
import UserProfile from "./SpotifyUser";

export default interface Post {
  _id?: ObjectId;
  from: UserProfile;
  content: string;
  playlist?: PlayList;
  track?: Track;
  profileImage?: string;
}

import { ObjectId } from "mongodb";

export default interface PlayList {
  _id: ObjectId;
  playlist_id: string;
  owner: string;
  genre: string;
  image: string;
  name: string;
}

import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export class Article {
  id?: string;
  dataInserimento?: Timestamp;
  tags?: string[];
  title?: string;
}

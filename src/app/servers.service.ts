import { Injectable } from '@angular/core';
import { lijsten } from './lijsten'
import { from, Observable, Subject } from 'rxjs';
import { collectionData, CollectionReference, Firestore, collection, DocumentReference, doc, deleteDoc, updateDoc, setDoc, addDoc, docData } from '@angular/fire/firestore';
import { admin } from './auth/admin'
import { users } from './users';


@Injectable({
  providedIn: 'root'
})
export class ServersService {
 
  subjectStatus$ = new Subject<number>();
  
  constructor(private db: Firestore) { }
  
  lijsten : lijsten[] = [];
  users: users[] = [];

  getLijsten(): Observable<lijsten[]>{
    return collectionData<lijsten>(
      collection(this.db,'lijsten') as CollectionReference<lijsten>,
      {idField: 'id'});
  }

  getUsers(): Observable<users[]>{
    return collectionData<users>(
      collection(this.db,'users') as CollectionReference<users>,
      {idField: 'id'});
  }

  deleteLijst(id:string){
    const lijstRef = doc(this.db, 'lijsten/'+id) as DocumentReference<lijsten>;
    return from(deleteDoc(lijstRef));
  }

  updateLijst(lijsten: lijsten, id: string){
    const lijstRef = doc(this.db, 'lijsten/'+id) as DocumentReference<lijsten>;
    return from(updateDoc(lijstRef, lijsten));
  }

  createLijst(newLijsten: lijsten){
    const lijstenCollection = collection(this.db, 'lijsten');
    return from(addDoc(lijstenCollection, newLijsten));
  }

  getAdmin(uid:string | null) {
    return docData<admin>( 
      doc(this.db,'/administrators/' + uid) as DocumentReference<admin>);
  }

  sortLijsten(){
    //const q = query(, orderBy("lijstnaam", "desc"));
  }



  

  /*async uploadImg(path: string, file:File){
    const storageRef = ref(this.storage,path);
    const task = uploadBytesResumable(storageRef,file);  
    await task;
    const url = await getDownloadURL(storageRef);
    return url;  
  }*/

  

  /*getUsers(): Observable<User[]>{
    return this.
  }
*/
}



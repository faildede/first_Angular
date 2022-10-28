import { Component, OnInit } from '@angular/core';
import { collection, query, where, getDoc, getDocs, doc  } from "firebase/firestore";
import { db } from '../../utils/firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }



   async ngOnInit(): Promise<void> {
    const docRef = doc(db, "products", "phone_1");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
  async getDocuments(collectionId: string){
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }

}

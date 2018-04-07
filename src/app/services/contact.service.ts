import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import {Contact} from "../contact";

@Injectable()
export class ContactService {
  private contactsCollection: AngularFirestoreCollection<Contact>;

  contacts = new BehaviorSubject([]);

  constructor(private afs:AngularFirestore) {
    this.contactsCollection = afs.collection<Contact>('contacts');
    this.contacts = this.contactsCollection.valueChanges();

    this.contacts.subscribe(value => {
      console.log(value);
    });
  }

  public addContact(data: Contact){
    let id = this.afs.createId();
    data.id = id;
    this.afs.doc('contacts/' + id).set(data);
  }

  public deleteContact(id){
    let itemDoc = this.afs.doc('contacts/' + id);
    itemDoc.delete();
  }

  public editContact(data: Contact){
    let itemDoc = this.afs.doc('contacts/' + data['id']);
    itemDoc.update(data);
  }
}

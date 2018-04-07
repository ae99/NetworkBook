import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ContactService} from "../../services/contact.service";
import { distanceInWordsToNow } from "date-fns"
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  loggedInAs: string = '';
  contacts = [];
  // contactDict = {};
  now = new Date();

  distanceInWordsToNow = distanceInWordsToNow;

  priorities = {};

  constructor(private auth: AuthService, private router: Router, private contactService: ContactService) {
    this.auth.currentUserObservable.subscribe(user => {
      this.loggedInAs = user['displayName']
    });

    setTimeout(()=> {
      this.now = new Date();
    }, 5000);

    this.contactService.contacts.subscribe(contacts => {
      this.contacts = contacts;
      this.priorities[0] = [];
      this.priorities[1] = [];
      this.priorities[2] = [];

      for (let contact of contacts) {
        // this.contactDict[contact.id] = contact;
        if (contact.priority != undefined) {
          this.priorities[contact.priority].push(contact);
        }

        // if (contact.lastContacted) {
        //   console.log(distanceInWords(this.now, contact.lastContacted));
        // }
      }
    })
  }

  ngOnInit() {
    if (!this.auth.authenticated) {
      this.router.navigate(['/login'])
    }
  }



  contacted(contacted_id) {
    this.contactService.editContact({
      id: contacted_id,
      lastContacted: new Date(),
    })
  }

}

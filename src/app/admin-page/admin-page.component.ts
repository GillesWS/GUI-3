import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServersService } from '../servers.service';
import { users } from '../users';
import { Storage,uploadBytesResumable,ref, getDownloadURL } from '@angular/fire/storage'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  public file: any = {};
  constructor(private ss: ServersService,private route: ActivatedRoute,private router: Router, public Storage: Storage) { }

  ngOnInit(): void {
    
  }

  chooseFile(event: any){
    this.file = event.target.files[0];
  }
  addData(){
    const storageRef = ref(this.Storage,`images/${this.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef,this.file);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
      console.log('upload is: ' + progress + '% done');
      if(this.file.name != NaN){
        alert('Image is toegevoegd in de databank.');
      }
      else{
        alert('Geen image geselecteerd.');
      }
    },
    () =>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => { 
        console.log('File available at' + downloadURL);
      });
    }
    
    )
    
  }

  /*selectImg(event: Event):void{
    const target = event.target as HTMLInputElement;

    if(target.files && target.files[0]){
      this.file = target.files[0];
      console.log(this.file.name);
    }

    const newID = null;
    if(this.file){
      const path = 'images/' + newID + '/' + this.file.name;
      image.img = await this.ss.uploadImg(path,this.file);
    }
  }
*/
  


}

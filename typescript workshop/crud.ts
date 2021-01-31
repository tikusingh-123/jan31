//interface for address.
interface cityinfo{

    address: string;

}

//userop class with constructor and private properties.
class userop implements cityinfo{
 private id : number;
 private username : string;
 public address : string;
 private contactno : number;

 set idno(id :number){
     this.id=id;
 }
 set _user(username :string){
     this.username=username;
 }
 set _add(address:string)
 {  
      this.address=address;
 }
set _contact(contactno: number){
    if(contactno >=100000000){

     console.log("NUMBER IS INVALID");
    }
   this.contactno =contactno;
 }
//  constructor ( id, name, add, contact){

//     this.id = id;
//     this.username = name;
//     this.address = add;
//     this.contactno = contact;
//  }

 }
 let userarray =[];

 function createuser(uid:number,uname:string,uadress:string,ucontact:number){

    let user = new userop();
    user.idno=uid;
    user._user=uname;
    user._add=uadress;
    user._contact=ucontact;
   userarray.push(user);

 }
 createuser(1,"hemant","delhi",12345);
 createuser(2,"rishav","kolkata",12354);
 createuser(3,"varun","kolkata",12334);

 console.log(userarray);

//find user by id
 function finduser(id:number){

    let userbyid= userarray.filter(i=>i.id===id);
   return userbyid;  
 }  

 console.log(finduser(2));
 //delete user from user object array.
 function deleteuser(id: number){
   
     var index= userarray.map(function(user){

        return user.id
     }).indexOf(id)
userarray.splice(index,1);

console.log("deleted");
 }

  deleteuser(3);
  console.log(userarray);

 // edit user functionality

function edituser(id:number,edituser :string,editadd:string,editcontact:number){

    userarray = userarray.map(function(item){
        if(item.id===id){
            item.username=edituser;
            item.address=editadd;
            item.contact =editcontact;
        }
        else{
            console.log("id not found");
        }
        return item;
     })
    console.log(userarray);
}

edituser(2,"rishav singh","kolkata",12354);
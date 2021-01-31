var userop = /** @class */ (function () {
    function userop() {
    }
    Object.defineProperty(userop.prototype, "idno", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userop.prototype, "_user", {
        set: function (username) {
            this.username = username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userop.prototype, "_add", {
        set: function (address) {
            this.address = address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userop.prototype, "_contact", {
        set: function (contactno) {
            if (contactno >= 100000000) {
                console.log("NUMBER IS INVALID");
            }
            this.contactno = contactno;
        },
        enumerable: false,
        configurable: true
    });
    return userop;
}());
var userarray = [];
function createuser(uid, uname, uadress, ucontact) {
    var user = new userop();
    user.idno = uid;
    user._user = uname;
    user._add = uadress;
    user._contact = ucontact;
    userarray.push(user);
}
createuser(1, "hemant", "delhi", 12345);
createuser(2, "rishav", "kolkata", 12354);
createuser(3, "varun", "kolkata", 12334);
console.log(userarray);
function finduser(id) {
    var userbyid = userarray.filter(function (i) { return i.id === id; });
    return userbyid;
}
console.log(finduser(2));
function deleteuser(id) {
    var index = userarray.map(function (user) {
        return user.id;
    }).indexOf(id);
    userarray.splice(index, 1);
    console.log("deleted");
}
deleteuser(3);
console.log(userarray);
// edit user functionality
function edituser(id, edituser, editadd, editcontact) {
    userarray = userarray.map(function (item) {
        if (item.id === id) {
            item.username = edituser;
            item.address = editadd;
            item.contact = editcontact;
        }
        else {
            console.log("id not found");
        }
        return item;
    });
    console.log(userarray);
}
edituser(2, "rishav singh", "kolkata", 12354);

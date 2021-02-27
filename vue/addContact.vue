<template>
    <div class="container">
        <h1 >Validation de form en JS</h1>
        <h2 id="errors"></h2>
        <form @submit.prevent="addContact">
            <div class=boite>
                <div class="form-group">
                    <label for="name" >Name</label>
                    <input type="text"   v-model="name" id="name" placeholder="Jean" />
                </div>

                <div class="form-group">
                    <label for="firstname" class="">First name</label>
                    <input type="text"   v-model="firstname" id="firstname" placeholder="Luc" />
                </div>

                <div class="form-group">
                    <label for="email"  >Email</label>
                    <input type="email" v-model="email"  id="email" placeholder="email" />
                </div>

                <div class="form-group">
                    <label for="phone"  >Phone</label>
                    <input type="text"  v-model="phone" id="phone" placeholder="06" />
                </div>
                <div><button type="submit" class="btn btn-primary">Ajouter</button></div>
            </div>
        </form>
        </div>
</template>


<script>
module.exports ={

     data() {
        return {
            name: '',
            firstname:'',
            email:'',
            phone:'',
        };
    },
    props:['repertoire'],
    methods: {
        addContact() {
            let contact = {
                name:this.name,
                firstname:this.firstname,
                email:this.email,
                phone:this.phone,
                modify:false

            };

            this.validateName(this.name);
            this.repertoire.push(contact);
            window.localStorage.setItem("contacts", JSON.stringify(this.repertoire));
            this.$emit("save");
        },

        validateName(name) {
            this.error = document.getElementById("errors")
            console.log("validateName")
            if (this.name == "") {
                this.error.innerHTML += "   " + this.errorName + " name ";
                this.contact.name.style.borderColor = "red";
                return false;
                //console.log('error nom vide')
            }
            else {

                //this.contact.name.style.back = "green";
                return true
            }
        },

        ////////////////////////////////////////////////////////////////////////
       /* validateEmail(email) {
            // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.testRe = re.test(String(email).toLowerCase());
            if (this.email == this.testRe) {
                this.error.innerHTML += "   " + this.errorName + " mail  ";
                return false;
            }
            else {
                return true
            }
        },

        ////////////////////////////////////////////////////////////////////////
        validatePhone(phone) {
            const phoneno = /^\d{10}$/;
            this.testPhone = phoneno.test(String(phone).toLowerCase());
            if (phone == this.testPhone) {
                this.error.innerHTML += "   " + this.errorName + " phone  ";
                return false;

            }
            else {
                return true;
            }
        }*/













    }

}

</script>

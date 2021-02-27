<template>
    <div class="container">
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>First name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Delete</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(contact,key) in repertoire">
                    <td v-if='!contact.modify'>{{contact.name}}</td>
                    <td v-else><input type="text" v-model="contact.name"  /></td>

                    <td v-if='!contact.modify'>{{contact.firstname}}</td>
                    <td v-else><input type="text" v-model="contact.firstname"   /></td>

                    <td v-if='!contact.modify'>{{contact.email}}</td>
                    <td v-else><input type="text" v-model="contact.email"  /></td>

                    <td v-if='!contact.modify'>{{contact.phone}}</td>
                    <td v-else><input type="text" v-model="contact.phone" /></td>

                    <td><button type="button" class="btn btn-danger" @click="remove(key)">remove</button></td>
                    <td><button type="button"class="btn btn-primary" @click="edit(key)">Edit</button></td>
                </tr>
            </tbody>
        </table>

    </div>

</template>

<script>
module.exports = {
    props:['repertoire'],
    data() {
         return {

        };
    },
    methods: {
        remove(key){
            //console.log(this.repertoire[key])
            this.repertoire.splice(key,1);
            this.$emit('save')
            //console.log(key)
        },
        edit(key){

            /*if(this.repertoire[key].modify){
                this.repertoire[key].modify = false;
            }
            else{
                this.repertoire[key].modify =true;
            }*/
            this.repertoire[key].modify=!this.repertoire[key].modify;
            this.$emit('save');
        }
    },
}

</script>



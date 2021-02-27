//import Form from "./form.class.js";

function afterDOMLoaded() {
    //new Form();
    const app = new window.Vue({
            el: '#app',
            components:{ 'AddContact':window.httpVueLoader('vue/addContact.vue'),'ShowContact':window.httpVueLoader('vue/showContact.vue') },
            data: {
                contacts:[],
            },
            methods:{
                loadContacts(){
                    //alimenter notre tableau Contacts avec les localStorage
                    if (window.localStorage.getItem("contacts") != null) {
                        this.contacts = JSON.parse(window.localStorage.getItem("contacts"));
                        //return this.contacts
                    }
                },
                saveContacts(){
                    window.localStorage.setItem("contacts", JSON.stringify(this.contacts));
                },
                validate(){

                }
            },
            //CRÉATION DU HOOK BEFORE MOUNT
                beforeMount(){
                    //EXECUTER UNE DE NOS METHODES
                    this.loadContacts();
                },
    })
}
document.addEventListener("DOMContentLoaded", afterDOMLoaded);

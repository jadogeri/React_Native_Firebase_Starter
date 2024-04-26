class User {

    constructor(){

        this.username = "";
        this.email = "";
        this.password = "";
        this.new_assword = "";
        this.confirm_password = "";

    }

    set_username(username){ this.username = username; }

    get_username(){ return this.username; }

    set_email(email){ this.email = email; }

    get_email(){ return this.email; }

    set_password(password){ this.password = password; }

    get_password(){ return this.password; }

    set_new_password(new_password){ this.new_password = new_password; }

    get_new_password(){ return this.new_password; }

    set_confirm_password(confirm_password){ this.confirm_password = confirm_password; }

    get_confirm_password(){ return this.confirm_password; }    

}

export default User;
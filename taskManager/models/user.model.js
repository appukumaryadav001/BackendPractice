const {Schema,model} = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    profileImage:{
        type:String,
        default:"/images/defaultImage.jpg"
    }
},
{timestamps:true}
);

// Pre-save password hash
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);

}

const User = model("User",userSchema);
module.exports = User;
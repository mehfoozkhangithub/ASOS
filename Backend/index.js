const express = require("express")
const cors = require("cors");
require("dotenv").config()
const {connect } = require("./Config/db")
const {Userathuenticate} = require("./Middlewares/user.authentication")
const {userRouter} = require("./Routers/user.routes")
const { Beauty } = require("./Routers/Beauty.route")
const { Dairy } = require("./Routers/Dairy.route")
const { Electronics } = require("./Routers/Electronics.route")
const { men } = require("./Routers/Fashion.route")
const { Fruits } = require("./Routers/Fruits.route")
const { HomeKitchen } = require("./Routers/Home&Kitchen.route")
const { AutoCare } = require("./Routers/HomeImprovement.route")
const { apples_pears } = require("./Routers/PremiumFruits.route")
const { SportsToys } = require("./Routers/SportsToys")



const app = express()
app.use(express.json())
app.use(cors({
    origin:"*",
}))

app.get("/",(req,res) => {
    res.send("Welcome Home to Frontend")
})

// user Signup/login
app.use("/user",userRouter)



app.use("/fruits", Fruits)
app.use("/dairy", Dairy)
app.use("/apples_pears", apples_pears)
app.use("/HomeAppliance", HomeKitchen)
app.use("/men", men)
app.use("/mobiles", Electronics)
app.use("/makeup", Beauty)
app.use("/autocare", AutoCare)
app.use("/toysgames", SportsToys)




app.listen(process.env.PORT, async() => {
    try{
        await connect()
        console.log("DB is Connected to Sucessssfully....");
        console.log(`http://localhost:${process.env.PORT}`);

    }catch(e){
        console.log("DB is connected to failed!!!!!")
    }
    
})


// Named Export
//1. exports.something

const { created } = require("../production.config");

//2. module.exports = something
module.exports = {
    //1. Property:Value
    name:"teacher",

    settings: {}, //JS OBject 

    dependencies:[], // JS Array

    actions:{
        hello:{
            rest:{
                method: "GET",
                path: "/hello"
            }, //

            handler:function(ctx){
                ctx.emit("moleculer_assignment.assign",ctx.params.name);
                //socket.emit(eventName[, ...args][, ack])
                return 'hello from teacher service and hello action nodeID ' + this.broker.nodeID;
            }
        }
    }, //jS OBJECT

    methods: {}, // JS Object

    events:{
        //"eventname":eventvalue
        "moleculer_assignment.assign":{
            //1. P:V
            group:"moleculer_assignment",
            handler:(ctx)=>{
                console.log("Inside moleculer_assignment.assign event HI ",ctx.params)
            }
            //2. Meethod
        } //JS Object
    },

    //2. Methods

    // 3 Life cycle method of a service
    created(){
        console.log("Teacher Services created");
    },
    started:()=>{
        console.log("Teacher Services Started");
    },
    stopped:function(){
        console.log("Teacher Services Stopped");
    }

}; //JS OBJECT
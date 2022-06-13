// Option API
// const {createApp} = Vue;
// const app = createApp({
//     data() {
//         return{
//             title: 'to do list',
//             tasks: [
//                 {name: 'Today: Internal Meeting'},
//                 {name: 'Tomorrow: Read A Book'},
//                 {name: 'Daily: Event Joins'},
//             ]
//         }
//     },
//     methods: {
//         newItem: function() {
//             if(!this.tasks.name){
//                 return
//             }
//             this.tasks.push({
//                 name: this.tasks.name,
//                 del: ''
//             });
//             this.tasks.name = "";
//         },
//         delItem: function(task){
//             this.tasks.splice(this.tasks.indexOf(task), 1)
//         }
//     }
// });
// app.mount('#tasklist')


// composition API
const {createApp, reactive} = Vue;
const app = createApp({
    setup() {
        const title = 'to do list';
        const tasks = reactive([
            {name: 'Today: Internal Meeting'},
            {name: 'Tomorrow: Read A Book'},
            {name: 'Daily: Event Joins'},
        ]);

        const newItem = () => {
            if(!tasks.name){
                return
            }
            tasks.push({
                name: tasks.name,
                del: ''
            });
            tasks.name = "";
        };

        const delItem = (task) => {
            tasks.splice(tasks.indexOf(task), 1)
        };

        return {
            tasks,
            newItem,
            delItem
        }
    }
});
app.mount('#tasklist');
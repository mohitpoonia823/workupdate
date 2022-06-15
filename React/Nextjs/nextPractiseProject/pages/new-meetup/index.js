
import MeetupForm from '../../components/meetups/NewMeetupForm.js'
function NewMeetup(){
    function addMeetupHandler(enteredMeetupdata){
console.log(enteredMeetupdata);
    }
    return <MeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetup;


import MeetupList from '../components/meetups/MeetupList.js';
const DUMMMY_MEETUPS = [
    {
        is:'m1',
        title:'first meetup',
        image:'https://www.pexels.com/photo/high-angle-view-of-cityscape-against-cloudy-sky-313782/',
        address:'spme address 5333 city ',
        discription:'this is first meetup'
    },
    {
        is:'m2',
        title:'second meetup',
        image:'https://www.pexels.com/photo/high-angle-view-of-cityscape-against-cloudy-sky-313782/',
        address:'spme address 5333 city ',
        discription:'this is first meetup'
    },
    {
        is:'m3',
        title:'third meetup',
        image:'https://www.pexels.com/photo/high-angle-view-of-cityscape-against-cloudy-sky-313782/',
        address:'spme address 5333 city ',
        discription:'this is first meetup'
    }
];


function HomePage(){
    return <MeetupList meetups={DUMMMY_MEETUPS}/>
}


export default HomePage;
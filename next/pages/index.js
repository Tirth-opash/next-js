import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";

function HomePage() {
  let DUMMY_ARRAY = [
    {
      id: 'm1',
      title: 'a First meetup',
      image: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      address: 'some address 5, 123456 some city',
      discription: 'This is a first meetup!'
    },
    {
      id: 'm2',
      title: 'a Second meetup',
      image: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_brown.png',
      address: 'some address 6, 12346546 some city',
      discription: 'This is a Second meetup!'
    }
  ]
  return (
      <MeetupList meetups={DUMMY_ARRAY} />
  )
}
export default HomePage;


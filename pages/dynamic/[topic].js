import { useRouter } from "next/router";
import topics from "../api/topics";

const CurrentTopic = () => {
    const router = useRouter();
    const queries = router.query;
    console.log("queries    ", queries);
    console.log("topics", topics);
    var index = 0;
    const currentTopic = topics.find(topic => topic.id === queries.topic);
    console.log(currentTopic)
    if (!currentTopic) return <h2 style={{"color": "red"}}>Not found!</h2>
    return (
        <div>
            <p>We took {currentTopic.id} using useRouter and its property 'query' which turns to be the page name we set up between []</p>
            <p>{currentTopic.about}</p>
        </div>
        // <ul>
        //     {topics.map(topic => <li key={++index}>{topic.id + " - " + topic.about}</li>)}
        // </ul>
    );
}

export default CurrentTopic;
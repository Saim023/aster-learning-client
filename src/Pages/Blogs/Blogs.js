import React from 'react';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <Card border="success" className='mt-5 w-50 m-auto shadow blogs'>
                <Card.Header><h4>Question: What is cors?</h4></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answer: Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="success" className='mt-5 w-50 m-auto shadow blogs'>
                <Card.Header><h4>Question:  Why are you using firebase? What other options do you have to implement authentication?</h4></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answer: Firebase is Google’s Backend-as-a-Service -BAAS solution for mobile app development. Firebase Crashlytics allows you to track, prioritize, and fix stability issues that erode your app quality. Crashlytics sends you realtime detailed alerts whenever a bug or crash occurs. Using the detailed reports, developers and testers can find and fix bugs at a faster pace. Firebase Dynamic Links are smart URLs that enable marketers to promote the app across various external channels, such as social media, email, web, and more found here. One of the best features of dynamic links is the fact that they are usable by both app users and those that don’t have the app installed.
                        There are some other alternatives besides firebase. These are:
                        MongoDB.
                        -Oracle Database.
                        -Amazon Redshift.
                        -DataStax Enterprise.
                        -Redis Enterprise Cloud.
                        -Cloudera Enterprise Data Hub.
                        -Db2.
                        -Couchbase Server.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="success" className='mt-5 w-50 m-auto shadow blogs'>
                <Card.Header><h4>Question: How does the private route work?</h4></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="success" className='mt-5 w-50 m-auto shadow blogs'>
                <Card.Header><h4>Question: What is Node? How does Node work?</h4></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answer: Node is a run time. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.  Everything in Node is based on responding to these events. So we can see the result, the CPU stay focused on that one process and doesn’t have a bunch of threads for attention.There is no buffering in Node.JS application it simply output the data in chunks.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;
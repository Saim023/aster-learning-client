import React from 'react';
import Card from 'react-bootstrap/Card';

const FAQ = () => {
    return (
        <div className='blogs-container'>
            <Card border="success" className='mt-5 w-50 m-auto shadow blogs'>
                <Card.Header><h4>Question: HOW DO I FIGURE OUT WHAT TO LEARN?</h4></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answer: The most important thing is that you want to learn something that interests you, because once you start learning, you’ll be with this topic for a while. Choosing something just because it’s popular or what others are doing isn’t the way to go because if you don’t have a true interest in it, you’ll lose the motivation to learn! Spend some time seriously looking into the different tech career paths before choosing one to go down.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="success" className='mt-5 w-50 m-auto shadow blogs'>
                <Card.Header><h4>Question:  WHICH PROGRAMMING LANGUAGE IS THE BEST TO LEARN?</h4></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answer: I usually tell most people to start by learning HTML and CSS, then move into learning JavaScript. The reason is that JavaScript is used everywhere: frontend, backend, and even to build mobile apps. It has many use cases, which is why I think it’s smart to learn. When it comes to deciding which language or technologies to learn, it all comes down to your end goals. I suggest you check out my interview with David Clinton to help you decide.
                        If you want to get into tech professionally, here’s another tip: start by looking up dream job listings, see what skills/experience they’re looking for, and then use that to reverse-engineer what you should learn.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="success" className='mt-5 w-50 m-auto shadow blogs'>
                <Card.Header><h4>SHOULD I LEARN SKILLS IN SEVERAL AREAS, OR FOCUS ON ONE THING IN PARTICULAR?</h4></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answer: Personally, I’d say choose a path and stick to it! Learning too many things at once will slow you down. Here are a few ideas of things you can choose to focus on, and a little bit about each one.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="success" className='mt-5 w-50 m-auto shadow blogs'>
                <Card.Header><h4>Question: IS IT POSSIBLE TO DO BOTH GRAPHIC DESIGN AND CODING??</h4></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answer: If you have an interest in coding and graphic design, then there’s nothing to say you shouldn’t learn skills in both areas. They often work hand-in-hand, so having knowledge and skills in both areas could be desirable for certain career paths. You could also think about pursuing something in between like UI design, which is a very in-demand career right now!
                        In general, having design skills along with coding skills is helpful. But it’s also okay to do one over the other. My advice would be to just get started! You can always change directions later… as long as you’re changing directions to the final destination you’re looking for!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="success" className='mt-5 w-50 m-auto shadow blogs'>
                <Card.Header><h4>Question:  SHOULD I LEARN PYTHON 2 OR PYTHON 3?</h4></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answer: Now, in 2020, it’s a no-brainer: Python 3 is definitely the way to go. There are still some situations where picking up Python 2 might be advantageous, or you may just want to learn a little of the history and the differences between Python 2 and 3 for curiosity’s sake, but job-wise, Python 3 is the clear winner. Here’s a blog post that outlines the reasons why.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="success" className='mt-5 w-50 m-auto shadow blogs'>
                <Card.Header><h4>Question:  SHOULD I LEARN SKILLS IN SEVERAL AREAS, OR FOCUS ON ONE THING IN PARTICULAR?</h4></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answer: Personally, I’d say choose a path and stick to it! Learning too many things at once will slow you down. Here are a few ideas of things you can choose to focus on, and a little bit about each one. To get more hands-on experience once you’ve got some skills built up, you could look for a side gig where you can put them to good use.
                        Because data science is such a broad field, the best thing to do would be to spend some time researching it and finding out everything you need to know
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FAQ;
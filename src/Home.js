import {useState, useEffect} from 'react';
import CommentList from './BlogList';

const Home = () => {
    const [comments, setComments] = useState([
        {title: 'This website is not right!!! It is wrong!!! This is wrong !!!!!!', body: 'This  are wrong very very wrong!!!!!!!!', author: 'An angry commenter', id: 1},
        {title: 'He is not wrong', body: 'He is not Wrong you are Wrong!!!', author: 'Another Angry Commenter', id: 2},
        {title: 'No You are Wrong !!!!', body: 'comments 3', author: 'An angry commenter', id: 3}
    ]);

    const handleDelete = (id) => {
        const newComments = comments.filter(comment => comment.id !== id);
        setComments(newComments);
    }

    useEffect(() => {
        console.log('useEffect ran');
    });

    return (
        <div className="home">
            <h2 className="mytitle">The Source of All History</h2>

            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg" alt="Pyramid" className="pyramid" />
            <div>
                <a href="/ancient-history" style={{

                }}>Ancient History</a>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Saladin_and_Guy.jpg" alt="Third Crusade" />
            <div>
                <a href="/medival-history">Medival History</a>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Erstes_pr._Bataillon_Leibgarde_in_Schlacht_bei_Kollin.jpg" alt="7 years war" />
            <div className="early-modern">
                <a href="/early-modern-history" className="testhistory">Early Modern History</a>
            </div>
            <CommentList comments={comments} title="Comments" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;

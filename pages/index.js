import QuestionList from '../components/QuestionList';
import fetch from 'isomorphic-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';


const List = props => (
	<div>
		<Header/>
		<QuestionList list={props.list}/>
	</div>
);

List.getInitialProps = async () => {
	const res = await fetch('https://polls.apiblueprint.org/questions');
	const list = await res.json();

	return {
		list
	}
};

export default List;
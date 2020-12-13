import Link from 'next/link';
import {ListGroupItemHeading, ListGroupItemText, ListGroup, ListGroupItem, NavLink, Container, Row, Col} from "reactstrap"
import Moment from 'moment';

const QuestionList = (props) => (
	<div>
		{
		props.list.map(item => (
			<div>
			<Container>
			  <Row md="2">
				<Col>
			    <ListGroup>
			      <ListGroupItem>
			        <ListGroupItemHeading>{ item.question }</ListGroupItemHeading>
			        <ListGroupItemText>
						{Moment(item.published_at).format('YYYY-MM-DD')}
			        </ListGroupItemText>
			        <Link href={`${item.url}`}> Detay</Link>

			      </ListGroupItem>
			    </ListGroup>
		      </Col>
	      </Row>
	    </Container>	
			</div>
			))		
		}
	</div>
);

export default QuestionList;



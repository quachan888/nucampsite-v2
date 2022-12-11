import { Col, Row } from 'reactstrap';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import DisplayCard from './DisplayCard';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion()];
    console.log(items);

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className="m-1" key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;

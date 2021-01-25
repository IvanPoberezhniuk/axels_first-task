import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { ImageCard } from '../components';

import { fetchImages } from '../redux/ducks/images';

const GalleryPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const imagesList = useSelector((store) => store.imagesStore.images);

  useEffect(() => dispatch(fetchImages()), [dispatch]);

  return (
    <div>
      <Container>
        <Row>
          {imagesList.map((img) => (
            <Col xs={12} md={6} lg={4} xl={4} key={img.id}>
              <Link
                to={{
                  pathname: `/gallery/${img.id}`,
                  state: { background: location }
                }}
              >
                <ImageCard url={img.url} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

GalleryPage.propTypes = {};

export default GalleryPage;

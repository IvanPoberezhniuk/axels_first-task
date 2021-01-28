import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { ImageCard } from '../../components';

import { fetchImages, Image } from '../../redux/ducks/images';
import { AppDispatch } from '../../redux/configureStore';

const GalleryPage = () => {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const imagesList: Array<Image> = useSelector(
    (store: RootStateOrAny) => store.imagesStore.images
  );

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Row>
          {imagesList.map((img: Image) => (
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

export default GalleryPage;

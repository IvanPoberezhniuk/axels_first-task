import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {ImageCard, ImageModal} from '../components';

import {Link, useLocation} from 'react-router-dom';
import {fetchImages} from '../store/modules/images';

const GalleryPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [imgId, setImgId] = useState(null);
  const location = useLocation();
  //redux
  const dispatch = useDispatch();
  const imagesList = useSelector(store => store.imagesStore.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const setModal = (id) => {
    setModalShow(true);
    setImgId(id);
  };

  return (
    <div>
      <Container>
        <Row>
          {imagesList.map((img) => (
            <Col xs={12} md={6} lg={4} xl={4} key={img.id}>
              <Link to={{pathname: `/gallery/${img.id}`, state: {background: location}}}>
                <ImageCard url={img.url} showModal={() => setModal(img.id)}/>
              </Link>
            </Col>)
          )}
        </Row>
      </Container>
      {imgId && <ImageModal show={modalShow} imgId={imgId} onHide={() => {
        setModalShow(false);
      }}/>}
    </div>
  );
};

GalleryPage.propTypes = {};

export default GalleryPage;

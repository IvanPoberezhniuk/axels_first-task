import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useSelector} from 'react-redux';

import {ImageCard, ImageModal} from '../components';

import {getImages} from '../api/httpRequests';
import {Link, useLocation} from 'react-router-dom';

const GalleryPage = () => {
  const [imgList, setImgList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [imgId, setImgId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getImages().then(data => setImgList(data));
  }, []);

  const setModal = (id) => {
    setModalShow(true);
    setImgId(id);
  };

  return (
    <div>
      <Container>
        <Row>
          {imgList.map((img) => (
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

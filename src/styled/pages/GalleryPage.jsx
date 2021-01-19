import React, {useEffect, useState} from 'react';
import ImageCard from '../components/ImageCard';
import {getImages} from '../api/httpRequests';
import {Col, Container, Row} from 'react-bootstrap';
import ImageModal from '../components/ImageModal';

const GalleryPage = () => {
  const [imgList, setImgList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [imgId, setImgId] = useState(null);

  useEffect(() => {
    getImages().then(data => setImgList(data));
  }, []);

  const setModal = (imgId) => {
    setModalShow(true);
    setImgId(imgId);
  };

  return (
    <div>
      <Container>
        <Row>
          {imgList.map((img) => (
            <Col xs={12} md={6} lg={4} key={img.id}>
              <ImageCard url={img.url} showModal={() => setModal(img.id)}/>
            </Col>)
          )}
        </Row>
      </Container>
      {imgId && <ImageModal show={modalShow} imgId={imgId} onHide={() => setModalShow(false)}/>}
    </div>
  );
};

GalleryPage.propTypes = {};

export default GalleryPage;

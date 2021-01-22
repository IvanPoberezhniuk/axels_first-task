import React, {useState} from 'react';
import {Image, Modal, Row, Spinner} from 'react-bootstrap';
import {useParams, useHistory} from 'react-router-dom';

import {CloseIcon, CommentsList, CommentForm} from './index';

import {ImageModalCol, ImageModalDiv} from '../styled/components/ImageModal';
import {useDispatch, useSelector} from 'react-redux';
import {fetchImageDetails} from '../store/modules/images';

const ImageModal = () => {
  const [show, setShow] = useState(true);
  const {id} = useParams();
  const history = useHistory();
  // redux
  const dispatch = useDispatch();
  const image = useSelector(store => store.imagesStore.imageDetails);
  const comments = useSelector(store => store.imagesStore.imageDetails.comments);
  const loading = useSelector(store => store.imagesStore.loading);

  if (!id) return null;

  const getImgInfo = () => {
    dispatch(fetchImageDetails(id));
  };

  const onHide = () => {
    setShow(false);
    setTimeout(() => history.push('/gallery'), 300);
  };

  return (
    <Modal
      show={show}
      onHide={(event) => onHide(event)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      onShow={getImgInfo}
      centered
    >
      <CloseIcon onIconClick={onHide}/>
      <Modal.Body>
        <Row>
          <ImageModalCol xs={12} md={7}>
            <ImageModalDiv>
              {loading ?
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner> :
                <Image src={image.url} fluid/>
              }
            </ImageModalDiv>
          </ImageModalCol>
          <ImageModalCol xs={12} md={5}>
            <CommentsList comments={comments}/>
          </ImageModalCol>
          <ImageModalCol xs={12} md={7}>
            <CommentForm/>
          </ImageModalCol>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

ImageModal.propTypes = {};

export default ImageModal;

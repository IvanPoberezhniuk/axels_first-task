import React, { useState } from 'react';
import { Image, Modal, Row, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CloseIcon, CommentForm, CommentsList } from '../index';

import { ImageModalCol, ImageModalDiv } from '../../styled/components/ImageModal';
import { fetchImageDetails } from '../../redux/ducks/images';
import Selectors from '../../redux/selectors';

interface RouteParams {
  id: string;
}

const ImageModal = () => {
  const [show, setShow] = useState(true);
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const dispatch = useDispatch();
  const image = useSelector(Selectors.imageDetails);
  const loading = useSelector(Selectors.loading);

  if (!id) return null;

  const getImgInfo = (): void => {
    dispatch(fetchImageDetails(id));
  };

  const onHide = (): void => {
    setShow(false);
    setTimeout(() => history.push('/gallery'), 300);
  };

  return (
    <Modal
      show={show}
      onHide={() => onHide()}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      onShow={getImgInfo}
      centered
    >
      <CloseIcon onIconClick={onHide} />
      <Modal.Body>
        <Row>
          <ImageModalCol xs={12} md={7}>
            <ImageModalDiv>
              {loading ? (
                <Spinner animation='border' role='status'>
                  <span className='sr-only'>Loading...</span>
                </Spinner>
              ) : (
                <Image src={image.url} fluid />
              )}
            </ImageModalDiv>
          </ImageModalCol>
          <ImageModalCol xs={12} md={5}>
            <CommentsList comments={image.comments} />
          </ImageModalCol>
          <ImageModalCol xs={12} md={7}>
            <CommentForm />
          </ImageModalCol>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;

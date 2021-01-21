import React, {useState} from 'react';
import {Image, Modal, Row, Spinner} from 'react-bootstrap';
import {useParams, useHistory} from 'react-router-dom';

import {CloseIcon, CommentsList, CommentForm} from './index';

import {ImageModalCol, ImageModalDiv} from '../styled/components/ImageModal';
import CommentModel from '../models/comment';
import ImageModel from '../models/image';
import {getImageById} from '../api/httpRequests';

const ImageModal = () => {
  const [imgData, setImgData] = useState(new ImageModel());
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(true);
  const {id} = useParams();
  const history = useHistory();

  if (!id) return null;

  const getImgInfo = async () => {
    try {
      setIsLoading(true);
      await getImageById(id).then(data => {
        setImgData(new ImageModel(data));
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onAddComment = (comment) => {
    const newCommentWithDate = new CommentModel({...comment, date: Date.now()});
    setImgData({...imgData, comments: [...imgData.comments, newCommentWithDate]});
  };

  const onHide = (event) => {
    setShow(false);
    setTimeout(history.push('/gallery'), 300);
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
              {isLoading ?
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner> :
                <Image src={imgData.url} fluid/>
              }
            </ImageModalDiv>
          </ImageModalCol>
          <ImageModalCol xs={12} md={5}>
            <CommentsList comments={imgData.comments}/>
          </ImageModalCol>
          <ImageModalCol xs={12} md={7}>
            <CommentForm onAddComment={onAddComment}/>
          </ImageModalCol>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

ImageModal.propTypes = {};

export default ImageModal;

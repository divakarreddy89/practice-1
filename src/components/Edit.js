import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const EditItem = ({modal, item, size, qty, handleSize, handleQty, handleEdit, modalClose}) => (
    <div>
      <Button color="danger"></Button>
      <Modal isOpen={modal} className="edit-modal-container">
        <ModalHeader>
            <p className="close" onClick={()=>modalClose()}></p>x
        </ModalHeader>
        <ModalBody>
          <div className="edit-container">
              <div>
                  <p>{item.title && item.title.toUpperCase()}</p>
                  <p>{item.price}</p>
                  <p>{item.style}</p>
                  <div>
                    <select  value={size} onChange={e => handleSize(e.target.value)}>
                        <option value='s'>small</option>
                        <option value='m'>medium</option>
                        <option value='l'>large</option>
                    </select>
                    <input type="number" value={qty} onChange={e => handleQty(e.target.value)}/>
                  </div>
                  <div>
                      <button type="button" className="edit-button" onClick={()=>handleEdit(item)}>EDIT</button>
                  </div>
              </div>
              <div>
                <img src={item.img} alt={item.img} className=""/>
              </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
)

export default EditItem;